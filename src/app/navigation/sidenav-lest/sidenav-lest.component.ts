import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-lest',
  templateUrl: './sidenav-lest.component.html',
  styleUrls: ['./sidenav-lest.component.scss']
})
export class SidenavLestComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onClose() {
    this.closeSidenav.emit();

  }

}
