<style lang="scss">
@import "../style/pages/HomePage.scss";
</style>

<script>
import { goto } from "@sapper/app";
import Button from "../components/Button.svelte";
import Title from "../components/Title.svelte";
</script>

<svelte:head>
  <title>Langon</title>
</svelte:head>

<div class="home">
  <div class="home_layout">
    <div class="home_intro">
      <div class="home_title">
        <h1>Welcome to</h1>
        <img src="/images/logo_website_black.svg" alt="homelogo" />
      </div>
      <div class="home_firstname">
        <h1>Romanie</h1>
      </div>
      <div class="home_text">
        <p>
          We ensure smooth <br /> cooperation and <br /> professional translation
        </p>
      </div>
      <div class="home_button">
        <Button
          label="About us"
          isNormal="{true}"
          on:click="{() => goto('/about')}" />
      </div>
    </div>
    <div class="home_image">
      <div class="home_picture">
        <img src="/images/home_picture.jpg" alt="home" />
      </div>
    </div>
  </div>
  <div class="home_users">
    <Title text="Users" />
  </div>
</div>
