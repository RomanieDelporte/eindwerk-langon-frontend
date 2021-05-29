<style lang="scss">
@import "../style/pages/HomePage.scss";
</style>

<script>
// import { goto } from "@sapper/app";
import Button from "../components/Button.svelte";
import Dropdown from "../components/Dropdown.svelte";
import Inputfield from "../components/Inputfield.svelte";
import ModalLanguage from "../components/ModalLanguage.svelte";
// import Title from "../components/Title.svelte";

let showModal = false;

const toggleModal = () => {
  showModal = !showModal;
};
</script>

<svelte:head>
  <title>Langon</title>
</svelte:head>

<div class="home">
  <ModalLanguage
    title="Choose a language"
    text="Choose a language in wich you want to translate your website?"
    showModal="{showModal}"
    on:click="{toggleModal}">
    <Dropdown />
    <div class="buttons">
      <Button ref="margin" label="Cancel" isSecondary="{true}" />
      <Button label="Save" />
    </div>
  </ModalLanguage>
  <div class="p-pages">
    <div class="home">
      <Button label="Open Modal" on:click="{toggleModal}" />
    </div>
  </div>
</div>
