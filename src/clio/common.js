export const getModule = async (code) => {
  const url = 'data:text/javascript;base64,' + btoa(code);
  return await import(url);
};
