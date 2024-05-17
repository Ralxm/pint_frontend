import React from 'react'
import '../index.css'
import SubFiltro from './SubFiltro'
import * as data from './arr.json'

const word = JSON.stringify(data);
const arr = JSON.parse(word);


class Filtro extends React.Component {
    render() {
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

                <SubFiltro name={'Saúde'} arr={arr.saude} idbtn={'filtro-dropdown-saude'} idarrow={'arrow-saude'} checkid={'check-saude'}></SubFiltro>
                <SubFiltro name={'Desporto'} arr={arr.desporto} idbtn={'filtro-dropdown-desporto'} idarrow={'arrow-desporto'} checkid={'check-desporto'}></SubFiltro>
                <SubFiltro name={'Formação'} arr={arr.formaçao} idbtn={'filtro-dropdown-formaçao'} idarrow={'arrow-formaçao'} checkid={'check-formaçao'}></SubFiltro>
                <SubFiltro name={'Restauração'} arr={arr.restauraçao} idbtn={'filtro-dropdown-restauraçao'} idarrow={'arrow-restauraçao'} checkid={'check-restauraçao'}></SubFiltro>
                <SubFiltro name={'Habitação'} arr={arr.habitaçao} idbtn={'filtro-dropdown-habitaçao'} idarrow={'arrow-habitaçao'} checkid={'check-habitaçao'}></SubFiltro>
                <SubFiltro name={'Transportes'} arr={arr.transportes} idbtn={'filtro-dropdown-transportes'} idarrow={'arrow-transportes'} checkid={'check-transportes'}></SubFiltro>
                <SubFiltro name={'Lazer'} arr={arr.lazer} idbtn={'filtro-dropdown-lazer'} idarrow={'arrow-lazer'} checkid={'check-lazer'}></SubFiltro>
            </div>
        )
    }
}

export default Filtro