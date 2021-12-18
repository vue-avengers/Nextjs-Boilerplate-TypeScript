import GA from './google-analytics';

const googleAnalyticsId = '';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const isProduction = process.env.NODE_ENV === 'production';

const Analytics = () => {
  return <>{isProduction && googleAnalyticsId && <GA />}</>;
};

export default Analytics;
