import { Component, input, InputSignal } from '@angular/core';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-home',
  imports: [BodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  messageFromApp: InputSignal<string> = input<string>('');
}
