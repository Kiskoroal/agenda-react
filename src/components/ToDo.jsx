import React from 'react';
import '../stylesheet-components/ToDo.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';


function Tarea ({ id, texto, completada, completarTarea, eliminarTarea }) {
    return(
        <div className={completada ? 'to-do-container completada' : 'to-do-container'}>
            <div 
            className='to-do-text'
            onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className='to-do-icon-container'
            onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className='to-do-icon'/>
            </div>
        </div>
    );
}

export default Tarea;