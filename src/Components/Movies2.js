import React from 'react';

    class MoviesList extends React.Component{
        render(){
            const detalhe = 'Esta é a minha primeira lista de filmes'
            return(
                <div>
                    <h1>Lista de Filmes - Props</h1>
                    <Detalhe title='Título' value={detalhe}/>
                </div>
            )
        }
    }

    function Detalhe(props){
        return(<p>{props.value}</p>)
    }

    export default MoviesList;