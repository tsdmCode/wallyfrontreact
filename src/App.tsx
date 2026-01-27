import { Layout } from './assets/components/Layout';
import { Home } from './assets/pages/Home/Home';
import { Plakater } from './assets/pages/Plakater';
import { About } from './assets/pages/About';
import { Contact } from './assets/pages/Contact';
import { Login } from './assets/pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="plakater" element={<Plakater />} />
            <Route path="about" element={<About />} />
            <Route path="kontakt" element={<Contact />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
