import * as React from 'react';

export function usePrevious(value: any) {
  const ref = React.useRef(0);
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
