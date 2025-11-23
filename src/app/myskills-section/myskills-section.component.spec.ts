import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyskillsSectionComponent } from './myskills-section.component';

describe('MyskillsSectionComponent', () => {
  let component: MyskillsSectionComponent;
  let fixture: ComponentFixture<MyskillsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyskillsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyskillsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
