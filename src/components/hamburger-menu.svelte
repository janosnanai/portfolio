<script lang="ts">
  import NavModal from "./nav-modal.svelte";

  let isOpen = false;

  function handleToggle() {
    isOpen = !isOpen;
  }

  function handleClose() {
    isOpen = false;
  }
</script>

<nav class="block sm:hidden">
  <button
    on:click={handleToggle}
    class="text-scarpa-flow-50 bg-transparent p-2 mx-3 hover:text-white transform duration-150 hover:scale-105"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  </button>
  {#if isOpen}
    <NavModal on:close={handleClose} />
  {/if}
</nav>
