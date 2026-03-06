import NASAApodGallery from '@/components/NASAApodGallery';
import MarsPhotosGallery from '@/components/MarsPhotosGallery';

export const metadata = {
  title: 'NASA Gallery | Starfleet Fleet Monitoring',
  description: 'Explore NASA astronomy pictures and Mars rover photos',
};

export default function NASAPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            NASA Space Exploration 🌌
          </h1>
          <p className="text-gray-400">
            Explore the cosmos with NASA\'s public APIs
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">🌟</span> Astronomy Picture of the Day
          </h2>
          <NASAApodGallery />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">🔴</span> Mars Rover Photos
          </h2>
          <p className="text-gray-400 mb-6">
            Explore photos from NASA\'s Curiosity rover on Mars
          </p>
          <MarsPhotosGallery />
        </div>
      </div>
    </div>
  );
}
