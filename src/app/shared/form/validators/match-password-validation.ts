import {AbstractControl} from '@angular/forms';

export class MatchPasswordValidation {
  static MatchPassword(AC: AbstractControl) {
    const password = AC.get('main').value; // to get value in input tag
    const confirmPassword = AC.get('confirm').value; // to get value in input tag
    if (password !== confirmPassword) {
      // console.log('false');
      AC.get('confirm').setErrors({MatchPassword: true});
    } else {
      // console.log('true');
      return null;
    }
  }
}
