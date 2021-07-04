import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private db: AngularFirestore
    ){}

  getAll():Observable<any>{
    return this.db.collection('user').valueChanges();
  }

  save(user:User):Promise<any>{
    return this.db.collection('user').add(user);
  }
}
