import { goto } from "@sapper/app";
import jwt_decode from "jwt-decode";


export function checkAuth(roles = []) {
  return new Promise(async (resolve, reject) => {
    try{
    let error = false;
    let token = localStorage.getItem("langon_auth");
    let tokens = "";
    let userDetails = "";
    let parsedToken = "";

    console.log(roles)
    if(token) {
      tokens = JSON.parse(token);
      console.log(tokens)
      parsedToken = jwt_decode(tokens.access_token);
      userDetails = JSON.parse(localStorage.getItem("langon_user"))
      console.log(userDetails)
    }

    if(tokens === "" || userDetails === "" ) {
      localStorage.removeItem("langon_auth");
      localStorage.removeItem("langon_user");
      reject(false);
      goto("/login")
    }

    // expires check
    const expires = new Date(parsedToken.exp);
    const now = new Date();
    if(expires < now ) {
      //refresh token
      const response = await fetch("http://localhost:8055/auth/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, 
        body : JSON.stringify({"refresh_token": tokens.refresh_token}),
      });

      // als refresh succesvol is 
      if(response.status === 200) {
        const parsed = await response.json();
        // schrijf de data in localstorage
        localStorage.setItem("langon_auth", JSON.stringify(parsed.data));
        parsedToken = parsed.data;
        const data_langon = jwt_decode(parsed.data.access_token);
        console.log(data_langon);
        //fetch users details en rol
        const fetchUser = await fetch(
          "http://localhost:8055/users/" + data_langon.id +"?fields=*id,first_name,last_name,email,role.name,role.id*",
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer " + parsed.data.access_token ,
              "Content-type": "application/json",
 
            },
          });
          if(fetchUser.status === 200) {
            const user = await fetchUser.json();
            // set user details in localstorage
            localStorage.setItem("langon_user", JSON.stringify(user.data));
            userDetails = user.data;
          } else {
            error = true;
          } 
      } else {
        error = true 
      }

      // role check
      if(roles.indexOf(userDetails.role.name) === -1) {
        error = true;
      }
      if(error === true) {
        localStorage.removeItem('langon_auth');
        localStorage.removeItem('langon_user');
        reject(false)
        goto("/login");
        
      } else {
        resolve({
          authenticated: true,
          user: userDetails,
          tokens: parsedToken,
        })
      }
    } } catch(err) {
      console.log(err)
      reject(false)
    }
    reject(false)
  })
}
