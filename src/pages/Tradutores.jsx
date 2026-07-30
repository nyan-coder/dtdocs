import React from 'react';

const Tradutores = () => {
    return (
        <section className="doc-section">
            <h2>Guia para Tradutores</h2>
            <p>Para traduzir os textos do jogo (como os de DELTARUNE), você precisará editar o arquivo <code>lang_en.json</code>, que fica localizado dentro da pasta <strong>lang</strong>. Os arquivos com o prefixo <code>lang_</code> contêm todos os diálogos e textos do jogo.</p>
            
            <h3>Estrutura do Arquivo</h3>
            <p>Cada linha de texto no arquivo <code>lang</code> é separada por um <strong>ID</strong> e o seu respectivo <strong>diálogo</strong>. Veja um exemplo:</p>
            <div className="code-block">
                <code>"obj_lancerboss_slash_Step_0_gml_30_0": "Did you not&realize I can&mask my self-&esteem levels?",</code>
            </div>
            <p>A parte da qual vocês devem editar é <strong>apenas o texto</strong>, nesse caso <em>"Did you not&realize I can&mask my self-&esteem levels?"</em>.</p>
            <p className="alert alert-danger"><strong>REGRA:</strong> NÃO MEXAM NO ID!!!</p>

            <h3>Métodos de Tradução</h3>
            <p>Existem duas formas principais de realizar a tradução dos arquivos:</p>
            <ul>
                <li><strong>Método Tradicional:</strong> Editando o arquivo <code>.json</code> diretamente usando editores de código como <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">Visual Studio Code</a> ou <a href="https://www.sublimetext.com/" target="_blank" rel="noreferrer">Sublime Text</a>.</li>
                <li>
                    <strong>Método Prático (Ferramenta Oficial):</strong> Utilizando a <a href="https://deltadub.vercel.app" target="_blank" rel="noreferrer">ferramenta de tradução</a>, o site próprio do estúdio. É por lá que iremos traduzir DELTARUNE, UNDERTALE, e talvez outros projetos futuramente!<br />
                    <span style={{ display: 'block', marginTop: '8px' }}>
                        <strong>Acesso:</strong> É necessário pedir um login e senha para <strong>@leleplumi</strong> no Discord, caso você ainda não tenha.
                    </span>
                </li>
            </ul>

            <h3>Caracteres Especiais e Formatação</h3>
            <p>O código do jogo utiliza alguns "mini códigos" para formatar o texto in-game, como quebras de linha e cores.</p>
            
            <h4>Cores no Texto</h4>
            <p>Para colorir palavras específicas, utilize os códigos de cor:</p>
            <ul className="color-list">
                <li><span className="color-dot red"></span> <code>\cR</code> - Vermelho (Red)</li>
                <li><span className="color-dot yellow"></span> <code>\cY</code> - Amarelo (Yellow)</li>
                <li><span className="color-dot green"></span> <code>\cG</code> - Verde (Green)</li>
                <li><span className="color-dot white"></span> <code>\cW</code> - Branco (White - Cor Padrão)</li>
            </ul>
            <p><strong>Como usar:</strong> Sempre que colorir uma palavra, lembre-se de retornar para a cor branca logo em seguida usando <code>\cW</code>. Caso contrário, todo o restante do diálogo ficará colorido com a última cor usada.</p>
            
            <p>Exemplo de uso:</p>
            <div className="code-block">
                <code>"E-Então… vocês são os \cYHERÓIS \cWda profecia?"</code>
            </div>
            
            <p>Exemplo in-game:</p>
            <div className="code-block in-game">
                <span>E-Então… vocês são os <span style={{color: '#eab308', fontWeight: 'bold'}}>HERÓIS</span> da profecia?</span>
            </div>
            
            <h4>Quebras de Linha e Parágrafos</h4>
            <p>Para pular linhas dentro de um balão de diálogo, utilizamos caracteres especiais. Todos têm a mesma função mecânica, mas há convenções de uso:</p>
            <ul>
                <li><code>&amp;</code> e <code>^1</code> : Usados principalmente em diálogos comuns.</li>
                <li><code>#</code> : Usado normalmente em caixas de texto de lojas.</li>
            </ul>

            <h4>Uso de Aspas</h4>
            <p>Como os diálogos já ficam delimitados por aspas no formato JSON, se você precisar usar aspas literais <em>dentro</em> da fala de um personagem, é obrigatório utilizar a barra invertida (<code>\</code>) antes delas (ex: <code>\"palavra\"</code>). Isso "escapa" o caractere e impede que o código quebre.</p>
        </section>
    );
};

export default Tradutores;
