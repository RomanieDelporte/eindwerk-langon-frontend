<style lang="scss">
@import "../style/components/Button.scss";
</style>

<script>
export let label;
export let isNormal = false;
export let isSecondary = false;
export let ref;
export let id;
</script>

<div ref="{ref}" class="button">
  <button
    id="{id}"
    class:normal="{isNormal}"
    class:secondary="{isSecondary}"
    on:click>
    {label}
  </button>
</div>
