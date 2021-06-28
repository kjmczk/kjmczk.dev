import { NextApiRequest, NextApiResponse } from 'next';

import { posts } from '../../_cache/posts';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const query = req.query.q as string;
  const words = query ? query.toLowerCase().split(' ') : [];

  const results =
    words.length > 0
      ? posts.filter((post) => {
          return (
            words.every((word) => post.title.toLowerCase().includes(word)) ||
            words.every((word) => post.description.toLowerCase().includes(word))
          );
        })
      : [];

  res.status(200).json({ results });
};
