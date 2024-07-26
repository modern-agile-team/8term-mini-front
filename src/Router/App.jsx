import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen from '../components/templates/MainScreen';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
