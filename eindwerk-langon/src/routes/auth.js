import { goto } from "@sapper/app";
import jwt_decode from "jwt-decode";


export function checkAuth(roles = []) {
  return new Promise(async (resolve, reject) => {
    try{
    let error = false;
    let token = localStorage.getItem("langon-auth");
    let tokens = "";
    let userData = "";
    let parsedToken = "";

    if(token) {
      tokens = JSON.parse(token);
      parsedToken = jwt_decode(tokens.access_token);
      userData = JSON.parse(localStorage.getItem("langon-user"))
    }

    if(tokens === "" || userData === "" ) {
      localStorage.removeItem("langon-auth");
      localStorage.removeItem("langon-user");
      reject(false);
      goto("/login")
    }

    // expires check
    const expires = new Date(parsedToken.expires);
    const now = new Date();
    if(expires > now ) {
      //refresh token
      const response = await fetch("http://localhost:8055/auth/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        }, 
        body : JSON.stringify({"refresh_token": tokens.refresh_token}),
      });

      // als refresh succesvol is 
      if(response.status === 200) {
        const parsed = await response.json();
        // schrijf de data in localstorage
        localStorage.setItem("langon-auth", JSON.stringify(parsed.data));
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
              Accept: "application/json",

            },
          });
          if(fetchUser.status === 200) {
            const user = await fetchUser.json();
            // set user details in localstorage
            localStorage.setItem("langon-user", JSON.stringify(user.data));
            userData = user.data;
          } else {
            error = true;
          } 
      } else {
        // error remove all items in localstroage and go to login page
        error = true 
      }

      // role check
      if(roles.indexOf(userData.role.name) === -1) {
        error = true;
      }
      if(error === true) {
        localStorage.removeItem('langon-auth');
        localStorage.removeItem('langon-user');
        reject(false)
        goto("/login");
        
      } else {
        resolve({
          authenticated: true,
          user: userData,
          tokens: parsedToken,
        })
      }
    } } catch(err) {
      console.log(err)
      reject(false)
    }
  })
}
