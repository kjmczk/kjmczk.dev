type Props = {
  children?: React.ReactNode;
};

const Container: React.FC = ({ children }: Props) => {
  return <div className="container mx-auto px-4">{children}</div>;
};

export default Container;
