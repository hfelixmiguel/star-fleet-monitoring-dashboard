'use client';

export default function ResponsiveCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}
