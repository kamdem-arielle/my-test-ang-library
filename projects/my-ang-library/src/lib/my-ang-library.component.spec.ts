import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAngLibraryComponent } from './my-ang-library.component';

describe('MyAngLibraryComponent', () => {
  let component: MyAngLibraryComponent;
  let fixture: ComponentFixture<MyAngLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAngLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAngLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
