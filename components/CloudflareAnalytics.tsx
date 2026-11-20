'use client'

import Script from 'next/script'

/**
 * Explicit Cloudflare Web Analytics beacon.
 *
 * Cloudflare can also inject this automatically, but ONLY while the domain's
 * DNS record is proxied (orange-clouded) through Cloudflare. Since this site
 * moved to Vercel, the DNS record is commonly switched to "DNS only" so
 * Vercel can manage its own TLS cert — which silently stops the automatic
 * beacon from ever loading (showing as "no data" in the dashboard even
 * though the site works fine).
 *
 * Setting this explicitly makes analytics work regardless of DNS proxy
 * status. Get the token from: Cloudflare dashboard → Analytics & Logs →
 * Web Analytics → your site → "Add site"/"Manage site" → copy the token
 * out of the data-cf-beacon snippet.
 */
const CloudflareAnalytics = () => {
  const token = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN

  if (!token) {
    return null
  }

  return (
    <Script
      strategy="afterInteractive"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token })}
    />
  )
}

export default CloudflareAnalytics

