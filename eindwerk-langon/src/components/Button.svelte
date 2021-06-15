<style lang="scss">
  @import "../style/components/Button.scss";
</style>

<script>
  export let label;
  export let isNormal = false;
  export let isSecondary = false;
  export let ref;
</script>

<div ref="{ref}" class="button">
  <button class:normal="{isNormal}" class:secondary="{isSecondary}" on:click>
    {label}
  </button>
</div>