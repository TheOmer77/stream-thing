import { createUploadthing, type FileRouter } from 'uploadthing/next';

import { getCurrentUser } from '@/services/auth';

const uploadThing = createUploadthing();

export const fileRouter = {
  thumbnailUploader: uploadThing({
    'image/png': { maxFileSize: '4MB', maxFileCount: 1 },
    'image/jpeg': { maxFileSize: '4MB', maxFileCount: 1 },
  })
    .middleware(async () => {
      await getCurrentUser();
      return {};
    })
    .onUploadComplete(async ({ file }) => {
      return { fileUrl: file.url };
    }),
} satisfies FileRouter;

export type ThumbnailFileRouter = typeof fileRouter;
