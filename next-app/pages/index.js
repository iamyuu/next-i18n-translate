import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import loadNamespaces from 'next-translate/loadNamespaces'

export default function Home() {
  const {t, lang} = useTranslation('home')

  return (
    <>
      <p>{t`description`}</p>
      <Link href='/' locale={lang === 'en' ? 'id' : 'en'}>
        change lang
      </Link>
    </>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: await loadNamespaces({
      ...ctx,
      pathname: '/',
    }),
  }
}
