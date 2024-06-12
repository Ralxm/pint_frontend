import React from 'react'
import '../Universal/index.css'

export default function Post({info}) {
    return(
        <div className='col-9 post-box'>
            <div className='col-1'>
                &nbsp;
            </div>

            <div className='col-10 main-post-box'>
                <div className='post-nav-bar'>
                    <div className='post-main-info col-11'>
                        <a>{info.nome_colaborador}&nbsp;-&nbsp;{info.titulo}</a>
                        <a>&nbsp;- Avalicação</a>
                    </div>
                    <div className='post-main-buttons col-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                        </svg>
                        <div style={{width:"25%"}}>

                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                        </svg>
                    </div>
                </div>
                
                <div className='post-subcategory-info col-12'>
                        <a style={{color:"rgba(0,0,0,0.5)"}}>{info.categoria} - {info.subcategoria}</a>
                </div>

                <div className='post-text-info col-12'>
                    <a>{info.texto}</a>
                </div>

                <div className='col-12' style={{maxWidth: 100, maxHeight: "60vh"}}>
                    <img src={info.imagem}/>
                </div>

            </div>

            <div className='col-1'>
                &nbsp;
            </div>
        </div>
    )
}

