export const postMessage = message => {
  return $.ajax({
    url: '/api/messages',
    method: 'post',
    data: { message }
  });
};
