<style lang="scss">
@import "../../../style/elements/Translators.scss";
</style>

<script>
import Title from "../../../components/Title.svelte";
import { XIcon, PlusCircleIcon } from "svelte-feather-icons";

const translators = [
  { id: 1, translator: "Max Doe", Languages: "Dutch" },
  { id: 2, translator: "Dirk Doe", Languages: "Dutch" },
];
</script>

<div class="translators marginSet">
  <Title text="Your Settings" />
  <div class="translators_translator">
    <p>All the translators with their assigned languages</p>
    <div class="translators_input placeInput">
      {#each translators as translator}
        <div class="translators_content borderline">
          <p>Translator:</p>
          <p>{translator.translator}</p>
          <p>languages:</p>
          <p class="translators_language borderline">
            {translator.Languages}
            <XIcon size="15" />
          </p>
          <div class="translators_add">
            <PlusCircleIcon size="34" />
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
