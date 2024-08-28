import { useRef } from 'react';
/** @useThrottle @매개변수 1.딜레이마다 실행할 콜백함수 2. 딜레이 3.딜레이상태일때 실행될 함수(선택) */
export function useThrottle(callback, delay, callback2) {
  //마지막 실행 시간 기록
  const lastRun = useRef(Date.now() - delay);
  //실행 함수
  const execute = () => {
    const elapsedTime = Date.now() - lastRun.current;
    //실행한지 몇초 지났는지랑 비교해서 실행
    if (elapsedTime >= delay) {
      callback();
      lastRun.current = Date.now();
    } else {
      //함수가 있을때만 실행 NOT undefined 일때
      if (callback2 !== undefined) {
        //콜백함수 인자로 실행까지 남은시간 전달 써도되고 안써도 됨
        const timeToNextRun = Math.round((delay - elapsedTime) / 1000); //초로 계산
        callback2(timeToNextRun);
      }
    }
  };
  //실행 함수, 실행까지 몇 초 남았는지 알려주는 함수
  return execute;
}
