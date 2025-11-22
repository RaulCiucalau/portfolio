import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhymeSectionComponent } from './whyme-section.component';

describe('WhymeSectionComponent', () => {
  let component: WhymeSectionComponent;
  let fixture: ComponentFixture<WhymeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhymeSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhymeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
