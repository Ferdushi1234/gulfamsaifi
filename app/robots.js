export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://65c20e5c1357070007746274--dapper-malabi-b6ad79.netlify.app/sitemap.xml',
    }
  }