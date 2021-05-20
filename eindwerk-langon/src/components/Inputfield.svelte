<script>
  export let label;
  // export let name;
  export let placeholder;
  export let type;
  // let value;
  // export let id;
</script>

<div class="inputfield">
  <div class="inputfield_label">
    <p>{label}</p>
  </div>
  <div class="inputfield_input">
    <input {type} {placeholder} />
  </div>
</div>

<style lang="scss">
  @import "../style/components/Inputfield.scss";
</style>
