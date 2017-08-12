import { TestBed, inject } from '@angular/core/testing';

import { TestimonialService } from './testimonial.service';

describe('TestimonialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestimonialService]
    });
  });

  it('should ...', inject([TestimonialService], (service: TestimonialService) => {
    expect(service).toBeTruthy();
  }));
});
