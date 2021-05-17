<script>
  export let label;
  // export let icon;

  function handleClick() {
    props.onclick();
  }
</script>

<div class="button">
  <button on:click={handleClick}>
    {label}
  </button>
</div>

<style lang="scss">
  @import "../style/components/Button.scss";
</style>
