import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  constructor() { }

  /**
   * Set the session 
   */
  setSession(userId: string, userType: string) {
    localStorage.setItem('userId', userId);
    localStorage.setItem('userType', userType);
  }

  /**
   * Get the session 
   */
  getSession() {
    return {
      userId: localStorage.getItem('userId'),
      userType: localStorage.getItem('userType')
    };
  }
/**
 * Destroy Session
 */
// sessionDestroy(){
//   return {

//   }
// }
  /**
   * Logout the session 
   */
  logout() {
    return {
      userId: localStorage.setItem('userId', null),
      userType: localStorage.setItem('userType', null)
    };
  }
}
