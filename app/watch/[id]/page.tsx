import { Metadata } from "next";
import { notFound } from "next/navigation";
import { videos } from "@/lib/data";
import { VideoPlayer } from "@/components/video-player";
import { VideoDescription } from "@/components/video-description";
import { VideoCard } from "@/components/video-card";
import { CommentsSection } from "@/components/comments-section";

// Add this type for better type safety
type WatchPageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return videos.map((video) => ({
    id: video.id,
  }));
}

// Use the WatchPageProps type
export default function WatchPage({
  params,
}: WatchPageProps) {
  const video = videos.find(
    (v) => v.id === params.id
  );

  if (!video) {
    notFound();
  }

  // Get related videos (same category, limit to 10)
  const relatedVideos = videos
    .filter(
      (v) =>
        v.id !== video.id &&
        v.category === video.category
    )
    .slice(0, 10);

  return (
    <div className="md:ml-64 p-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VideoPlayer video={video} />
          <VideoDescription video={video} />
          <CommentsSection />
        </div>
        <div className="hidden lg:block">
          <h2 className="font-semibold mb-4">
            Related Videos
          </h2>
          <div className="space-y-4">
            {relatedVideos.map((v) => (
              <div key={v.id} className="w-full">
                <VideoCard {...v} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Optional: Add metadata generation if needed
export async function generateMetadata({
  params,
}: WatchPageProps): Promise<Metadata> {
  const video = videos.find(
    (v) => v.id === params.id
  );

  return {
    title: video
      ? `Watch ${video.title}`
      : "Video Not Found",
    description:
      video?.description || "Video details",
  };
}

// import { notFound } from "next/navigation";
// import { videos } from "@/lib/data";
// import { VideoPlayer } from "@/components/video-player";
// import { VideoDescription } from "@/components/video-description";
// import { VideoCard } from "@/components/video-card";
// import { CommentsSection } from "@/components/comments-section";

// export function generateStaticParams() {
//   return videos.map((video) => ({
//     id: video.id,
//   }));
// }

// export default function WatchPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const video = videos.find(
//     (v) => v.id === params.id
//   );

//   if (!video) {
//     notFound();
//   }

//   // Get related videos (same category, limit to 10)
//   const relatedVideos = videos
//     .filter(
//       (v) =>
//         v.id !== video.id &&
//         v.category === video.category
//     )
//     .slice(0, 10);

//   return (
//     <div className="md:ml-64 p-4 max-w-7xl mx-auto">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2">
//           <VideoPlayer video={video} />
//           <VideoDescription video={video} />
//           <CommentsSection />
//         </div>
//         <div className="hidden lg:block">
//           <h2 className="font-semibold mb-4">
//             Related Videos
//           </h2>
//           <div className="space-y-4">
//             {relatedVideos.map((v) => (
//               <div key={v.id} className="w-full">
//                 <VideoCard {...v} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
