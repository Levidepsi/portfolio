import { token } from './../../../sanity/lib/token';
import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { client } from "../../../sanity/lib/client";



const clientWithToken = client.withConfig({ token });

export async function GET(request: Request) {
    const draft = await draftMode()
  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    clientWithToken,
    request.url
  );

  if (!isValid) {
    return new Response("Invalid secret", { status: 401 });
  }

 draft.enable();

  redirect(redirectTo);
}