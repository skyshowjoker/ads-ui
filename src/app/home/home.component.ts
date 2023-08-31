import { Component } from '@angular/core';
import { AppHeaderComponent } from '../app-header/app-header.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor (){}
  isCollapsed = false;
}
