/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file
 */

/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
  {
    path: '/home',
    name: 'home.index',
    component: require('@/pages/home/home.vue'),
  },

  {
    path: '/*',
    redirect: '/home',
  },
];
