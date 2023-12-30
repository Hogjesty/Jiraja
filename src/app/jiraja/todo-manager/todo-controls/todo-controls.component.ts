import { Component, OnInit } from '@angular/core';
import {BtnStyles} from "../../../shared/interfaces/BtnStyles";

@Component({
  selector: 'app-todo-controls',
  templateUrl: './todo-controls.component.html',
  styleUrls: ['./todo-controls.component.scss']
})
export class TodoControlsComponent implements OnInit {

  public btnStyles: BtnStyles = {
    width: 350
  };

  public constructor() { }

  public ngOnInit(): void {
  }

}
