import React, { useEffect } from 'react';

const RedirectOnReload = ({ to }) => {
    useEffect(() => {
      window.scrollTo(0, 0);
        window.history.replaceState({}, document.title, '/');
        }, []);

  return null;
};

export default RedirectOnReload;