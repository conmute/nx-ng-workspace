import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { defineGreetingElement, agnosticUi } from '@nx-ng-workspace/agnostic-ui';

import { NxWelcomeComponent } from './nx-welcome.component';

defineGreetingElement()

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'nx-ng-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-sample-app';

  ngOnInit(): void {
    alert(
      agnosticUi()
    )
  }
}
