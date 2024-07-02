import React, {useState, useEffect} from 'react';
import '../Universal/index.css'
import axios from 'axios';

export default function Main(){
    const urlCategoria = "https://pint-backend-8vxk.onrender.com/categoria/";
    const urlSubCategoria = "https://pint-backend-8vxk.onrender.com/categoria/";
    let checked = 0;

    const [Categoria, setCategoria] = useState([]);
    const [Subcategoria, setSubcategoria] = useState([]);

    const [cat_NOME, setcat_NOME] = useState("");
    const [cat_DESC, setcat_DESC] = useState("");


    useEffect(() =>{
        document.title = 'Página Principal';
        loadCategorias();
    })

    function loadCategorias(){
        axios.get(urlCategoria + 'list')
        .then(res => {
            if (res.data.success === true){
                const data = res.data.data;
                setCategoria(data);
            }
            else {
                alert("Erro Web Service");
            }
        })
        .catch(error => {
            alert("Erro: " + error)
        })
        console.log(Categoria)
    }

    function Filtro(){
            return (
                <div className='col-lg-3 d-md-none d-sm-none d-lg-block d-md-block d-none d-sm-block filtro-box'>
                    <div className='col-lg-1 filtro-text filtro-title'>
                        &nbsp;
                    </div>
                    <div className='col-lg-8 filtro-text filtro-title'>
                        <span>Filtros</span>
                    </div>
                    <div className='col-lg-2 filtro-text filtro-submit'>
                        <input type='submit' value='Filtrar'></input>
                    </div>
                    <div className='col-lg-1 filtro-text filtro-title'>
                        &nbsp;
                    </div>

                    <SubFiltro></SubFiltro>
                </div>
            )
    }

    function SubFiltro(){
        return Categoria.map((data, index) => {
            return (
                <div className='col-12 filtro-saude filtro pe-0'>
                    <input type='checkbox' id={'input-' + (index + 1)} onClick={() => toggle_all_checkboxes("a")}></input>
                    <button className='' id='dropdown-saude' onClick={() => toggle_saude("a")}>
                        {data.NOME}
                        <a style={{ float: 'right' }} id={'down-' + (index + 1)}>&#9661;</a>
                    </button>
                </div>
            )
        })
            return (
                <div className='col-lg-12 filtro-saude filtro pe-0'>
                    <input type='checkbox' id={this.props.checkid} onClick={() => toggle_all_checkboxes(this.props.arr)}></input>
                    <button className='' id='dropdown-saude' onClick={() => toggle_saude(this.props.idbtn, this.props.idarrow)}>
                        {this.props.name}<a style={{ float: 'right' }} id={this.props.idarrow}>&#9661;</a>
                    </button>
                    <div style={{ display: 'none' }} id={this.props.idbtn}>
                        <ul style={{ listStyleType: 'none' }}>
                            {this.props.arr.map((arr) =>{
                                return (
                                    <li>
                                        <input type='checkbox' id={arr.id} onClick={() => check_all(this.props.arr, this.props.checkid)}></input>
                                        <button className='sub-filtro'>{arr.value}</button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            )
    }
    
    function toggle_saude(id, idarrow) {
        let mostrar = document.getElementById(id);
        if (mostrar.style.display == 'block') {
            mostrar.style.display = 'none';
            document.getElementById(idarrow).innerHTML = '&#9661;';
        }
        else {
            mostrar.style.display = 'block';
            document.getElementById(idarrow).innerHTML = '&#9651;';
        }
    }
    
    function toggle_all_checkboxes(arr){
        if(checked == 0){
            checked = 1;
        }
        else{
            checked = 0;
        }
        arr.map((arr) => {
            if(checked == 0){
                if(document.getElementById(arr.id).checked == true){
                    document.getElementById(arr.id).checked = false;
                }
            }
            else{
                if(document.getElementById(arr.id).checked == false){
                    document.getElementById(arr.id).checked = true;
                }
            }
        })    
    }
    
    function check_all(arr, idbtn){
        let count = 0;
        arr.map((arr) =>{
            if(document.getElementById(arr.id).checked == true){
                count++;
            }
        })
        if(count == 0){
            document.getElementById(idbtn).checked = false;
            checked = 0;
        }
        if(count > 0){
            document.getElementById(idbtn).checked = true;
            checked = 1;
        }
    }
    
    function togglecheckbox(arr, idbtn, id){
        document.getElementById(id).checked = true;
        check_all(arr, idbtn);
    }

    return(
        <div>
            <Filtro></Filtro>
        </div>
    )


}

