import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  //Create a string to hold the color property (in this case the color is defined at: ..\demoIonic2TabsColor\src\theme\variables.scss)
  color: string = "primary";

  constructor() {

  }

  // functions that activate when the tab is selected
  selectInformation(){
    this.color = "secondary";
  }

  selectContact(){
    this.color = "danger";
  }
}
