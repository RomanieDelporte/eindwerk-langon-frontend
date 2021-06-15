<style lang="scss">
  @import "../../../style/elements/Personal.scss";
</style>

<script>
  import Title from "../../../components/Title.svelte";
  import Inputfield from "../../../components/Inputfield.svelte";
  import PasswordField from "../../../components/PasswordField.svelte";
  import Button from "../../../components/Button.svelte";
  import ImageUpload from "../../../components/ImageUpload.svelte";
  import {
    onMount
  } from "svelte";
  import {
    checkAuth
  } from "../../auth.js";

  let isAuth = false;
  onMount(async () => {
    try {
      isAuth = await checkAuth(["Administrator"]);
      const result = await fetch("https://langon.josdeberdt.be/users/me", {
        headers: {
          Authorization: "Bearer " + isAuth.tokens.access_token,
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });

      let currentObject = await result.json();
      users = currentObject.data;
    } catch (err) {
      console.log(err);
    }

  });

  export let users;
</script>

{#if isAuth !== false}
  <div class="personal marginSet">
    <Title text="Your Settings" />
    <div class="personal_imageupload">
      <ImageUpload />
    </div>
    <div class="personal_inputs">
      {#if users}
        <div class="personal_personalInformation placeInput">
          <Inputfield
            value="{users.first_name}"
            placeholder="Romanie"
            label="firstname" />
          <Inputfield
            value="{users.last_name}"
            placeholder="Delporte"
            label="lastname" />
        </div>
        <div class="personal_change placeInput">
          <PasswordField
            value="{users.password}"
            placeholder="password"
            label="Change password" />
          <PasswordField
            placeholder="change your password"
            label="Change password" />
        </div>
        <div class="personal_email">
          <Inputfield
            value="{users.email}"
            placeholder="romaniedelporte230@gmail.com"
            label="Your Email" />
        </div>
        <div class="personal_button">
          <a href="/login">Delete your account</a>
          <Button label="Save" />
        </div>
      {/if}
    </div>
  </div>
{/if}