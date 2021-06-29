module.exports = {
  locales: ['en', 'id'],
  defaultLocale: 'en',
  pages: {
    '/': ['home'],
    '/about': ['about'],
  },
  loader: false,
  loadLocaleFrom: (locale, namespace) => import(`../locales/${locale}/${namespace}`).then(m => m.default),
}
