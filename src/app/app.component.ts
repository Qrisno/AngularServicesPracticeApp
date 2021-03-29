import { Component } from '@angular/core';
import {AccountsService} from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private accounts: AccountsService) {}

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.addAccount(newAccount.name, newAccount.status);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts.updateStatus(updateInfo.id, updateInfo.newStatus);
  }
}
