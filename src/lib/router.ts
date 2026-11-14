import { useEffect, useState } from 'react';

const getHashPath = () => window.location.hash.replace(/^#\/?/, '');

export function useHashRoute() {
  const [route, setRoute] = useState(getHashPath);

  useEffect(() => {
    const onHashChange = () => setRoute(getHashPath());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path ? `/${path}` : '';
  };

  return { route, navigate };
}
