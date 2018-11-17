import { Component, OnInit, Inject } from '@angular/core';
import { User } from '@models';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ValidateService, UserService } from '@services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 user: User = new User();
 registerForm: FormGroup;
 hide = true;
 success: any;

  constructor(
    private valdiateService: ValidateService,
    private formBuilder: FormBuilder,
    private authService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name': [this.user.name, [Validators.required]],
      'username': [this.user.username, [Validators.required]],
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ]]
    });
  }

  onRegisterSubmit() {
    this.authService.registerUser(this.registerForm.value).subscribe(data => {
      if (data) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/register']);
       }
    });
  }

}
