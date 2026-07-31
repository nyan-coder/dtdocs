import React from 'react';

const Sprites = () => {
    return (
        <section className="doc-section">
            <h2>Modificação de Sprites</h2>

            <div className="alert alert-danger">
                <strong>AVISO:</strong><br /><br />
                É sempre necessário verificar se o data.win que está aberto, é da pasta do capítulo certo que estamos trabalhando no momento. Sempre mexa no data que está em pastas que contem o prefixo "chapterX_windows", por exemplo: <code>chapter1_windows</code><br /><br />
                Não mexa no data que está na pasta <code>DELTARUNE</code>
                
                <div className="code-block" style={{textAlign: 'center', backgroundColor: '#000', padding: '2rem', marginTop: '1rem', borderRadius: '8px'}}>
                    <img src="/aviso-data.png" alt="Aviso sobre pasta correta do data.win" style={{maxWidth: '100%'}} />
                </div>
            </div>
            <p>Para alterar os sprites é preciso o uso do aplicativo <strong>“undertaleModTool”</strong>.</p>
            <p>Abra o arquivo <code>data.win</code> do capitulo que você irá modificar, e abra a pasta dos “sprites” na parte esquerda da tela.</p>
            
            <div className="code-block" style={{textAlign: 'center', backgroundColor: '#000', padding: '2rem'}}>
                <img src="/image1.png" alt="undertaleModTool interface" style={{maxWidth: '100%'}} />
            </div>
            
            <p>procure o sprite que você deseja modificar e o abra clicando 2x nele.</p>
            
            <div className="code-block" style={{textAlign: 'center', backgroundColor: '#000', padding: '2rem'}}>
                <img src="/image4.png" alt="Selecionando o sprite" style={{maxWidth: '100%'}} />
            </div>

            <p>arquivos dos quais possuem textos como lojas, placas e coisas do tipo normalmente tem 2 versões, a versão normal, e as <code>_ja</code> que são o mesmo sprite com o texto em japonês, não é necessário alterar os arquivos <code>_ja</code>, afinal, eles só vão aparecer se você estiver na versão japonesa do jogo.</p>
            
            <p>Para alterar o sprite, clique 2x na área de “textures” ou clique nos três pontinhos.</p>
            
            <div className="code-block" style={{textAlign: 'center', backgroundColor: '#000', padding: '2rem'}}>
                <img src="/image3.png" alt="Área de texturas" style={{maxWidth: '100%'}} />
            </div>

            <p>quando essa tela abrir, clique em “Export” para baixar a imagem, ou em “Import” para baixar a imagem</p>
            
            <div className="code-block" style={{textAlign: 'center', backgroundColor: '#000', padding: '2rem'}}>
                <img src="/image5.png" alt="Export/Import" style={{maxWidth: '100%'}} />
            </div>
            
            <p>Após isso, só é preciso salvar este novo data substituindo o antigo, e já estará funcionando no jogo.</p>

            <div className="code-block" style={{textAlign: 'center', backgroundColor: '#000', padding: '2rem'}}>
                <img src="/image2.png" alt="Resultado no jogo" style={{maxWidth: '100%'}} />
            </div>
        </section>
    );
};

export default Sprites;
