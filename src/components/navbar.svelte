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
    <a href="#hero" class="text-zinc-50 text-2xl p-2 mx-3">janosnanai.dev</a>
    <nav class="hidden sm:block mx-3">
      {#each NAV_ITEMS as { href, title }}
        <a
          {href}
          class="text-zinc-400 p-2 text-xl bg-transparent hover:bg-white/5 hover:text-zinc-100"
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
    @apply fixed top-0 bottom-auto bg-zinc-900/50 backdrop-blur-md border-zinc-700;
  }
</style>
