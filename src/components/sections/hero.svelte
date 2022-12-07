<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Navbar from "../navbar.svelte";

  let topfixed = false;
  let navGuardPosY: string;

  const intersectionObserver = new IntersectionObserver((entries) => {
    if (typeof window === "undefined") return;

    if (!entries[0].isIntersecting) {
      topfixed = true;
    } else {
      topfixed = false;
    }
  });

  onMount(() => {
    const navGuardEl = document.getElementById("nav-guard") as HTMLElement;
    const headerEl = document.getElementById("header") as HTMLElement;

    navGuardPosY = (headerEl.getBoundingClientRect().height ?? 0) + "px";

    intersectionObserver.observe(navGuardEl);
  });

  onDestroy(() => {
    intersectionObserver.disconnect();
  });
</script>

<section
  id="hero"
  class="h-screen min-h-[20rem] bg-zinc-900 flex flex-col items-center justify-center relative"
>
  <h1 class="text-zinc-50 text-6xl mb-7">
    <span class="block text-zinc-400 text-3xl mb-3">the personal site of</span>
    <span class="block">János Nánai</span>
  </h1>
  <h4 class="text-zinc-500">engineer - web developer</h4>
  <Navbar {topfixed} />
  <div
    id="nav-guard"
    class="-z-50 bg-transparent absolute bottom-0 h-80"
    style:bottom={navGuardPosY}
  />
</section>
