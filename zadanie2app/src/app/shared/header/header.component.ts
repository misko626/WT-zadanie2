import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('navContainer') navContainer: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onClickMenu() {
    // console.log('Ahoj');
    this.navContainer.nativeElement.classList.toggle('nav-container-mobile2');
    this.navContainer.nativeElement.classList.toggle('nav-container2');
    // console.log(this.navContainer.nativeElement.classList);
  }
}
