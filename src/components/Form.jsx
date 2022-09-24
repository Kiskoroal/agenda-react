import React, {useState} from 'react';
import '../stylesheet-components/Form.css'
import { v4 as uuidv4 } from 'uuid';

function Form(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    }

    const manejarEnvio = e => {
        e.preventDefault();
        
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    }

    return(
        <form className='to-do-form'
        onSubmit={manejarEnvio}> 
            <input 
            type="text" 
            className='to-do-input'
            placeholder='Escribe tu tarea'
            name='text'
            onChange={manejarCambio}/>
        <button className='to-do-btn'>
            Agregar Tarea
        </button>
        </form>    
    );
}

export default Form;