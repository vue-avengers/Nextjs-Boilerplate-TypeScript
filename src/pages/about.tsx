import type { GetStaticProps } from 'next';
import { useI18n, I18nProps } from 'next-rosetta';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Meta } from '@layout/Meta';
import { Main } from '@templates/Main';

import type { MyLocale } from '../i18n';

const About = () => {
  const router = useRouter();
  const i18n = useI18n<MyLocale>();
  const { t } = i18n;
  return (
    <Main
      meta={
        <Meta
          title="HANGİKREDİ: En Avantajlı Teklifi Bul, Karşılaştır ve Başvur"
          description="Kredi hesaplama, banka karşılaştırma ve kart başvuru işlemlerini hızlıca yap; kasko ve sigorta tekliflerini hangikredi.com ile hemen gör!"
        />
      }
    >
      <h1>{t('about.title')}</h1>
      <p>{t('about.subtitle')}</p>
      <ul>
        {router.locales?.map(loc => (
          <li key={loc}>
            <Link href={router.asPath} locale={loc}>
              <a className={loc === router.locale ? 'is-active' : ''}>{loc}</a>
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Link href="/">Home</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
    </Main>
  );
};

export default About;
// Server-side code
export const getStaticProps: GetStaticProps<
  I18nProps<MyLocale>
> = async context => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../i18n/${locale}`);
  return { props: { table } }; // Passed to `/pages/_app.tsx`
};
