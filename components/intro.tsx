import { SITE_NAME, SITE_TITLE } from '../utils/constants';

const Intro: React.FC = () => {
  return (
    <div className="max-w-prose mx-auto text-center">
      <h1 className="text-5xl sm:text-8xl dark:text-gray-100 font-bold tracking-tight leading-tight mb-8">
        {SITE_TITLE}
      </h1>

      <p className="text-xl dark:text-gray-300">
        {SITE_NAME} provides tutorials and tips for full-stack developers to
        build apps with TypeScript / JavaScript, React, React Native and more.
      </p>
    </div>
  );
};

export default Intro;
