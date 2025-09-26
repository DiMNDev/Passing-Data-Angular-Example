import {
  Component,
  EventEmitter,
  input,
  InputSignal,
  output,
} from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  messageFromHome: InputSignal<string> = input<string>('');
  callAlertFromHome = output<string>();

  buttonClicked(): void {
    this.callAlertFromHome.emit('Button clicked!');
  }
}
