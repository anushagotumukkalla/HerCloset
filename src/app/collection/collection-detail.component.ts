import { Component, OnInit } from '@angular/core';
import { ICollection } from './collection';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css']
})
export class CollectionDetailComponent implements OnInit {
pageTitle: string  = 'Product Detail';
collection: ICollection;
  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.collection = {
      'collectionId': 1,
        'collectionName': 'Leaf Rake',
        'collectionCode': 'GDN-0011',
        'releaseDate': 'March 19, 2016',
        'description': 'Leaf rake with 48-inch wooden handle.',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    };
  }

  onBack(): void {
    this._router.navigate(['/collections']);
  }

}
