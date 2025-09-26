# Passing Data between Child & Parent Components

### Creating New Components

It is recommended to use the cli tool to create new components. This creates four new files:

Create a component using `ng generate component <component-name>`
_Note: shorthand command syntax: `ng g c <component-name>`_

- HTML Markup - `*.component.html`
- Styling - `*.component.scss` (or your own flavor of CSS)
- Tests - `*.component.spec.ts`
- Logic - `*.component.ts`

### Component Definition

When you use the cli tool to generate components, **Angular** provides the boiler plate code for us.
Example:
Run `ng g c home`

```TypeScript
/// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
```

### Implementing New Components

Creating components helps us to keep our application modular, allowing us to break up the building blocks into _single purpose_ functionality. This pattern helps to maintain the application as it scales by keeping logic relative to the component that uses it.

To use a component, we decide where we would like to use it. In this example, we will add the _home_ component in the root of the application.
To do this:

1. Add the import to the root (or other _parent_ component)

```TypeScript
/// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component'; // <--Added import for the home component here

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent], // <--Injected imported component here
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'passing-data-assigment';
}
```

2. Use the _child_ component in the _parent_

```HTML
/// app.component.html
<main class="main">
  <app-home></app-home> <!--Added the child component here-->
</main>

<router-outlet />
```

_Note: The naming of the components might be confusing. To clear it up, here is an example of where those names come from._

```TypeScript
/// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home', //<--The selector used to reference the child component in the parent component HTML
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { //<--The export of the child component to be imported and injected into the parent component

}
```

_Note: When using the cli tool to generate components you shouldn't need to worry too much about explicitly naming them. The tool will name them for you in this convention. Just draw the conclusion that [Export, Import] and [Selector, HTML] reference each other in this way._

## Pick Your Implementation Flavor

There are two different ways to implement passing data between components. They leverage different methods in the Angular framework. It may be beneficial to know both methods so you aren't caught off guard when you come accross either/or.

|                                                                      Classic Version                                                                      |                                                                     Modern Version                                                                      |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![Classic](https://img.shields.io/badge/Example-Classic-blue?style=for-the-badge)](https://github.com/DiMNDev/Passing-Data-Angular-Example/tree/classic) | [![Modern](https://img.shields.io/badge/Example-Modern-green?style=for-the-badge)](https://github.com/DiMNDev/Passing-Data-Angular-Example/tree/modern) |
