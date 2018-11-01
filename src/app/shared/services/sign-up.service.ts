import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, map, filter} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  usersUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.usersUrl = 'http://localhost:3000/users';
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get(`${this.usersUrl}?email=${email}`)
      .pipe(
        delay(450)
        , map((user: User[]) => user[0] ? user[0] : undefined )
      );
  }

  checkEmailNotTaken(email: string) {
    return this.http.get(this.usersUrl)
      .pipe(
        map(
          (users: any) => users.filter((user) => {
            /*console.log('*email *', email);
            console.log('-- user', user);*/
            return user.email === email;
          }))
        , map(users => {
          // console.log('*users*', users);
          return !users.length;
        })
      );
  }

  createUser(form: any) {
    return this.http.post(this.usersUrl, form);
  }
}
