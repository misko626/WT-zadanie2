import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription, timer } from 'rxjs';
import { FamilyMemberService } from 'src/app/services/family-member.service';
import { FamilyMember } from 'src/app/shared/model/family-member.model';

@Component({
  selector: 'app-all-members-list',
  templateUrl: './all-members-list.component.html',
  styleUrls: ['./all-members-list.component.css'],
})
export class AllMembersListComponent implements OnInit {
  familyMember: FamilyMember = {
    name: 'tomas',
    surname: 'cesesna',
    age: 30,
    typeOfMembership: 'Bratranec',
  };

  familyMembersSubscription: Subscription = new Subscription();
  familyMembers: FamilyMember[] = [];

  typesOfFamilyMembers: string[] = [
    'Matka',
    'Otec',
    'Sestra',
    'Brat',
    'Sesternica',
    'Bratranec',
    'Stara mama',
    'Stary otec',
    'Stryko',
  ];
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
    this._getMembers();
    console.log(this.familyMembers);

    // this.familyMemberService
    //   .addFamilyMember(this.familyMember)
    //   .then((member) => {
    //     if (member) {
    //       console.log(member);
    //     }
    //   });
  }

  searchByName() {
    if (this.memberName != '') {
      timer(1000)
        .toPromise()
        .then(() => {
          this.familyMembers = this.familyMembers.filter((familyMember) =>
            familyMember.name.toLowerCase().includes(this.memberName.toLowerCase())
          );
        });
    } else {
      timer(500)
        .toPromise()
        .then(() => {
          this._getMembers();
        });
    }
  }

  searchBySurname() {
    if (this.memberSurname != '') {
      timer(1000)
        .toPromise()
        .then(() => {
          this.familyMembers = this.familyMembers.filter((familyMember) =>
            familyMember.surname.toLowerCase().includes(this.memberSurname.toLowerCase())
          );
        });
    } else {
      timer(500)
        .toPromise()
        .then(() => {
          this._getMembers();
        });
    }
  }
  searchByAge() {
    if (this.memberAge != null) {
      timer(1000)
        .toPromise()
        .then(() => {
          this.familyMembers = this.familyMembers.filter((familyMember) =>
            familyMember.age.toString().includes(this.memberAge.toString())
          );
        });
    } else {
      timer(500)
        .toPromise()
        .then(() => {
          this._getMembers();
        });
    }
  }
  searchByType(type: string) {
    if (type != null) {
      timer(1000)
        .toPromise()
        .then(() => {
          this.familyMembers = this.familyMembers.filter((familyMember) =>
            familyMember.typeOfMembership.includes(type)
          );
        });
    } else {
      timer(500)
        .toPromise()
        .then(() => {
          this._getMembers();
        });
    }
  }

  deleteMember(familyMember: FamilyMember) {
    this.confirmationService.confirm({
      message: 'Ste si istý, že chcete odstrániť tohto príbuzného',
      header: 'Vymaž pribuzného',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.familyMemberService.deleteItem(familyMember.id);
        // this._getMembers();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Príbuzný vymazaný',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Príbuzný nebol vymazaný',
        });
      },
    });
  }

  updateFamilyMember(id: string) {
    this.router.navigateByUrl(`/database-list/form/${id}`);
  }

  addNewMember() {
    this.router.navigateByUrl(`/database-list/form/`);
  }

  private _getMembers() {
    this.familyMembersSubscription = this.familyMemberService
      .getAllMembers()
      .subscribe((members) => {
        this.familyMembers = members.map((e) => {
          // console.log(e.payload.doc.id);
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as {}),
          };
        });
        // console.log(this.familyMembers);
      });
  }
}
