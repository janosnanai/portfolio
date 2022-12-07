<script lang="ts">
  export let topfixed = false;
  const navItems = [
    { href: "#about", title: "about" },
    { href: "#projects", title: "projects" },
    { href: "#contact", title: "contact" },
  ];
</script>

<header
  id="header"
  class="absolute z-10 bg-transparent w-full bottom-0"
  class:topfixed
>
  <div class="flex justify-between items-center container mx-auto mt-1 mb-3">
    <a href="#hero" class="text-zinc-50 text-2xl p-2">janosnanai.dev</a>
    <nav>
      {#each navItems as { href, title }}
        <a
          {href}
          class="text-zinc-400 p-2 text-xl bg-transparent hover:bg-white/5 hover:text-zinc-100"
        >
          {title}
        </a>
      {/each}
    </nav>
  </div>
</header>

<style>
  .topfixed {
    position: fixed;
    top: 0;
    bottom: auto;
  }
</style>
