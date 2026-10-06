export default async function sitemap() {
  const baseUrl = 'https://www.sportsapihub.com';

  // 1. Define your static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sports/football-api`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 2. Optional: Combine static routes with dynamic routes if needed
  return [...staticRoutes];
}