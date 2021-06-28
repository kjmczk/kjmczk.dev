import Image from 'next/image';

type Props = {
  name: string;
  picture: string;
};

const Avatar: React.FC<Props> = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        alt={name}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="text-lg font-bold dark:text-gray-300 ml-4">{name}</div>
    </div>
  );
};

export default Avatar;
