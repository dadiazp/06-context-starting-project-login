import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      {/* 
      La propiedad provider de Authcontext es un componente  
      Es importante saber que para que un contexto esté disponible en algun componente, el 
      AuthContext.Provider debe envolver los componentes en los que deseamos que esté disponible.
      En este caso, está disponible para los componentes: MainHeader y todos los hijos de MainHeader
      */}
      <AuthContext.Provider value={
        {
          isLoggedIn: isLoggedIn
        }
      }>
        {/* Ya no es necesario enviar la prop isAuthenticated={isLoggedIn} en mainHeader para que este
        se lo pase a navigation porque ahora escucha el context
        y tiene acceso a la data desde ahi*/
        }
        <MainHeader onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
