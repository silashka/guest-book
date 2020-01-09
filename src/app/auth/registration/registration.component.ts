import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { CustomValidators } from "ngx-custom-validators";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    let password = new FormControl("", [
      Validators.required,
      Validators.min(8),
      Validators.max(255)
    ]);
    let passwordConfirm = new FormControl("", [
      CustomValidators.equalTo(password),
      Validators.required
    ]);

    this.registerForm = this.formBuilder.group({
      avatar: [Validators.max(10000)],
      email: ["", [Validators.required, Validators.email, Validators.max(255)]],
      name: ["", [Validators.required, Validators.max(255), Validators.min(3)]],
      password: password,
      passwordConfirm: passwordConfirm
    });
  }

  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm);
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
