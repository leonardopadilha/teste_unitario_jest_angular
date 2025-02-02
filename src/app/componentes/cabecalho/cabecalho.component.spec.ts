import { TestBed } from "@angular/core/testing"
import { CabecalhoComponent } from "./cabecalho.component"

describe('CabecalhoComponent', () => {
  let component: CabecalhoComponent

  beforeEach(() => {
    TestBed.configureTestingModule({ // Pacote Angular
      imports: [CabecalhoComponent],
    })
    component = new CabecalhoComponent()
  })

  it('deve ser criado com sucesso', () => {
    expect(component).toBeTruthy()
  })
})