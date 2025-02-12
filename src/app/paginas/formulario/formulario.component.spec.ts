import { RouterTestingModule } from '@angular/router/testing'
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { FormularioComponent } from "./formulario.component"
import { FormBuilder, ReactiveFormsModule } from "@angular/forms"
import { LivroService } from '../../services/livro.service'

describe('FormularioComponent', () => {
  let component: FormularioComponent
  let fixture: ComponentFixture<FormularioComponent>
  let service: LivroService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormularioComponent, ReactiveFormsModule, RouterTestingModule],
      providers: [LivroService, FormBuilder]
    })
    
    service = TestBed.inject(LivroService)
    fixture = TestBed.createComponent(FormularioComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('deve inicializar o formulário com valores vazios', () => {
    expect(component.formulario.value).toEqual({
      titulo: '',
      autoria: '',
      imagem: '',
      genero: '',
      dataLeitura: '',
      classificacao: null
    })
  })

  it('deve adicionar um novo livro', () => {
    const novoLivro = {
      titulo: 'Livro de Teste',
      autoria: 'Autor de Teste',
      imagem: 'https://example.com/imagem.jpg',
      genero: 'romance',
      dataLeitura: '2024-04-19',
      classificacao: 5
    }

    const adicionarLivroSpy = jest.spyOn(service, 'adicionarLivro')
    const routerSpy = jest.spyOn(component['router'], 'navigate')

    component.formulario.setValue(novoLivro)
    component.adicionarLivro()
    
    expect(adicionarLivroSpy).toHaveBeenCalledWith({
      ...novoLivro,
      genero: component.generos.find(g => g.id === novoLivro.genero)
    })

    expect(component.formulario.value).toEqual({
      titulo: null,
      autoria: null,
      imagem: null,
      genero: null,
      dataLeitura: null,
      classificacao: null
    })
    expect(routerSpy).toHaveBeenCalledWith(['lista-livros'])
  })
})