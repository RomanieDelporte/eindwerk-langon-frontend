<script>
  import { goto } from "@sapper/app";
  import Button from "../components/Button.svelte";
  import Inputfield from "../components/Inputfield.svelte";
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
        type="email"
        label="Email Adress"
        placeholder="romaniedelporte230@gmail.com"
      />
      <Inputfield type="password" label="Password" placeholder="test123" />
    </div>

    <div class="login_inputs_button">
      <Button label="Sign up" on:click={() => goto("/")} />
      <p>Already sign in? <a href="register">Sign up</a></p>
    </div>
    <div class="login_inputs_rights">
      <p>© 2021 Langon. All rights reserved.</p>
      <p>Terms off conditions - Privacy policy.</p>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../style/pages/LoginPage.scss";
</style>
