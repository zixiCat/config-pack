import About from 'src/pages/about';
import Layout from 'src/pages/layout';

export interface IRouterItem {
  name: string;
  path: string;
  component: (props: { router: IRouterItem[] }) => JSX.Element;
  children?: IRouterItem[];
}

const router: IRouterItem[] = [
  {
    component: Layout,
    path: '/',
    name: 'layout',
    children: [{ path: '/about', name: 'about', component: About }],
  },
];

export default router;
