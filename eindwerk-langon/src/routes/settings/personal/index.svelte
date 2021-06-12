<style lang="scss">
@import "../../../style/elements/Personal.scss";
</style>

<script context="module">
export async function preload(page, session) {
  const result = await this.fetch("http://localhost:8055/users/me", {
    headers: {
      Authorization: "Bearer " + data.access_token,
      "Content-type": "application/json",
    },
  });

  let users = await result.json();
  users = users.data;
  console.log(users);
  return { users };
}
</script>

<script>
import Title from "../../../components/Title.svelte";
import Inputfield from "../../../components/Inputfield.svelte";
import Button from "../../../components/Button.svelte";
import ImageUpload from "../../../components/ImageUpload.svelte";
// import { onMount } from "svelte";

export let users;
</script>

<div class="personal marginSet">
  <Title text="Your Settings" />
  <div class="personal_imageupload">
    <ImageUpload />
  </div>
  <!-- <img src="{users.avatar}" alt="profile" /> -->
  <div class="personal_personalInformation placeInput">
    <Inputfield placeholder="Romanie" label="firstname" />
    <Inputfield placeholder="Delporte" label="lastname" />
  </div>
  <div class="personal_change placeInput">
    <Inputfield
      value="{users.first_name}"
      placeholder="Your password"
      label="Your password"
      type="password" />
    <Inputfield
      value="{users.last_name}"
      placeholder="Test123"
      label="Change password"
      type="password" />
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
</div>
