import { Injectable } from "@angular/core";
import { HttpClient } from "selenium-webdriver/http";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
}
