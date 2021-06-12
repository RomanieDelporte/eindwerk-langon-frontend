<style lang="scss">
@import "../style/components/TranslationTable.scss";
</style>

<script>
import Button from "./Button.svelte";
let shown = false;

let id = null;
let translation = [
  {
    id: "1",
    original: "Hello",
    translation: "Is nog niet vertaald",
  },
  {
    id: "2",
    original: "heyhey",
    translation: "Is nog niet vertaald",
  },
  {
    id: "3",
    original: "jipla",
    translation: "Is nog niet vertaald",
  },
];

const shownText = (id) => {
  shown = id;
};

console.log(translation);
</script>

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
    <tbody>
      {#each translation as lat (lat.id)}
        <tr class="translation_row">
          <td>{lat.id}</td>
          <td>{lat.original}</td>
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
  </table>
</section>
