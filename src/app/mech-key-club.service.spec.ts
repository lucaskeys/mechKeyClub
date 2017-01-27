/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MechKeyClubService } from './mech-key-club.service';

describe('MechKeyClubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MechKeyClubService]
    });
  });

  it('should ...', inject([MechKeyClubService], (service: MechKeyClubService) => {
    expect(service).toBeTruthy();
  }));
});
