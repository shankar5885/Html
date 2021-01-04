import {Component, OnInit} from '@angular/core'
import { NgForm, Form } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';

@Component ({
    selector   :'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error:string= null;
    
private closeSub:Subscription;    
private storeSub: Subscription;
  constructor(
       private store: Store<fromApp.AppState>
       ){}

       ngOnInit(){
      this.storeSub =  this.store.select('auth').subscribe(authState =>{
        this.isLoading = authState.loading;
        this.error = authState.authError;
        if (this.error){
            errorMessage =>{
                       this.error = errorMessage;
             }
            
        }
        });
    }
    errorMessage(errorMessage: any) {
        throw new Error("Method not implemented.");
    }
  onSwitchMode(){
      this.isLoginMode= !this.isLoginMode;
  }
  onSubmit(form:NgForm){
      if(!form.valid){
          return;
      }
      const email= form.value.email;
      const password= form.value.password;

      
      if(this.isLoginMode){
       //authObs = this.authService.login(email,password);
       this.store.dispatch( new AuthActions.LoginStart({email: email, password:password}));
      } else {
this.store.dispatch(new AuthActions.Signup({email:email,password:password}));
      }
      
    //   authObs.subscribe(resData =>{
    //     console.log(resData);
    //     this.isLoading= false;
    //     this.router.navigate(['./recipes']);
    // },
    //     errorMessage =>{
    //         console.log(errorMessage);
    //         this.error = errorMessage;
    //         this.isLoading =false;
    //         }

        
    // );

   form.reset();
  }
  onHandleError(){
      this.store.dispatch(new AuthActions.ClearError());
  }
  ngOnDestroy(){
      if(this.closeSub){
          this.closeSub.unsubscribe();
      }
      if (this.storeSub){
          this.storeSub.unsubscribe();
      }
  }
 

 
}


