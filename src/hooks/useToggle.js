import { useState } from 'react';
export default function useToggle(initialValue = false) {
  const [status, setStatus] = useState(initialValue);
  //토글함수는 인자를 받는데
  //인자가 없을때는 현재의 반댓값으로 설정하고
  //인자가 있으면 그 인자의 값으로 설정함
  const toggle = argument => {
    if (argument === undefined) {
      setStatus(prevState => !prevState);
    } else {
      setStatus(() => argument);
    }
  };
  return [status, toggle];
}
