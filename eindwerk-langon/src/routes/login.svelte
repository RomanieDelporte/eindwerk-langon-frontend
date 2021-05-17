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
  <div class="login_fields">
    <h1>Get Started</h1>
    <div class="login_name">
      <Inputfield placeholder="Romanie" label="First name*" />
      <Inputfield placeholder="Delporte" label="Last name*" />
    </div>
    <div class="login_email">
      <Inputfield
        placeholder="romaniedelporte230@gmail.com"
        label="Email Adress*"
      />
      <Inputfield placeholder="test123" label="Create password*" />
    </div>
    <Button label="sign up" />
  </div>
</div>

<style lang="scss">
  @import "../style/pages/Login_page.scss";
</style>
