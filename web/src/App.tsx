import { Routes, Route } from 'react-router-dom';
import PublicLayout from '@/layouts/Public.layout';
import ProtectedLayout from './layouts/Protected.layout';
import SignInPage from '@/pages/SignIn.page';
import ServerSetup from '@/pages/ServerSetup.page';
import DashboardPage from './pages/Dashboard.page';
function App() {
  return (
    <Routes>
      <Route path="/welcome" element={<PublicLayout />}>
        <Route
          index
          element={<SignInPage />}
        />
        <Route
          path='server-setup'
          element={<ServerSetup />}
        />
      </Route>
      <Route
        path='/' element={<ProtectedLayout />}
      >
        <Route
          path='dashboard'
          element={<DashboardPage />}
        />

      </Route>
    </Routes>

  )
}

export default App
