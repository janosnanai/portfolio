<script lang="ts">
  let name = "";
  let emailAddress = "";
  let message = "";

  $: myOutput = { name, emailAddress, message };

  async function handleSubmit() {
    const res = await fetch("/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myOutput),
    });

    console.log(res);

    if (res.ok) {
      console.log("message sent succesfully");
      name = "";
      emailAddress = "";
      message = "";
    } else {
      console.log("error while sending message");
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="p-7 max-w-3xl m-auto">
  <div class="flex flex-col gap-3">
    <input bind:value={name} id="name" type="text" placeholder="your name" />
    <input
      bind:value={emailAddress}
      id="email-address"
      type="text"
      placeholder="your email"
    />
    <textarea bind:value={message} id="message" placeholder="your message" />
    <button
      class="p-2 bg-international-orange-500 text-white uppercase font-semibold hover:bg-international-orange-500 transform duration-150"
      type="submit">send email</button
    >
  </div>
</form>

<style>
  input {
    @apply bg-transparent border-b border-outer-space text-black placeholder:text-outer-space-700 p-2;
  }

  textarea {
    @apply p-2 bg-black/5 border-b border-outer-space text-black placeholder:text-outer-space-700 min-h-[3rem] max-h-[9rem];
  }
</style>
