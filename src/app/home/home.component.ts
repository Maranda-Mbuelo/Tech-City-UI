import { Component, OnInit } from '@angular/core';
import { IFeaturette } from 'src/interfaces/IFeaturette';
import { forkJoin, Observable, of } from 'rxjs';
import { concatMap, finalize } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contentLoaded: boolean = false;
  
  slides: any[] =[]

  features = [
    {
      imageUrl: 'https://i5-images.massmart.co.za/asr/23ca8679-3292-498b-a56a-1c7c5693e9ca.574dc2e3429c6974c934c189d2a89020.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: '66179',
      description: 'Dell Precision 5760 17.0-inch FHD+ Laptop - Intel Core i7-11850H 512GB SSD 16GB RAM Win 10 Pro',
      link: '#'
    },
    {
      imageUrl: 'https://i5-images.massmart.co.za/asr/f9cbe209-e75b-4ec8-99ec-5ab5443bbb0a.ee418c208939073ea5ef6d523e434249.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: '61499',
      description: 'Dell Latitude 9440 14-inch QHD+ 2-in-1 Laptop - Intel Core i7-1365U 512GB SSD 16GB RAM Win 11 Pro',
      link: '#'
    },
    {
      imageUrl: 'https://i5-images.massmart.co.za/asr/9ada6293-dfef-4a07-8ffd-30dc26c75830.e629ca80934ad114fd750832be5d2579.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: ' 5499',
      description: 'HP Student Laptop Bundle',
      link: '#'
    }
  ];

  featurettes: IFeaturette[] = [
    {
      imageUrl: 'https://www.teqfind.com/content/products/103109555_1058809319.jpg?width=1920',
      name: 'Onikuma K20 Gaming Headset Over-Ear Headphones With Microphone - Black',
      description: `Eligible for next-day delivery or collection.
      Eligible for Cash on Delivery.
      Hassle-Free Exchanges & Returns for 30 Days.
      6-Month Limited Warranty.`,
      price: 1499.99,
      class1: 'col-md-7',
      class2: 'col-md-5',
    },
    {
      imageUrl: 'https://i.ebayimg.com/images/g/u3kAAOSwvdpi5tpu/s-l1200.webp',
      name: 'Logitech G915 TKL LIGHTSPEED Wireless RGB Mechanical Gaming Keyboard',
      description: `Free Delivery Available.
      Hassle-Free Exchanges & Returns for 30 Days.
      24-Month Limited Warranty.`,
      price: 1999.99,
      class1: 'col-md-7 order-md-2',
      class2: 'col-md-5 order-md-1',
    },
    {
      imageUrl: 'https://media.takealot.com/covers_images/d57af52d724041fe8ea8772f96cdeefc/s-zoom.file',
      name: 'HP 15s-fq0011ni, 15.6", Intel Celeron N4120, 4GB RAM, 128GB SSD',
      description: `Eligible for next-day delivery or collection.
      Free Delivery Available.
      Hassle-Free Exchanges & Returns for 30 Days.
      12-Month Limited Warranty.`,
      price: 1799.99,
      class1: 'col-md-7',
      class2: 'col-md-5',
    },
  ];
  

  constructor() {}

  ngOnInit(): void {

    this.slides = [
      {
        imageUrl: 'https://i.pcmag.com/imagery/articles/00866hoEzvwpCVMuTTqXOrp-2..v1634857232.jpg',
        title: 'get the new rasberryPi 5 now!',
        description: 'Some representative placeholder content for the first slide of the carousel.',
        buttonText: 'Buy Now!'
      },
      {
        // imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c2aee6945776e85d14956ae/1605745481641-XVYL5UV5VJB6P8SRXT8L/shop-blue-sky-social.png',
        title: 'Why Choose Tech City?',
        description: `Discover top-quality tech products, an impeccable reputation, <br>and a shopping experience like no other. <br>With a diverse range of cutting-edge gadgets and expert guidance, <br>we're committed to making your tech dreams come true. Join the TechStore family and embrace the future today!`,
        buttonText: 'Learn more'
      },      
      {
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipMrmR2z77oVwqymkcgb_9gd3nIWtwl7JxNAjHfR=s1630-k-no',
        title: 'Planning to Swing By Our Store?',
        description: 'Discover our Earthly haven at Awesome Street, Tech City. <br>We can\'t wait to welcome you to our tech wonderland!',
        buttonText: 'Browse gallery'
      }      
    ];

    this.preloadImages()
    .pipe(finalize(() => {
      this.contentLoaded = true;
    }))
    .subscribe();
  }

  preloadImages(): Observable<any> {
    const imageUrls = [
      'https://i.pcmag.com/imagery/articles/00866hoEzvwpCVMuTTqXOrp-2..v1634857232.jpg',
      'https://images.squarespace-cdn.com/content/v1/5c2aee6945776e85d14956ae/1605745481641-XVYL5UV5VJB6P8SRXT8L/shop-blue-sky-social.png',
      'https://lh5.googleusercontent.com/p/AF1QipMrmR2z77oVwqymkcgb_9gd3nIWtwl7JxNAjHfR=s1630-k-no'
    ];
  
    const observables = imageUrls.map((url) => {
      return new Observable<void>((observer) => {
        const img = new Image();
        img.onload = () => {
          observer.next();
          observer.complete();
        };
        img.src = url;
      });
    });
  
    return forkJoin(observables);
  }
  
}
