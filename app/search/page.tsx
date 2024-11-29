import { videos } from "@/lib/data";
import { VideoCard } from "@/components/video-card";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const params = await searchParams;
  const query = params.q?.toLowerCase() || "";
  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(query) ||
      video.description
        .toLowerCase()
        .includes(query) ||
      video.channel_name
        .toLowerCase()
        .includes(query)
  );

  return (
    <div className="md:ml-64 p-4">
      <h1 className="text-xl font-semibold mb-4">
        Search results for: {params.q}
      </h1>
      <div className="space-y-4">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="max-w-3xl"
          >
            <VideoCard {...video} />
          </div>
        ))}
        {filteredVideos.length === 0 && (
          <p className="text-muted-foreground">
            No videos found.
          </p>
        )}
      </div>
    </div>
  );
}

// import { videos } from '@/lib/data';
// import { VideoCard } from '@/components/video-card';

// export default function SearchPage({
//   searchParams,
// }: {
//   searchParams: { q: string };
// }) {
//   const query = searchParams.q?.toLowerCase() || '';
//   const filteredVideos = videos.filter(
//     (video) =>
//       video.title.toLowerCase().includes(query) ||
//       video.description.toLowerCase().includes(query) ||
//       video.channel_name.toLowerCase().includes(query)
//   );

//   return (
//     <div className="md:ml-64 p-4">
//       <h1 className="text-xl font-semibold mb-4">
//         Search results for: {searchParams.q}
//       </h1>
//       <div className="space-y-4">
//         {filteredVideos.map((video) => (
//           <div key={video.id} className="max-w-3xl">
//             <VideoCard {...video} />
//           </div>
//         ))}
//         {filteredVideos.length === 0 && (
//           <p className="text-muted-foreground">No videos found.</p>
//         )}
//       </div>
//     </div>
//   );
// }
