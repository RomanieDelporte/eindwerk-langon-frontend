<style lang="scss">
@import "../style/global.scss";
</style>

<script>
import Nav from "../components/Nav.svelte";
export let segment;
</script>

<div class="d-flex">
  {#if segment != "login" && segment != "register"}
    <Nav segment="{segment}" />
  {/if}

  <main>
    <slot />
  </main>
</div>
