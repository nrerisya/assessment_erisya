import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { routes } from '../app.routes';

export const authenGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const localData = localStorage.getItem("token");
  if(localData != null){
    return true;
  } else {
    router.navigateByUrl("login");
    return false;
  }

};
