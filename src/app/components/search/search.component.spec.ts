import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display movie counter when movies are found', () => {
    component.movies = [
      { title: 'Test Movie 1' },
      { title: 'Test Movie 2' },
      { title: 'Test Movie 3' }
    ] as any[];
    fixture.detectChanges();
    
    const counterElement = fixture.debugElement.query(By.css('.devi-counter'));
    expect(counterElement).toBeTruthy();
    expect(counterElement.nativeElement.textContent.trim()).toBe('3 movies found');
  });

  it('should display singular text for one movie', () => {
    component.movies = [{ title: 'Single Movie' }] as any[];
    fixture.detectChanges();
    
    const counterElement = fixture.debugElement.query(By.css('.devi-counter'));
    expect(counterElement.nativeElement.textContent.trim()).toBe('1 movie found');
  });

  it('should not display counter when no movies found', () => {
    component.movies = [];
    fixture.detectChanges();
    
    const counterElement = fixture.debugElement.query(By.css('.devi-counter'));
    expect(counterElement).toBeFalsy();
  });
});
