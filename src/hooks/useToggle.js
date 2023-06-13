import { useState } from 'react';

function useToggle(initialValue = false) {
  const [toggle, setToggle] = useState(initialValue);
  const onToggle = () => {
    setToggle(!toggle);
  };

  return [toggle, onToggle];
}

export default useToggle;
