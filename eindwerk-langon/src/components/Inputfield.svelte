<style lang="scss">
@import "../style/components/Inputfield.scss";
</style>

<script>
export let label;
export let placeholder;
export let value;
</script>

<div class="inputfield">
  <div class="inputfield_label">
    <p>{label}</p>
  </div>
  <div class="inputfield_input">
    <input bind:value placeholder="{placeholder}" type="text" />
  </div>
</div>
