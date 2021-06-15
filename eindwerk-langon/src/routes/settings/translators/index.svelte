<style lang="scss">
@import "../../../style/elements/Translators.scss";
</style>

<script>
import Title from "../../../components/Title.svelte";
import { XIcon } from "svelte-feather-icons";

import { checkAuth } from "../../auth.js";
import { onMount } from "svelte";

let isAuth = false;
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
    translators = usersObject;
  } catch (err) {
    console.log(err);
  }
});

export let translators;
</script>

{#if isAuth !== false}
  <div class="translators marginSet">
    <Title text="Your Settings" />
    <div class="translators_translator">
      <p>All the translators with their assigned languages</p>
      <div class="translators_input placeInput">
        {#if translators}
          {#each translators.data as translator}
            <div class="translators_content borderline">
              <p>Translator:</p>
              <p>{translator.firstname} {translator.lastname}</p>
              <p>{translator.email}</p>
              <p>Language</p>
              <p class="translators_language borderline">
                french
                <XIcon size="15" />
              </p>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
{/if}
