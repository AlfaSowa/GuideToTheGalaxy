import { fork, hydrate, serialize } from 'effector';
import { useMemo } from 'react';

let scope;

function initializeScope(domain, initialData) {
  console.log('initializeScope');
  const _scope = fork(domain, {
    values: {
      ...(scope ? serialize(scope, { onlyChanges: true }) : {}),
      ...initialData,
    },
  });

  if (typeof window !== 'undefined') {
    scope = _scope;
  }

  return _scope;
}

export function useScope(domain, initialState) {
  return useMemo(() => initializeScope(domain, initialState), [
    domain,
    initialState,
  ]);
}
