import React, {useState, useEffect} from 'react';
import '../Universal/index.css';
import axios from 'axios';

export default function Post(){
    const url = "https://pint-backend-8vxk.onrender.com/post/list";

    const [Post, setPost] = useState([]);
    const [Questionario, setQuestionario] = useState([]);
    const [Espaco, setEspaco] = useState([]);
    const [Evento, setEvento] = useState([]);
    const [Aprovacao, setAprovacao] = useState([]);
    
    const [IDPUBLICACAO, setIDPUBLICACAO] = useState("");
    const [CIDADE, setCIDADE] = useState("");
    const [APROVACAO, setAPROVACAO] = useState("");
    const [COLABORADOR, setCOLABORADOR] = useState("");
    const [CATEGORIA, setCATEGORIA] = useState("");
    const [SUBCATEGORIA, setSUBCATEGORIA] = useState("");
    const [ESPACO, setESPACO] = useState("");

    const [COORDENADAS, setCOORDENADAS] = useState("");
    const [WEBSITE, setWEBSITE] = useState("");

    const [NOME, setNOMEQUESTIONARIO] = useState("");
    const [options, setOptions] = useState([{ label: 'Opção 1', value: '' }, { label: 'Opção 2', value: '' }]);

    const [EVENTO, setEVENTO] = useState("");
    const [DATAPUBLICACAO, setDATAPUBLICACAO] = useState("");
    const [DATAULTIMAATIVIDADE, setDATAULTIMAATIVIDADE] = useState("");
    const [TITULO, setTITULO] = useState("");
    const [TEXTO, setTEXTO] = useState("");
    const [RATING, setRATING] = useState("");
    const [ALBUM, setALBUM] = useState("");

    const [Cidade, setCidade] = useState([]);
    const [Colaborador, setColaborador] = useState([]);
    const [Categoria, setCategoria] = useState([]);
    const [Subcategoria, setSubcategoria] = useState([]);

    const [Utilizador, setUtilizador] = useState([]);
    
    useEffect(() => {
        document.title = 'Mostrar Post';

        loadTables();

        axios.get('https://pint-backend-8vxk.onrender.com/cidade/list')
        .then(res => {
            if (res.data.success === true){
                const data = res.data.data;
                setCidade(data);
            }
            else {
                alert("Erro Web Service");
            }
        })
        .catch(error => {
            alert("Erro: fase1" + error)
        })

        let token;
        try{
            let user = localStorage.getItem('user');
            let userData = JSON.parse(user);
            token = userData.token;
        }
        catch{
            console.log("Erro a ir buscar o token");
        }
        axios.get('https://pint-backend-8vxk.onrender.com/colaborador/list', {headers: { 'Authorization' : 'Bearer ' + token }})
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
            alert("Erro: fase2 " + error)
        })

        axios.get('https://pint-backend-8vxk.onrender.com/categoria/list')
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
            alert("Erro: fase3" + error)
        }) 

        axios.get('https://pint-backend-8vxk.onrender.com/aprovacao/list')
            .then(res => {
                if(res.data.success === true){
                    const data = res.data.data;
                    setAprovacao(data);
                }
                else{
                    alert("Erro Web Service!");
                }
            })
            .catch(error => {
                alert("Erro fase4" + error);
            }); 
    }, []);

    useEffect(()=>{
        let id;
        Categoria.map((data) =>{
            if(data.NOME == CATEGORIA){
                id = data.IDCATEGORIA;
            }
        })
        if (CATEGORIA) {
            axios.get(`https://pint-backend-8vxk.onrender.com/subcategoria/listbyid/${id}`)
                .then(res => {
                    if (res.data.success === true) {
                        const data = res.data.data;
                        setSubcategoria(data);
                    } else {
                        alert("Erro ao buscar subcategorias");
                    }
                })
                .catch(error => {
                    alert("Erro ao buscar subcategorias: " + error);
                });
        }
    }, [CATEGORIA]);

    function loadTables(){
        let id = JSON.parse(localStorage.getItem('id'));
        let token;
        try{
            let user = localStorage.getItem('user');
            let userData = JSON.parse(user);
            token = userData.token;
        }
        catch{
            console.log("Erro a ir buscar o token");
        }
        axios.get(url)
        .then(res => {
            if(res.data.success === true){
                const data = res.data.data;
                setPost(data);
            }
            else{
                alert("Erro Web Service!");
            }
        })
        .catch(error => {
            alert("Erro fase4" + error);
        }); 

        axios.get('https://pint-backend-8vxk.onrender.com/colaborador/get/' + id, {headers: { 'Authorization' : 'Bearer ' + token } })
        .then(res => {
            if (res.data.success === true){
                const data = res.data.data;
                setUtilizador(data);
            }
            else {
                alert("Erro Web Service");
            }
        })
        .catch(error => {
            alert("Erro: " + error)
        })
    }

    const addOption = () => {
        const newOptionNumber = options.length + 1;
        const newOption = { label: `Opção ${newOptionNumber}`, value: '' };
        setOptions([...options, newOption]);
    };

    const removeOption = () => {
        if (options.length > 2) {
            setOptions(options.slice(0, -1));
        }
    };

    const handleInputChange = (index, value) => {
        const newOptions = options.map((option, i) => {
            if (i === index) {
                return { ...option, value: value.target.value };
            }
            return option;
        });
        setOptions(newOptions);
    };

    return(
        <div className='col-10' style={{display: 'flex'}}>
            <div className='side-bar col-4' style={{marginLeft: "10px"}}>
                <div className='col-lg-12 backoffice-option'>
                    Listagem Publicações
                </div>
                <div className='col-lg-12 showTable-list'>
                    <ListTables></ListTables>
                </div>
            </div>
            <div className='side-bar col-4' style={{marginLeft: "10px"}} id={'insertColumn'}>
                <div className='col-lg-12 backoffice-option'>
                    Inserir Publicação
                </div>
                <div className='col-lg-12 input-create-thing-big-box'>
                    <div className='input-create-thing'>
                        <div className='input-group'>
                            <label>Cidade</label>
                            <select id="inputState" className="input-group-select" value = {CIDADE} onChange={(value) => setCIDADE(value.target.value)}>
                                        <option defaultValue>Selecione</option>
                                        <ListCidades></ListCidades>
                            </select>
                        </div>
                        <div className='input-group'>
                            <label>Colaborador</label>
                            <select id="inputState" className="input-group-select" value = {COLABORADOR} onChange={(value) => setCOLABORADOR(value.target.value)}>
                                        <option defaultValue>Selecione</option>
                                        <ListColaboradores></ListColaboradores>
                            </select>
                        </div>
                        <div className='input-group'>
                            <label>Categoria</label>
                            <select id="inputState" className="input-group-select" value={CATEGORIA} onChange={(value) => setCATEGORIA(value.target.value)}>
                                <option defaultValue>Selecione</option>
                                <ListCategorias></ListCategorias>
                            </select>
                        </div>
                        <div className='input-group'>
                            <label>Subcategoria</label>
                            <select id="inputState" className="input-group-select" value = {SUBCATEGORIA} onChange={(value) => setSUBCATEGORIA(value.target.value)}>
                                <option defaultValue>Selecione</option>
                                <ListSubcategorias></ListSubcategorias>
                            </select>
                        </div>
                        <div>
                            <input type={'checkbox'} className='form-check-input' id='checkEspaco' onClick={() => atualizarCheck('checkEspaco')}></input>
                            <label className='form-check-label' for='checkEspaco'>Espaço</label>
                            <input type={'checkbox'} className='form-check-input' id='checkEvento' onClick={()=> atualizarCheck('checkEvento')}></input>
                            <label className='form-check-label' for="checkEvento">Evento</label>
                        </div>
                        <div id='espacoChecked' className='input-group-special'>
                            <div className='input-group'>
                                <label>Coordenadas</label>
                                <input id='descricao' onChange={(value)=> setCOORDENADAS(value.target.value)}></input>
                            </div>
                            <div className='input-group'>
                                <label>Website</label>
                                <input id='descricao' onChange={(value)=> setWEBSITE(value.target.value)}></input>
                            </div>
                        </div>
                        <div id='eventoChecked' className='input-group-special' style={{diplay:'none'}}>
                            <div className='input-group'>
                                <label>Nome do Questionário</label>
                                <input id='descricao' onChange={(value)=> setNOMEQUESTIONARIO(value.target.value)}></input>
                            </div>
                            {options.map((option, index) => (
                                <div className='input-group' key={index}>
                                    <label>{option.label}:</label>
                                    <input id='descricao' value={option.value} onChange={(value) => handleInputChange(index, value)}></input>
                                </div>
                            ))}
                            <div className='input-group'>
                                <button style={{width:'80%', marginLeft:'10%'}} className='btn btn-outline-info' onClick={addOption} disabled={options.length >= 4}>Adicionar opção</button>
                            </div>
                            {options.length > 2 && (
                                <div className='input-group'>
                                    <button style={{ width: '80%', marginLeft: '10%' }} className='btn btn-outline-danger' onClick={removeOption}>Remover última opção</button>
                                </div>
                            )}
                        </div>
                        <div className='input-group'>
                            <label>Data de publicação</label>
                            <input id='descricao' onChange={(value)=> setDATAPUBLICACAO(value.target.value)} type={'date'}></input>
                        </div>
                        <div className='input-group'>
                            <label>Data da ultima atividade</label>
                            <input id='descricao' onChange={(value)=> setDATAULTIMAATIVIDADE(value.target.value)} type={'date'}></input>
                        </div>
                        <div className='input-group'>
                            <label>Título</label>
                            <input id='descricao' onChange={(value)=> setTITULO(value.target.value)}></input>
                        </div>
                        <div className='input-group'>
                            <label>Texto</label>
                            <input id='descricao' onChange={(value)=> setTEXTO(value.target.value)}></input>
                        </div>
                        <div className='input-group'>
                            <label>Rating</label>
                            <input id='descricao' onChange={(value)=> setRATING(value.target.value)}></input>
                        </div>
                        <div className='input-group'>
                            <label>Album</label>
                            <input id='descricao' onChange={(value)=> setALBUM(value.target.value)}></input>
                        </div>
                        <div>
                            <button onClick={criarColuna} className='btn btn-info'>Inserir</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='side-bar col-4' style={{marginLeft: "10px", display: 'none'}} id={'editColumn'}>
                <div className='col-lg-12 backoffice-option'>
                    <div className='edit-header'>
                        Editar Colaborador
                        <button onClick={FecharEditar} className='btn btn-secondary fechar-button'>Fechar</button>
                    </div>
                </div>
                <div className='col-lg-12 input-create-thing-big-box'>
                    <div className='input-create-thing'>
                    </div>
                </div>
            </div>
        </div>
    )

