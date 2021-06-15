<style lang="scss">
  @import "../style/pages/TranslationPage.scss";
</style>

<script>
  import Title from "../components/Title.svelte";
  import TranslationTable from "../components/TranslationTable.svelte";
</script>

<div class="p-pages">
  <Title text="Translations" />
  <div class="table">
    <TranslationTable />
  </div>
</div>