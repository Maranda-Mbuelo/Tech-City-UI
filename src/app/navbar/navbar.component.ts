import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuItems = [
    { icon: 'fa-home', text: 'Home', class: 'text-secondary' },
    { icon: 'fa-tachometer', text: 'Dashboard', class: 'text-white' },
    { icon: 'fa-brands fa-shopify', text: 'Products', class: 'text-white' },
    { icon: 'fa-shopping-cart', text: 'Orders', class: 'text-white' },
    { icon: 'fa-users', text: 'Customers', class: 'text-white' }
  ];

  constructor() {}

  ngOnInit(): void {
    const toastTrigger = document.getElementById('liveToastBtn');
    const toastLiveExample = document.getElementById('liveToast');

    if (toastTrigger && toastLiveExample) {
      const toastBootstrap = new bootstrap.Toast(toastLiveExample);
      toastTrigger.addEventListener('click', () => {
        toastBootstrap.show();
      });
    }
  }
}
