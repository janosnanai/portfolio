<script lang="ts">
  import { onMount } from "svelte";
  import invariant from "tiny-invariant";

  export let topfixed = false;

  const enum THEMES {
    DARK = "dark",
    LIGHT = "light",
  }
  let mode: THEMES;
  let root: HTMLElement | null;

  onMount(() => {
    root = document.querySelector("html");
    mode = getPersistedTheme() ?? THEMES.LIGHT;
    setTheme();
  });

  function getPersistedTheme() {
    if (typeof window === "undefined") return;

    // 1st: look for prev persisted setting
    const theme = localStorage.getItem("theme");

    // 2nd: if no valid prev setting found, check browser setting
    if (!theme || (theme !== THEMES.LIGHT && theme !== THEMES.DARK)) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? THEMES.DARK
        : THEMES.LIGHT;
    }
    return theme;
  }

  function toggleTheme() {
    invariant(
      mode && (mode === THEMES.LIGHT || mode === THEMES.DARK),
      "Invalid theme value."
    );

    if (mode === THEMES.LIGHT) {
      mode = THEMES.DARK;
    } else if (mode === THEMES.DARK) {
      mode = THEMES.LIGHT;
    }

    // persist new value to localstorage
    localStorage.setItem("theme", mode);

    setTheme();
  }

  function setTheme() {
    invariant(
      mode && (mode === THEMES.LIGHT || mode === THEMES.DARK),
      "Invalid theme value."
    );
    invariant(root, "No root found.");

    if (mode === THEMES.DARK) {
      root?.classList.add(THEMES.DARK);
    } else if (mode === THEMES.LIGHT) {
      root?.classList.remove(THEMES.DARK);
    }
  }
</script>

<button
  on:click={toggleTheme}
  class="-ml-12 origin-right scale-0 transition-all duration-300 h-7 w-7 overflow-hidden"
  class:topfixed
  aria-hidden
>
  {#if mode === THEMES.LIGHT}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-7 h-7 text-international-orange-500 animate-[spin_30s_linear_infinite]"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  {/if}
  {#if mode === THEMES.DARK}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-7 h-7 text-international-orange"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  {/if}
</button>

<style>
  .topfixed {
    @apply ml-0 scale-100 hover:scale-105 origin-center;
  }
</style>
