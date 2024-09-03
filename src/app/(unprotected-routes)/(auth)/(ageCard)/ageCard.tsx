"use client"
import Link from 'next/link';
import React from 'react';

function AgeCard() {

    function esconderAvisos() {
        const aviso1 = document.getElementById('aviso1');
        const aviso2 = document.getElementById('aviso2');
        if (aviso1) aviso1.style.display = 'none';
        if (aviso2) aviso2.style.display = 'none';
    }

    return (
        <div
            style={{
                marginTop: '5%',
            }}
        >
            <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', overflowX: 'hidden', flexDirection: 'column' }}>
                <div className="aviso" id="aviso1" style={{ maxWidth: '95%', width: '400px', textAlign: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '16px', marginBottom: '20px' }}>
                    <img src="files/images/Card18-dark.png" alt="Aviso do Site" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div className="aviso aviso2" id="aviso2" onClick={esconderAvisos} style={{ marginTop: '20px', maxWidth: '200px', cursor: 'pointer' }}>
                    <img src="files/images/botaoc.png" alt="Aviso do Site" style={{ position: 'relative', top: '-120px', maxWidth: '200px', cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    );
}

export default AgeCard;