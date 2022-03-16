import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUfComponent } from './search-uf.component';

describe('SearchUfComponent', () => {
  let component: SearchUfComponent;
  let fixture: ComponentFixture<SearchUfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
