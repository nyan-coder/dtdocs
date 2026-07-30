import React from 'react';

const Sprites = () => {
    return (
        <section className="doc-section">
            <h2>Modificação de Sprites</h2>
            <p>Diferente de apenas arquivos de Áudio (SFX ou Músicas), sprites funcionam de modo único no GameMaker Studio 2.</p>
            
            <p>Todos os sprites, backgrounds, ícones, e absolutamente TUDO que for gráfico no jogo, é colocado dentro de uma textura enorme que contém quase todas as imagens de todas as sub-pastas do jogo.</p>
            
            <p>Exemplo:</p>
            <div className="code-block" style={{textAlign: 'center', backgroundColor: '#000', padding: '2rem'}}>
                <img src="/image1.png" alt="Exemplo de Sprite In-Game" style={{maxWidth: '100%', imageRendering: 'pixelated'}} />
            </div>
            
            <p>Esse é o sprite <em>spr_heart_0</em>. Se você abrir a pasta e olhar a imagem com esse nome, vai encontrar isto:</p>
            <div className="code-block" style={{textAlign: 'center', backgroundColor: '#000', padding: '2rem'}}>
                <img src="/image2.png" alt="Sprite Original da Pasta" style={{maxWidth: '100%', imageRendering: 'pixelated'}} />
            </div>
            
            <p>Viu como as cores estão diferentes? É porque a Engine aplica uma paleta de cores POR CIMA da imagem na hora do jogo rodar. Ou seja, se você pintar o sprite com as cores exatas, o jogo vai aplicar o filtro em cima da sua pintura e as cores ficarão erradas in-game!</p>
            
            <p className="alert alert-danger"><strong>REGRA:</strong> SEMPRE use a ferramenta “Conta Gotas” na cor da imagem <strong>original da pasta</strong>, e nunca de uma print tirada dentro do jogo.</p>
            
            <p>Exemplo correto de como desenhar algo roxo para esse sprite específico, usando as mesmas propriedades dele original (Conta Gotas):</p>
            <div className="code-block" style={{textAlign: 'center', backgroundColor: '#000', padding: '2rem'}}>
                <img src="/image3.png" alt="Exemplo Correto (Conta Gotas)" style={{maxWidth: '100%', imageRendering: 'pixelated'}} />
            </div>
        </section>
    );
};

export default Sprites;
