import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from '../pages/error/NotFoundPage';
import LoginPage from '../pages/login/LoginPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
