import { Component, OnInit } from '@angular/core';
import {UtilitiesService} from "../../services/utilities.service";
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {PasswordValidationService} from "../../services/auth/password-validation.service";
import {BehaviorSubject} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../services/database/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor() {}


  ngOnInit(): void {}

}


