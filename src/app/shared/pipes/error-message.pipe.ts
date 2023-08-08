import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { GlobalConstants } from '../../core/utils/global-constants';

@Pipe({
  name: 'errorMessage',
})
export class ErrorMessagePipe implements PipeTransform {
  constructor(private _globalConstants: GlobalConstants) {}

  transform(control: ValidationErrors | null): string {
    const errors = this._globalConstants.formErrors;
    if (control) {
      // const limitOfCharacters =
      //   control.maxlength?.requiredLength ||
      //   control.minlength?.requiredLength ||
      //   0;

      const errorType: string = Object.keys(control)[0];
      const errorMsg = errors[errorType as keyof typeof errors];
      // if (limitOfCharacters > 0) {
      //   return `${errorMsg}': '${limitOfCharacters}`;
      // }
      return errorMsg;
    }
    return '';
  }
}
