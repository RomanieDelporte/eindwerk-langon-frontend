import { goto } from "@sapper/app";

 export function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
};



export function checkAuth(roles = []) {
  return new Promise((resolve, reject) => {
    const authObj = JSON.parse(localStorage.getItem("langon-auth"));
    parseJwt = parseJwt(authObj.access_token);
    
    const expiredDate = new Date(authObj.expires);
    const now = new Date();
    if(expiredDate > now ) {
      fetch("http://localhost:8055/auth/refresh");
      localStorage.setItem("langon-auth");
    }
    if(parseJwt) {
      if(roles.indexOf(parsedJwt.role) !== -1) {
        resolve(true)
      } else {
        goto('/')
      }
    } else {
      goto("/login");
    }
  })
}
