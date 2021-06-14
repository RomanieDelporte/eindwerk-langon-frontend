<style lang="scss">
@import "../../../style/elements/Personal.scss";
</style>

<!-- <script context="module">
export async function preload(page, session) {
  const result = await this.fetch("https://langon.josdeberdt.be/users/me", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdiNWI1NzQ2LWNhNGItNGY0MS1iYzQyLTE1NGFkNDRkZTJmYiIsImlhdCI6MTYyMzUzNzg3OSwiZXhwIjoxNjIzNTM4Nzc5fQ.0BXf2sX7hguUiXdXiGXA6LvMrTQDHAj2SQCOJZivH8s ",
      "Content-type": "application/json",
    },
  });

  let users = await result.json();
  users = users.data;
  console.log(users);
  return { users };
}
</script> -->
<script>
import Title from "../../../components/Title.svelte";
import Inputfield from "../../../components/Inputfield.svelte";
import Button from "../../../components/Button.svelte";
import ImageUpload from "../../../components/ImageUpload.svelte";
// import { onMount } from "svelte";

// export let users;
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
      placeholder="Your password"
      label="Your password"
      type="password" />
    <Inputfield placeholder="Test123" label="Change password" type="password" />
  </div>
  <div class="personal_email">
    <Inputfield placeholder="romaniedelporte230@gmail.com" label="Your Email" />
  </div>
  <div class="personal_button">
    <a href="/login">Delete your account</a>
    <Button label="Save" />
  </div>
</div>
