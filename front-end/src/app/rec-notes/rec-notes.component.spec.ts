import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecNotesComponent } from './rec-notes.component';

describe('RecNotesComponent', () => {
  let component: RecNotesComponent;
  let fixture: ComponentFixture<RecNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
