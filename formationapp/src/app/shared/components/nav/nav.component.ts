import { Component, OnInit } from '@angular/core';
import { ConnectionServiceService } from '../../../core/services/connection-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public title = 'Mon Application';
  public isCollapsed = true;
  constructor(private connectionService: ConnectionServiceService, private router: Router) { }

  ngOnInit() {
  }

  public getConnectedUser() {
    return this.connectionService.getConnectedUser();
  }

  public logout() {
    this.connectionService.logout();
    this.router.navigate(['/login']);
  }
}
