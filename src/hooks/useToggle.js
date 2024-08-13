import { useState } from 'react';
export default function useToggle(initialValue = false) {
  const [status, setStatus] = useState(initialValue);
  const toggle = argument => {
    if (argument == undefined) {
      setStatus(prevState => !prevState);
    } else {
      setStatus(() => argument);
    }
  };
  return [status, toggle];
}
