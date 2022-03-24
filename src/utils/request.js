export const request = async (url, method = 'get', body = null) => {
  const response = await fetch(url, {
    method,
    timeout: 5000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: method === 'get' ? null : JSON.stringify(body),
  });
  return await response.json()
}
