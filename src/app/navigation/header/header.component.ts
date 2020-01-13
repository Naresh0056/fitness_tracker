import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuth: boolean = false;
  authSubscription: Subscription;
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    })
  }
  onToggleSideNav() {
    this.sidenavToggle.emit();

  }
  onLogout() {
    this.authService.logout();
  }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
