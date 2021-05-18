<script>
  export let label;
  export let isNormal = false;
</script>

<div class="button">
  <button  class:normal={isNormal}>
    {label}
  </button>
</div>

<style lang="scss">
  @import "../style/components/Button.scss";
</style>
