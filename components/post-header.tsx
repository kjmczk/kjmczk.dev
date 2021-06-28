import Avatar from './avatar';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';
import PostTitle from './post-title';
import IAuthor from '../types/author';

type Props = {
  title: string;
  coverImage: string;
  author: IAuthor;
  publishDate: string;
  updateDate?: string;
};

const PostHeader: React.FC<Props> = ({
  title,
  coverImage,
  author,
  publishDate,
  updateDate,
}: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="hidden md:block md:mb-8">
        <div className="mb-4">
          <Avatar name={author.name} picture={author.picture} />
        </div>

        <div className="text-base text-gray-500">
          {updateDate ? (
            <>
              <DateFormatter dateString={publishDate} /> · Updated{' '}
              <DateFormatter dateString={updateDate} />
            </>
          ) : (
            <DateFormatter dateString={publishDate} />
          )}
        </div>
      </div>

      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} />
      </div>

      <div className="block md:hidden mb-8">
        <div className="mb-4">
          <Avatar name={author.name} picture={author.picture} />
        </div>

        <div className="text-base text-gray-500">
          {updateDate ? (
            <>
              <DateFormatter dateString={publishDate} /> · Updated{' '}
              <DateFormatter dateString={updateDate} />
            </>
          ) : (
            <DateFormatter dateString={publishDate} />
          )}
        </div>
      </div>
    </>
  );
};

export default PostHeader;
