<style lang="scss">
  @import "../style/components/SearchBar.scss";
</style>

<script>
  export let type;
  export let placeholder;
</script>

<div class="searchbar">
  <input class="borderline" type="{type}" placeholder="{placeholder}" />
</div>