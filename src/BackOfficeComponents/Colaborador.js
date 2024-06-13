import React, {useState, useEffect} from 'react';
import '../Universal/index.css';
import axios from 'axios';

export default function Colaborador(){
    const url = "http://localhost:3001/colaborador/list";

    const [Colaboradores, setColaboradores] = useState([]);

    useEffect(() => {
        document.title = 'Mostrar Colaboradores';
        loadColaboradores();
    }, []);

    function loadColaboradores(){

    }

    return(
        <div>
            
        </div>
    )
}