import React from 'react'
import './index.css'


class ImagemLogin extends React.Component{
    render(){
        return(
            <div className='col-lg-7 pe-0'>
                <Imagem></Imagem>
            </div>
        )
    }
}


function Imagem() {
    return <img src='./imageminicial.png' class='imagem-inicio'></img>
}

export default ImagemLogin