import React from 'react';
import usePathnameWatcher from '../../hooks/usePathnameWatcher';

function withPathnameWatcher(WrappedComponent) {
  return function WithPathnameWatcher(props) {
    const pathname = usePathnameWatcher();

    return React.createElement(WrappedComponent, { ...props, pathname });
  };
}

export default withPathnameWatcher;
