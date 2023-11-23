import { controleEditora } from "@/classes/controle/ControleEditora";
import { Livro } from "@/classes/modelo/Livro";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from '../styles/Home.module.css'
import { Menu } from "@/components/Menu";
import { ControleLivros } from "@/classes/controle/ControleLivros";

const LivroDados: NextPage = () => { 
  const router = useRouter();
  const controleLivros = new ControleLivros()

  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const novoCodEditora = Number(event.target.value);
    setCodEditora(novoCodEditora);
  };

  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const novoLivro = {
      codigo: "",
      titulo,
      resumo,
      codEditora,
      autores: autores.split('\n')
    };

    await controleLivros.incluir(novoLivro);
    router.push('/LivroLista');
  };
  
  
  return (
    <>
      <Head>
        <title>Página de Livros</title>
      </Head>
    
      <div className={styles.container} >

      <Menu paginaAtiva="LivroDados" />

      <main>
        <h1>Adicionar Livro</h1>
        <form onSubmit={incluir}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título:</label>
          <input type="text" className="form-control" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">Resumo:</label>
          <textarea className="form-control" id="resumo" value={resumo} onChange={(e) => setResumo(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="editora" className="form-label">Editora:</label>
          <select className="form-select" id="editora" value={codEditora} onChange={tratarCombo}>
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="autores" className="form-label">Autores:</label>
          <textarea className="form-control" id="autores" value={autores} onChange={(e) => setAutores(e.target.value)} />
        </div>
        
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Incluir Livro</button>
        </div>
      </form>
      </main>
      </div>
    </>
  )

}


export default LivroDados;