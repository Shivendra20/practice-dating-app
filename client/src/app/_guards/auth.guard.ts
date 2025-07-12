import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_services/acounts.service';
import { ToastrService } from 'ngx-toastr';
import { toObservable } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (): Observable<boolean> => {
  const accountService = inject(AccountService);
  const toastr = inject(ToastrService);

  return toObservable(accountService.currentUser).pipe(
    map(user => {
      if (user) {
        return true;
      } else {
        toastr.error('You shall not pass!');
        return false;
      }
    })
  );
};
