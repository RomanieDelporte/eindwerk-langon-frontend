<script>
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
    <h1>Get Started</h1>
    <div class="login_inputs_names">
      <Inputfield label="Firstname*" placeholder="Romanie" />
      <Inputfield label="Lastname*" placeholder="Delporte" />
    </div>
    <div class="login_inputs_email">
      <Inputfield
        label="Email Adress*"
        placeholder="romaniedelporte230@gmail.com"
      />
    </div>
    <div class="login_inputs_password">
      <Inputfield label="Create your password*" placeholder="test123" />
    </div>
    <div class="login_inputs_button">
      <Button label="Sign up" />
      <p>Already sign in? <a href="login">Sign up</a></p>
    </div>
    <div class="login_inputs_rights">
      <p>© 2021 Langon. All rights reserved.</p>
      <p>Terms off conditions - Privacy policy.</p>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../style/pages/Login_page.scss";
</style>
