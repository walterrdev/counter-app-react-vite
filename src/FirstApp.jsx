// Importar PropTypes: Sirven para definir el tipo a las propiedades (props)
import PropTypes from 'prop-types';

// const message = {
//     title: 'Hello world',
//     subTitle: 'Subtitle',
// }

export const FirstApp = ({ title = 'Sin título', subTitle }) => {

    return (
        <>
            <h1>{ title }</h1>
            {/* <code>{ JSON.stringify( message ) }</code> */}
            <p>{ subTitle }</p>
        </>
    );
}

// Establecer restricciones de uso para nuestro componente
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

// Establecer valores por defecto a las propiedades de nuestro componente
// FirstApp.defaultProps = {
//     title: 'Sin título',    
// }
