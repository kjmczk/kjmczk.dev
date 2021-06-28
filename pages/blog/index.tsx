import { GetStaticProps } from 'next';

import Container from '../../components/container';
import HeroPost from '../../components/hero-post';
import Layout from '../../components/layout';
import MorePosts from '../../components/more-posts';
import Pagination from '../../components/pagination';
import usePagination from '../../hooks/usePagination';
import IPost from '../../types/post';
import { getAllPosts } from '../../utils/api';

type Props = {
  allPosts: IPost[];
};

const pageTitle = 'Blog';

const Blog: React.FC<Props> = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  const { currentPage, currentData, maxPage, setElement } = usePagination(
    morePosts,
    2,
    1.0
  );
  const currentPosts = currentData();

  return (
    <Layout pageTitle={pageTitle}>
      <Container>
        <h1 className="text-6xl md:text-8xl font-bold dark:text-gray-100 text-center tracking-tight leading-tight border-t border-b py-4 md:py-8 my-8 md:mb-16">
          {pageTitle}
        </h1>

        {heroPost && (
          <HeroPost
            slug={heroPost.slug}
            title={heroPost.title}
            description={heroPost.description}
            publishDate={heroPost.publishDate}
            updateDate={heroPost.updateDate}
            author={heroPost.author}
            coverImage={heroPost.coverImage}
          />
        )}

        {currentPosts.length > 0 && <MorePosts posts={currentPosts} />}

        <Pagination
          currentPage={currentPage}
          maxPage={maxPage}
          setElement={setElement}
        />
      </Container>
    </Layout>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts([
    'slug',
    'coverImage',
    'publishDate',
    'updateDate',
    'title',
    'description',
    'author',
  ]);

  return {
    props: { allPosts },
  };
};
