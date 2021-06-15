<style lang="scss">
@import "../style/pages/RegisterPage.scss";
</style>

<script>
import { goto } from "@sapper/app";
import Button from "../components/Button.svelte";
import Inputfield from "../components/Inputfield.svelte";
</script>

<div class="register">
  <div class="register_content">
    <div class="register_logo">
      <img src="/images/logo_langon.svg" alt="logo langon" />
      <p>i18n your projects</p>
    </div>
  </div>
  <div class="register_inputs">
    <h1>Get Started</h1>
    <div class="register_inputs_names">
      <Inputfield type="text" label="Firstname*" placeholder="Romanie" />
      <Inputfield type="text" label="Lastname*" placeholder="Delporte" />
    </div>
    <div class="register_inputs_email">
      <Inputfield
        type="email"
        label="Email Adress*"
        placeholder="romaniedelporte230@gmail.com" />
    </div>
    <div class="register_inputs_password">
      <Inputfield
        type="password"
        label="Create your password*"
        placeholder="test123" />
    </div>
    <div class="register_inputs_button">
      <Button label="Sign up" on:click="{() => goto('/login')}" />
      <p>Already sign in? <a href="register">Sign up</a></p>
    </div>
    <div class="register_inputs_rights">
      <p>© 2021 Langon. All rights reserved.</p>
      <p>Terms off conditions - Privacy policy.</p>
    </div>
  </div>
</div>
