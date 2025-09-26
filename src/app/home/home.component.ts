import { Component, input, InputSignal, signal } from '@angular/core';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-home',
  imports: [BodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  messageFromApp: InputSignal<string> = input<string>('');
  messageToBody = signal<string>('');
  ngOnChanges(): void {
    this.messageToBody.set('NGOnChanges Called');
  }

  callAlert(message: string) {
    alert('Home Component: ' + message);
  }
}
