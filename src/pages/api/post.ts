import type { APIRoute } from "astro";
import sendEmail from "../../utils/send-email";

export const post: APIRoute = async ({ request }) => {
  sendEmail();
  return new Response(null, { status: 200 });
};
