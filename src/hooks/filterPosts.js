function filterPosts(data, key, keyword) {
  return Promise.resolve(data.filter((item) => item?.[key]?.includes(keyword)));
}

export default filterPosts;
