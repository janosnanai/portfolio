import type { APIRoute } from "astro";
import sendEmail from "../../utils/send-email";

export const post: APIRoute = async ({ request }) => {
  const data = await request.json();
  console.log(data);

  sendEmail(data);

  return new Response(null, { status: 200 });
};
