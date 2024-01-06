import { Routes, Route } from 'react-router-dom';
import PublicLayout from '@/layouts/Public.layout';
import SignInPage from '@/pages/SignIn.page';
import ServerSetup from '@/pages/ServerSetup.page';
function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout/>}>
        <Route
          index
          element={<SignInPage/>}
        />
        <Route
            path='server-setup'
            element={<ServerSetup/>}
        />
      </Route>
    </Routes>

  )
}

export default App
