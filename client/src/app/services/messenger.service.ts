import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class MessengerService {

  // Incoming messages
  public incoming: any[];
  // Incoming unread messages
  public unread: number;

  // tslint:disable-next-line:no-inferrable-types
  CreateURL: string = 'http://localhost:4001/messenger/createmessage';
  RetrieveURL: string = 'http://localhost:4001/messenger/retrieve';
  UpdateURL: string = 'http://localhost:4001/messenger/update';

  constructor(private http: HttpClient) { }
  
  createMessage(message): Observable<any> {
    return this.http.post(this.CreateURL, message, httpOptions);
  }
  markAsRead(id) {
    this.http.put(`${this.UpdateURL}/${id}`, {Read: 1}, httpOptions).subscribe((res: any) => {
      if (res && res.success) {
        // Remove message from unread array
        this.unread--;
        for (let index in this.incoming) {
          if (this.incoming[index].ID == id) {
            this.incoming[index].Read = 1;
          }
        }
      }
    })
  }
  getHistory(messageID: string) {
    const options = { 
      params: new HttpParams().set('ParentMessage', messageID) 
    };
    return this.http.get(this.RetrieveURL, options);
  }
  getMessage(messageID: string) {
    const options = { 
      params: new HttpParams().set('ID', messageID) 
    };
    return this.http.get(this.RetrieveURL, options);
  }
  getIncoming(data): Observable<any> {
    let options;
    if (data.EmployerRecipientID) {
      options = { 
        params: new HttpParams().set('EmployerRecipientID', data.EmployerRecipientID)
                                .set('order', 'DESC')
      };
    }
    else if (data.StudentRecipientID) {
      options = { 
        params: new HttpParams().set('StudentRecipientID', data.StudentRecipientID)
                                .set('order', 'DESC')
      };
    }
    return this.http.get(this.RetrieveURL, options);
  }
}
