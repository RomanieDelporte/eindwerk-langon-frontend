<style lang="scss">
@import "../style/pages/LoginPage.scss";
</style>

<script>
import { goto } from "@sapper/app";
import Button from "../components/Button.svelte";
import Inputfield from "../components/Inputfield.svelte";
import PasswordField from "../components/PasswordField.svelte";
import { checkAuth } from "../routes/auth.js";
let email = "";
let password = "";
let errors;
const login = async () => {
  const res = await fetch("http://localhost:8055/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  if (res.status === 200) {
    const json = await res.json();
    // let result = JSON.stringify(json);
    const auth = localStorage.setItem("langon-auth", json.data.access_token);
    checkAuth(console.log("joepie"));
    goto("/");
    console.log(json);
  } else {
    errors = { errors: [{ message: "an unknown user" }] };
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
    {#if errors}
      {#each errors.errors as error}
        <p>{error.message}</p>
      {/each}
    {/if}
    <div class="login_inputs_button">
      <Button label="Sign up" on:click="{login}" />
    </div>
    <div class="login_inputs_rights">
      <p>© 2021 Langon. All rights reserved.</p>
      <p>Terms off conditions - Privacy policy.</p>
    </div>
  </div>
</div>
