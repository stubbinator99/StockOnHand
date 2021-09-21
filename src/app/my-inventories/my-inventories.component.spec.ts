import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInventoriesComponent } from './my-inventories.component';

describe('MyInventoriesComponent', () => {
  let component: MyInventoriesComponent;
  let fixture: ComponentFixture<MyInventoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInventoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInventoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
