const date = new Date();
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * @type {Home}
 */

export const homePropsData = {
  day: date.getDate(),
  month: monthNames[date.getMonth()],
  year: date.getFullYear(),
};

/**
 * @typedef {{ day: string; month: string; year: number; }} Home
 */

/**
 * @type {Post[]}
 */
const posts = [
  {
    id: 1,
    name: 'Santa Monica',
  },
  {
    id: 2,
    name: 'Stankonia',
  },
  {
    id: 3,
    name: 'Ocean Avenue',
  },
  {
    id: 4,
    name: 'Tubthumper',
  },
  {
    id: 5,
    name: 'Wide Open Spaces',
  },
];
/**
 * @typedef {{ name: string; id: number; }} Post
 */

export function getPosts() {
  return posts;
}

/**
 * @param {id} number
 * @returns {Post}
 */
export function getPost(id: number) {
  return posts.find((post) => post.id === id);
}
