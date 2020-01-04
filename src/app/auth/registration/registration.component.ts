import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      avatar: new FormControl([Validators.maxLength(10000)]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(255)
      ]),
      name: new FormControl(null, [Validators.required, Validators.max(255)]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(255)
      ]),
      "password-confirm": new FormControl(null, [Validators.required])
    });
  }
  onSubmit() {
    console.log(this.form);
  }
}
