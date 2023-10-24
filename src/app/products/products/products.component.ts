import { Component, OnInit } from '@angular/core';
import { IFeaturette } from 'src/interfaces/IFeaturette';
import { ItemsService } from '../items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  loading: boolean = true; // This will control whether to show placeholders or actual items.
  loadingPlaceholders = Array(6).fill(0); // Placeholder array for loading items.


  features: IFeaturette[] = [
    {
      imageUrl: 'https://i5-images.massmart.co.za/asr/23ca8679-3292-498b-a56a-1c7c5693e9ca.574dc2e3429c6974c934c189d2a89020.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: 66179,
      name: 'Dell Precision 5760 Laptop',
      description: 'Intel Core i7-11850H 512GB SSD 16GB RAM Win 10 Pro!',
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://i5-images.massmart.co.za/asr/f9cbe209-e75b-4ec8-99ec-5ab5443bbb0a.ee418c208939073ea5ef6d523e434249.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: 61499,
      name: 'Dell Latitude 9440 Laptop',
      description: `Intel Core i7-1365U 512GB SSD 16GB RAM Win 11 Pro`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://i5-images.massmart.co.za/asr/9ada6293-dfef-4a07-8ffd-30dc26c75830.e629ca80934ad114fd750832be5d2579.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: 5499,
      name: 'HP Student Laptop Bundle',
      description: `Intel Core i3-1165U 512GB SSD 6GB RAM Win 10 Pro`,
      link: '#',
      class1: undefined,
      class2: undefined,
    }
    ,
    {
      imageUrl: 'https://media.takealot.com/covers_tsins/58485445/58485445-1-zoom.jpeg',
      price: 699,
      name: 'Tech Geeks Double Din HD Touch Screen',
      description: `Radio/BT/USB/MP5/Reverse Cam Support`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://media.takealot.com/covers_tsins/58484436/58484436-1-zoom.jpeg',
      price: 4899,
      name: 'Raspberry Pi 4',
      description: `Model B - 8GB, Single Board Computer`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://media.takealot.com/covers_images/777ea03fccf446a298bdf7e13637c4db/s-zoom.file',
      price: 2199,
      name: 'Vision Ergonomic Gaming Chair',
      description: `Lowest price guaranteed - shop before it's gone!`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://i5-images.massmart.co.za/asr/23ca8679-3292-498b-a56a-1c7c5693e9ca.574dc2e3429c6974c934c189d2a89020.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: 66179,
      name: 'Dell Precision 5760 Laptop',
      description: 'Intel Core i7-11850H 512GB SSD 16GB RAM Win 10 Pro!',
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://i5-images.massmart.co.za/asr/f9cbe209-e75b-4ec8-99ec-5ab5443bbb0a.ee418c208939073ea5ef6d523e434249.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: 61499,
      name: 'Dell Latitude 9440 Laptop',
      description: `Intel Core i7-1365U 512GB SSD 16GB RAM Win 11 Pro`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://i5-images.massmart.co.za/asr/9ada6293-dfef-4a07-8ffd-30dc26c75830.e629ca80934ad114fd750832be5d2579.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: 5499,
      name: 'HP Student Laptop Bundle',
      description: `Intel Core i3-1165U 512GB SSD 6GB RAM Win 10 Pro`,
      link: '#',
      class1: undefined,
      class2: undefined,
    }
    ,
    {
      imageUrl: 'https://media.takealot.com/covers_tsins/58485445/58485445-1-zoom.jpeg',
      price: 699,
      name: 'Tech Geeks Double Din HD Touch Screen',
      description: `Radio/BT/USB/MP5/Reverse Cam Support`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://media.takealot.com/covers_tsins/58484436/58484436-1-zoom.jpeg',
      price: 4899,
      name: 'Raspberry Pi 4',
      description: `Model B - 8GB, Single Board Computer`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://media.takealot.com/covers_images/777ea03fccf446a298bdf7e13637c4db/s-zoom.file',
      price: 2199,
      name: 'Vision Ergonomic Gaming Chair',
      description: `Lowest price guaranteed - shop before it's gone!`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://i5-images.massmart.co.za/asr/23ca8679-3292-498b-a56a-1c7c5693e9ca.574dc2e3429c6974c934c189d2a89020.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: 66179,
      name: 'Dell Precision 5760 Laptop',
      description: 'Intel Core i7-11850H 512GB SSD 16GB RAM Win 10 Pro!',
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://i5-images.massmart.co.za/asr/f9cbe209-e75b-4ec8-99ec-5ab5443bbb0a.ee418c208939073ea5ef6d523e434249.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: 61499,
      name: 'Dell Latitude 9440 Laptop',
      description: `Intel Core i7-1365U 512GB SSD 16GB RAM Win 11 Pro`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://i5-images.massmart.co.za/asr/9ada6293-dfef-4a07-8ffd-30dc26c75830.e629ca80934ad114fd750832be5d2579.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: 5499,
      name: 'HP Student Laptop Bundle',
      description: `Intel Core i3-1165U 512GB SSD 6GB RAM Win 10 Pro`,
      link: '#',
      class1: undefined,
      class2: undefined,
    }
    ,
    {
      imageUrl: 'https://media.takealot.com/covers_tsins/58485445/58485445-1-zoom.jpeg',
      price: 699,
      name: 'Tech Geeks Double Din HD Touch Screen',
      description: `Radio/BT/USB/MP5/Reverse Cam Support`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://media.takealot.com/covers_tsins/58484436/58484436-1-zoom.jpeg',
      price: 4899,
      name: 'Raspberry Pi 4',
      description: `Model B - 8GB, Single Board Computer`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://media.takealot.com/covers_images/777ea03fccf446a298bdf7e13637c4db/s-zoom.file',
      price: 2199,
      name: 'Vision Ergonomic Gaming Chair',
      description: `Lowest price guaranteed - shop before it's gone!`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://i5-images.massmart.co.za/asr/23ca8679-3292-498b-a56a-1c7c5693e9ca.574dc2e3429c6974c934c189d2a89020.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: 66179,
      name: 'Dell Precision 5760 Laptop',
      description: 'Intel Core i7-11850H 512GB SSD 16GB RAM Win 10 Pro!',
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://i5-images.massmart.co.za/asr/f9cbe209-e75b-4ec8-99ec-5ab5443bbb0a.ee418c208939073ea5ef6d523e434249.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: 61499,
      name: 'Dell Latitude 9440 Laptop',
      description: `Intel Core i7-1365U 512GB SSD 16GB RAM Win 11 Pro`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://i5-images.massmart.co.za/asr/9ada6293-dfef-4a07-8ffd-30dc26c75830.e629ca80934ad114fd750832be5d2579.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: 5499,
      name: 'HP Student Laptop Bundle',
      description: `Intel Core i3-1165U 512GB SSD 6GB RAM Win 10 Pro`,
      link: '#',
      class1: undefined,
      class2: undefined,
    }
    ,
    {
      imageUrl: 'https://media.takealot.com/covers_tsins/58485445/58485445-1-zoom.jpeg',
      price: 699,
      name: 'Tech Geeks Double Din HD Touch Screen',
      description: `Radio/BT/USB/MP5/Reverse Cam Support`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://media.takealot.com/covers_tsins/58484436/58484436-1-zoom.jpeg',
      price: 4899,
      name: 'Raspberry Pi 4',
      description: `Model B - 8GB, Single Board Computer`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://media.takealot.com/covers_images/777ea03fccf446a298bdf7e13637c4db/s-zoom.file',
      price: 2199,
      name: 'Vision Ergonomic Gaming Chair',
      description: `Lowest price guaranteed - shop before it's gone!`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },{
      imageUrl: 'https://i5-images.massmart.co.za/asr/23ca8679-3292-498b-a56a-1c7c5693e9ca.574dc2e3429c6974c934c189d2a89020.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: 66179,
      name: 'Dell Precision 5760 Laptop',
      description: 'Intel Core i7-11850H 512GB SSD 16GB RAM Win 10 Pro!',
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://i5-images.massmart.co.za/asr/f9cbe209-e75b-4ec8-99ec-5ab5443bbb0a.ee418c208939073ea5ef6d523e434249.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: 61499,
      name: 'Dell Latitude 9440 Laptop',
      description: `Intel Core i7-1365U 512GB SSD 16GB RAM Win 11 Pro`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://i5-images.massmart.co.za/asr/9ada6293-dfef-4a07-8ffd-30dc26c75830.e629ca80934ad114fd750832be5d2579.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF',
      price: 5499,
      name: 'HP Student Laptop Bundle',
      description: `Intel Core i3-1165U 512GB SSD 6GB RAM Win 10 Pro`,
      link: '#',
      class1: undefined,
      class2: undefined,
    }
    ,
    {
      imageUrl: 'https://media.takealot.com/covers_tsins/58485445/58485445-1-zoom.jpeg',
      price: 699,
      name: 'Tech Geeks Double Din HD Touch Screen',
      description: `Radio/BT/USB/MP5/Reverse Cam Support`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://media.takealot.com/covers_tsins/58484436/58484436-1-zoom.jpeg',
      price: 4899,
      name: 'Raspberry Pi 4',
      description: `Model B - 8GB, Single Board Computer`,
      link: '#',
      class1: undefined,
      class2: undefined,
    },
    {
      imageUrl: 'https://media.takealot.com/covers_images/777ea03fccf446a298bdf7e13637c4db/s-zoom.file',
      price: 2199,
      name: 'Vision Ergonomic Gaming Chair',
      description: `Lowest price guaranteed - shop before it's gone!`,
      link: '#',
      class1: undefined,
      class2: undefined,
    }
  ];

  constructor(private itemsService: ItemsService, private router: Router){}

  ngOnInit(): void {
    const imageLoadPromises: Promise<void>[] = this.features.map((feature, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = feature.imageUrl;
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
    });
  
    Promise.all(imageLoadPromises).then(() => {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    });
  }

  handleItemSelected(item: IFeaturette) {
    console.log('Selected Item:', item);
    this.router.navigate(['/product', item.name.toLowerCase().replace(/ /g, '-')]);

  }
  
}

