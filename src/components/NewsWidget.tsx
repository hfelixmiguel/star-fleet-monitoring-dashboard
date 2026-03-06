'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SpaceflightNewsResponse, NewsItem } from '@/types/news';

export default function NewsWidget() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news?type=articles&limit=3');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data: SpaceflightNewsResponse<NewsItem> = await response.json();
        setNews(data.results);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="animate-pulse space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 bg-gray-700 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Latest Space News</h3>
        <Link
          href="/news"
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          View all →
        </Link>
      </div>
      <div className="space-y-3">
        {news.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <h4 className="text-sm text-white line-clamp-2 mb-1">
              {item.title}
            </h4>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>{item.news_site}</span>
              <span>{formatDate(item.published_at)}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
