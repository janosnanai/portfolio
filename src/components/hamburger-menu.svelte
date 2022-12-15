<script lang="ts">
  import NavModal from "./nav-modal.svelte";

  let isOpen = false;
  export let topfixed = false;

  function handleToggle() {
    isOpen = !isOpen;
  }

  function handleClose() {
    isOpen = false;
  }
</script>

<nav class="block sm:hidden pr-5" class:topfixed>
  <button
    on:click={handleToggle}
    class="text-outer-space-50 hover:text-white p-2 mx-3 transform duration-150 hover:scale-105"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="w-7 h-7"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 9h16.5m-16.5 6.75h16.5"
      />
    </svg>
  </button>
  {#if isOpen}
    <NavModal on:close={handleClose} />
  {/if}
</nav>

<style>
  .topfixed button {
    @apply text-outer-space dark:text-outer-space-50 hover:text-black dark:hover:text-white;
  }
</style>
