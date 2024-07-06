import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class HelperNotification {
  alertSuccess(
    title: string = 'Done successfully',
    text = '',
    timer = 1500
  ): void {
    Swal.fire({
      icon: 'success',
      title,
      text,
      showConfirmButton: false,
      timer,
    });
  }

  alertDanger(title: string = 'Error', text = '', timer = 1500): void {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  confirm(title: string, message: string, callback: Function) {
    const options = {
      title: title || 'Are you sure?',
      text: message || "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No, exit',
    };

    Swal.fire({ ...options }).then((result) => {
      if (result.value) {
        callback();
      }
    });
  }

  toastSuccess(word?: string, timer = 3000): void {
    Swal.fire({
      icon: 'success',
      position: 'top-end',
      title: word || 'Succesfully done',
      showConfirmButton: false,
      timer,
      timerProgressBar: true,
      toast: true,
      allowEscapeKey: true,
      didOpen: (toast: any) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
  }

  toastDanger(message: string, fromServer: boolean = false): void {
    let options: SweetAlertOptions = {
      icon: 'error',
      position: 'top-end',
      title: message,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      toast: true,
      allowEscapeKey: true,
    };

    if (fromServer) options.footer = 'Erreur Serveur';

    Swal.fire({
      ...options,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
  }
}
