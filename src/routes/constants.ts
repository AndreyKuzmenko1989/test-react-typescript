export const ROUTES = {
  main: '/',
  login: 'login',
  addPhone: '/add',
  dynamic: {
    viewPhone: (id = ':id') => `/${id}`,
    editPhone: (id = ':id') => `/edit/${id}`,
  },
};
