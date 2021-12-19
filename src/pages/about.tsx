import type { GetStaticProps } from 'next';
import { useI18n, I18nProps } from 'next-rosetta';
import { useRouter } from 'next/router';

import type { MyLocale } from '../i18n';
// import { HomeProvider } from '@/stores/context/home-context';

function About() {
  const router = useRouter();
  const i18n = useI18n<MyLocale>();
  const { t } = i18n;

  return (
    <>
      <h1>{t('about.title')}</h1>
      <p>{t('about.subtitle')}</p>
      <ul>
        {router.locales?.map(loc => (
          <li key={loc}></li>
        ))}
      </ul>
      <hr />
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
    </>
  );
}

export default About;

// About.getLayout = function getLayout(page: React.ReactElement) {
//   return <DefaultLayout>{page}</DefaultLayout>;
// };

// Server-side code
export const getStaticProps: GetStaticProps<
  I18nProps<MyLocale>
> = async context => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../i18n/${locale}`);
  return {
    props: {
      table,
    },
  }; // Passed to `/pages/_app.tsx`
};
