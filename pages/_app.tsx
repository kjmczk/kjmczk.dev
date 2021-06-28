import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import 'tailwindcss/tailwind.css';
// import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
