<script>
  import Nav from "../components/Nav.svelte";
  export let segment;
</script>

<!-- {#if segment != "login"}
  <Nav {segment} />
{/if} -->
{#if segment != "login" && segment != "register"}
  <Nav {segment} />
{/if}

<main>
  <slot />
</main>

<style lang="scss">
  @import "../style/global.scss";
</style>
