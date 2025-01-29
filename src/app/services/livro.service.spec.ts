import { Livro } from "../componentes/livro/livro";
import { livros } from "../mock-livros";
import { LivroService } from "./livro.service";

describe('LivroService', () => {
  let service: LivroService;

  it('LivroService deve ser criado com sucesso', () => {
    service = new LivroService()
    expect(service).toBeTruthy()
  })

  it('Deve adicionar um novo livro', () => {
    service = new LivroService()

    const novoLivro: Livro = {
      titulo: 'Novo Livro',
      autoria: 'Autor Desconhecido',
      imagem: 'http//example.com/cover.jpg',
      genero: {id: 'romance', value: 'Romance'},
      dataLeitura: '2024-04-19',
      classificacao: 5
    }

    service.adicionarLivro(novoLivro)
    const livrosPorGenero = service.obterLivrosPorGenero('romance')
    expect(livrosPorGenero).toContain(novoLivro)
  })

  it('Deve recuperar corretamente os livros por gênero', () => {
    service = new LivroService()

    const livrosPorGenero = service.obterLivrosPorGenero('romance')
    const livrosEsperados = livros.filter(livro => livro.genero.id === 'romance')
    expect(livrosPorGenero).toEqual(livrosEsperados)
  })
})
