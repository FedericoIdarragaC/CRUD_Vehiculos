import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesFromComponent } from './clientes-from.component';

describe('ClientesFromComponent', () => {
  let component: ClientesFromComponent;
  let fixture: ComponentFixture<ClientesFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
