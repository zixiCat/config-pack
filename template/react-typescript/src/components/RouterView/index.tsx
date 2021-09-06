import { Route, Switch } from 'react-router-dom';
import { IRouterItem } from 'src/router';

interface IRouterViewProps {
  router: IRouterItem[];
}

const RouterView = ({ router = [] }: IRouterViewProps) => (
  <Switch>
    {router.map((item) => {
      return (
        <Route path={item.path} key={item.path}>
          <item.component router={item.children || []} />
        </Route>
      );
    })}
  </Switch>
);

export default RouterView;
