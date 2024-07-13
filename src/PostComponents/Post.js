import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Buffer } from 'buffer';
import '../Universal/index.css';
import axios from 'axios';
import Profile from '../MainPageComponents/Profile'
       
export default function Post() {
    const { id } = useParams();
    const urlPost = "https://pint-backend-8vxk.onrender.com/post/";

    const [Publicacao, setPublicacao] = useState("");

    useEffect(()=>{
        loadPost();
        document.title = "asd";
    }, [])

    useEffect(() => {

    }, [Publicacao]);

    function loadPost(){
        let url = urlPost + 'get/' + id;
        axios.get(url)
        .then(res => {
            if (res.data.success === true){
                const data = res.data.data;
                setPublicacao(data);
            }
            else {
                alert("Erro Web Service");
            }
        })
        .catch(err =>{
            alert("Erro a ir buscar o post");
        })
    }

    function Page(){
        if(Publicacao[0]){
            const base64 = Buffer.from(Publicacao[0].IMAGEM.data, "binary" ).toString("base64");
            const base64Image = 'data:image/jpeg;base64,' + base64;

            let hoje = new Date();
            let ultimaatividade = new Date(Publicacao[0].ULTIMAATIVIDADE)
            const diffTime = Math.abs(ultimaatividade - hoje);
            let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            return(
                <div className='col-9 post-box'>
                    <div className='col-1'>
                        &nbsp;
                    </div>
        
                    <div className='col-10 main-post-box'>
                        <div className='post-nav-bar'>
                            <div className='post-main-info col-11'>
                                <a>{Publicacao[0].TITULO}&nbsp;&nbsp;{Publicacao[0].cidade.NOME}</a>
                                <a>&nbsp;- Avaliação: {Publicacao[0].RATING}</a>
                                </div>
                                    <div style={{backgroundColor: 'red', marginLeft: '-20px', marginRight: '10px', color: 'white'}}>
                                        {Publicacao[0].EVENTO == 1 && diffDays >= 15 && <a>Espaço Inativo</a>}
                                        {Publicacao[0].aprovacao.APROVADA == 0 && <a>Publicação não aprovada</a>}
                                    </div>
                                    <div className='post-main-buttons col-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                        </svg>
                                        <div style={{ width: "25%" }}>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                                        </svg>
                                    </div>
                                </div>
        
                                <div className='post-subcategory-info col-12'>
                                    <a style={{ color: "rgba(0,0,0,0.5)" }}>{Publicacao[0].categorium.NOME} - {Publicacao[0].subcategorium.NOME}</a>
                                </div>
        
                                <div className='post-text-info col-12'>
                                    <a>{Publicacao[0].TEXTO}</a>
                                </div>
        
                                {Publicacao[0].evento.IDEVENTO === 1 ? (
                                    <div>
                                        <div className='post-subcategory-info col-12'>
                                            <a style={{ color: "rgba(0,0,0,0.5)" }}>{'Coordenadas: ' + Publicacao[0].espaco.COORDENADAS}</a>
                                        </div>
                                        <div className='post-subcategory-info col-12'>
                                            <a style={{ color: "rgba(0,0,0,0.5)" }}>Website:&nbsp;</a>
                                            <a style={{ color: "rgba(0,0,0,0.5)" }} href={Publicacao[0].espaco.WEBSITE} target='_blank'>{Publicacao[0].espaco.WEBSITE}</a>
                                            <div className='row col-12 imagem-post-info d-flex align-items-center justify-content-center'>
                                                <img src={base64Image} className='img-fluid rounded-start' alt="Não foi possível carregar a imagem" style={{ maxWidth: '100%', height: 'auto', width: '40%' }} />
                                            </div>
                                        </div>
                                    </div>
                                    
                                ) : (
                                    <div className='row col-12'>

                                    </div>
                                )
                        }
                    </div>
        
                    <div className='col-1'>
                        &nbsp;
                    </div>
                </div>
                )
        }
        
    }

    return(
        <div className='d-flex'>
            <Page></Page>
            <div className="col-3 pe-0 g-0">
                <Profile></Profile>
            </div>
        </div>
    )
}

