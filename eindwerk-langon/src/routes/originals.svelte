<style lang="scss">
@import "../style/pages/TranslationPage.scss";
</style>

<script>
import Title from "../components/Title.svelte";
import OriginalTable from "../components/OriginalTable.svelte";
</script>

<div class="p-pages originals">
  <Title text="Originals" />
  <p>
    Everything from your website will be published here, if you want to
    translate it go to translations tab.
  </p>
  <div class="table">
    <OriginalTable />
  </div>
</div>
