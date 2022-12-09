<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Navbar from "../navbar.svelte";

  interface I_MousePos {
    x: number | null;
    y: number | null;
  }

  let topfixed = false;
  let mousePos: I_MousePos = { x: null, y: null };
  let w: number;
  let h: number;
  let navGuardPosY: string;

  $: rotY = (!!mousePos.x ? (mousePos.x - w / 2) / (w / 7) : 0) + "deg";
  $: rotX = (!!mousePos.y ? -(mousePos.y - h / 2) / (h / 7) : 0) + "deg";

  function handleMouseLeave() {
    mousePos = { x: null, y: null };
    console.log("mouse left");
  }

  function handleMouseMove(e: MouseEvent) {
    mousePos = { x: e.offsetX, y: e.offsetY };
  }

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
  <div
    class="hero-card p-9"
    bind:clientWidth={w}
    bind:clientHeight={h}
    on:mouseleave={handleMouseLeave}
    on:mousemove={handleMouseMove}
    style:--rot-x={rotX}
    style:--rot-y={rotY}
  >
    <h1 class="text-zinc-50 text-6xl mb-7">
      <span class="block text-zinc-400 text-3xl mb-3">the personal site of</span
      >
      <span class="block">János Nánai</span>
    </h1>
    <span class="block text-zinc-500">engineer, full-stack developer</span>
  </div>
  <Navbar {topfixed} />
  <div
    id="nav-guard"
    class="-z-50 bg-transparent absolute bottom-0 h-80"
    style:bottom={navGuardPosY}
  />
</section>

<style>
  .hero-card {
    transform: perspective(800px) rotateX(var(--rot-x)) rotateY(var(--rot-y));
    transition-duration: 200ms;
  }
</style>
