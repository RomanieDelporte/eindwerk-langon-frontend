<style lang="scss">
  @import "../../style/elements/Subnav.scss";

  .selected {
    color: rgb(255, 62, 0);
  }
</style>

<script>
  export let segment;
</script>

<div class="p-pages">
  <nav class="sub-nav borderline">
    <ul>
      <li>
        <a class="{segment === 'personal' ? 'selected' : ''}" href="settings/personal">Personal Information</a>
      </li>
      <li>
        <a class="{segment === 'translators' ? 'selected' : ''}" href="settings/translators">Translators</a>
      </li>
      <li>
        <a class="{segment === 'security' ? 'selected' : ''}" href="settings/security">Security</a>
      </li>
    </ul>
  </nav>
  <slot />
</div>