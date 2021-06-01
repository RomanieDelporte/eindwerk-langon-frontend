<style lang="scss">
@import "../style/components/SearchBar.scss";
</style>

<script>
export let type;
export let placeholder;
export let icon;
</script>

<div class="searchbar">
  <input type="{type}" placeholder="{placeholder}" icon="{icon}" />
</div>
