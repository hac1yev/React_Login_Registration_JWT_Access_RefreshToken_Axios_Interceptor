import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from './components/Navbar.jsx';
import Register from "./pages/Register";
import Home from './pages/Home';
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Favorites from "./pages/Favorites";
import Admins from "./pages/Admins";
import About from './pages/About';
import NotFound from './pages/NotFound.jsx';
import RequireAuth from "./components/RequireAuth.jsx";
import Editors from "./pages/Editors.jsx";
import UnAuthorized from "./pages/UnAuthorized.jsx";
import { useSelector } from "react-redux";
import PersistLogin from "./components/PersistLogin.jsx";

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {
  const auth = useSelector(state => state.authReducer.auth);
  const expiredRefresh = useSelector(state => state.authReducer.expiredRefresh);
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/';

  return (
    <>
      <Navbar />
      <Routes>

        <Route element={<PersistLogin/>} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/unauthorized" element={<UnAuthorized />} />

          <Route path="/login" element={auth?.roles && !expiredRefresh ? <Navigate to={from} replace /> : <Login />} />
          <Route path="/register" element={auth?.roles && !expiredRefresh ? <Navigate to={from} replace /> : <Register />} />
          
          <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.User]} />}>
            <Route path="/profile" element={<Profile />}>
              <Route path="" element={<Navigate to="editors" replace />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.User]} />}>
            <Route path="/profile" element={<Profile />}>
              <Route path="editors" element={<Editors />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/profile" element={<Profile />}>
              <Route path="favorites" element={<Favorites />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="/profile" element={<Profile />}>
              <Route path="admins" element={<Admins />} />
            </Route>
          </Route>
        </Route>

          <Route path="*" element={<NotFound/>}/>

      </Routes>
    </>
  )
}

export default App