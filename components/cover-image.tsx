import Image from 'next/image';

import CustomLink from './custom-link';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage: React.FC<Props> = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={1280}
      height={720}
    />
  );
  return (
    <>
      {slug ? (
        <CustomLink href={`/blog/${slug}`} aria-label={title}>
          {image}
        </CustomLink>
      ) : (
        image
      )}
    </>
  );
};

export default CoverImage;
