<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import invariant from "tiny-invariant";

  import { Star } from "../utils/star";
  import { STAR_COUNT, STAR_SPEED } from "../utils/consts";

  const stars = Array.from({ length: STAR_COUNT }, () => new Star(0, 0, 0));

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let container: HTMLElement;
  let rafId = 0;

  const resizeObserver = new ResizeObserver(init);

  onMount(() => {
    ctx = canvas.getContext("2d")!;
    resizeObserver.observe(container);
  });

  onDestroy(() => {
    resizeObserver.disconnect();
  });

  function init() {
    invariant(ctx, "Canvas context should not be null.");
    rafId > 0 && cancelAnimationFrame(rafId);

    const { clientWidth: w, clientHeight: h } = container;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    for (const star of stars) {
      star.x = Math.random() * w - w / 2;
      star.y = Math.random() * h - h / 2;
      star.z = 0;
    }

    ctx.translate(w / 2, h / 2);
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.strokeStyle = "white";
    rafId = requestAnimationFrame(frame);
  }

  function frame() {
    invariant(ctx, "Canvas context should not be null.");
    const { clientWidth: w, clientHeight: h } = container;

    for (const star of stars) {
      star.update(w, h, STAR_SPEED);
      star.draw(ctx);
    }

    ctx.fillRect(-w / 2, -h / 2, w, h);
    rafId = requestAnimationFrame(frame);
  }
</script>

<div bind:this={container} class="absolute inset-0">
  <canvas bind:this={canvas} />
</div>
