import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitOrgComponent } from './init-org.component';

describe('InitOrgComponent', () => {
  let component: InitOrgComponent;
  let fixture: ComponentFixture<InitOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitOrgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
