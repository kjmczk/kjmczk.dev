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

const HeroPost: React.FC<Props> = ({
  slug,
  title,
  description,
  publishDate,
  updateDate,
  author,
  coverImage,
}: Props) => {
  return (
    <section>
      <h2 className="text-4xl md:text-6xl font-bold dark:text-gray-100 tracking-tight leading-tight mb-8">
        Latest Post
      </h2>

      <div className="flex flex-col xl:flex-row mb-16">
        <div className="xl:w-3/5 mb-8 xl:mb-0 xl:mr-16">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>

        <div className="xl:w-2/5 lg:flex xl:block">
          <h3 className="text-4xl lg:text-5xl dark:text-gray-100 leading-tight mb-4">
            <CustomLink href={`/blog/${slug}`}>{title}</CustomLink>
          </h3>

          <div>
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
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
