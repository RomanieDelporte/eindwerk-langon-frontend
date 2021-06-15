<style lang="scss">
  @import "../style/components/OriginalTable.scss";
</style>

<script>
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
      const result = await fetch("https://langon.josdeberdt.be/items/originals", {
        headers: {
          Authorization: "Bearer " + isAuth.tokens.access_token,
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });

      const originals = await result.json();
      original = originals.data;
    } catch (error) {
      console.log(error);
    }
  });

  export let original;
</script>

{#if isAuth !== false}
  <section class="table">
    <table class="original borderline">
      <thead>
        <tr class="original_items">
          <th>ID</th>
          <th>Original</th>
          <th>Already translated into</th>
        </tr>
      </thead>
      {#if original}
        <tbody>
          {#each original as lat (lat.id)}
            <tr class="original_row">
              <td>{lat.id}</td>
              <td>{lat.original}</td>
            </tr>
          {/each}
        </tbody>
      {/if}
    </table>
  </section>
{/if}