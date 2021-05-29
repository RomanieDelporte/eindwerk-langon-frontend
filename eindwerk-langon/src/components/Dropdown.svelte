<style lang="scss">
@import "../style/components/Dropdown.scss";
</style>

<script>
let languages = [
  { id: 1, language: `English` },
  { id: 2, language: `French` },
  { id: 3, language: `Dutch` },
];
</script>

<select>
  {#each languages as lang}
    <option value="{lang}">
      {lang.language}
    </option>
  {/each}
</select>