async function criarColuna(){
    const urlCriarPost = 'https://pint-backend-8vxk.onrender.com/post/create';
    const urlCriarAprovacao = 'https://pint-backend-8vxk.onrender.com/aprovacao/create';
    const urlCriarEspaco = 'https://pint-backend-8vxk.onrender.com/espaco/create';
    const urlCriarEvento = 'https://pint-backend-8vxk.onrender.com/evento/create';
    const urlCriarQuestionario = 'https://pint-backend-8vxk.onrender.com/questionario/create';
    const urlCriarOpcoesEscolha = 'https://pint-backend-8vxk.onrender.com/opcoes_escolha/create';

    let idEspaco = null;
    let idEvento = 1;
    let idAprovacao = null;

    try {
        if (document.getElementById('checkEspaco').checked) {
            const datapostEspaco = {
                COORDENADAS: COORDENADAS,
                WEBSITE: WEBSITE
            };
            const resEspaco = await axios.post(urlCriarEspaco, datapostEspaco);
            if (resEspaco.data.success) {
                idEspaco = resEspaco.data.data.IDESPACO;
                setEspaco(idEspaco);
            } else {
                alert(resEspaco.data.message);
                return;
            }
            setEVENTO(1);
        }

        if (document.getElementById('checkEvento').checked) {
            // Similar logic for creating evento and setting its ID
            // ...
        }

        let now = new Date();
        let dd = now.getDate();
        let mm = now.getMonth() + 1;
        let yyyy = now.getFullYear();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        let today = `${yyyy}-${mm}-${dd}`;

        const datapostAprovacao = {
            IDCOLABORADOR: 0,
            DATAAPROVACAO: today,
            APROVADA: 0,
        };
        const resAprovacao = await axios.post(urlCriarAprovacao, datapostAprovacao);
        if (resAprovacao.data.success) {
            idAprovacao = resAprovacao.data.data.IDAPROVACAO;
            setAprovacao(idAprovacao);
        } else {
            alert(resAprovacao.data.message);
            return;
        }

        let idCidade = Cidade.find(data => data.NOME === CIDADE)?.IDCIDADE;
        let idColaborador = Colaborador.find(data => data.NOME === COLABORADOR)?.IDCOLABORADOR;
        let idCategoria = Categoria.find(data => data.NOME === CATEGORIA)?.IDCATEGORIA;
        let idSubcategoria = Subcategoria.find(data => data.NOME === SUBCATEGORIA)?.IDSUBCATEGORIA;

        setAPROVACAO(idAprovacao);

        const datapostPost = {
            CIDADE: idCidade,
            APROVACAO: idAprovacao,
            COLABORADOR: idColaborador,
            CATEGORIA: idCategoria,
            SUBCATEGORIA: idSubcategoria,
            ESPACO: idEspaco,
            EVENTO: idEvento,
            DATAPUBLICACAO: DATAPUBLICACAO,
            DATAULTIMAATIVIDADE: DATAULTIMAATIVIDADE,
            TITULO: TITULO,
            TEXTO: TEXTO,
            RATING: RATING,
            ALBUM: ALBUM,
        };

        axios.post(urlCriarPost, datapostPost)
        .then(res =>{
            if(res.data.success === true){
                loadTables();
            }
            else{
                alert('Erro');
            }
        })
        .catch(error => { 
            alert("Error: fase123" + error);
        });
    }
    catch{
        alert('something')
    }
    }

    function editarColuna(){
        const urlEditar = 'https://pint-backend-8vxk.onrender.com/post/update/' + IDPUBLICACAO;
        const datapost = {
            CIDADE: CIDADE,
            APROVACAO: APROVACAO,
            COLABORADOR: COLABORADOR,
            CATEGORIA: CATEGORIA,
            SUBCATEGORIA: SUBCATEGORIA,
            ESPACO: ESPACO,
            EVENTO: EVENTO,
            DATAPUBLICACAO: DATAPUBLICACAO,
            DATAULTIMAATIVIDADE: DATAULTIMAATIVIDADE,
            TITULO: TITULO,
            TEXTO: TEXTO,
            RATING: RATING,
            ALBUM: ALBUM,
        }
        axios.put(urlEditar, datapost)
        .then(res =>{
            if(res.data.success === true){
                alert('Cidade editada com sucesso');
                loadTables();
            }
            else{
                alert('Erro');
            }
        })
        .catch(error => { 
            alert("Error: fase7" + error);
        })
    }

    function ListTables(){
        return Post.map((data, index) => {
            let aprov;
            if (Aprovacao && Array.isArray(Aprovacao)) {
                Aprovacao.forEach(data2 => {
                    if (data2.IDAPROVACAO == data.APROVACAO) {
                        aprov = data2;
                    }
                });
            }
            const aprovada = aprov ? (aprov.APROVADA === 0 ? "Não aprovada" : "Aprovada") : "Unknown";
            if(data.CIDADE == Utilizador.CIDADE){
                return(
                    <div className='col-12 showTable'>
                        <div className='showTableText'>
                            <a>ID Publicação: {data.IDPUBLICACAO}</a>
                            <br></br>
                            <a>Cidade: {data.CIDADE}</a>
                            <br></br>
                            <a>Aprovação: {data.APROVACAO + ' - ' + aprovada}</a>
                            <br></br>
                            <a>Colaborador: {data.COLABORADOR}</a>
                            <br></br>
                            <a>Categoria: {data.CATEGORIA}</a>
                            <br></br>
                            <a>Subcategoria: {data.SUBCATEGORIA}</a>
                            <br></br>
                            <a>Espaço: {data.ESPACO}</a>
                            <br></br>
                            <a>Evento: {data.EVENTO}</a>
                            <br></br>
                            <a>Data publicação: {data.DATAPUBLICACAO}</a>
                            <br></br>
                            <a>Data ultima atividade: {data.DATAULTIMAATIVIDADE}</a>
                            <br></br>
                            <a>Título: {data.TITULO}</a>
                            <br></br>
                            <a>Texto: {data.TEXTO}</a>
                            <br></br>
                            <a>Rating: {data.RATING}</a>
                            <br></br>
                            <a>Album: {data.ALBUM}</a>
                        </div>
                        <div className='showTableButtons'>
                            <button className='btn btn-info' onClick={() => inserirEditarColuna(data)}>Editar</button>
                            <button className='btn btn-danger' onClick={() => ApagarColuna(data)}>Apagar</button>
                        </div>
                    </div>
                )
            }
        })
    }

    function ListCidades(){
        return Cidade.map((data, index) =>{
            return <option key={index} value ={data.CIDADE}>{data.NOME}</option>
        })
    }

    function ListColaboradores(){
        return Colaborador.map((data, index) =>{
            return <option key={index} value ={data.COLABORADOR}>{data.NOME}</option>
        })
    }

    function ListCategorias(){
        return Categoria.map((data, index) =>{
            return <option key={index} value ={data.CATEGORIA}>{data.NOME}</option>
        })
    }

    function ListSubcategorias(valor){
        return Subcategoria.map((data, index) =>{
            return <option key={index} value ={data.SUBCATEGORIA}>{data.NOME}</option>
        })
    }

    function ApagarColuna(data){
        setIDPUBLICACAO(data.IDPUBLICACAO);
        const urlApagar = 'https://pint-backend-8vxk.onrender.com/post/delete/' + data.IDPUBLICACAO;
        axios.put(urlApagar)
        .then(res =>{
            if(res.data.success){
                alert('Audit log com ID: ' + {IDPUBLICACAO} + ' apagado com sucesso');
                loadTables();
            }
        })
        .catch(error => {
            alert("Erro fase9" + error)
        });
    }

    function inserirEditarColuna(data){
        setIDPUBLICACAO(data.IDPUBLICACAO);
        setCIDADE(data.CIDADE);
        setAPROVACAO(data.APROVACAO);
        setCOLABORADOR(data.COLABORADOR);
        setCATEGORIA(data.CATEGORIA);
        setSUBCATEGORIA(data.SUBCATEGORIA);
        setESPACO(data.ESPACO);
        setEVENTO(data.EVENTO);
        setDATAPUBLICACAO(data.DATAPUBLICACAO);
        setDATAULTIMAATIVIDADE(data.DATAULTIMAATIVIDADE);
        setTITULO(data.TITULO);
        setTEXTO(data.TEXTO);
        setRATING(data.RATING);
        setALBUM(data.ALBUM);

        document.getElementById('editColumn').style.display = 'block';
        document.getElementById('insertColumn').style.display = 'none';
    }

    function FecharEditar(){ 
        document.getElementById('editColumn').style.display = 'none';
        document.getElementById('insertColumn').style.display = 'block';
    }

    function atualizarCheck(id){
        if(id == 'checkEspaco' && document.getElementById(id).checked == true){
            document.getElementById('checkEvento').checked = false;
            document.getElementById('espacoChecked').style.display = 'block';
            document.getElementById('eventoChecked').style.display = 'none';
        }
        else if(id == 'checkEvento' && document.getElementById(id).checked == true){
            document.getElementById('checkEspaco').checked = false;
            document.getElementById('eventoChecked').style.display = 'block';
            document.getElementById('espacoChecked').style.display = 'none';
            
        }
        else if(id == 'checkEspaco' && document.getElementById(id).checked == false){
            document.getElementById('espacoChecked').style.display = 'none';
        }
        else if(id == 'checkEvento' && document.getElementById(id).checked == false){
            document.getElementById('eventoChecked').style.display = 'none';
        }
    }
}