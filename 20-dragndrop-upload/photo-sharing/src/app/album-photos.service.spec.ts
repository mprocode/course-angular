import { TestBed } from '@angular/core/testing';

import { AlbumPhotosService } from './album-photos.service';

describe('AlbumPhotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbumPhotosService = TestBed.get(AlbumPhotosService);
    expect(service).toBeTruthy();
  });
});
