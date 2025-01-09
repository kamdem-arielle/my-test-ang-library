import { TestBed } from '@angular/core/testing';

import { MyAngLibraryService } from './my-ang-library.service';

describe('MyAngLibraryService', () => {
  let service: MyAngLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAngLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
