'use client'

import Script from 'next/script'
import siteMetadata from '@/data/siteMetadata'

const GoogleAnalytics = () => {
  const gtagId = siteMetadata.analytics?.googleAnalytics?.googleAnalyticsId

  if (!gtagId) {
    return null
  }

  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`} />
      <Script strategy="lazyOnload" id="gtag-init">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtagId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics
