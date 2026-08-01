import React from 'react';

const ModJam = () => {
    return (
        <section className="doc-section">
            <h2>ModJam</h2>
            
            <h3>O que é necessário para a ModJam?</h3>
            <ol>
                <li>Criar um sistema simples que pegue o ID de TextBox atual do jogo, algo como: <code>obj_lancerboss_slash_Step_0_gml_30_0</code></li>
                <li>É necessário, através de outro sistema, reproduzir um áudio, que esteja associado ao tal ID, realizando assim, uma "Dublagem do jogo"</li>
                <li>Mudança de sprites, mudar sprites pelo <a href="https://github.com/UnderminersTeam/UndertaleModTool/releases/tag/0.9.1.2" target="_blank" rel="noopener noreferrer"><strong>UndertaleModTool</strong></a>, que irá ser usado para traduzir sprites de coisas como lojas, estruturas e como falas do próprio Tenna (Apenas exemplo, trabalharemos no capítulo 1)</li>
            </ol>

            <h3>Pontos Extras:</h3>
            <ol>
                <li><strong>Ducking:</strong> Verificar se tem alguma dublagem tocando atualmente, e caso sim, realizar a mudança da música de fundo do jogo em 60%.</li>
                <li><strong>Skip:</strong> Caso alguma TextBox seja pulada, fazer o áudio parar junto</li>
            </ol>

            <div className="alert alert-danger" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <strong>AVISO:</strong><br />
                Caso seu mod tenha arquivos a mais fora do data.win, é necessário enviá-los também.
            </div>

            <p>
                Finalizando a ModJam, é necessário enviar para a moderação o Arquivo <code>data.win</code> resultante do seu mod, 
                junto com as alterações feitas, e também citando:
            </p>
            <ul>
                <li>O que foi feito e alterado, e em que parte do jogo isso foi inserido.</li>
            </ul>

            <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#888' }}>
                A forma de envio irá ser revelada posteriormente, no próprio servidor do discord DeterminationDelta.
            </p>
        </section>
    );
};

export default ModJam;
