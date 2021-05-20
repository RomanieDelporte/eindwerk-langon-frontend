<script>
  export let label;
  export let isNormal = false;
</script>

<div class="button">
  <button class:normal={isNormal} on:click>
    {label}
  </button>
</div>

<style lang="scss">
  @import "../style/components/Button.scss";
</style>
