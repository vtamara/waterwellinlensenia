import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: 
        "eyJmaWQiOjEwMTMxMjMsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHhhYjEwNzMzMTI2MUI5RTdBN2Y5ZGNhM2Y4ZjY4YTBlMzhlM2NkOWY1In0",
      payload: 
        "eyJkb21haW4iOiJ3YXRlcndlbGxpbmxlbnNlbmlhLnZlcmNlbC5hcHAifQ",
      signature: 
        "MHhkMmQzYjliMTMzMThiMTZkMjFiMDNjOTM5NGM2ODEyNzk0ZWY0MWNjZTU5NDQzZjMyMTc4ODE1ZjA2NmNiY2RjN2MyZmFkZGNiYmE2YTBkNWRkZWI0YTMwMDY4YThkYTJhNGUzZTcwNTA5NmRiN2VmZmY2NTQyMmNkZTY0OGVmMTFi"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/og.png`,
      buttonTitle: "Open",
      webhookUrl: `${appUrl}/api/webhook`,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#555555",
      primaryCategory: "social",
    },
    miniapp: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      ogImageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Open",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
      primaryCategory: "social",
    },
  };

  return Response.json(config);
}
