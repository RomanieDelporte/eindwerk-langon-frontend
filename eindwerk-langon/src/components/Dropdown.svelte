<style lang="scss">
  @import "../style/components/Dropdown.scss";
</style>

<script>
  import Select from "svelte-select";

  let items = [{
      value: "English",
      label: "English"
    },
    {
      value: "French",
      label: "French"
    },
    {
      value: "Dutch",
      label: "Dutch"
    },
    {
      value: "German",
      label: "German"
    },
    {
      value: "Spanish",
      label: "Spanish"
    },
  ];
</script>

<div class="dropdown">
  <Select placeholder="Choose a language" items="{items}" />
</div>