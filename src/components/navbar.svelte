<script lang="ts">
  import { NAV_ITEMS } from "../utils/consts";
  import HamburgerMenu from "./hamburger-menu.svelte";
  export let topfixed = false;
</script>

<header
  id="header"
  class="absolute z-10 bg-transparent w-full bottom-0 transition duration-300 border-b border-transparent"
  class:topfixed
>
  <div class="flex justify-between items-center container mx-auto mt-1 mb-3">
    <a href="#hero" class="text-white text-2xl p-2 mx-3"
      >janosnanai<span class="text-trinidad font-bold">.</span><span
        class="text-scarpa-flow-200">dev</span
      ></a
    >
    <nav class="hidden sm:flex gap-3 mx-3">
      {#each NAV_ITEMS as { href, title }}
        <a
          {href}
          class="inline-block uppercase text-scarpa-flow-50 p-2 text-xl hover:text-white transform duration-150 hover:scale-105 hover:-translate-y-0.5"
        >
          {title}
        </a>
      {/each}
    </nav>
    <HamburgerMenu />
  </div>
</header>

<style>
  .topfixed {
    @apply fixed top-0 bottom-auto bg-scarpa-flow-800/75 backdrop-blur-md;
  }
</style>
