// Esto es un contexto. El mismo sirve para poder enviar datos mediante props entre componentes que no son padre e hijo.
// Es decir, sirve para evitar el tener que reenviar una propiedad desde un componente a otro hasta llegar al componente destino

import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false
});


export default AuthContext;