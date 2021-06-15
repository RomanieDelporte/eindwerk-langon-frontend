<style lang="scss">
  @import "../../../style/elements/Security.scss";
</style>

<script>
  import Button from "../../../components/Button.svelte";
  import Inputfield from "../../../components/Inputfield.svelte";
  import Title from "../../../components/Title.svelte";
</script>

<div class="security marginSet">
  <Title text="Your settings" />
  <div class="security_text">
    <h3>Security</h3>
    <p>"Security the most important"</p>
    <div class="security_content">
      <div class="security_key">
        <Inputfield label="Api key" placeholder="apikey" />
        <div class="security_button">
          <p>info</p>
          <Button label="Generate" />
        </div>
      </div>
    </div>
    <div class="security_allowed">
      <Inputfield label="Allowed origins(url's)" />
    </div>
  </div>
</div>