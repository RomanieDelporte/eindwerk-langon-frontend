<style lang="scss">
@import "../style/pages/HomePage.scss";
</style>

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

// import Title from "../components/Title.svelte";

// let showModal = false;

// const toggleModal = () => {
//   showModal = !showModal;
// };
</script>

<svelte:head>
  <title>Langon</title>
</svelte:head>

<div class="home">
  <!-- <ModalLanguage
    title="Choose a language"
    text="Choose a language in wich you want to translate your website"
    showModal="{showModal}"
    on:click="{toggleModal}">
    <Dropdown />
    <div class="buttons">
      <Button ref="margin" label="Cancel" isSecondary="{true}" />
      <Button label="Save" on:click="{toggleModal}" />
    </div>
  </ModalLanguage> -->
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
      <!-- <Button label="Open Modal" on:click="{toggleModal}" /> -->
    </div>
    <div class="home_users">
      <Title text="Users" />
      <div class="home_usercard">
        <UserCard
          firstname="Romanie"
          lastname="Delporte"
          email="rodelp@gmail.com">
          <ImageUpload />
        </UserCard>
      </div>
    </div>
    <SearchBar type="search" placeholder="testing" icon="<SearchIcon />" />
  </div>
</div>
