import {Component} from '@angular/core';
import {LoaderToggleSwitchService} from "../services/loader-toggle-switch.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  public constructor(public loaderService: LoaderToggleSwitchService) {}
}
