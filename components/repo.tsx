import Container from './container';

type Props = {
  postPath?: string;
};

const Repo: React.FC<Props> = ({ postPath }: Props) => {
  return (
    <div className="border-b">
      <Container>
        <div className="text-sm text-center dark:text-gray-300 py-2">
          The source code for this article is{' '}
          <a
            href={`https://github.com/kjmczk/${postPath}`}
            rel="noopener noreferrer"
            target="_blank"
            className="underline hover:text-gray-500"
          >
            available on GitHub
          </a>
          .
        </div>
      </Container>
    </div>
  );
};

export default Repo;
