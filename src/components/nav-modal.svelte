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
  class="fixed z-10 inset-0 h-screen min-h-[20rem] bg-outer-space/90"
  bind:this={self}
  on:keydown={handleKeydown}
>
  <button
    on:click={handleClose}
    class="fixed top-5 right-5 text-international-orange-500 p-2 hover:text-international-orange-400 hover:scale-105 transform duration-150"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="w-9 h-9"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
  <div class="h-full flex flex-col items-center justify-center gap-5">
    <a href="#hero" on:click={handleClose} class="text-white text-2xl p-2 mx-3"
      >janosnanai<span class="text-international-orange font-bold">.</span><span
        class="text-ziggurat">dev</span
      ></a
    >
    <nav class="flex flex-col gap-3 items-center">
      {#each NAV_ITEMS as { href, title }}
        <a
          {href}
          on:click={handleClose}
          class="inline-block uppercase text-white p-2 text-xl hover:text-white transform duration-150 hover:scale-105 hover:-translate-y-0.5"
        >
          {title}
        </a>
      {/each}
    </nav>
  </div>
</div>
