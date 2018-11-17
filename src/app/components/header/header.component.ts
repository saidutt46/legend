import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatMenuTrigger)
  trigger: MatMenuTrigger;

  header = 'header';

  @Output()
  toggleSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
