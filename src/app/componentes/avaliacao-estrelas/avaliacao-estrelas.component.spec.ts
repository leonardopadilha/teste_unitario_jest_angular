import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvaliacaoEstrelasComponent } from './avaliacao-estrelas.component'
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef } from '@angular/core';

describe('AvaliacaoEstrelasComponent', () => {
  let component: AvaliacaoEstrelasComponent;
  let fixture: ComponentFixture<AvaliacaoEstrelasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AvaliacaoEstrelasComponent],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => AvaliacaoEstrelasComponent),
          multi: true
        }
      ]
    })

    fixture = TestBed.createComponent(AvaliacaoEstrelasComponent)
    component = fixture.componentInstance
    component.readOnly = false
  })

  it('deve criar o componente de avaliação com sucesso', () => {
    expect(component).toBeTruthy()
  })

  it('deve atribuir um valor para a classificação quando o método writeValue for chamado', () => {
    const classificacao = 3

    component.writeValue(classificacao)
    expect(component.classificacao).toBe(classificacao)
  })

  it('deve chamar o onChange quando o método classificar for chamado', () => {
    const onChangeSpy = jest.spyOn(component, 'onChange')
    const classificacao = 4
    component.classificar(classificacao)
    expect(onChangeSpy).toHaveBeenCalled()
  })

  it('deve chamar o onTouched quando o método classificar for chamado', () => {
    const ononTouchedpy = jest.spyOn(component, 'onTouched')
    const classificacao = 4
    component.classificar(classificacao)
    expect(ononTouchedpy).toHaveBeenCalled()
  })
})