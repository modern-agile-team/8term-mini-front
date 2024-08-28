import { warningAlert } from '../components/public_components/Alert';
export default function textValidation(text, textMaxLen) {
  //공백제거
  const cleanText = text.replace(/\s+/g, '');
  //공백 제거했는데 길이가 0이면 경고
  if (cleanText.length === 0) {
    warningAlert('텍스트가 비어있습니다.');
    return;
  }
  if (text.length >= textMaxLen) {
    warningAlert(`${textMaxLen}자를 넘길 수 없습니다.`);
    return;
  }

  //2. text가 비어있는 경우
  //3. text 최대길이가 넘어가는 경우
}
