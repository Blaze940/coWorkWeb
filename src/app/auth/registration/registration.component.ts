import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../_services/auth.service";
import {TokenService} from "../../_services/token.service";
import {UserService} from "../../_services/user.service";
import {Router} from "@angular/router";
import {IToken} from "../../_interfaces/token";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public loginForm! : FormGroup ;
  constructor(private fb: FormBuilder, private authService : AuthService, private tokenService : TokenService ,
              private us : UserService, private router : Router) {

  }

  ngOnInit(): void {
    this.tokenService.clear() ;
    this.loginForm = this.fb.group({
      lastname: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
      surname: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(60)]],
      pseudo: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(255)]],
      card: ['6303afd0c2f74e896047234c', [Validators.required]],
      mealTray : ['63011c45985ae79b708fa016',[Validators.required]]
    });
  }

//FormControl.setvalues qd les données seront dispo (ex: apres un appel http)
//Pour mettre des valeurs par defaut

  onSubmit() {
    //const a = this.loginForm.get('email')?.value ;
    this.us.currentUserEmail = this.loginForm.get('email')?.value;
    this.us.setCurrentUser(this.us.currentUserEmail);
    this.authService.register(this.loginForm.value).subscribe(
      (count : any) => {
        this.authService.login(this.loginForm.value).subscribe(
          (data : IToken) => {

            this.tokenService.saveToken(data.token);

            this.us.setAllUser() ;
            this.router.navigate(['/auth/transit']);
          },
          (error) => {
            return error;
          }
        );
    },
      (error) => {
        return error;
      }

    )
    // this.authService.login(this.loginForm.value).subscribe(
    //   (data : IToken) => {
    //
    //     this.tokenService.saveToken(data.token);
    //
    //     this.us.setCurrentUser(this.loginForm.get('email')?.value);
    //     this.us.setAllUser() ;
    //   },
    //   (error) => {
    //     //this.alert.error(error);
    //
    //   }
    // );
    // //
    //this.loginForm.get('email').value pour recuperer uniquement la valeur du mail
  }

}
