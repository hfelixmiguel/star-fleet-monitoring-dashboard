'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { NASAApod } from '@/types/nasa';

export default function NASAApodGallery() {
  const [apod, setApod] = useState<NASAApod | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');

  useEffect(() => {
    fetchApod();
  }, []);

  const fetchApod = async (date?: string) => {
    setLoading(true);
    setError(null);
    try {
      const url = date ? `/api/nasa/apod?date=${date}` : '/api/nasa/apod';
      const response = await fetch(url);
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

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate) {
      fetchApod(selectedDate);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => fetchApod()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!apod) return null;

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6 flex gap-4">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          max={new Date().toISOString().split('T')[0]}
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
        <button
          type="button"
          onClick={() => { setSelectedDate(''); fetchApod(); }}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Today
        </button>
      </form>

      <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
        {apod.media_type === 'image' ? (
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src={apod.url}
              alt={apod.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        ) : (
          <div className="w-full h-64 md:h-96 flex items-center justify-center bg-gray-700">
            <iframe
              src={apod.url}
              title={apod.title}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              {apod.title}
            </h1>
            <span className="text-gray-400 text-sm">
              {apod.date}
            </span>
          </div>
          
          {apod.copyright && (
            <p className="text-gray-500 text-sm mb-4">
              © {apod.copyright}
            </p>
          )}
          
          <p className="text-gray-300 leading-relaxed">
            {apod.explanation}
          </p>
          
          {apod.hdurl && apod.media_type === 'image' && (
            <a
              href={apod.hdurl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View HD Version
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
