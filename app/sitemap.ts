import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl.replace(/\/$/, '') // Remove trailing slash

  // Filter only relevant blog posts (exclude demo posts for medical site)
  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .filter((post) => {
      // You can customize this filter to include only medical-related posts
      // For now, let's exclude the demo posts that came with the template
      const excludePosts = [
        'code-sample',
        'deriving-ols-estimator',
        'github-markdown-guide',
        'guide-to-using-images-in-nextjs',
        'introducing-tailwind-nextjs-starter-blog',
        'my-fancy-title',
        'new-features-in-v1',
        'pictures-of-canada',
        'release-of-tailwind-nextjs-starter-blog-v2.0',
        'the-time-machine',
        'nested-route/introducing-multi-part-posts-with-nested-routing',
      ]
      return !excludePosts.some((excludePost) => post.path.includes(excludePost))
    })
    .map((post) => ({
      url: `${siteUrl}${post.path.startsWith('/') ? post.path : `/${post.path}`}`,
      lastModified: post.lastmod || post.date,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))

  // Main pages with their priorities and change frequencies for medical practice
  const mainRoutes = [
    {
      url: siteUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    // Add medical-specific pages if they exist as separate routes
    {
      url: `${siteUrl}/#services`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/#chamber`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Only include blog if you plan to have medical content
    ...(blogRoutes.length > 0
      ? [
          {
            url: `${siteUrl}/blog`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
          },
        ]
      : []),
  ]

  return [...mainRoutes, ...blogRoutes]
}
