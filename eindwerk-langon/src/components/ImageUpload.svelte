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
  const image = async () => {
    const res = await fetch("https://langon.josdeberdt.be/auth/login", {
      method: "GET",
      body: JSON.stringify({
        avatar: avatar,
      }),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
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