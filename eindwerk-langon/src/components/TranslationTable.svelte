<style lang="scss">
  @import "../style/components/TranslationTable.scss";
</style>

<script>
  import Button from "./Button.svelte";
  let shown = false;

  import {
    onMount
  } from "svelte";
  import {
    checkAuth
  } from "../routes/auth.js";

  let isAuth = false;
  onMount(async () => {
    try {
      isAuth = await checkAuth(["Administrator", "Translators"]);
      const result = await fetch(
        "https://langon.josdeberdt.be/items/translations?fields=id,translation,language_id.language,original_id.id,original_id.original", {
          headers: {
            Authorization: "Bearer " + isAuth.tokens.access_token,
            Accept: "application/json",
            "Content-type": "application/json",
          },
        }
      );

      const translations = await result.json();
      translate = translations.data;
    } catch (error) {
      console.log(error);
    }
  });

  const shownText = (id) => {
    shown = id;
  };

  export let translate;
</script>

{#if isAuth !== false}
  <section class="table">
    <table class="translation borderline">
      <thead>
        <tr class="translation_items">
          <th>ID</th>
          <th>Original</th>
          <th>Translation</th>
          <th>Action</th>
        </tr>
      </thead>
      {#if translate}
        <tbody>
          {#each translate as lat (lat.id)}
            <tr class="translation_row">
              <td>{lat.id}</td>
              <td>{lat.original_id.original}</td>
              {#if shown === lat.id}
                <td>
                  <span class="canedit" id="{lat.id}"></span>
                  <textarea
                    id="{lat.id}"
                    class="translation_textarea"
                    shown="{shown}"></textarea>
                </td>
              {:else}
                <td>{lat.translation}</td>
              {/if}
              {#if shown === lat.id}
                <td>
                  <Button
                    ref="true"
                    label="Save"
                    on:click="{() => console.log('gesaved')}" />
                </td>
              {:else}
                <td>
                  <Button
                    ref="true"
                    label="edit"
                    on:click="{() => {
                      shownText(lat.id);
                    }}" />
                </td>
              {/if}
            </tr>
          {/each}
        </tbody>
      {/if}
    </table>
  </section>
{/if}