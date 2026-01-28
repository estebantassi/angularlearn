import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { User } from "../../core/services/user.service";
import { HttpClient } from "@angular/common/http";

@Component({
    standalone: true,
    templateUrl: './login.page.html',
    styleUrl: './login.page.scss',
    imports: [ReactiveFormsModule],
})

export class LoginPage {
    private fb = inject(FormBuilder);
    user = inject(User);

    form = this.fb.group({
        email: '',
        password: '',
    });

    constructor(private http: HttpClient) {}

    submit() {
        const { email, password } = this.form.value;

        if (!email || !password) return;

        this.http.post('http://localhost:8080/signup', {email}).subscribe({
            next: data => console.log(data),
            error: err => console.error(err)
        });

        //this.user.login(email, password);
    }
}