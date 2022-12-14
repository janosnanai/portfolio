<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from "svelte";

  import { NAV_ITEMS, FOCUSABLE_ELEMENTS } from "../utils/consts";

  const dispatch = createEventDispatcher();

  let originalOverflow: string;
  let focusableNodes: HTMLElement[];
  let self: HTMLElement;

  function handleClose() {
    dispatch("close");
  }

  function focusFirst() {
    if (focusableNodes.length === 0) return;

    focusableNodes[0].focus();
  }

  function focusAround(e: KeyboardEvent) {
    // trap focus
    if (focusableNodes.length === 0) return;

    if (!self.contains(document.activeElement)) {
      focusFirst();
      return;
    }

    const idx = focusableNodes.indexOf(document.activeElement as HTMLElement);

    if (e.shiftKey && idx === 0) {
      e.preventDefault();
      focusableNodes[focusableNodes.length - 1].focus();
      return;
    }

    if (!e.shiftKey && idx === focusableNodes.length - 1) {
      e.preventDefault();
      focusableNodes[0].focus();
      return;
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    switch (e.key) {
      case "Escape":
        handleClose();
        break;
      case "Tab":
        focusAround(e);
        break;
    }
  }

  onMount(() => {
    // disable scrolling, also remember prev state
    originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    focusableNodes = Array(
      ...self.querySelectorAll(FOCUSABLE_ELEMENTS.join(","))
    ) as HTMLElement[];

    focusFirst();
  });

  onDestroy(() => {
    // restore scrolling
    document.body.style.overflow = originalOverflow;
  });
</script>

<div
  class="fixed z-10 inset-0 h-screen min-h-[20rem] bg-gigas-900/90"
  bind:this={self}
  on:keydown={handleKeydown}
>
  <button
    on:click={handleClose}
    class="fixed top-5 right-5 text-zinc-400 p-2 text-xl bg-transparent hover:bg-white/5 hover:text-zinc-100"
    >close</button
  >
  <div class="h-full flex flex-col items-center justify-center gap-5">
    <a href="#hero" on:click={handleClose} class="text-white text-2xl p-2 mx-3"
      >janosnanai<span class="text-trinidad font-bold">.</span><span
        class="text-scarpa-flow-200">dev</span
      ></a
    >
    <nav class="flex flex-col gap-3 items-center">
      {#each NAV_ITEMS as { href, title }}
        <a
          {href}
          on:click={handleClose}
          class="inline-block uppercase text-scarpa-flow-50 p-2 text-xl hover:text-white transform duration-150 hover:scale-105 hover:-translate-y-0.5"
        >
          {title}
        </a>
      {/each}
    </nav>
  </div>
</div>
