import Avatar from './avatar';
import CoverImage from './cover-image';
import CustomLink from './custom-link';
import DateFormatter from './date-formatter';
import IAuthor from '../types/author';

type Props = {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  updateDate?: string;
  author: IAuthor;
  coverImage: string;
};

const PostPreview: React.FC<Props> = ({
  slug,
  title,
  description,
  publishDate,
  updateDate,
  author,
  coverImage,
}: Props) => {
  return (
    <div>
      <div className="mb-4">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>

      <h3 className="text-4xl dark:text-gray-100 leading-snug mb-2">
        <CustomLink href={`/blog/${slug}`}>{title}</CustomLink>
      </h3>

      <div className="text-gray-500 mb-4">
        {updateDate ? (
          <>
            <DateFormatter dateString={publishDate} /> · Updated{' '}
            <DateFormatter dateString={updateDate} />
          </>
        ) : (
          <DateFormatter dateString={publishDate} />
        )}
      </div>

      <p className="text-lg dark:text-gray-300 leading-relaxed mb-4">
        {description}
      </p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
