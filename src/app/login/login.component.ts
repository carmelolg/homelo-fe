import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute) { }

  username: FormControl = new FormControl();
  password: FormControl = new FormControl();
  loginInvalid = false;
  baseUrl: string = environment.baseUrl;
  message: String = '';

  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      if (params.expired === 'true') {
        this.message = 'Your access token is expired!';
      }
    });

    if (localStorage.getItem('jwt') !== null) {
      this.router.navigate(['dashboard']);
    }
  }

  login(): void {
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;
    this.http.post<any>(this.baseUrl + 'auth', {}, { params: { username: username, password: password } })
      .subscribe((result) => {
        this.authService.enableAuth();
        localStorage.setItem('user', username);
        localStorage.setItem('jwt', result.jwt);
        this.router.navigate(['dashboard']);
      }, (error) => this.loginInvalid = true
      );
  }

}
