<style lang="scss">
@import "../style/components/Nav.scss";
</style>

<script>
import Button from "./Button.svelte";
export let segment;
let page;
</script>

<aside class="navigation">
  <div class="navigation_logo">
    <img src="/images/logo_langon.svg" alt="logo langon" />
  </div>
  <nav>
    <ul class="navigation_items">
      <li>
        <a aria-current="{segment === undefined ? 'page' : undefined}" href="."
          >Home</a>
      </li>
      <li>
        <a
          aria-current="{segment === 'originals' ? 'page' : undefined}"
          href="originals">Originals</a>
      </li>
      <li>
        <a
          aria-current="{segment === 'translations' ? 'page' : undefined}"
          href="translations">Translations</a>
      </li>
      <li>
        <a
          rel="prefetch"
          aria-current="{segment === 'settings' ? 'page' : undefined}"
          href="settings/personal">Settings</a>
      </li>
    </ul>
  </nav>
  <div class="navigation_info">
    <p on:click="{() => console.log('test')}">?</p>
  </div>
  <div class="navigation_logout">
    <a href="/login">Afmelden</a>
  </div>
</aside>
