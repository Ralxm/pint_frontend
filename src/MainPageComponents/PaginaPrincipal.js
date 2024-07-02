import React, {useState, useEffect} from 'react';
import '../Universal/index.css'
import axios from 'axios';
import Profile from './Profile'
import { load } from 'cheerio';

export default function Main(){
    const urlCategoria = "https://pint-backend-8vxk.onrender.com/categoria/";
    const urlSubCategoria = "https://pint-backend-8vxk.onrender.com/subcategoria/";
    const urlPost = "https://pint-backend-8vxk.onrender.com/post/";
    const urlAprovacao = "https://pint-backend-8vxk.onrender.com/aprovacao/";
    const urlEspaco = "https://pint-backend-8vxk.onrender.com/post/";
    const urlEvento = "https://pint-backend-8vxk.onrender.com/aprovacao/";
    const urlColaborador = "https://pint-backend-8vxk.onrender.com/colaborador/";
    let checked = 0;

    const [Categoria, setCategoria] = useState([]);
    const [Subcategoria, setSubcategoria] = useState([]);
    const [Publicacao, setPublicacao] = useState([]);
    const [Espaco, setEspaco] = useState([]);
    const [Evento, setEvento] = useState([]);
    const [Colaborador, setColaborador] = useState([]);

    useEffect(() =>{
        document.title = 'Página Principal';
        loadTables();
    }, [])

    function loadTables(){
        axios.get(urlColaborador + 'list')
        .then(res => {
            if (res.data.success === true){
                const data = res.data.data;
                setColaborador(data);
            }
            else {
                alert("Erro Web Service");
            }
        })
        .catch(error => {
            alert("Erro: " + error)
        })

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

        axios.get(urlSubCategoria + 'list')
        .then(res => {
            if (res.data.success === true){
                const data = res.data.data;
                setSubcategoria(data);
            }
            else {
                alert("Erro Web Service");
            }
        })
        .catch(error => {
            alert("Erro: " + error)
        })

        axios.get(urlPost + 'list')
        .then(res => {
            if (res.data.success === true){
                const data = res.data.data;
                setPublicacao(data);
            }
            else {
                alert("Erro Web Service");
            }
        })
        .catch(error => {
            alert("Erro: " + error)
        })

        axios.get(urlEspaco + 'list')
        .then(res => {
            if (res.data.success === true){
                const data = res.data.data;
                setEspaco(data);
            }
            else {
                alert("Erro Web Service");
            }
        })
        .catch(error => {
            alert("Erro: " + error)
        })

        axios.get(urlEvento + 'list')
        .then(res => {
            if (res.data.success === true){
                const data = res.data.data;
                setEvento(data);
            }
            else {
                alert("Erro Web Service");
            }
        })
        .catch(error => {
            alert("Erro: " + error)
        })
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
                    <input type='checkbox' id={'input-' + (index + 1)} onClick={() => toggle_all_checkboxes(data, Subcategoria)}></input>
                    <button className='' id='dropdown-saude' onClick={() => toggle_filtro('filtro-' + (index + 1), 'arrow-' + (index + 1))}>
                        {data.NOME}
                        <a style={{ float: 'right' }} id={'arrow-' + (index + 1)}>&#9661;</a>
                    </button>
                    <div style={{ display: 'none' }} id={'filtro-' + (index + 1)}>
                        <ul style={{ listStyleType: 'none' }}>
                            {Subcategoria.map((data2, index2) =>{
                                if(data2.IDCATEGORIA == data.IDCATEGORIA){
                                    return (
                                        <li>
                                            <input type='checkbox' id={'subfiltro-' + data2.NOME + '-' + (index2 + 1)} onClick={() => check_all(data, Subcategoria, index + 1)}></input>
                                            <button className='sub-filtro'>{data2.NOME}</button>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </div>
                </div>
            )
        })

        function toggle_filtro(id, idarrow) {
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

        function toggle_all_checkboxes(categoria, subcategorias){
            let ids = [];
            subcategorias.map((data2, index) => {
                if(categoria.IDCATEGORIA == data2.IDCATEGORIA){
                    ids.push('subfiltro-' + data2.NOME + '-' + (index + 1))
                }
            })
            if(checked == 0){
                checked = 1;
            }
            else{
                checked = 0;
            }
            ids.map((arr) => {
                if(checked == 0){
                    if(document.getElementById(arr).checked == true){
                        document.getElementById(arr).checked = false;
                    }
                }
                else{
                    if(document.getElementById(arr).checked == false){
                        document.getElementById(arr).checked = true;
                    }
                }
            })    
        }
        
        function check_all(categoria, subcategorias, ind){
            let ids = [];
            subcategorias.map((data2, index) => {
                if(categoria.IDCATEGORIA == data2.IDCATEGORIA){
                    ids.push('subfiltro-' + data2.NOME + '-' + (index + 1))
                }
            })

            let count = ids.length;
            
            if(count == 0){
                document.getElementById('input-' + (ind)).checked = false;
                checked = 0;
            }
            if(count > 0){
                document.getElementById('input-' + (ind)).checked = true;
                checked = 1;
            }
        }
    }

    function PostBox(){
        return(
            <div className='col-6 posts-box'>
                <Post></Post>
            </div>
        )
    }

    function Post() {
        return Publicacao.map((data, index) => {
            if(data.aprovacao.APROVADA == 1){
                const { categorium, espaco, evento, subcategorium } = data;
                if(evento.IDEVENTO == 1){ //RETURN DE UM ESPAÇO POIS O EVENTO É O DEFAULT
                    return(
                        <div className='card mb-3 post' style={{cursor: 'pointer'}} onClick={() => window.location = "#/post/" + data.IDPUBLICACAO}>
                            <div className="row g-0">
                                <div className="col-md-4 post-img-box">
                                    <img className="img-fluid rounded-start post-img" src={'./logo192.png'}></img>
                                </div>
                                <div className="col-md-8 post-info-box position-relative">
                                    <div className="card-body">
                                        <h5 className="card-title">{data.TITULO}</h5>
                                        <p className="card-text">{categorium.NOME + ' - ' + subcategorium.NOME}</p>
                                        <p className="card-text">{data.TEXTO}</p>
                                        <p className="card-text">{'id da cidade: ' + data.CIDADE}</p>
                                    </div>
                                    <a className="card-text post-website position-absolute bottom-0" style={{marginLeft: '10px'}}>{espaco.WEBSITE}</a>
                                </div>
                            </div>
                        </div>
                    )
                }
                else{ //RETURN DE UM EVENTO POIS O ESPAÇO É O DEFAULT

                }
                
            }
        })
    }

    function Notification(){
        return Publicacao.map((data, index) => {
            if(data.aprovacao.APROVADA == 0){
                return (
                    <div className='container-fluid col-lg-12 notification'>
                    <div className='col-lg-12 notification-title'>
                        <h4>{data.TITULO}</h4>
                    </div>
                    <div className='col-lg-12 notification-text'>
                        <p>{data.TEXTO}</p>
                    </div>
                    <div className='col-lg-12 notification-buttons'>
                        <Aceitar pub={data}></Aceitar>
                        <Rejeitar></Rejeitar>
                    </div>
                </div>
                )
            }
        })
    }

    function Aprovar(props){
        const { pub } = props;
        const { aprovacao } = pub;

        const datapost = {
            IDCOLABORADOR : 0,
            DATAAPROVACAO : aprovacao.DATAAPROVACAO,
            APROVADA : 1          
        }
        axios.put(urlAprovacao + 'update/' + aprovacao.IDAPROVACAO, datapost)
        .then(function(data){
            if(data.data.success === true){
                console.log("fixe");
                const updatedPublicacao = Publicacao.filter(item => item.IDPOST !== pub.IDPOST);
                setPublicacao(updatedPublicacao);
                loadTables();
            }
            else{
                console.log("não fixe");
            }
        })
        .catch(err =>{
            console.log("Erro");
        })
        loadTables();
    }
    
    function Aceitar(props){
        return(
            <button className='button-aceitar' onClick={() => Aprovar(props)}>
                Aceitar
            </button>
        )
    }
    
    
    function Rejeitar(props){
        return(
            <button className='button-rejeitar'>
                Rejeitar
            </button>
        )
    }
    
    
    function Notifications(){
        return(
            <div className='container-fluid notifications-box'>
                <Notification></Notification>
            </div>
        )
    }

    return(
        <div className='d-flex'>
            <Filtro></Filtro>
            <PostBox></PostBox>
            <div className="col-lg-3 pe-0 g-0">
                <Profile></Profile>
                <Notifications></Notifications>
            </div>
        </div>
    )
}

