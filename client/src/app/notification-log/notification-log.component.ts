import { Component } from '@angular/core';

import { NgbAlertModule,NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

interface Alert {
	type: string;
	message: string;
}

const ALERTS: Alert[] = [
	{
		type: 'success',
		message: 'This is an success alert',
	},
	{
		type: 'info',
		message: 'This is an info alert',
	},
	{
		type: 'warning',
		message: 'This is a warning alert',
	},
	{
		type: 'danger',
		message: 'This is a danger alert',
	},
	{
		type: 'primary',
		message: 'This is a primary alert',
	},
	{
		type: 'secondary',
		message: 'This is a secondary alert',
	},
	{
		type: 'light',
		message: 'This is a light alert',
	},
	{
		type: 'dark',
		message: 'This is a dark alert',
	},
];

@Component({
    selector: 'app-notification-log',
    imports: [NgbAlertModule, NgbModule],
    templateUrl: './notification-log.component.html',
    styleUrls: ['./notification-log.component.scss']
})
export class NotificationLogComponent {
  alerts: Alert[] = ALERTS;

  constructor()
  {
    this.reset();
  }

	close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}

	reset() {
		this.alerts = Array.from(ALERTS);
	}
}
