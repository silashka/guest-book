import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
    this.registerForm = this.formBuilder.group({
      avatar: [Validators.maxLength(10000)],
      email: ["", Validators.required, Validators.email, Validators.max(255)],
      name: ["", Validators.required, Validators.max(255)],
      password: [
        "",
        Validators.required,
        Validators.min(8),
        Validators.max(255)
      ],
      passwordConfirm: ["", Validators.required]
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
