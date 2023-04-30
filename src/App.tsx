import { Routes, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import PortraitPage from './pages/PortraitPage';
import StreetPage from './pages/StreetPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="street" element={<StreetPage />} />
        <Route path="portrait" element={<PortraitPage />} />

        {/* catch all */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App
