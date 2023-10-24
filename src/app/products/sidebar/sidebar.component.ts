import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  links = [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Personal Info', route: '/personal-info' },
    { label: 'Settings', route: '/settings' },
    { label: 'Cart', route: '/cart' },
    { label: 'FAQs', route: '/faqs' }
  ];

}
