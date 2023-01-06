import { Injectable } from '@angular/core';
import { FamilyMember } from '../shared/model/family-member.model';

import {
  addDoc,
  deleteDoc,
  updateDoc,
  collectionData,
  doc,
  Firestore,
} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FamilyMemberService {
  databasePath: string = 'family-members';

  constructor(private firestore: Firestore) {}

  addFamilyMember(familyMember: FamilyMember) {
    familyMember.id = doc(collection(this.firestore, 'id')).id;
    return addDoc(collection(this.firestore, this.databasePath), familyMember);
  }

  getAllMembers(): Observable<FamilyMember[]> {
    let membersRef = collection(this.firestore, this.databasePath);
    return collectionData(membersRef, { idField: 'id' }) as Observable<
      FamilyMember[]
    >;
  }

  deleteFamilyMember(familyMember: FamilyMember) {
    let memberRef = doc(
      collection(this.firestore, `${this.databasePath}/${familyMember.id}`)
    );
    return deleteDoc(memberRef);
  }

  updateFamilyMember(familyMember: FamilyMember, familyMembers: any) {
    let memberRef = doc(
      this.firestore,
      `${this.databasePath}/${familyMember.id}`
    );
    return updateDoc(memberRef, familyMembers);
  }
}
