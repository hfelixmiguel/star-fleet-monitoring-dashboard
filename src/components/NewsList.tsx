'use client';

import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { SpaceflightNewsResponse, NewsItem, NewsType } from '@/types/news';

interface NewsListProps {
  initialType?: NewsType;
  initialLimit?: number;
}

export default function NewsList({ initialType = 'articles', initialLimit = 12 }: NewsListProps) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [type, setType] = useState<NewsType>(initialType);
  const [limit, setLimit] = useState(initialLimit);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/news?type=${type}&limit=${limit}&offset=${offset}`);
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      const data: SpaceflightNewsResponse<NewsItem> = await response.json();
      setNews(data.results);
      setTotal(data.count);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [type, limit, offset]);

  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.floor(offset / limit) + 1;

  const handlePrevious = () => {
    if (offset > 0) {
      setOffset(Math.max(0, offset - limit));
    }
  };

  const handleNext = () => {
    if (offset + limit < total) {
      setOffset(offset + limit);
    }
  };

  const handleTypeChange = (newType: NewsType) => {
    setType(newType);
    setOffset(0);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={fetchNews}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        {(['articles', 'blogs', 'reports'] as NewsType[]).map((t) => (
          <button
            key={t}
            onClick={() => handleTypeChange(t)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              type === t
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* News Grid */}
      {news.length === 0 ? (
        <p className="text-center text-gray-400 py-12">No news found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {total > limit && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrevious}
            disabled={offset === 0}
            className="px-4 py-2 rounded-lg bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
          >
            Previous
          </button>
          <span className="text-gray-400">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={offset + limit >= total}
            className="px-4 py-2 rounded-lg bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
