import Container from './container';
import CustomLink from './custom-link';
import Search from './search';
import ThemeSwitch from './theme-switch';
import { SITE_NAME } from '../utils/constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <Container>
        <div className="tracking-tight leading-tight">
          <a href="#" className="sr-only focus:not-sr-only">
            Skip to content
          </a>

          <div className="flex justify-between items-center h-16">
            <nav className="flex items-center space-x-8 dark:text-gray-100">
              <CustomLink
                href="/"
                className="text-2xl font-bold hover:text-gray-500 dark:hover:text-gray-400"
              >
                {SITE_NAME}
              </CustomLink>

              <CustomLink
                href="/blog"
                className="text-xl hover:text-gray-500 dark:hover:text-gray-400"
              >
                Blog
              </CustomLink>
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeSwitch />
              <div className="hidden sm:block">
                <Search />
              </div>
            </div>
          </div>

          <div className="block sm:hidden">
            <Search />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
