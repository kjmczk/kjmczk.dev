import { IconContext } from 'react-icons';
import { FaHome, FaTwitter, FaGithub } from 'react-icons/fa';

import Container from './container';
import CustomLink from './custom-link';
import { SITE_NAME, GITHUB_URL, TWITTER_URL } from '../utils/constants';

const getCurrentYear = () => new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="border-t">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center py-16 dark:text-gray-100">
          <div className="text-gray-500 lg:pr-4 lg:w-1/4">
            © {getCurrentYear()} {SITE_NAME}
          </div>

          <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-center tracking-tight leading-tight my-8 lg:my-0 lg:px-4 lg:w-1/2">
            This website is built with Next.js.
          </div>

          <div className="inline-flex justify-end items-center space-x-8 lg:pl-4 lg:w-1/4">
            <IconContext.Provider value={{ size: '2em' }}>
              <CustomLink
                href="/"
                aria-label="Home"
                className="hover:text-gray-500 dark:hover:text-gray-400"
              >
                <FaHome />
              </CustomLink>
              <a
                href={GITHUB_URL}
                aria-label={`${SITE_NAME} on GitHub`}
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-gray-500 dark:hover:text-gray-400"
              >
                <FaGithub />
              </a>
              <a
                href={TWITTER_URL}
                aria-label={`${SITE_NAME} on Twitter`}
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-gray-500 dark:hover:text-gray-400"
              >
                <FaTwitter />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
