import fs from 'fs';

import { getAllPosts } from '../utils/api';

const stringifyPosts = () =>
  `export const posts = ${JSON.stringify(
    getAllPosts(['slug', 'title', 'description'])
  )}`;

fs.writeFile('_cache/posts.ts', stringifyPosts(), (err) => {
  if (err) return console.log(err);
  console.log('All posts cached.');
});
