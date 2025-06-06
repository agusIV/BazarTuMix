import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UsuarioProovedor } from './contextAPI/UsuarioContex';
import { ListaProovedor } from './contextAPI/ListaCotext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ListaProovedor>
        <UsuarioProovedor>
            <App/>
        </UsuarioProovedor>
        </ListaProovedor>
    </React.StrictMode>
);
