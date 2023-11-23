import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable()
export class ControleEditoraService {
  private editoras: Editora[] = [
    { codEditora: 1, nome: 'Editora Quadrada' },
    { codEditora: 2, nome: 'Editora Triangular' },
    { codEditora: 3, nome: 'Editora Circular' },
  ];

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = this.editoras.filter(editora => editora.codEditora === codEditora)[0];

    return editoraEncontrada ? editoraEncontrada.nome : undefined;
  }

}
