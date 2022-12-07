<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import { NAV_ITEMS } from "../utils/consts";

  const dispatch = createEventDispatcher();

  function handleClose() {
    dispatch("close");
  }
</script>

<div class="fixed inset-0 h-screen min-h-[20rem] bg-indigo-900">
  <button
    on:click={handleClose}
    class="fixed top-5 right-5 text-zinc-400 p-2 text-xl bg-transparent hover:bg-white/5 hover:text-zinc-100"
    >close</button
  >
  <div class="h-full flex flex-col items-center justify-center">
    <a
      href="#hero"
      on:click={handleClose}
      class="text-zinc-50 text-2xl p-2 mx-3 mb-5">janosnanai.dev</a
    >
    <nav class="flex flex-col gap-3 items-center">
      {#each NAV_ITEMS as { href, title }}
        <a
          {href}
          on:click={handleClose}
          class="text-zinc-400 p-2 text-xl bg-transparent hover:bg-white/5 hover:text-zinc-100"
        >
          {title}
        </a>
      {/each}
    </nav>
  </div>
</div>
