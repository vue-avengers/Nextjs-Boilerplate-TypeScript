import type { GetStaticProps } from 'next';
import { useI18n, I18nProps } from 'next-rosetta';

import type { MyLocale } from '../i18n';
import { PwaAddToHomescreen } from '@/components/pwa-add-to-home-screen/pwa-add-to-home-screen';
import { MainLayout } from '@/layout/main-layout';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const i18n = useI18n<MyLocale>();
  const { t } = i18n;
  return (
    <Main
      meta={
        <Meta
          title="HANGİKREDİ: En Avantajlı Teklifi Bul, Karşılaştır ve Başvur"
          description="Kredi hesaplama, banka karşılaştırma ve kart başvuru işlemlerini hızlıca yap; kasko ve sigorta tekliflerini hangikredi.com ile hemen gör!."
        />
      }
    >
      <PwaAddToHomescreen />
      <a href="https://www.hangikredi.com/">
        <img
          src="https://cdn.hangikredi.com/images/slider/desktop-slider-(2)-desktop.jpg"
          alt="HangiKredi banner"
        />
      </a>
      <h1 className="font-bold text-2xl">HangiKredi {t('locale')}</h1>
      <p>
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        HangiKredi is a starter code for your Next js project by putting
        developer experience first .{' '}
        <span role="img" aria-label="zap">
          ⚡️
        </span>{' '}
        Made with Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged,
        VSCode, Netlify, PostCSS, Tailwind CSS.
      </p>
      <h2 className="font-semibold text-lg">HangiKredie Features</h2>
      <p>Developer experience first:</p>
      <ul>
        <li>
          <span role="img" aria-label="fire">
            🔥
          </span>{' '}
          <a href="https://nextjs.org" rel="nofollow">
            Next.js
          </a>{' '}
          for Static Site Generator
        </li>
        <li>
          <span role="img" aria-label="art">
            🎨
          </span>{' '}
          Integrate with{' '}
          <a href="https://tailwindcss.com" rel="nofollow">
            Tailwind CSS
          </a>
        </li>
        <li>
          <span role="img" aria-label="nail_care">
            💅
          </span>{' '}
          PostCSS for processing Tailwind CSS
        </li>
        <li>
          <span role="img" aria-label="tada">
            🎉
          </span>{' '}
          Type checking Typescript
        </li>
        <li>
          <span role="img" aria-label="pencil2">
            ✏️
          </span>{' '}
          Linter with{' '}
          <a href="https://eslint.org" rel="nofollow">
            ESLint
          </a>
        </li>
        <li>
          <span role="img" aria-label="hammer_and_wrench">
            🛠
          </span>{' '}
          Code Formatter with{' '}
          <a href="https://prettier.io" rel="nofollow">
            Prettier
          </a>
        </li>
        <li>
          <span role="img" aria-label="fox_face">
            🦊
          </span>{' '}
          Husky for Git Hooks
        </li>
        <li>
          <span role="img" aria-label="no_entry_sign">
            🚫
          </span>{' '}
          Lint-staged for running linters on Git staged files
        </li>
        <li>
          <span role="img" aria-label="no_entry_sign">
            🗂
          </span>{' '}
          VSCode configuration: Debug, Settings, Tasks and extension for
          PostCSS, ESLint, Prettier, TypeScript
        </li>
        <li>
          <span role="img" aria-label="robot">
            🤖
          </span>{' '}
          SEO metadata, JSON-LD and Open Graph tags with Next SEO
        </li>
        <li>
          <span role="img" aria-label="robot">
            ⚙️
          </span>{' '}
          <a
            href="https://www.npmjs.com/package/@next/bundle-analyzer"
            rel="nofollow"
          >
            Bundler Analyzer
          </a>
        </li>
        <li>
          <span role="img" aria-label="rainbow">
            🌈
          </span>{' '}
          Include a FREE minimalist theme
        </li>
        <li>
          <span role="img" aria-label="hundred">
            💯
          </span>{' '}
          Maximize lighthouse score
        </li>
      </ul>
      <p>Built-in feature from Next.js:</p>
      <ul>
        <li>
          <span role="img" aria-label="coffee">
            ☕
          </span>{' '}
          Minify HTML &amp; CSS
        </li>
        <li>
          <span role="img" aria-label="dash">
            💨
          </span>{' '}
          Live reload
        </li>
        <li>
          <span role="img" aria-label="white_check_mark">
            ✅
          </span>{' '}
          Cache busting
        </li>
      </ul>
      <h2 className="font-semibold text-lg">Our Stater code Philosophy</h2>
      <ul>
        <li>Minimal code</li>
        <li>SEO-friendly</li>
        <li>
          <span role="img" aria-label="rocket">
            🚀
          </span>{' '}
          Production-ready
        </li>
      </ul>
    </Main>
  );
};

export default Index;

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

// Server-side code
export const getStaticProps: GetStaticProps<
  I18nProps<MyLocale>
> = async context => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../i18n/${locale}`);
  return { props: { table } }; // Passed to `/pages/_app.tsx`
};
