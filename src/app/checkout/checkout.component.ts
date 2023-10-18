import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  selectedProvince: string = "";
  selectedSuburb: string = "";
  availableSuburbs: string[] = [];


  provinces: any[] = [
    {
      name: "Eastern Cape",
      suburbs: ["Port Elizabeth", "East London", "Grahamstown"]
    },
    {
      name: "Free State",
      suburbs: ["Bloemfontein", "Welkom", "Sasolburg"]
    },
    {
      name: "Gauteng",
      suburbs: ["Johannesburg", "Pretoria", "Soweto"]
    },
    {
      name: "Limpopo",
      suburbs: ["Polokwane", "Mokopane", "Thohoyandou", "Tshilamba", "Musina"]
    },
    {
      name: "KwaZulu-Natal",
      suburbs: ["Durban", "Pietermaritzburg", "Newcastle"]
    },
    {
      name: "Mpumalanga",
      suburbs: ["Nelspruit", "Witbank", "Secunda"]
    },
    {
      name: "North West",
      suburbs: ["Rustenburg", "Mafikeng", "Klerksdorp"]
    },
    {
      name: "Northern Cape",
      suburbs: ["Kimberley", "Upington", "Springbok"]
    },
    {
      name: "Western Cape",
      suburbs: ["Cape Town", "Stellenbosch", "George"]
    },
  ];
  
  

  items = [
    {
      name: 'Product name',
      description: 'Brief description',
      price: 12,
    },
    {
      name: 'Second product',
      description: 'Brief description',
      price: 8,
    },
    {
      name: 'Third item',
      description: 'Brief description',
      price: 5,
    },
    {
      name: 'Promo code',
      description: 'EXAMPLECODE',
      price: -5,
    },
  ];


  constructor() {}

  ngOnInit(): void {
    // Initialize the popover for your element
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  }

  getTotalPrice(): number {
    let amount = 0;
    let promo = 0;
  
    this.items.forEach((item) => {
      if (item) {
        if (item.name !== 'Promo code') {
          amount += item.price;
        } else {
          promo = Math.abs(item.price);
        }
      }
    });
  
    return amount - promo;
  }
  


  provinceChanged() {
    console.log('Selected Province: ', this.selectedProvince);
    const selectedProvinceData = this.provinces.find((p) => p.name === this.selectedProvince);
    if (selectedProvinceData) {
      this.availableSuburbs = selectedProvinceData.suburbs;
    } else {
      this.availableSuburbs = [];
    }
    this.selectedSuburb = ""; // Reset the selected suburb
  }
}
