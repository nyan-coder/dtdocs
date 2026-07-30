import React from 'react';

const Mixers = () => {
    return (
        <section className="doc-section">
            <h2>Guia para Mixers (Áudio)</h2>
            <p>Galera do áudio, a implementação de vocês no jogo é uma tarefa relativamente simples e direta! A única regra é garantir que o ID do arquivo de vocês use o prefixo correto de som da engine do GameMaker.</p>
            
            <h3>Como nomear os arquivos de áudio</h3>
            <p>Basicamente, você precisa substituir o prefixo do ID original (como <code>obj_</code>) por <code>snd_</code> (de "sound").</p>
            
            <p>Saca só o exemplo:</p>
            <div className="code-block diff">
                <span className="diff-remove">- obj_shop1_slash_Draw_0_gml_99_0</span><br />
                <span className="diff-add">+ snd_shop1_slash_Draw_0_gml_99_0</span>
            </div>
            
            <p>Pronto! Depois de renomear o arquivo de áudio com o prefixo <code>snd_</code>, é só certificar de exportar e salvar no formato <strong>.ogg</strong> antes de adicionar ao jogo. Fim de papo!</p>
        </section>
    );
};

export default Mixers;
