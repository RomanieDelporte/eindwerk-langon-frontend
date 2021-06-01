<style lang="scss">
@import "../../../style/elements/Personal.scss";
</style>

<script>
import Title from "../../../components/Title.svelte";
import Inputfield from "../../../components/Inputfield.svelte";
import Button from "../../../components/Button.svelte";
import ImageUpload from "../../../components/ImageUpload.svelte";
</script>

<div class="personal marginSet">
  <Title text="Your Settings" />
  <div class="personal_imageupload">
    <ImageUpload />
  </div>
  <div class="personal_personalInformation placeInput">
    <Inputfield placeholder="Romanie" label="First name" />
    <Inputfield placeholder="Delporte" label="Last name" />
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
