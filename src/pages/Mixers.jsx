import React from 'react';

const Mixers = () => {
    return (
        <section className="doc-section">
            <h2>Guia para Mixers (Áudio)</h2>
            <p>A implementação de áudio no jogo é uma tarefa relativamente simples e direta. A principal regra é garantir que o ID do arquivo utilize o prefixo correto de som do motor GameMaker.</p>
            
            <h3>Como nomear os arquivos de áudio</h3>
            <p>Você precisa substituir o prefixo do ID original (como <code>obj_</code>) por <code>snd_</code> (de "sound").</p>
            
            <p>Exemplo:</p>
            <div className="code-block diff">
                <span className="diff-remove">- obj_shop1_slash_Draw_0_gml_99_0</span><br />
                <span className="diff-add">+ snd_shop1_slash_Draw_0_gml_99_0</span>
            </div>
            
            <p>Após renomear o arquivo de áudio com o prefixo correto, certifique-se de exportá-lo e salvá-lo no formato <strong>.ogg</strong> antes de adicioná-lo ao jogo.</p>
        </section>
    );
};

export default Mixers;
