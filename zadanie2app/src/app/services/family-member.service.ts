import { Injectable } from '@angular/core';
import { FamilyMember } from '../shared/model/family-member.model';

import { map, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FamilyMemberService {
  databasePath: string = 'family-members';

  constructor(private angularFirestore: AngularFirestore) {}

  addFamilyMember(familyMember: any) {
    return new Promise<FamilyMember>((resolve, reject) => {
      this.angularFirestore
        .collection('family-members')
        .add(familyMember)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  getMember(id: string) {
    return this.angularFirestore.collection(this.databasePath).doc(id).valueChanges();
  }

  getAllMembers() {
    return this.angularFirestore
      .collection(this.databasePath)
      .snapshotChanges();
  }

  deleteItem(id: string) {
    console.log(id);

    return this.angularFirestore
      .collection(this.databasePath)
      .doc(id)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  }

  updateFamilyMember(familyMember: any, id: string) {
    console.log(familyMember.name);
    console.log(familyMember.surname);
    console.log(familyMember.age);
    console.log(familyMember.typeOfMembership);
    console.log(id);
    
    
    return this.angularFirestore.collection(this.databasePath).doc(id).update({
      name: familyMember.name,
      surname: familyMember.surname,
      age: familyMember.age,
      typeOfMembership: familyMember.typeOfMembership,
    });
  }
}
