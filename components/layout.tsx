import Footer from './footer';
import Header from './header';
import Meta from './meta';
import Repo from './repo';

type Props = {
  pageTitle: string;
  hasRepo?: boolean;
  postPath?: string;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({
  pageTitle,
  hasRepo,
  postPath,
  children,
}: Props) => {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      {hasRepo && <Repo postPath={postPath} />}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
