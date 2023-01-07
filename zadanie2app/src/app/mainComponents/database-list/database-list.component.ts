import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FamilyMemberService } from 'src/app/services/family-member.service';
import { FamilyMember } from 'src/app/shared/model/family-member.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { getLocaleMonthNames } from '@angular/common';

@Component({
  selector: 'app-database-list',
  templateUrl: './database-list.component.html',
  styleUrls: ['./database-list.component.css'],
})
export class DatabaseListComponent implements OnInit {
  familyMember: FamilyMember = {
    name: 'tomas',
    surname: 'cesesna',
    age: 30,
    typeOfMembership: 'Bratranec',
  };

  familyMembersSubscription: Subscription = new Subscription();
  familyMembers: FamilyMember[] = [];

  typesOfFamilyMembers: string[] = ['Matka', 'Otec', 'Sestra', 'Brat', 'Sesternica', 'Bratranec', 'Stara mama', 'Stary otec', 'Stryko']
  selectedTypeOfMember: string = '';
  memberName: string = '';
  memberSurname: string = '';
  memberAge: number;


  constructor(
    private familyMemberService: FamilyMemberService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

   ngOnInit(): void {
  //   this._getMembers();
  //   console.log(this.familyMembers);

  
   }

  // deleteMember(familyMember: FamilyMember) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure that you want to delete this product?',
  //     header: 'Delete product',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.familyMemberService.deleteItem(familyMember.id);
  //       this._getMembers();
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Success',
  //         detail: 'product is deleted',
  //       });
  //     },
  //     reject: () => {
  //       this.messageService.add({
  //         severity: 'error',
  //         summary: 'Error',
  //         detail: 'product is not deleted',
  //       });
  //     },
  //   });
  // }

  // updateFamilyMember(id: string) {
  //   console.log("ahoj");
    
  //   this.familyMemberService.updateFamilyMember(
  //     this.familyMember,
  //     id
  //   );
  // }

  // private _getMembers() {
  //   this.familyMembersSubscription = this.familyMemberService
  //     .getAllMembers()
  //     .subscribe((members) => {
  //       this.familyMembers = members.map((e) => {
  //         console.log(e.payload.doc.id);
  //         return {
  //           id: e.payload.doc.id,
  //           ...(e.payload.doc.data() as {}),
  //         };
  //       });
  //       console.log(this.familyMembers);
  //     });
  // }
}
