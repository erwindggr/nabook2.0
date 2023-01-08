// import { Home } from './pages/home';
// import { LoginPage } from './pages/loginPage';
// import { SignupPage } from './pages/signupPage';
import { Add } from './components/add';
import { Loading } from './components/loading';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import routes from './routes/routes';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {/* <Add/> */}
      {isLoading ? (
        <Loading />
      ) : (
        <Routes key={"route"}>
          {routes.map((val, key) => {
            return (
              <Route exact path={val.path} element={val.element} key={key} />
            );
          })}
        </Routes>
      )}
      {/* <Home /> */}
      {/* <LoginPage /> */}
      {/* <SignupPage/> */}
      {/* <Loading /> */}
    </>
  );
}

export default App;
