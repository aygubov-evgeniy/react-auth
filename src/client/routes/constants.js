import {Home, Login, Account} from '../pages'

export const ROUTES = {
  home: {
    path: '/',
    component: Home,
    exact: true,
    title: 'Home',
  },
  login: {
    path: '/login',
    component: Login,
    title: 'Login',
  },
  account: {
    path: '/account',
    component: Account,
    title: 'Account',
    needAuth: true,
  },
}
