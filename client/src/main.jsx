import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UsuarioProovedor } from './contextAPI/UsuarioContex';
import { ListaProovedor } from './contextAPI/ListaCotext';
import { cargarLista } from './services/listaServices';

const inicializar = async () => {
    const lista = await cargarLista()
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <ListaProovedor listaInicial={lista}>
            <UsuarioProovedor>
                <App/>
            </UsuarioProovedor>
            </ListaProovedor>
        </React.StrictMode>
    );
}

inicializar()