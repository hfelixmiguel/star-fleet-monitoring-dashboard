'use client';

import Image from 'next/image';
import { SpaceflightNewsArticle, SpaceflightNewsBlog, SpaceflightNewsReport } from '@/types/news';

type NewsItem = SpaceflightNewsArticle | SpaceflightNewsBlog | SpaceflightNewsReport;

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const truncateSummary = (summary: string, maxLength: number = 150) => {
    if (summary.length <= maxLength) return summary;
    return summary.substring(0, maxLength) + '...';
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-700">
      {news.image_url && (
        <div className="relative h-48 w-full">
          <Image
            src={news.image_url}
            alt={news.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
            {news.news_site}
          </div>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
          {news.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3">
          {truncateSummary(news.summary)}
        </p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">
            {formatDate(news.published_at)}
          </span>
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
}
