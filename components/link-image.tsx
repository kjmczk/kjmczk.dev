import CustomLink from './custom-link';

type Props = {
  src: string;
  alt: string;
};

const LinkImage: React.FC<Props> = ({ src, alt }: Props) => {
  return (
    <p>
      <CustomLink href={src} isBlank>
        <img src={src} alt={alt} loading="lazy" />
      </CustomLink>
    </p>
  );
};

export default LinkImage;
