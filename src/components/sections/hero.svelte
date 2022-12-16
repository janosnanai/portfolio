<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Navbar from "../navbar.svelte";
  import Starfield from "../starfield.svelte";

  const maxAngleX = 15;
  const maxAngleY = 15;

  let topfixed = false;
  let mousePos = { x: null as number | null, y: null as number | null };
  let headingWidth: number;
  let headingHeight: number;
  let sectionWidth: number;
  let sectionHeight: number;
  let navGuardPosY: string;

  $: rot_x =
    (!!mousePos.y ? maxAngleX * (mousePos.y / sectionHeight - 0.5) : 0) + "deg";
  $: rot_y =
    (!!mousePos.x ? -(maxAngleY * (mousePos.x / sectionWidth - 0.5)) : 0) +
    "deg";
  $: offset_x =
    (!!mousePos.x
      ? (headingWidth / 8) * (mousePos.x / sectionWidth - 0.5)
      : 0) + "px";
  $: offset_y =
    (!!mousePos.y
      ? (headingHeight / 8) * (mousePos.y / sectionHeight - 0.5)
      : 0) + "px";

  function handleMouseLeave() {
    mousePos = { x: null, y: null };
  }

  function handleMouseMove(e: MouseEvent) {
    mousePos = { x: e.clientX, y: e.clientY };
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
  bind:clientHeight={sectionHeight}
  bind:clientWidth={sectionWidth}
  on:mouseleave={handleMouseLeave}
  on:mousemove={handleMouseMove}
  id="hero"
  class="h-screen min-h-[20rem] bg-black relative overflow-hidden"
>
  <Starfield />
  <div
    class="absolute bottom-1/3 md:bottom-1/4 left-1/3 md:left-1/4 -ml-16 mobile-md:-ml-24"
  >
    <div
      class="hero-card relative"
      bind:clientWidth={headingWidth}
      bind:clientHeight={headingHeight}
      style:--rot-x={rot_x}
      style:--rot-y={rot_y}
      style:--offset-y={offset_y}
      style:--offset-x={offset_x}
    >
      <div class="hero-card--front z-10">
        <h1 class="text-4xl mobile-md:text-5xl lg:text-7xl mb-2 mobile-md:mb-5">
          <span
            class="block text-white text-base mobile-md:text-lg md:text-xl lg:text-2xl mb-1 mobile-md:mb-2.5"
            >the personal site of</span
          >
          <span class="block text-white">János Nánai</span>
        </h1>
        <span
          class="block text-international-orange-500 uppercase text-[0.68rem] mobile-md:text-xs md:text-sm"
          >engineer, full-stack developer</span
        >
      </div>
      {#each [-35, -20, -5, 10, 25, 40, 55] as x ("gridX_" + x)}
        <div class="grid-line vertical" style={`right: ${x + 40}%;`} />
      {/each}
      {#each [-15, 0, 15, 30] as y ("gridY_" + y)}
        <div
          class="grid-line horizontal"
          style={`top: ${(y * headingWidth) / headingHeight + 40}%;`}
        />
      {/each}
    </div>
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
    @apply px-4 py-6 mobile-lg:p-10 md:p-20 relative md:mr-52 mt-16;
    transform: perspective(800px) rotateX(var(--rot-x)) rotateY(var(--rot-y))
      translate(var(--offset-x), var(--offset-y));
    transform-style: preserve-3d;
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .hero-card--front {
    transform: translateZ(40px);
  }

  .grid-line {
    @apply absolute from-transparent via-dodger-blue-400 to-transparent -z-10;
    @apply -translate-x-[20%] mobile-lg:-translate-x-1/4 -translate-y-3/4 mobile-lg:-translate-y-2/3;
  }
  .grid-line.vertical {
    @apply w-[1px] h-[150%] md:h-[180%] bg-gradient-to-t;
  }

  .grid-line.horizontal {
    @apply w-[150%] md:w-[180%] h-[1px] bg-gradient-to-r;
  }
</style>
