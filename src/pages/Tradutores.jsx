import React from 'react';

const Tradutores = () => {
    return (
        <section className="doc-section">
            <h2>Guia para Tradutores</h2>
            <p>E aí, time de tradução! Para traduzir os textos do jogo (como os de DELTARUNE, por exemplo), você vai precisar editar o arquivo <code>lang_en.json</code>, que fica lá dentro da pasta <strong>lang</strong>. Esses arquivos com o prefixo <code>lang_</code> são os que guardam todos os diálogos e textos que aparecem na tela.</p>
            
            <h3>Como funciona o arquivo?</h3>
            <p>Cada linha de texto no arquivo <code>lang</code> é separada por um <strong>ID</strong> (a identidade daquela fala no código do jogo) e o seu respectivo <strong>diálogo</strong>. Dá uma olhada nesse exemplo:</p>
            <div className="code-block">
                <code>"obj_lancerboss_slash_Step_0_gml_30_0": "Did you not&realize I can&mask my self-&esteem levels?",</code>
            </div>
            <p>Você deve editar <strong>apenas o texto</strong> (a frase em si). No exemplo acima, você traduziria apenas a parte <em>"Did you not&realize I can&mask my self-&esteem levels?"</em>.</p>
            <p className="alert alert-danger"><strong>REGRA:</strong> NÃO MEXAM NO ID!!!</p>

            <h3>Métodos de Tradução</h3>
            <p>Tem basicamente duas formas de fazer a tradução:</p>
            <ul>
                <li><strong>Método Raiz (Tradicional):</strong> Editando o arquivo <code>.json</code> diretamente usando programas como o <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">Visual Studio Code</a> ou o <a href="https://www.sublimetext.com/" target="_blank" rel="noreferrer">Sublime Text</a>, traduzindo as falas ali mesmo no código.</li>
                <li><strong>Método Prático (Ferramenta Oficial):</strong> Usando o site próprio do estúdio para tradução. Mas calma lá, você só vai ter acesso a ele depois de passar pela etapa de seleção dos tradutores!</li>
            </ul>

            <h3>Caracteres Especiais e Frescurinhas (Formatação)</h3>
            <p>O código do jogo usa uns "mini códigos" para dar aquele toque especial no texto in-game, tipo pular linhas e mudar as cores das palavras. É super simples de entender.</p>
            
            <h4>Cores no Texto</h4>
            <p>Para colorir palavras específicas (dar aquele destaque dramático), a gente usa os seguintes códigos de cor:</p>
            <ul className="color-list">
                <li><span className="color-dot red"></span> <code>\cR</code> - Vermelho (Red)</li>
                <li><span className="color-dot yellow"></span> <code>\cY</code> - Amarelo (Yellow)</li>
                <li><span className="color-dot green"></span> <code>\cG</code> - Verde (Green)</li>
                <li><span className="color-dot white"></span> <code>\cW</code> - Branco (White - que é a cor padrão)</li>
            </ul>
            <p><strong>Dica importante:</strong> Esse código não tem "fechamento". Então, lembre-se sempre de retornar para a cor branca logo em seguida usando o <code>\cW</code>. Se esquecer, o resto do diálogo inteiro vai ficar colorido com a última cor que você usou!</p>
            
            <p>Por exemplo, se no código estiver assim:</p>
            <div className="code-block">
                <code>"E-Então… vocês são os \cYHERÓIS \cWda profecia?"</code>
            </div>
            
            <p>Lá no jogo, isso vai aparecer renderizado perfeitamente, desse jeito:</p>
            <div className="code-block in-game">
                <span>E-Então… vocês são os <span style={{color: '#eab308', fontWeight: 'bold'}}>HERÓIS</span> da profecia?</span>
            </div>
            
            <p>De forma resumida: a barra <code>\</code> avisa que ali começa um código, o <code>c</code> significa "color", e a letra maiúscula (Y, R, W, G) é a inicial da cor em inglês!</p>

            <h4>Quebras de Linha e Parágrafos</h4>
            <p>Para pular linhas dentro do balão de diálogo, a gente usa alguns caracteres específicos. Os mais famosos são:</p>
            <ul>
                <li><code>&amp;</code></li>
                <li><code>^1</code></li>
                <li><code>#</code></li>
            </ul>
            <p>Mecanicamente eles fazem a mesma coisa, mas a galera costuma usar mais o <code>&amp;</code> e o <code>^1</code> para os diálogos comuns dos personagens, enquanto o <code>#</code> é mais usado nas caixas de texto de lojas.</p>

            <h4>O lance das Aspas</h4>
            <p>Como os diálogos já ficam todos delimitados por aspas lá no arquivo JSON, se o personagem precisar falar algo "entre aspas" de forma literal, você tem que usar a barra invertida (<code>\</code>) antes delas (fica assim: <code>\"sua palavra\"</code>). Isso "escapa" as aspas e impede que o código ache que a frase acabou ali, quebrando tudo.</p>
        </section>
    );
};

export default Tradutores;
