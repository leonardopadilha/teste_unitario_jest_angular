import { ComponentFixture, TestBed } from "@angular/core/testing"
import { CabecalhoComponent } from "./cabecalho.component"

describe('CabecalhoComponent', () => {
  let component: CabecalhoComponent
  let fixture: ComponentFixture<CabecalhoComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({ // Pacote Angular
      imports: [CabecalhoComponent],
    })
    fixture = TestBed.createComponent(CabecalhoComponent)
    component = fixture.componentInstance
  })

  it('deve criar o componente do cabeçalho com sucesso', () => {
    expect(component).toBeTruthy()
  })

  it('deve definir as propriedades alt e src do cabeçalho', () => {
    expect(component.alt).toBeDefined()
    expect(component.src).toBeDefined()
  })

  it('deve renderizar o conteúdo baseado nas propriedades src e alt do cabeçalho', () => {
    component.src = 'https://example.com/test-image.jpg'
    component.alt = 'Imagem teste'
    expect(component).toMatchSnapshot()
  })
})