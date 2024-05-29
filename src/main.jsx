// Importar componentes
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';

// Cargar estilos CSS a nivel global
import './styles.css';

// Renderizar componente en la vista = DOM
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp number={ 0 } />
    </React.StrictMode>
);
