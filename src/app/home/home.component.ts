import { Component, OnInit } from '@angular/core';
import { IFeaturette } from 'src/interfaces/IFeaturette';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  slides: any[] =[]

  features = [
    {
      imageUrl: 'https://res.cloudinary.com/ddigkgb9y/image/upload/v1696671785/20221120_120520_nll5gc.jpg',
      title: 'Heading',
      description: 'Some representative placeholder content for the three columns of text below the carousel.',
      link: '#'
    },
    {
      imageUrl: 'https://res.cloudinary.com/ddigkgb9y/image/upload/v1696671785/20221120_120520_nll5gc.jpg',
      title: 'Heading',
      description: 'Another exciting bit of representative placeholder content. This time, we\'ve moved on to the second column.',
      link: '#'
    },
    {
      imageUrl: 'https://res.cloudinary.com/ddigkgb9y/image/upload/v1696671785/20221120_120520_nll5gc.jpg',
      title: 'Heading',
      description: 'And lastly this, the third column of representative placeholder content.',
      link: '#'
    }
  ];

  featurettes: IFeaturette[] = [
    {
      imageUrl: 'https://www.teqfind.com/content/products/103109555_1058809319.jpg?width=1920',
      title: 'First featurette heading.',
      subtitle: 'It’ll blow your mind.',
      description: 'Some great placeholder content for the first featurette here.',
      class1: 'col-md-7',
      class2: 'col-md-5'
    },
    {
      imageUrl: 'https://i.ebayimg.com/images/g/u3kAAOSwvdpi5tpu/s-l1200.webp',
      title: 'Oh yeah, it’s that good.',
      subtitle: 'See for yourself.',
      description: 'Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.',
      class1: 'col-md-7 order-md-2',
      class2: 'col-md-5 order-md-1'
    },
    {
      imageUrl: 'https://media.takealot.com/covers_images/d57af52d724041fe8ea8772f96cdeefc/s-zoom.file',
      title: 'And lastly, this one.',
      subtitle: 'Checkmate.',
      description: 'And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content.',
      class1: 'col-md-7',
      class2: 'col-md-5'
    }
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
  }
}
