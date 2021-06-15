<style lang="scss">
@import "../style/pages/AboutPage.scss";
</style>

<script>
import { WatchIcon, GlobeIcon, UsersIcon } from "svelte-feather-icons";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="about p-pages">
  <div class="about_content">
    <div class="about_page borderline">
      <div class="about_subtag">
        <img src="/images/logo_langon_regular.svg" alt="about" />
        <p>Translate your website's/app's</p>
        <p>
          I18next your projects. Using Langon <br /> makes it easy. You can have
          your <br /> projects translated by non-developers.
        </p>
      </div>
    </div>
  </div>
  <h2>Why should you use Langon?</h2>
  <div class="about_using">
    <div class="about_quick borderline">
      <WatchIcon size="24" />
      <p>Quick translation</p>
    </div>
    <div class="about_quick borderline">
      <GlobeIcon size="24" />
      <p>Many Languages</p>
    </div>
    <div class="about_quick borderline">
      <UsersIcon size="24" />
      <p>Available for all</p>
    </div>
  </div>
  <h2>What is this platform?</h2>
  <div class="about_platform">
    <div class="about_info">
      <p>
        This platform is a tool we have made<br /> to translate your projects
        more easily.
        <br />There are many languages for <br /> translating your projects.
        last this tool <br /> is available for everyone.
      </p>
    </div>
    <div class="about_picture">
      <img src="/images/home_picture.jpg" alt="about" />
    </div>
  </div>
</div>
