import { Component, OnInit } from '@angular/core';
import { FamilyMemberService } from 'src/app/services/family-member.service';
import { FamilyMember } from 'src/app/shared/model/family-member.model';

@Component({
  selector: 'app-database-list',
  templateUrl: './database-list.component.html',
  styleUrls: ['./database-list.component.css'],
})
export class DatabaseListComponent implements OnInit {
  familyMember: FamilyMember = {
    id: '',
    name: 'Ondrej',
    surname: 'Fazulka',
    age: 30,
    typeOfMembership: 'Bratranec',
  };
  constructor(private familyMemberService: FamilyMemberService) {}

  ngOnInit(): void {
    // this.familyMemberService
    //   .addFamilyMember(this.familyMember)
    //   .then((member) => {
    //     if (member) {
    //       console.log(member);
    //     }
    //   });
  }
}
