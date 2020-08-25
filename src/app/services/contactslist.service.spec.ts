import { TestBed } from '@angular/core/testing';

import { ContactslistService } from './contactslist.service';

describe('ContactslistService', () => {
  let service: ContactslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
