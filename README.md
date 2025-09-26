# Classic Version

There are two ways we can pass data into child components. Here we will explore the classic version. In the first two steps [1,2] we will update the logic, and the following two steps [3,4] we will look at the markup for implementing the logic for passing the data.

#### 1. Parent Component Logic

In the classic version, we will first define `messageForHome: string` that will then be updated using the `ngOnInit()` method. Here's the code sample.

```TypeScript
/// app.component.ts
import { Component, OnInit } from '@angular/core'; // <--Update the import to access `OnInit`
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit { // <--Tell `AppComponent` we will implement OnInit
  title = 'passing-data-assigment';
  messageForHome: string = ''; // <--Initialize an empty string that will be passed down to the child

  ngOnInit(): void { // <----------------------------------------------------Implement `ngOnInit()` method
    this.messageForHome = 'I am coming from the app component';  // <--Update the message when AppComponent is intialized.
  }  // <--------------------------------------------------------------------
}
```

#### 2. Child Component Logic

Using `@Input()` tells Angular that we want to be expecting to inherit this data from the parent component. This is a key to the classic passing of data between parent and child components.

```TypeScript
/// home.component.ts
import { Component, Input } from '@angular/core'; // <--Update the import to access `Input`
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-home',
  imports: [BodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @Input() messageFromApp: string = ''; // <--Tells the home component 'expect to inherit this from the parent'
}
```

#### 3. Parent Component Markup

Here we will pass the data as an attribute into the child component. Here's the example:

```HTML
<!-- app.component.html -->
<main class="main">
  <app-home [messageFromApp]="messageForHome"></app-home>
</main>

<router-outlet />
```

#### 4. Child Component Markup

Now that our _app_ component is passing the message into our _home_ component we can now access that data inside our child component and display it in our HTML. Here's the code:

```HTML
<div>
  <p>Home Component: {{ messageFromApp }}</p>
  <app-body></app-body>
</div>
```

Now run the application, `ng server --open`, and now the message should be displayed on screen using the classic style of passing data between a parent and a child component.

[Checkout Modern](https://github.com/DiMNDev/Passing-Data-Angular-Example/tree/modern)
[Back to main](https://github.com/DiMNDev/Passing-Data-Angular-Example/tree/main)
