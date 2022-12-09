<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Navbar from "../navbar.svelte";

  let topfixed = false;
  let mousePos = { x: null as number | null, y: null as number | null };
  let w: number;
  let h: number;
  let navGuardPosY: string;

  $: rotY = (!!mousePos.x ? (mousePos.x - w / 2) / (w / 7) : 0) + "deg";
  $: rotX = (!!mousePos.y ? -(mousePos.y - h / 2) / (h / 7) : 0) + "deg";

  function handleMouseLeave() {
    mousePos = { x: null, y: null };
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
  class="h-screen min-h-[20rem] bg-zinc-900 flex flex-col items-center justify-center relative overflow-hidden"
>
  <div
    bind:clientWidth={w}
    bind:clientHeight={h}
    on:mouseleave={handleMouseLeave}
    on:mousemove={handleMouseMove}
    class="hero-card"
    style:--rot-x={rotX}
    style:--rot-y={rotY}
  >
    <div>
      <h1 class="text-zinc-50 text-6xl mb-5">
        <span class="block text-zinc-400 text-3xl mb-3"
          >the personal site of</span
        >
        <span class="block">János Nánai</span>
      </h1>
      <span class="block text-yellow-500 uppercase text-sm"
        >engineer, full-stack developer</span
      >
    </div>
    {#each [-60, -40, -20, 0, 20, 40, 60] as x ("gridX_" + x)}
      <div class="grid-line vertical" style={`right: ${x + 40}%;`} />
    {/each}
    {#each [-20, 0, 20, 40] as y ("gridY_" + y)}
      <div class="grid-line horizontal" style={`top: ${(y * w) / h + 40}%;`} />
    {/each}
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
    transform-style: preserve-3d;
    @apply p-20 duration-[50] relative mr-52 mt-16;
  }
  .grid-line {
    @apply absolute from-transparent via-violet-500 to-transparent -z-10;
    @apply -translate-y-2/3;
    @apply -translate-x-1/4;
  }
  .grid-line.vertical {
    @apply w-[1px] h-[180%] bg-gradient-to-t;
  }

  .grid-line.horizontal {
    @apply w-[200%] h-[1px] bg-gradient-to-r;
  }
</style>
