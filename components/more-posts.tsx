import PostPreview from './post-preview';
import IPost from '../types/post';

type Props = {
  posts: IPost[];
};

const MorePosts: React.FC<Props> = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="text-4xl md:text-6xl font-bold dark:text-gray-100 tracking-tight leading-tight mb-8">
        More Posts
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            slug={post.slug}
            title={post.title}
            description={post.description}
            publishDate={post.publishDate}
            updateDate={post.updateDate}
            author={post.author}
            coverImage={post.coverImage}
          />
        ))}
      </div>
    </section>
  );
};

export default MorePosts;
