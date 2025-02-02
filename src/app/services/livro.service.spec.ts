import { TestBed } from "@angular/core/testing"
import { GeneroLiterario, Livro } from "../componentes/livro/livro";
import { livros } from "../mock-livros";
import { ErroGeneroLiterario, LivroService } from "./livro.service";

describe('LivroService', () => {

  let service: LivroService;

  beforeEach(() => {  
    TestBed.configureTestingModule({
      providers: [LivroService]
    })
    service = TestBed.inject(LivroService)
  })

  it('LivroService deve ser criado com sucesso', () => {
    expect(service).toBeTruthy()
  })

  it('Deve adicionar um novo livro', () => {
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
    const livrosPorGenero = service.obterLivrosPorGenero('romance')
    const livrosEsperados = livros.filter(livro => livro.genero.id === 'romance')
    expect(livrosPorGenero).toEqual(livrosEsperados)
  })

  it('Deve inicializar os gêneros corretamente', () => {
    const generosEsperados: GeneroLiterario[] = [
      { id: 'romance', value: 'Romance' },
      { id: 'misterio', value: 'Mistério' },
      { id: 'fantasia', value: 'Fantasia' },
      { id: 'ficcao-cientifica', value: 'Ficção Científica' },
      { id: 'tecnicos', value: 'Técnicos' }
    ]
    expect(service.generos).toEqual(generosEsperados)
  })

  it('Deve lançar um erro ao cadastrar um erro com gênero desconhecido', () => {
    const novoLivro: Livro = {
      titulo: 'Novo Livro',
      autoria: 'Autor Desconhecido',
      imagem: 'http//example.com/cover.jpg',
      genero: {id: 'nao-existe', value: 'Não Existe'},
      dataLeitura: '2024-04-19',
      classificacao: 5
    }
    expect(() => service.adicionarLivro(novoLivro)).toThrow(ErroGeneroLiterario)
    expect(() => service.adicionarLivro(novoLivro)).toThrow("Gênero literário desconhecido")

    // Outra forma de fazer a mesma validação (Capturar o erro lançado)
    const erro = () => service.adicionarLivro(novoLivro)
    expect(erro).toThrow(ErroGeneroLiterario)
    expect(erro).toThrow("Gênero literário desconhecido")
  })
})
