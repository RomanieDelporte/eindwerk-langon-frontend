<style lang="scss">
@import "../style/pages/HomePage.scss";
</style>

<script context="module">
export async function preload(page, session) {
  const result = await this.fetch("http://localhost:8055/items/users");

  let users = await result.json();
  users = users.data;
  // console.log(users);
  return { users };
}
</script>

<script>
// import { goto } from "@sapper/app";
import Button from "../components/Button.svelte";
import Dropdown from "../components/Dropdown.svelte";
import ImageUpload from "../components/ImageUpload.svelte";
import Inputfield from "../components/Inputfield.svelte";
import ModalLanguage from "../components/ModalLanguage.svelte";
import SearchBar from "../components/SearchBar.svelte";
import Title from "../components/Title.svelte";
import UserCard from "../components/UserCard.svelte";
import { SearchIcon } from "svelte-feather-icons";
import { dataset_dev } from "svelte/internal";

// import Title from "../components/Title.svelte";
// export let users;
// console.log(users.firstname);
// console.log(users);
// let showModal = false;

// const toggleModal = () => {
//   showModal = !showModal;
// };

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
          <Button label="About us" isNormal="{true}" />
        </div>
      </div>
      <div class="home_picture">
        <img src="/images/home_picture.jpg" alt="" />
      </div>
    </div>
    <div class="home_users">
      <Title text="Users" />
      <div class="home_usercard">
        {#each users as user}
          <UserCard
            firstname="{user.firstname}"
            lastname="{user.lastname}"
            email="{user.email}">
            <ImageUpload />
          </UserCard>
        {:else}
          <p>loading...</p>
        {/each}
      </div>
    </div>
  </div>
</div>
