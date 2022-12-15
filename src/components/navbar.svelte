<script lang="ts">
  import { NAV_ITEMS } from "../utils/consts";
  import HamburgerMenu from "./hamburger-menu.svelte";
  import ThemeSwitch from "./theme-switch.svelte";
  export let topfixed = false;
</script>

<header
  id="header"
  class="absolute z-10 bg-transparent w-full bottom-0 transition duration-300 border-b border-transparent"
  class:topfixed
>
  <div class="flex justify-between items-center container mx-auto mt-1 mb-3">
    <a href="#hero" class="text-white text-2xl font-semibold p-2 mx-3"
      >janosnanai<span class="text-international-orange font-bold text-4xl"
        >.</span
      ><span id="dev-span" class="text-ziggurat">dev</span></a
    >
    <div class="flex items-center mx-3">
      <nav class="hidden sm:flex gap-3 pr-5">
        {#each NAV_ITEMS as { href, title }}
          <a
            {href}
            class="inline-block uppercase text-white p-2 text-xl hover:text-white transform duration-150 hover:scale-105 hover:-translate-y-0.5"
          >
            {title}
          </a>
        {/each}
      </nav>
      <HamburgerMenu bind:topfixed />
      <ThemeSwitch bind:topfixed />
    </div>
  </div>
</header>

<style>
  .topfixed {
    @apply fixed top-0 bottom-auto bg-gallery/90 backdrop-blur-lg border-b border-ziggurat-400 shadow;
  }

  .topfixed a[href="#hero"] {
    @apply text-black dark:text-white;
  }

  .topfixed nav > a {
    @apply text-outer-space dark:text-outer-space-50 hover:text-black dark:hover:text-white;
  }

  .topfixed #dev-span {
    @apply text-outer-space dark:text-ziggurat;
  }
</style>
