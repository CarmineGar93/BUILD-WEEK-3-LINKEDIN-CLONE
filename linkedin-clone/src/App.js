import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Container from 'react-bootstrap/Container';
import ProfileComponent from './components/ProfileComponent';
import Navbardin from './components/Navbardin';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RetrieveUserAction } from './redux/actions';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import JobComponent from './components/Jobs/JobsComponent';
import SearchJobs from './components/Jobs/SearchJobs';

import SignUpComponent from './components/signUp/SignUpComponent';
import RegisterComponent from './components/signUp/RegisterComponent';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user_logged);
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    if (token) {
      dispatch(RetrieveUserAction(token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <BrowserRouter>
      <Container fluid className='px-0'>
        <Routes>
          {/* Rotta per il SignUpComponent senza Navbar e Footer */}
          <Route path='/sign' element={<SignUpComponent />} />
          <Route path="/" element={<RegisterComponent />} />

          {/* Rotte principali che includono Navbar e Footer */}
          {user && (
            <>
              <Route
                path='/home'
                element={
                  <>
                    <header>
                      <Navbardin />
                    </header>
                    <main>
                      <HomeComponent />
                    </main>
                    <footer>
                      <FooterComponent />
                    </footer>
                  </>
                }
              />
              <Route
                path='/profile/:userId'
                element={
                  <>
                    <header>
                      <Navbardin />
                    </header>
                    <main>
                      <ProfileComponent />
                    </main>
                    <footer>
                      <FooterComponent />
                    </footer>
                  </>
                }
              />
              <Route
                path='/jobs'
                element={
                  <>
                    <header>
                      <Navbardin />
                    </header>
                    <main>
                      <JobComponent />
                    </main>
                    <footer>
                      <FooterComponent />
                    </footer>
                  </>
                }
              />
              <Route
                path='/search'
                element={
                  <>
                    <header>
                      <Navbardin />
                    </header>
                    <main>
                      <SearchJobs />
                    </main>
                    <footer>
                      <FooterComponent />
                    </footer>
                  </>
                }
              />
            </>
          )}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
