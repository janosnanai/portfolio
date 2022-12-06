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
    <input bind:value={name} id="name" type="text" placeholder="your name" />
    <input
      bind:value={emailAddress}
      id="email-address"
      type="text"
      placeholder="your email"
    />
    <textarea bind:value={message} id="message" placeholder="your message" />
    <button class="p-2 bg-fuchsia-500" type="submit">send test email</button>
  </div>
</form>
