<style lang="scss">
@import "../style/components/Inputfield.scss";
</style>

<script>
export let label;
export let placeholder;
export let type;
</script>

<div class="inputfield">
  <div class="inputfield_label">
    <p>{label}</p>
  </div>
  <div class="inputfield_input">
    <input type="{type}" placeholder="{placeholder}" />
  </div>
</div>
