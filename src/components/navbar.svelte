<script lang="ts">
  import { NAV_ITEMS } from "../utils/consts";
  import HamburgerMenu from "./hamburger-menu.svelte";
  import ThemeSwitch from "./theme-switch.svelte";
  export let topfixed = false;
</script>

<header
  id="header"
  class={`absolute z-10 w-full bottom-0 transition duration-300 border-b border-transparent ${
    topfixed ? "bg-gallery/90 dark:bg-outer-space-900/90 border-ziggurat-400 shadow dark:border-outer-space" : "bg-transparent"
  }`}
  class:topfixed
>
  <div class="flex justify-between items-center container mx-auto mt-1 mb-3">
    <a
      href="#hero"
      class={`text-2xl font-semibold p-2 mx-3 ${
        topfixed ? "text-black dark:text-white" : "text-white"
      }`}
      >janosnanai<span class="text-international-orange font-bold text-4xl"
        >.</span
      ><span
        id="dev-span"
        class={topfixed
          ? "text-outer-space dark:text-ziggurat"
          : "text-ziggurat"}>dev</span
      ></a
    >
    <div class="flex items-center mx-3">
      <nav class="hidden sm:flex gap-3 pr-5">
        {#each NAV_ITEMS as { href, title }}
          <a
            {href}
            class={`inline-block uppercase p-2 text-xl transition duration-150 hover:scale-105 hover:-translate-y-0.5 ${
              topfixed
                ? "text-outer-space dark:text-ziggurat hover:text-black dark:hover:text-white"
                : "text-ziggurat hover:text-white"
            }`}
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
    @apply fixed top-0 bottom-auto backdrop-blur-lg border-b;
  }
</style>
