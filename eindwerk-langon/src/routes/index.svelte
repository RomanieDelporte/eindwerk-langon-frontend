<style lang="scss">
@import "../style/pages/HomePage.scss";
</style>

<!-- <script context="module">
export async function preload(page, session) {}
</script> -->
<script>
import { goto } from "@sapper/app";
import jwt_decode from "jwt-decode";

import Button from "../components/Button.svelte";
import Title from "../components/Title.svelte";
import UserCard from "../components/UserCard.svelte";
import ImageUpload from "../components/ImageUpload.svelte";
import { checkAuth } from "../routes/auth.js";
import { onMount } from "svelte";

// deze var checkt of de gebruiker iets mag zien, vooraleer iets te tonen
let isAuth = false;
//pas nadat de pagina gemount is, mag de checkauth functie lopen. anders is localstorage niet beschikbaar.
onMount(async () => {
  try {
    isAuth = await checkAuth(["Administrator"]);
    console.log(isAuth);
    const result = await fetch("https://langon.josdeberdt.be/items/users", {
      headers: {
        Authorization: "Bearer " + isAuth.tokens.access_token,
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });

    let usersObject = await result.json();
    users = usersObject;
    console.log(usersObject);
    console.log(isAuth);
  } catch (err) {
    console.log(err);
  }
});

export let users;
</script>

<svelte:head>
  <title>Langon</title>
</svelte:head>

{#if isAuth !== false}
  <div class="home">
    <div class="p-pages">
      <div class="home">
        <div class="home_intro">
          <h1>Welcome to Langon <br /> Romanie</h1>
          <p>
            We ensure smooth<br /> cooperation and <br /> professional translation
          </p>
          <div class="home_button">
            <Button
              label="About us"
              isNormal="{true}"
              on:click="{() => goto('/about')}" />
          </div>
        </div>
        <div class="home_picture">
          <img src="/images/home_picture.jpg" alt="" />
        </div>
      </div>
      <div class="home_users">
        <Title text="Users" />
        <div class="home_usercard">
          {#if users}
            {#each users.data as user}
              <UserCard
                firstname="{user.firstname}"
                lastname="{user.lastname}"
                email="{user.email}">
                <ImageUpload />
              </UserCard>
            {:else}
              <p>loading...</p>
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}
