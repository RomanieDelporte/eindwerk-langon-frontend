<style lang="scss">
@import "../style/components/ImageUpload.scss";
</style>

<script>
let avatar, fileinput;

const FileSelected = (e) => {
  let image = e.target.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = (e) => {
    avatar = e.target.result;
  };
};
</script>

<div class="personal">
  <div class="personal_image">
    {#if avatar}
      <img
        class="avatar"
        src="{avatar}"
        alt="d"
        on:click="{() => {
          fileinput.click();
        }}" />
    {:else}
      <img
        class="avatar"
        src="/images/avatar.png"
        alt=""
        on:click="{() => {
          fileinput.click();
        }}" />
    {/if}
  </div>
  <input
    style="display:none"
    type="file"
    accept=".jpg, .jpeg, .png"
    on:change="{(e) => FileSelected(e)}"
    bind:this="{fileinput}" />
</div>
