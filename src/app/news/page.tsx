import NewsList from '@/components/NewsList';

export const metadata = {
  title: 'Spaceflight News | Starfleet Fleet Monitoring',
  description: 'Latest spaceflight news, blogs, and reports from around the world',
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Spaceflight News 🚀
          </h1>
          <p className="text-gray-400">
            Stay updated with the latest space exploration news, blogs, and reports
          </p>
        </div>
        
        <NewsList />
      </div>
    </div>
  );
}
