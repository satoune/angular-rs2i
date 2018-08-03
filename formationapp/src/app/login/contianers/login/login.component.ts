import { Component, OnInit } from '@angular/core';
import { Login } from '../../../shared/interfaces/login';
import { ConnectionServiceService } from '../../../core/services/connection-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private connectionService: ConnectionServiceService, private router: Router) { }

  ngOnInit() {
  }


  public connect(login: Login): void {
    console.log(login);
    const tocken = this.connectionService.connect(login);
    console.log(tocken);
    if (tocken != null) {
      this.router.navigate(['items/list']);
    }
    // if(true)
    // this.router.navigate(['items/list']);
  }
}
