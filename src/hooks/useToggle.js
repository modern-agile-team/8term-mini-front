import { useState } from 'react';
export default function useToggle(initialValue = false) {
  const [status, setStatus] = useState(initialValue);
  const toggle = () => {
    setStatus(prevState => !prevState);
  };
  return [status, toggle];
}
