'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MarsPhoto, MarsPhotosResponse } from '@/types/nasa';

const SOLS = [1000, 500, 100, 50, 10];

export default function MarsPhotosGallery() {
  const [photos, setPhotos] = useState<MarsPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSol, setSelectedSol] = useState('1000');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPhotos();
  }, [selectedSol, page]);

  const fetchPhotos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/nasa/mars?sol=${selectedSol}&page=${page}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Mars photos');
      }
      const data: MarsPhotosResponse = await response.json();
      setPhotos(data.photos || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSolChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSol(e.target.value);
    setPage(1);
  };

  if (loading && photos.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={fetchPhotos}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <select
          value={selectedSol}
          onChange={handleSolChange}
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
        >
          {SOLS.map(sol => (
            <option key={sol} value={sol}>
              Sol {sol} ({new Date(Date.now() - sol * 24 * 60 * 60 * 1000).toLocaleDateString()})
            </option>
          ))}
        </select>
      </div>

      {photos.length === 0 ? (
        <p className="text-center text-gray-400 py-12">No photos found for this sol.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-red-500 transition-colors">
                <div className="relative h-48 w-full">
                  <Image
                    src={photo.img_src}
                    alt={`Mars Photo ${photo.id}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-3">
                  <p className="text-white text-sm font-semibold">
                    {photo.camera.full_name}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {photo.earth_date}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Rover: {photo.rover.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
            >
              Previous
            </button>
            <span className="text-gray-400">Page {page}</span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={photos.length < 25}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
