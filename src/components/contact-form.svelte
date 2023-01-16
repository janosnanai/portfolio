<script lang="ts">
  import { form, field } from "svelte-forms";
  import { email, required } from "svelte-forms/validators";

  import Loader from "./common/loader.svelte";

  const name = field("name", "", [required()]);
  const emailAddress = field("emailAddress", "", [required(), email()]);
  const message = field("message", "", [required()]);

  const messageForm = form(name, emailAddress, message);

  let sendStatus: "idle" | "sending" | "success" | "error" = "idle";

  async function handleSubmit() {
    await messageForm.validate();

    if (!$messageForm.valid) return;

    sendStatus = "sending";

    const res = await fetch("/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: $name.value,
        emailAddress: $emailAddress.value,
        message: $message.value,
      }),
    });

    if (res.ok) {
      // console.log("message sent succesfully");
      sendStatus = "success";
      messageForm.reset();
    } else {
      // console.log("error while sending message");
      sendStatus = "error";
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="p-7 max-w-3xl m-auto">
  <div class="flex flex-col gap-3">
    <div>
      <input
        on:blur={name.validate}
        bind:value={$name.value}
        id="name"
        type="text"
        placeholder="your name"
        class="w-full dark:text-white dark:placeholder:text-outer-space-400 dark:border-outer-space-400"
      />
      <p class="error">
        {#if $messageForm.hasError("name.required")}
          name is required
        {/if}
      </p>
    </div>
    <div>
      <input
        on:blur={emailAddress.validate}
        bind:value={$emailAddress.value}
        id="email-address"
        type="text"
        placeholder="your email"
        class="w-full dark:text-white dark:placeholder:text-outer-space-400 dark:border-outer-space-400"
      />
      <p class="error">
        {#if $messageForm.hasError("emailAddress.required")}
          email is required
        {:else if $messageForm.hasError("emailAddress.not_an_email")}
          invalid email format
        {/if}
      </p>
    </div>
    <div>
      <textarea
        on:blur={message.validate}
        bind:value={$message.value}
        id="message"
        placeholder="your message"
        class="w-full dark:text-white dark:placeholder:text-outer-space-400 dark:border-outer-space-400"
      />
      <p class="error">
        {#if $messageForm.hasError("message.required")}
          message is required
        {/if}
      </p>
    </div>
    <button
      disabled={!$messageForm.valid || sendStatus === "sending"}
      class="p-2 mt-7 bg-international-orange-500 disabled:bg-gallery-600 text-white uppercase font-semibold hover:bg-international-orange-500 transition duration-150 rounded-lg"
      type="submit">send</button
    >
  </div>

  <div class="h-10 w-max m-auto mt-5">
    {#if sendStatus === "sending"}
      <Loader />
    {:else if sendStatus === "error"}
      <p class="error">
        Looks like an error occured :(... Please double-check your inputs and
        try again later!
      </p>
    {:else if sendStatus === "success"}
      <p class="success">
        Message sent succesfully, I will get back to you asap.
      </p>
    {/if}
  </div>
</form>

<style>
  input {
    @apply bg-transparent border-b border-outer-space text-black placeholder:text-outer-space-700 p-2;
  }

  textarea {
    @apply p-2 bg-black/5 border-b border-outer-space text-black placeholder:text-outer-space-700 min-h-[3rem] h-36 max-h-[9rem];
  }

  .error {
    @apply text-red-500 h-5;
  }

  .success {
    @apply text-dodger-blue-600 h-5;
  }
</style>
