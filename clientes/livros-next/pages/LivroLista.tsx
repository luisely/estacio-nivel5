import { ControleLivros } from "@/classes/controle/ControleLivros";
import { Livro } from "@/classes/modelo/Livro";
import { LinhaLivro } from "@/components/LinhaLivro";
import { Menu } from "@/components/Menu";
import type { NextPage } from "next";
import Head from 'next/head';
import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css';

const LivroLista: NextPage = () => {
  const [livros, setLivros] = useState<Livro[]>([])
  const [carregado, setCarregado] = useState(false)
  const controleLivros = new ControleLivros()


  const handleExcluirLivro = async (codigoLivro: string) => {
    await controleLivros.excluir(codigoLivro).then(() => {
      setCarregado(false)
    })
  };


  useEffect(() => {
    const obterLivros = async () => {
      await controleLivros.obterLivros().then((res) => {
        setLivros(res);
        setCarregado(true);
      });
    };

    obterLivros();
  }, [carregado]);

  return (
    <>
      <Head>
        <title>Página de Livros</title>
      </Head>
    
      <div className={styles.container} >

      <Menu paginaAtiva="LivroLista"/>

      <main>
        <h1>Página de Livros</h1>
        {carregado ? (
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Código</th>
                <th>Título</th>
                <th>Autor</th>
                <th>Atores</th>
              </tr>
            </thead>
            <tbody>
              {livros.map((livro) => (
                <LinhaLivro key={livro.codigo} livro={livro} excluir={() => handleExcluirLivro(livro.codigo)} />
              ))}
            </tbody>
          </table>
        ) : (
          <p>Carregando...</p>
        )}
      </main>
      </div>
    </>
  );

}

export default LivroLista