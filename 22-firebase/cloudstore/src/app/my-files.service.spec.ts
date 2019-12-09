import { TestBed } from '@angular/core/testing';

import { MyFilesService } from './my-files.service';

describe('MyFilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyFilesService = TestBed.get(MyFilesService);
    expect(service).toBeTruthy();
  });
});
