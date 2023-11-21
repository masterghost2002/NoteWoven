import { Routes, Route } from 'react-router-dom';
import PublicLayout from '@/layouts/Public.layout';
import SignInPage from '@/pages/SignInPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout/>}>
        <Route
          index
          element={<SignInPage/>}
        />
      </Route>
    </Routes>

  )
}

export default App
