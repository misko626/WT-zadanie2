import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FamilyMember } from 'src/app/shared/model/family-member.model';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FamilyMemberService } from 'src/app/services/family-member.service';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';

@Component({
  selector: 'app-new-member-form',
  templateUrl: './new-member-form.component.html',
  styleUrls: ['./new-member-form.component.css'],
})
export class NewMemberFormComponent implements OnInit {
  familyMemberForm: FormGroup;
  editmode = false;
  isSubmitted = false;
  currentMemberId: string = '';
  currentMember: FamilyMember;
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

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private route: ActivatedRoute,
    private familyMemberService: FamilyMemberService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._initForm();
    this._checkEditmode();
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.familyMemberForm.valid) {
      console.log(this.familyMemberForm.valid);
      console.log('Error on submit');
      return;
    }

    const member: FamilyMember = {
      name: this.memberForm['name'].value,
      surname: this.memberForm['surname'].value,
      age: this.memberForm['age'].value,
      typeOfMembership: this.memberForm['typeOfMembership'].value,
    };

    if (this.editmode) {
      this._updateMember(member);
    } else {
      this._addMember(member);
    }
  }

  onClickBack() {
    this.location.back();
  }

  private _initForm() {
    this.familyMemberForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: [, Validators.required],
      typeOfMembership: ['', Validators.required],
    });
  }

  private _addMember(familyMember: FamilyMember) {
    this.familyMemberService.addFamilyMember(familyMember).then((member) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Pribuzny ' + member.name + ' je vytvoreny',
      });
      timer(2000)
        .toPromise()
        .then(() => {
          this.location.back();
        });
    }),
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Pribuzny nebol vytvoreny',
        });
      };
    this.location.back();
  }
  private _updateMember(familyMember: FamilyMember) {
    this.familyMemberService.updateFamilyMember(
      familyMember,
      this.currentMemberId
    );
    this.location.back();
  }

  private _checkEditmode() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.editmode = true;
        this.currentMemberId = params['id'];
        this.familyMemberService
          .getMember(this.currentMemberId)
          .subscribe((member) => {
            this.currentMember = member;
            this.memberForm['name'].setValue(this.currentMember.name);
            this.memberForm['surname'].setValue(this.currentMember.surname);
            this.memberForm['age'].setValue(this.currentMember.age);
            this.memberForm['typeOfMembership'].setValue(
              this.currentMember.typeOfMembership
            );
          });
      }
    });
  }

  get memberForm() {
    return this.familyMemberForm.controls;
  }
}
