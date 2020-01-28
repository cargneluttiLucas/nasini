import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ContactUsConfig } from './config';
import { IContactUsCommand } from '../models/contact-us.command';

@Injectable()
export class ContactUsService {
  constructor(private http: HttpClient,
    @Inject('configContactUs') private config: ContactUsConfig) { }

  postQuery(data: IContactUsCommand): Observable<any> {
    return this.http.post(`${this.config.endpoints.postContactUs}`, data);
  }
}
