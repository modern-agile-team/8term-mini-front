import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen from '../components/templates/MainScreen';
import NotFound from '../pages/error/NotFound';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
