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

  it('deve ser criado com sucesso', () => {
    expect(component).toBeTruthy()
  })

  it('deve definir as propriedades alt e src', () => {
    expect(component.alt).toBeDefined()
    expect(component.src).toBeDefined()
  })
})