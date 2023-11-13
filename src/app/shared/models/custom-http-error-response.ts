import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export interface CustomHttpErrorResponse
  extends Omit<HttpErrorResponse, 'message'> {
  message: string | string[];
}
