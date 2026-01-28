import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class User {
  login(email: string, password: string) {
    console.log(email, password);
  }
}