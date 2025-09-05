// const headerNavLinks = [
//   { href: '/', title: 'Home' },
//   { href: '/blog', title: 'Blog' },
//   { href: '/tags', title: 'Tags' },
//   { href: '/projects', title: 'Projects' },
//   { href: '/about', title: 'About' },
// ]
export const headerNavLinks = [
  {
    title: 'সিরিয়াল',
    path: '#book-appointment',
    fullPagePath: '/appointment',
    isModalTrigger: true,
    isHybrid: true,
  },
  {
    title: 'Services',
    path: '/#services',
    fullPagePath: '/services',
    isHybrid: true,
  },
  {
    title: 'Chamber',
    path: '/#chamber',
    fullPagePath: '/chambers',
    isHybrid: true,
  },
  {
    title: 'About Me',
    path: '/#about-me',
    fullPagePath: '/about',
    isHybrid: true,
  },
  { title: 'Blogs', path: '/blog' },
]

export default headerNavLinks
