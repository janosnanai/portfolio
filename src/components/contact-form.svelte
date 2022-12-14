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

<form on:submit|preventDefault={handleSubmit} class="p-7">
  <div class="flex flex-col gap-3">
    <input
      bind:value={name}
      id="name"
      type="text"
      placeholder="your name"
      class="bg-transparent border-b border-scarpa-flow-500 text-white placeholder:text-scarpa-flow-300 p-2"
    />
    <input
      bind:value={emailAddress}
      id="email-address"
      type="text"
      placeholder="your email"
      class="bg-transparent border-b border-scarpa-flow-500 text-white placeholder:text-scarpa-flow-300 p-2"
    />
    <textarea
      bind:value={message}
      id="message"
      placeholder="your message"
      class="p-2 bg-black/5 border-b border-scarpa-flow-500 text-white placeholder:text-scarpa-flow-300 min-h-[3rem] max-h-[9rem]"
    />
    <button
      class="p-2 bg-trinidad text-white uppercase font-semibold hover:bg-trinidad-600 transform duration-150"
      type="submit">send email</button
    >
  </div>
</form>
