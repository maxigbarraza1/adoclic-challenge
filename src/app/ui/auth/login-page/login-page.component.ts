import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../domain/auth/application/auth.service';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';

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
    private _router: Router,
    private _modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this._formBuilder();
  }

  onSubmit(): void {
    if (this.loginForm.invalid || this.isLoading) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      const { email, password } = this.loginForm.value;
      this._authService.login(email, password).subscribe({
        next: (resp) => {
          if (resp.success) {
            this._router.navigate(['/']);
          } else {
            this._openErrorDialog();
            console.log('ERROR: ', resp.error);
          }
        },
        error: () => {},
        complete: () => {
          this.isLoading = false;
        },
      });
    }, 1500);
  }

  private _formBuilder(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  private _openErrorDialog(): void {
    this._modalService.open(ErrorDialogComponent);
  }
}
