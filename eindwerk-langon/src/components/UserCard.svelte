<style lang="scss">
  @import "../style/components/UserCard.scss";
</style>

<script>
  export let firstname;
  export let lastname;
  export let email;
</script>

<div class="usercard borderline">
  <div class="usercard_content">
    <slot />
  </div>
  <div class="usercard_border"></div>
  <div class="usercard_personal">
    <div class="usercard_name">
      <p class="p-title">Name</p>
      <p>{firstname} {lastname}</p>
    </div>
    <div class="usercard_email">
      <p class="p-title">Email</p>
      <p>{email}</p>
    </div>
  </div>
</div>