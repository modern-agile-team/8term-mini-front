import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../pages/error/NotFound';
import LoginPage from '../pages/login/LoginPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
