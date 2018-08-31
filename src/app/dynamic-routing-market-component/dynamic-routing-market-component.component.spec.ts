import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRoutingMarketComponentComponent } from './dynamic-routing-market-component.component';

describe('DynamicRoutingMarketComponentComponent', () => {
  let component: DynamicRoutingMarketComponentComponent;
  let fixture: ComponentFixture<DynamicRoutingMarketComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicRoutingMarketComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicRoutingMarketComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
