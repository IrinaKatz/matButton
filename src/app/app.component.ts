import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IsViewerDisabledDirective} from "./is-viewer-disabled.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatCardModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, IsViewerDisabledDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'matbutton';
  buttonStatus: string = 'disabled';
  isEnabled: boolean = false;
  enableStatus = 'Enable'
  tooltipText: FormControl = new FormControl<string>('Click "enable" to enable button');

  enableToggle() {
    this.isEnabled = !this.isEnabled;
    this.enableStatus = this.isEnabled ? 'Disable' : 'Enable';
    this.buttonStatus = this.isEnabled ? 'enabled' : 'disabled';
  }
}
