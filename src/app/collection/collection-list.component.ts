import { Component, OnInit } from '@angular/core';
import { ICollection } from './collection';
import { CollectionService } from './product.service';
@Component({
    selector: 'app-collections',
    templateUrl: './collection-list.component.html',
    styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {
collectionTitle = 'Latest Collection';
imageWidth = 50;
imageMargin = 2;
showImage = false;
errorMessage: string;
// listFilter = 'cart';
_listFilter: string;
get listFilter(): string {
    return this._listFilter;
}
set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCollections = this.listFilter ? this.performFilter(this.listFilter) : this.collections;

}

filteredCollections: ICollection[];
collections: ICollection[] = [


];
constructor(private _collectionService: CollectionService) {
    this.filteredCollections = this.collections;
}
onRatingClicker(message: string): void {
    this.collectionTitle = 'Collection:' + message;
}
performFilter(filterBy: string): ICollection[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.collections.filter((collection: ICollection) =>
       collection.collectionName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
toggleImage(): void {
    this.showImage = !this.showImage;
}


ngOnInit(): void {

    // thsi wont work as its an observable and to access it we shud sbscribethis.collections = this._collectionService.getCollections();
    this._collectionService.getCollections()
        .subscribe(collections => {
            this.collections = collections;
            this.filteredCollections = this.collections;
        },
        error => this.errorMessage = <any>error);

    // move this up this.filteredCollections = this.collections;
}
}
