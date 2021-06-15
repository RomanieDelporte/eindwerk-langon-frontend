<style lang="scss">
  @import "../style/components/Nav.scss";
</style>

<script>
  import {
    goto
  } from "@sapper/app";
  export let segment;
  import {
    onMount
  } from "svelte";
  import {
    checkAuth
  } from "../routes/auth";
  let isTranslator = false;
  let page;

  onMount(async () => {
    try {
      isTranslator = await checkAuth(["Administrator", "Translators"]);
      console.log(isTranslator);
    } catch (error) {
      console.log(error);
    }
  });
</script>

<aside class="navigation">
  <div class="navigation_logo">
    <img src="/images/logo_langon.svg" alt="logo langon" />
  </div>
  <nav>
    <ul class="navigation_items">
      <li>
        <a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a>
      </li>
      <li>
        <a aria-current="{segment === 'originals' ? 'page' : undefined}" href="originals">Originals</a>
      </li>
      <li>
        <a aria-current="{segment === 'translations' ? 'page' : undefined}" href="translations">Translations</a>
      </li>
      {#if isTranslator !== false}
        {#if isTranslator.user.role.name === "Administrator"}
          <li>
            <a
              rel="prefetch"
              aria-current="{segment === 'settings' ? 'page' : undefined}"
              href="settings/personal">Settings</a>
          </li>
        {/if}
      {/if}
    </ul>
  </nav>
  <div class="navigation_info">
    <p on:click="{() => goto('/about')}">?</p>
  </div>
  <div class="navigation_logout">
    <a href="/login">Afmelden</a>
  </div>
</aside>