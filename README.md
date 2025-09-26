# Modern Version

There are two ways we can pass data into child components. Here we will explore the modern version. In the first two steps [1,2] we will update the logic, and the following two steps [3,4] we will look at the markup for implementing the logic for passing the data.

#### 1. Parent Component Logic

In the modern version, we use the `signal()` method to _send a signal_ from the parent component to the child component.

```TypeScript
/// app.component.ts
import { Component, OnInit, signal } from '@angular/core'; // <--Update the import to access 'signal'
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
  messageForHome = signal<string>(''); // <--Initialize and empty string using `signal<data_type>()`
  ngOnInit(): void { // <----------Implement OnInit
    this.messageForHome.set('I am coming from the app component'); // <--Update(set) the message when AppComponent is intialized.
  } // <---------------------------
}
```

#### 2. Child Component Logic

We use `InputSignal<data_type>` to tell the child component that it should be expecting _input_ from the parent. We also assign it a default value, just in case the parent doesn't pass any data down.

```TypeScript
/// home.component.ts
import { Component, input, InputSignal } from '@angular/core'; //<--Update the import to access `input` and `InputSignal`
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-home',
  imports: [BodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  messageFromApp: InputSignal<string> = input(''); // <--Use InputSignal with the datatype and initalize it using `input('default value if nothing passed from parent')`
}
```

_Note: `InputSignal` should work for other data types inside here: `<data_type>`. The data type should match that of the parent._

#### 3. Parent Component Markup

Here we will pass the **value** of our variable `messageForHome` by including the parenthesis like this: `messageForHome()`. This is critical to avoid getting a type error. We want to pass the value, NOT the `InputSignal` object itself. When passing data it is crucial to make sure we pass the data in the same format that the child expects.

```HTML
<main class="main">
  <app-home [messageFromApp]="messageForHome()"></app-home> <!--Pass `messageForHome()` from app component to `messageFromApp` on the child component-->
</main>

<router-outlet />
```

_Note: `InputSignal<data_type>` !== `<data_type>`. At `messageForHome` we MUST include `()` or we will be greeted with a type error._

#### 4. Child Component Markup

Now that our _app_ component is passing the message into our _home_ component we can now access that data inside our child component and display it in our HTML. Here's the code:

```HTML
<div>
  <p>Home Component: {{ messageFromApp() }}</p>
  <app-body></app-body>
</div>
```

_Note: Don't forget `()` at the end of `messageFromApp` to avoid the type error. Is this horse dead yet?_

Now run the application, `ng server --open`, and now the message should be displayed on screen using the classic style of passing data between a parent and a child component.

[Checkout Classic](https://github.com/DiMNDev/Passing-Data-Angular-Example/tree/classic)
[Back to main](https://github.com/DiMNDev/Passing-Data-Angular-Example/tree/main)
