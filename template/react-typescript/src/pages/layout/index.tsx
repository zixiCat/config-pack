import Home from 'src/pages/home';
import { IRouterItem } from 'src/router';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RouterView from 'src/components/RouterView';

interface LayoutProps {
  router: IRouterItem[];
}

const Layout = (props: LayoutProps) => {
  const [isHome, setIsHome] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setIsHome(history.location.pathname === '/');
    const listen = history.listen((location) => {
      setIsHome(location.pathname === '/');
    });
    return function cleanup() {
      listen();
    };
  }, [history]);

  return (
    <>
      <p>
        <button
          onClick={() => {
            history.push('/');
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            history.push('/about');
          }}
        >
          About
        </button>
      </p>
      {isHome ? <Home /> : <RouterView router={props.router} />}
    </>
  );
};

export default Layout;
