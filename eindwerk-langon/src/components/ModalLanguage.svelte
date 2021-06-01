<style lang="scss">
@import "../style/components/ModalLanguage.scss";
</style>

<script>
export let title;
export let text;
export let showModal = false;
</script>

{#if showModal}
  <div class="modal">
    <div class="modal_background" on:click|self>
      <div class="modal_content">
        <h3 class="title">{title}</h3>
        <p>{text}</p>
        <slot />
      </div>
    </div>
  </div>
{/if}
