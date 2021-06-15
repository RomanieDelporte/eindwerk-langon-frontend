<style lang="scss">
@import "../style/pages/HomePage.scss";
</style>

<script>
import { goto } from "@sapper/app";
import Button from "../components/Button.svelte";
import Title from "../components/Title.svelte";
import UserCard from "../components/UserCard.svelte";
import ImageUpload from "../components/ImageUpload.svelte";
import { checkAuth } from "../routes/auth.js";
import { onMount } from "svelte";

let isAuth = false;

onMount(async () => {
  try {
    isAuth = await checkAuth(["Administrator", "Translators"]);
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
  } catch (err) {
    console.log(err);
  }
});

export let users;
</script>

<svelte:head>
  <title>Langon</title>
</svelte:head>

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
    {#if isAuth !== false}
      {#if isAuth.user.role.name === "Administrator"}
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
      {/if}
    {/if}
  </div>
</div>
