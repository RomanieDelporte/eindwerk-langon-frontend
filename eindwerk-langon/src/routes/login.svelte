<style lang="scss">
@import "../style/pages/LoginPage.scss";
</style>

<script>
import { goto } from "@sapper/app";
import Button from "../components/Button.svelte";
import Inputfield from "../components/Inputfield.svelte";
import PasswordField from "../components/PasswordField.svelte";
import { checkAuth } from "../routes/auth.js";
import jwt_decode from "jwt-decode";
import { onMount } from "svelte";

let email = "";
let password = "";
let errors;

const login = async () => {
  //login bij directus
  const res = await fetch("http://localhost:8055/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  });
  if (res.status === 200) {
    const parsed = await res.json();
    localStorage.setItem("langon_auth", JSON.stringify(parsed.data));
    const data_langon = jwt_decode(parsed.data.access_token);
    console.log(data_langon);
    const fetchUser = await fetch(
      "http://localhost:8055/users/" +
        data_langon.id +
        "?fields=*id,first_name,last_name,email,role.name,role.id*",
      {
        headers: {
          Authorization: "Bearer " + parsed.data.access_token,
          Accept: "application/json",
          "Content-type": "application/json",
        },
      }
    );

    console.log(fetchUser);
    if (fetchUser.status === 200) {
      const result = await fetchUser.json();
      console.log(result);
      localStorage.setItem("langon_user", JSON.stringify(result.data));
      //redirect
      goto("/");
      console.log(result);
    } else {
      if (fetchUser.status !== 200) {
        console.log("er is iets fout...");
      }
    }
  }
};
</script>

<div class="login">
  <div class="login_content">
    <div class="login_logo">
      <img src="/images/logo_langon.svg" alt="logo langon" />
      <p>i18n your projects</p>
    </div>
  </div>
  <div class="login_inputs">
    <h1>Sign in</h1>
    <div class="login_inputs_data">
      <Inputfield
        bind:value="{email}"
        label="Email Adress"
        placeholder="romaniedelporte230@gmail.com" />
      <PasswordField
        bind:value="{password}"
        label="Password"
        placeholder="test123" />
    </div>
    <div class="login_inputs_button">
      <Button label="Sign up" on:click="{login}" />
    </div>
    {#if errors}
      {#each errors.errors as error}
        <p>{error.message}</p>
      {/each}
    {/if}
    <div class="login_inputs_rights">
      <p>© 2021 Langon. All rights reserved.</p>
      <p>Terms off conditions - Privacy policy.</p>
    </div>
  </div>
</div>
