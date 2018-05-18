import { TestBed, inject } from '@angular/core/testing';

import { StyleCaptureService } from './style-capture.service';

describe('StyleCaptureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StyleCaptureService]
    });
  });

  it('should be created', inject([StyleCaptureService], (service: StyleCaptureService) => {
    expect(service).toBeTruthy();
  }));
});
