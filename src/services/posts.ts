import settings from '../settings';

export const fetchAllPosts = async (searchParam: string) => {
  const response = await fetch(
    `${settings.staticUrl}/api/posts/?populate=*&filters[title][$containsi]=${searchParam}`
  );
  if (response.ok) return response.json();
  else return { data: [] };
};

export const fetchPostById = async (postId?: string) => {
  const response = await fetch(
    `${settings.staticUrl}/api/posts/${postId}?populate=*`
  );
  if (response.ok) return response.json();
  else return { data: [] };
};
