export const signup = user => {
  return $.ajax({
    url: '/api/users',
    method: 'post',
    data: { user }
  });
};
