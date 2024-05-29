// Importar componentes
import { useState } from 'react';                   // Hook
import PropTypes from 'prop-types';                 // PropTypes

/**
 * Componente funcional
 * 
 * Muestra contador y botones.
 * 
 * @param {number} number | Valor inicial de contador enviado desde el componente padre. 
 * @returns 
 */
export const CounterApp = ({ number }) => {

    const [ numberNew, setCounter ] = useState( number );

    // Función para manejar los Incrementos del contador
    const handleAdd = () => {
        setCounter( numberNew + 1 );
    }

    // Función para manejar los Descrementos del contador
    const handleSubstract = () => {
        setCounter( numberNew - 1 );
    }

    // Función para Resetar el valor al estado inicial al contador
    const handleReset = () => {
        setCounter( number );
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{ numberNew }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSubstract }>-1</button>
            <button onClick={ handleReset }>Reset</button>
        </>
    )
}

// Establecer restricciones de uso para nuestro componente
// Number: Tipo numérico y es opcional
CounterApp.propTypes = {
    number: PropTypes.number,
}
