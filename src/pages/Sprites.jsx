import React from 'react';

const Sprites = () => {
    return (
        <section className="doc-section">
            <h2>Modificação de Sprites</h2>
            <p>Para alterar os sprites é preciso o uso do aplicativo <strong>“undertaleModTool”</strong>.</p>
            <p>Abra o arquivo <code>data.win</code> do capítulo que você irá modificar, e abra a pasta dos “sprites” na parte esquerda da tela.</p>
            
            <div className="code-block" style={{textAlign: 'center', backgroundColor: '#000', padding: '2rem'}}>
                <img src="/image1.png" alt="undertaleModTool interface" style={{maxWidth: '100%'}} />
            </div>
            
            <p>Procure o sprite que você deseja modificar e o abra clicando 2x nele.</p>
            <p>Arquivos dos quais possuem textos como lojas, placas e coisas do tipo normalmente têm 2 versões: a versão normal, e as <code>_ja</code> que são o mesmo sprite com o texto em japonês. Não é necessário alterar os arquivos <code>_ja</code>, afinal, eles só vão aparecer se você estiver na versão japonesa do jogo.</p>
            
            <p>Para alterar o sprite, clique 2x na área de “textures” ou clique nos três pontinhos.</p>
            
            <div className="code-block" style={{textAlign: 'center', backgroundColor: '#000', padding: '2rem'}}>
                <img src="/image2.png" alt="Área de texturas" style={{maxWidth: '100%'}} />
            </div>
        </section>
    );
};

export default Sprites;
