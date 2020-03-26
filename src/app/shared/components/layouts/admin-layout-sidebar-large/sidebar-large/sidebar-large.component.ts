import { Component, OnInit, HostListener } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import { filter } from 'rxjs/operators';

import { NavigationService, IMenuItem } from 'services/navigation.service';
import { Utils } from '../../../../utils';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-sidebar-large',
  templateUrl: './sidebar-large.component.html',
  styleUrls: ['./sidebar-large.component.scss'],
})
export class SidebarLargeComponent implements OnInit {
  public selectedItem: IMenuItem;

  public nav: IMenuItem[] = [
    {
      name: 'My Account',
      type: 'dropDown',
      icon: 'i-ID-Card',
      state: '/account',
      sub: [
        { name: 'View or Pay Open Invoices', state: '/account/opened-invoices', type: 'link' },
        { name: 'View Paid or Closed Invoices', state: '/account/closed-invoices', type: 'link' },
        { name: 'Schedule Payments', state: '/account/schedule-payments', type: 'link' },
        { name: 'View Schedule Payments', state: '/account/view-payments', type: 'link' },
      ],
    },
    {
      name: 'Setting',
      type: 'dropDown',
      icon: 'i-Library',
      sub: [
        { name: 'My Bank Account', state: '/uikits/alerts', type: 'link' },
        { name: 'My Credit Cards', state: '/uikits/accordions', type: 'link' },
        { name: 'Update Personal Info', state: '/uikits/badges', type: 'link' },
        { name: 'AutoPlay', state: '/uikits/badges', type: 'link' },
        { name: 'Paperless Options', state: '/uikits/badges', type: 'link' },
        { name: 'Change Password', state: '/uikits/badges', type: 'link' },
      ],
    },
    {
      name: 'Logout',
      type: 'action',
      icon: 'i-Arrow-Back-2',
      action: (e: Event) => this.logout(e),
    },
  ];

  constructor(public router: Router, public navService: NavigationService, private authService: AuthService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.updateSidebar();
    // CLOSE SIDENAV ON ROUTE CHANGE
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(routeChange => {
      this.closeChildNav();
      if (Utils.isMobile()) {
        this.navService.sidebarState.sidenavOpen = false;
      }
    });

    this.setActiveFlag();
  }

  selectItem(item) {
    this.navService.sidebarState.childnavOpen = true;
    this.selectedItem = item;
    // this.setActiveMainItem(item);
  }

  closeChildNav() {
    this.navService.sidebarState.childnavOpen = false;
    this.setActiveFlag();
  }

  onClickChangeActiveFlag(item) {
    this.setActiveMainItem(item);
  }

  setActiveMainItem(item) {
    this.nav.forEach(i => {
      i.active = false;
    });
    item.active = true;
  }

  setActiveFlag() {
    if (window && window.location) {
      const activeRoute = window.location.pathname;
      this.nav.forEach(item => {
        item.active = false;
        if (activeRoute.indexOf(item.state) !== -1) {
          this.selectedItem = item;
          item.active = true;
        }
        if (item.sub) {
          item.sub.forEach(subItem => {
            subItem.active = false;
            if (activeRoute.indexOf(subItem.state) !== -1) {
              this.selectedItem = item;
              item.active = true;
            }
            if (subItem.sub) {
              subItem.sub.forEach(subChildItem => {
                if (activeRoute.indexOf(subChildItem.state) !== -1) {
                  this.selectedItem = item;
                  item.active = true;
                  subItem.active = true;
                }
              });
            }
          });
        }
      });
    }
  }

  updateSidebar() {
    if (Utils.isMobile()) {
      this.navService.sidebarState.sidenavOpen = false;
      this.navService.sidebarState.childnavOpen = false;
    } else {
      this.navService.sidebarState.sidenavOpen = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateSidebar();
  }

  logout(e: Event) {
    e.preventDefault();
    this.authService.logout().subscribe(() => {
      this.router.navigateByUrl('/auth');
    });
  }

  onClick() {
    this.router.navigateByUrl('account');
  }
}
