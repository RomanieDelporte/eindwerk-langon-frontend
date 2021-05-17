<script>
  export let label;
  export let name;
  export let placeholder;
  // let value;
  export let id;
</script>

<div class="inputfield">
  <div class="inputfield_label">
    <p>{label}</p>
  </div>
  <div class="inputfield_input">
    <input {name} {placeholder} {id} />
  </div>
</div>

<style lang="scss">
  @import "../style/components/Inputfield.scss";
</style>
