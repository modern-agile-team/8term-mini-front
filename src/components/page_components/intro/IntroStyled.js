import styled from 'styled-components';

/**div 요소 정렬 */
export const LootDiv = styled.div`
  padding-top: 10%;
  color: #f7f9f3;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

/**image 감싸는 div */
export const ImageWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 35px;
`;

/**text 감싸는 div */
export const TextWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #ffffff;
  padding-top: 15px;
  max-width: 500px;
  width: 100%;
`;

/**Dummy image */
export const DummyPhotoImg = styled.img`
  width: 430px;
  height: 250px;
  overflow: hidden;
  object-fit: cover;
  margin-bottom: 25px;
  background-color: #ffffff;
`;

/**영화 제목(영어) */
export const MovieEnTitleDiv = styled.div`
  font-family: 'Asterone DEMO', sans-serif;
  font-size: 30px;
  line-height: normal;
`;

/**밑줄 */
export const HorizontalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px solid #ffffff;
`;

/**얇은 밑줄 */
export const ThinHr = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ffffff;
  margin-top: 15px;
  margin-bottom: 20px;
`;

/**한글 제목 + 개봉년도 div */
export const TitleGroupDiv = styled.div`
  display: flex;
  align-items: center;
`;

/**영화 제목(한국어) */
export const MovieKoTitleDiv = styled.div`
  font-family: 'Pretendard-Regular';
  font-weight: 600;
  font-size: 20px;
`;

/**영화 개봉년도 */
export const ReleaseDiv = styled.div`
  font-family: 'Asterone DEMO';
  font-size: 15px;
  margin-left: 300px;
`;

/**infoGroup 감싸는 div */
export const InfoWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 70px;
  width: 100%;
`;

/**info와 thinHr을 묶는 div */
export const InfoGroupDiv = styled.div`
  width: 100%;
`;

export const InfoDiv = styled.div`
  font-family: 'Pretendard-Regular';
  font-size: 15px;
  display: flex;
  width: 100%;
`;

export const InfoKey = styled.div`
  font-weight: 600;
  width: 20%;
`;

export const InfoValue = styled.div`
  width: 80%;
`;

export const SummaryWrapperDiv = styled.div`
  font-family: 'Pretendard-Regular';
  margin-top: 20px;
`;

export const SummaryDiv = styled.div`
  font-weight: 600;
`;

export const SummaryTextDiv = styled.div`
  font-size: 15px;
  line-height: 1.5;
  margin-top: 10px;
  width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
`;
