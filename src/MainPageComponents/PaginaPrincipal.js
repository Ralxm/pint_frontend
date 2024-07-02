import React, {useState, useEffect} from 'react';
import '../Universal/index.css'
import axios from 'axios';

export default function Main(){
    const urlCategoria = "https://pint-backend-8vxk.onrender.com/categoria/";
    const urlSubCategoria = "https://pint-backend-8vxk.onrender.com/subcategoria/";
    const urlPost = "https://pint-backend-8vxk.onrender.com/post/";
    let checked = 0;

    const [Categoria, setCategoria] = useState([]);
    const [Subcategoria, setSubcategoria] = useState([]);
    const [Publicacao, setPublicacao] = useState([]);


    useEffect(() =>{
        document.title = 'Página Principal';
        loadTables();
    }, [])

    function loadTables(){
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
            <div className='col-lg-6 col-sm-12 posts-box'>
                <Post></Post>
            </div>
        )
    }

    function Post() {
            return (
                <div class="card mb-3 post">
                    <div class="row g-0">
                        <div class="col-md-4 post-img-box">
                            <img class="img-fluid rounded-start post-img" src={this.props.image}></img>
                        </div>
                        <div class="col-md-8 post-info-box">
                            <div class="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">{this.props.category}</p>
                                <p className="card-text">{this.props.text}</p>
                                <a className="card-text post-website">{this.props.website}</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }

    return(
        <div>
            <Filtro></Filtro>
            <PostBox></PostBox>
        </div>
    )


}

