import type { APIRoute } from "astro";
import validateEmail from "../../utils/validate-email";
import sendEmail from "../../utils/send-email";

export const post: APIRoute = async ({ request }) => {
  const emailData = await request.json();

  // validate stuff
  const { valid, errors } = validateEmail(emailData);

  if (!valid) {
    // console.log(errors);

    return new Response(JSON.stringify(errors), { status: 400 });
  }

  // let's send
  try {
    await sendEmail(emailData);
  } catch (err: any) {
    return new Response(null, { status: 500 });
  }

  // hurray!
  return new Response(null, { status: 200 });
};
