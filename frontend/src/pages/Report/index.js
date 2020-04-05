import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Report() {
    const [report, setReport] = useState([]);

    useEffect(() => {
        async function loadReport() {
          const response = await api.get('/');
    
          setReport(response.data);
        }
    
        loadReport();
    
    }, []);

    return (

        <>
        
            <ul className="navbar-nav">
                <li><Link to="/"><strong>HOME</strong></Link></li>
                <li class="dropdown">
                    <a class="dropbtn"><strong>LINKS</strong></a>
                    <div class="dropdown-content">
                        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">Organização Mundial da Saúde</a>
                        <a href="https://coronavirus.saude.gov.br/">Ministério da Saúde</a>
                    </div>
                </li>
            </ul>
            
            
            <div className="report-container">

                <ul>            
                    <li>
                        <strong>CONFIRMADOS:</strong>
                        <p>{report.confirmedBr}</p>
                    </li>

                    <li>
                        <strong>RECUPERADOS:</strong>
                        <p>{report.recoveredBr}</p>
                    </li>

                    <li>
                        <strong>MORTES:</strong>
                        <p>{report.deathsBr}</p>
                    </li>

                    <li>
                        <strong>TAXA DE LETALIDADE:</strong>
                        <p>{report.deathRateBr + " %"}</p>
                    </li>

                    <li>
                        <strong>TAXA DE RECUPERADOS:</strong>
                        <p>{report.recoveredRateBr + " %"}</p>
                    </li>

                </ul>

            </div>

        </>          
    );
}