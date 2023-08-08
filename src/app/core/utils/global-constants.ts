import { Injectable } from '@angular/core';

@Injectable()
export class GlobalConstants {
  formErrors = {
    required: 'This field is required',
    minlength: 'Must be at least 6 characters long',
    maxlength: 'Must be less than 25 characters long',
    email: 'Invalid email address',
  };
}
