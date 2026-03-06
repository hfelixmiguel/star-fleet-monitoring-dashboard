'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { NASAApod } from '@/types/nasa';

export default function NASAApodWidget() {
  const [apod, setApod] = useState<NASAApod | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await fetch('/api/nasa/apod');
        if (!response.ok) {
          throw new Error('Failed to fetch APOD');
        }
        const data = await response.json();
        setApod(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchApod();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="animate-pulse space-y-3">
          <div className="h-32 bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-700 rounded w-3/4"></div>
          <div className="h-3 bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error || !apod) {
    return (
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <p className="text-gray-400 text-sm">Unable to load NASA APOD</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
      <div className="relative h-32 w-full">
        {apod.media_type === 'image' ? (
          <Image
            src={apod.url}
            alt={apod.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-700">
            <span className="text-gray-400">Video</span>
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-white font-semibold text-sm line-clamp-2 mb-1">
          {apod.title}
        </h3>
        <p className="text-gray-400 text-xs">
          {apod.date}
        </p>
        {apod.copyright && (
          <p className="text-gray-500 text-xs mt-1">
            © {apod.copyright}
          </p>
        )}
      </div>
    </div>
  );
}
