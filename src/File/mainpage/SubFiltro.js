import React from 'react'
import '../index.css'

let checked = 0;

class SubFiltro extends React.Component {
    render() {
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

export default SubFiltro