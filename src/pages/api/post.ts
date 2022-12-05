import type { APIRoute } from "astro";
import sendEmail from "../../utils/send-email";

export const post: APIRoute = async ({ request }) => {
  const data = await request.json();

  try {
    await sendEmail(data);
  } catch (err: any) {
    return new Response(err.message, { status: 500 });
  }

  return new Response(null, { status: 200 });
};
