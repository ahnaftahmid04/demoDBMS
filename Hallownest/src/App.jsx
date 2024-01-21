import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import Register from './pages/Register';
import Create from './pages/Create';
import Follow from './pages/Follow';

function App() {
  const user = {
    name: 'Monkey D. Luffy',
    userName: 'joyboy',
  }

  return (
    <Routes>
      <Route
        path="/onboarding"
        element={<Onboarding />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/*"
        element={<Layout user={user}><Home /></Layout>}
      />
      <Route
        path='/create'
        element={<Layout user={user}><Create /></Layout>}
      />
      <Route
        path='/follow'
        element={<Layout user={user}><Follow /></Layout>}
      />
    </Routes>
  );
}

export default App;