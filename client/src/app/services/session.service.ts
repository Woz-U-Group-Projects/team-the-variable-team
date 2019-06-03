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
   * Logout the session 
   */
  logout() {
      localStorage.removeItem('userId');
      localStorage.removeItem('userType');
      localStorage.clear();
      // hard redirect to login, to clear the session
      window.location.href = '/login';
  }
}
