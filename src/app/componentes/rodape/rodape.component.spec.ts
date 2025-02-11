import { TestBed, ComponentFixture } from '@angular/core/testing'
import { RodapeComponent } from './rodape.component'

describe('RodapeComponent', () => {
  let component: RodapeComponent
  let fixture: ComponentFixture<RodapeComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RodapeComponent],
    })
    fixture = TestBed.createComponent(RodapeComponent)
    component = fixture.componentInstance
  })

  it('deve criar o componente do rodapé com sucesso', () => {
    expect(component).toBeTruthy()
  })

  it('deve definir as propriedades alt e src do rodapé', () => {
    expect(component.alt).toBeDefined()
    expect(component.src).toBeDefined()
  })

  it('deve renderizar o conteúdo baseado nas propriedades src e alt do rodapé', () => {
    component.src = 'https://example.com/test-image.jpg'
    component.alt = 'Imagem test'
    expect(component).toMatchSnapshot()
  })
})