import Head from 'next/head';

import Container from '../components/container';
import CustomLink from '../components/custom-link';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { SITE_NAME, SITE_TITLE } from '../utils/constants';

const Home: React.FC = () => {
  return (
    <Layout pageTitle={SITE_TITLE}>
      <Head>
        <title>
          {SITE_NAME}: {SITE_TITLE}
        </title>
      </Head>

      <Container>
        <div className="pt-12 md:pt-24 pb-4 md:pb-16">
          <Intro />
          <div className="text-center my-16">
            <CustomLink
              href="/blog"
              className="inline-flex items-center bg-purple-900 dark:bg-purple-700 hover:bg-purple-700 text-white dark:text-gray-100 text-center uppercase rounded border border-purple-900 dark:border-purple-700 dark:hover:border-purple-300 transition-colors duration-200 px-16 py-4"
            >
              Go to Blog
            </CustomLink>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
