import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'passing-data-assigment';
  messageForHome = signal<string>('');
  ngOnInit(): void {
    this.messageForHome.set('I am coming from the app component');
  }
}
