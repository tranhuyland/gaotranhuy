export const env = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://gaotranhuy.vercel.app",

  googleSheetId:
    process.env.GOOGLE_SHEET_ID ?? "",

  cloudinaryCloud:
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ??
    ""
} as const;
