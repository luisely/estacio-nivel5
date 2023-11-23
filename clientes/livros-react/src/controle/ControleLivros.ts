import { Livro } from "../modelo/Livro";

const baseUrl = "http://localhost:3030/livros"

interface LivroMongo {
  _id: string | null,
  codEditora: number,
  titulo: string,
  resumo: string,
  autores: string[]

}

export class ControleLivro {

  async obterLivros() {
    try {
      const response = await fetch(baseUrl, {
        method: 'GET',
      })

      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.status}`);
      }

      const data: LivroMongo[] = await response.json();

      const livros = data.map(livro => {
        return {
          codigo: livro._id,
          codEditora: livro.codEditora,
          titulo: livro.titulo,
          resumo: livro.resumo,
          autores: livro.autores,
        }
      })

      return livros

    } catch (error) {
      console.error('Erro durante a solicitação:', error);
    }

  }

  async incluir(livro: Livro) {
    const livroMongo: LivroMongo = {
      _id: livro.codigo,
      titulo: livro.titulo,
      codEditora: livro.codEditora,
      resumo: livro.resumo,
      autores: livro.autores,
    }

    const response = await fetch(baseUrl, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livroMongo),
      })

      if(!response.ok){
        throw new Error(`Erro na solicitação: ${response.status}`);
      }

    return response.ok
  }

  async excluir(codigoLivro: string) {
    try {
      const response = await fetch(`${baseUrl}/${codigoLivro}`, { method: 'DELETE' })

      if (!response.ok) {
        throw new Error(`Erro na exclusão: ${response.status}`);
      }

      return response.ok

    } catch (error) {
      console.error('Erro durante a solicitação:', error);
    }
  }
}
