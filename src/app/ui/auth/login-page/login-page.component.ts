import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../domain/auth/application/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = this._fb.group({});
  isLoading: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._formBuilder();
  }

  onSubmit(): void {
    if (this.loginForm.invalid || this.isLoading) {
      this.loginForm.markAllAsTouched();
    }
    this.isLoading = true;
    const { email, password } = this.loginForm.value;
    this._authService.login(email, password).subscribe({
      next: (resp) => {
        if (resp.success) {
          this._router.navigate(['/']);
        } else {
          console.log('ERROR: ', resp.error);
        }
      },
      error: () => {},
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  private _formBuilder(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
