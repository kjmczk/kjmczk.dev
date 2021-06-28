import { GetStaticProps, GetStaticPaths } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import prism from 'remark-prism';

import Container from '../../components/container';
import CustomLink from '../../components/custom-link';
import Layout from '../../components/layout';
import LinkImage from '../../components/link-image';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import PostTitle from '../../components/post-title';
import IPost from '../../types/post';
import { getPost, getAllPosts } from '../../utils/api';
import { SITE_URL } from '../../utils/constants';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, 'slug' | 'content'>;
  slug: string;
};

const components = {
  CustomLink,
  LinkImage,
};

const Post: React.FC<Props> = ({ source, frontMatter, slug }: Props) => {
  const router = useRouter();

  const ogImage = SITE_URL + frontMatter.coverImage;

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout pageTitle={frontMatter.title} postPath={frontMatter.path} hasRepo>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading...</PostTitle>
        ) : (
          <article className="prose lg:prose-xl prose-purple mx-auto py-8 lg:py-16">
            <Head>
              <meta
                name="description"
                content={frontMatter.description}
                key="description"
              />
              <meta
                property="og:description"
                content={frontMatter.description}
                key="ogDescription"
              />
              <meta property="og:image" content={ogImage} key="ogImage" />
            </Head>

            <PostHeader
              title={frontMatter.title}
              coverImage={frontMatter.coverImage}
              author={frontMatter.author}
              publishDate={frontMatter.publishDate}
              updateDate={frontMatter.updateDate}
            />

            <PostBody
              content={<MDXRemote {...source} components={components} />}
            />
          </article>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getPost(params?.slug as string);

  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [prism],
    },
  });

  const slug = params?.slug;

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
