import React, {useState, useEffect} from 'react';
import '../Universal/index.css';
import axios from 'axios';

export default function AuditLog(){

    const url = "http://localhost:3001/auditlog/list";

    const [AuditLog, setAuditLog] = useState([]);
    
    const [IDCONTA, setIDCONTA] = useState("");
    const [TIPOATIVIDADE, setTIPOATIVIDADE] = useState("");
    const [TIMESTAMP, setTIMESTAMP] = useState("");
    const [DESCRICAO, setDESCRICAO] = useState("");
    
    useEffect(() => {
        document.title = 'Mostrar Audit Log';
        loadAuditLog();
    }, []);

    function loadAuditLog(){
        axios.get(url)
        .then(res => {
            if(res.data.success === true){
                const data = res.data.data;
                setAuditLog(data);
            }
            else{
                alert("Erro Web Service!");
            }
        })
        .catch(error => {
            alert("Erro " + error);
        }); 
    }

    return(
        <div className='col-10' style={{display: 'flex'}}>
            <div className='side-bar col-4' style={{marginLeft: "10px"}}>
                <div className='col-lg-12 backoffice-option'>
                    Listagem AuditLogs
                </div>
                <div className='col-lg-12 auditlog-list'>
                    <ListAudit></ListAudit>
                </div>
            </div>
            <div className='side-bar col-4' style={{marginLeft: "10px"}}>
                <div className='col-lg-12 backoffice-option'>
                    Inserir AuditLog
                </div>
                <div className='col-lg-12 auditlog-list'>
                    <div>
                        <div>
                            <label>ID Conta</label>
                            <input id='contaid' onChange={(value)=> setIDCONTA(value.target.value)}></input>
                        </div>
                        <div>
                            <label>Tipo Atividade</label>
                            <input id='tipoatividade' onChange={(value)=> setTIPOATIVIDADE(value.target.value)}></input>
                        </div>
                        <div>
                            <label>Timestamp</label>
                            <input id='timestamp' onChange={(value)=> setTIMESTAMP(value.target.value)}></input>
                        </div>
                        <div>
                            <label>Descrição</label>
                            <input id='descricao' onChange={(value)=> setDESCRICAO(value.target.value)}></input>
                        </div>
                        <div>
                            <button onClick={criarAuditLog}>Inserir</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='side-bar col-4' style={{marginLeft: "10px", display: 'none'}}>
                <div className='col-lg-12 backoffice-option'>
                    Editar AuditLog
                </div>
                <div className='col-lg-12 auditlog-list'>
                    
                </div>
            </div>
        </div>
    )


    function criarAuditLog(){
        const urlCriar = 'http://localhost:3001/auditlog/create'
        const datapost = {
            IDCONTA: IDCONTA,
            TIPOATIVIDADE: TIPOATIVIDADE,
            TIMESTAMP: TIMESTAMP,
            DESCRICAO: DESCRICAO
        }
        axios.post(urlCriar, datapost)
        .then(res => {
            if(res.data.success === true){
                alert(res.data.message);
            }
            else{
                alert(res.data.message);
            }
        })
        .catch(error =>{
            alert('Erro: ' + error);
        })
    }

    function ListAudit(){
        return AuditLog.map((data, index) => {
            return(
                <div className='col-12 auditlog-minibox'>
                    <div>
                        <a>Log ID: {data.LOGID}</a>
                        <br></br>
                        <a>ID Conta: {data.IDCONTA}</a>
                        <br></br>
                        <a>Tipo Atividade: {data.TIPOATIVIDADE}</a>
                        <br></br>
                        <a>Timestamp: {data.TIMESTAMP}</a>
                        <br></br>
                        <a>Descrição: {data.DESCRICAO}</a>
                    </div>
                    <div>
                        <button className='btn btn-info'>Editar</button>
                        <button className='btn btn-danger'>Apagar</button>
                    </div>
                </div>
            )
        })

        /*return(
            <div>
                <div className='col-12 auditlog-minibox'>
                    <div>
                        <a>Log ID: 1054</a>
                        <br></br>
                        <a>ID Conta: 132134</a>
                        <br></br>
                        <a>Tipo Atividade: asdojasbdibuqbudsn</a>
                        <br></br>
                        <a>Timestamp: 2024-02-02</a>
                        <br></br>
                        <a>Descrição: gasoiinwqgonwqfonweofnqweifomqwef</a>
                    </div>
                    <div>
                        <button className='btn btn-info'>Editar</button>
                        <button className='btn btn-danger'>Apagar</button>
                    </div>
                </div>
                <div className='col-12 auditlog-minibox'>
                    <div>
                        <a>Log ID: 1054</a>
                        <br></br>
                        <a>ID Conta: 132134</a>
                        <br></br>
                        <a>Tipo Atividade: asdojasbdibuqbudsn</a>
                        <br></br>
                        <a>Timestamp: 2024-02-02</a>
                        <br></br>
                        <a>Descrição: gasoiinwqgonwqfonweofnqweifomqwef</a>
                    </div>
                    <div>
                        <button className='btn btn-info'>Editar</button>
                        <button className='btn btn-danger'>Apagar</button>
                    </div>
                </div>
                <div className='col-12 auditlog-minibox'>
                    <div>
                        <a>Log ID: 1054</a>
                        <br></br>
                        <a>ID Conta: 132134</a>
                        <br></br>
                        <a>Tipo Atividade: asdojasbdibuqbudsn</a>
                        <br></br>
                        <a>Timestamp: 2024-02-02</a>
                        <br></br>
                        <a>Descrição: gasoiinwqgonwqfonweofnqweifomqwef</a>
                    </div>
                    <div>
                        <button className='btn btn-info'>Editar</button>
                        <button className='btn btn-danger'>Apagar</button>
                    </div>
                </div>
                <div className='col-12 auditlog-minibox'>
                    <div>
                        <a>Log ID: 1054</a>
                        <br></br>
                        <a>ID Conta: 132134</a>
                        <br></br>
                        <a>Tipo Atividade: asdojasbdibuqbudsn</a>
                        <br></br>
                        <a>Timestamp: 2024-02-02</a>
                        <br></br>
                        <a>Descrição: gasoiinwqgonwqfonweofnqweifomqwef</a>
                    </div>
                    <div>
                        <button className='btn btn-info'>Editar</button>
                        <button className='btn btn-danger'>Apagar</button>
                    </div>
                </div>
                <div className='col-12 auditlog-minibox'>
                    <div>
                        <a>Log ID: 1054</a>
                        <br></br>
                        <a>ID Conta: 132134</a>
                        <br></br>
                        <a>Tipo Atividade: asdojasbdibuqbudsn</a>
                        <br></br>
                        <a>Timestamp: 2024-02-02</a>
                        <br></br>
                        <a>Descrição: gasoiinwqgonwqfonweofnqweifomqwef</a>
                    </div>
                    <div>
                        <button className='btn btn-info'>Editar</button>
                        <button className='btn btn-danger'>Apagar</button>
                    </div>
                </div>
                <div className='col-12 auditlog-minibox'>
                    <div>
                        <a>Log ID: 1054</a>
                        <br></br>
                        <a>ID Conta: 132134</a>
                        <br></br>
                        <a>Tipo Atividade: asdojasbdibuqbudsn</a>
                        <br></br>
                        <a>Timestamp: 2024-02-02</a>
                        <br></br>
                        <a>Descrição: gasoiinwqgonwqfonweofnqweifomqwef</a>
                    </div>
                    <div>
                        <button className='btn btn-info'>Editar</button>
                        <button className='btn btn-danger'>Apagar</button>
                    </div>
                </div>
                <div className='col-12 auditlog-minibox'>
                    <div>
                        <a>Log ID: 1054</a>
                        <br></br>
                        <a>ID Conta: 132134</a>
                        <br></br>
                        <a>Tipo Atividade: asdojasbdibuqbudsn</a>
                        <br></br>
                        <a>Timestamp: 2024-02-02</a>
                        <br></br>
                        <a>Descrição: gasoiinwqgonwqfonweofnqweifomqwef</a>
                    </div>
                    <div>
                        <button className='btn btn-info'>Editar</button>
                        <button className='btn btn-danger'>Apagar</button>
                    </div>
                </div>
                <div className='col-12 auditlog-minibox'>
                    <div>
                        <a>Log ID: 1054</a>
                        <br></br>
                        <a>ID Conta: 132134</a>
                        <br></br>
                        <a>Tipo Atividade: asdojasbdibuqbudsn</a>
                        <br></br>
                        <a>Timestamp: 2024-02-02</a>
                        <br></br>
                        <a>Descrição: gasoiinwqgonwqfonweofnqweifomqwef</a>
                    </div>
                    <div>
                        <button className='btn btn-info'>Editar</button>
                        <button className='btn btn-danger'>Apagar</button>
                    </div>
                </div>
                <div className='col-12 auditlog-minibox'>
                    <div>
                        <a>Log ID: 1054</a>
                        <br></br>
                        <a>ID Conta: 132134</a>
                        <br></br>
                        <a>Tipo Atividade: asdojasbdibuqbudsn</a>
                        <br></br>
                        <a>Timestamp: 2024-02-02</a>
                        <br></br>
                        <a>Descrição: gasoiinwqgonwqfonweofnqweifomqwef</a>
                    </div>
                    <div>
                        <button className='btn btn-info'>Editar</button>
                        <button className='btn btn-danger'>Apagar</button>
                    </div>
                </div>
                
            </div> 
        )*/
    }
}

