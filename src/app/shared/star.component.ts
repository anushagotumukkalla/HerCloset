import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';


@Component ({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
@Input() rating: number;
starWidth: number;

@Output() ratingClicker: EventEmitter<string> =
          new EventEmitter<string>();

ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
 }
 onClick(): void {
     this.ratingClicker.emit(`this is the ration for this product ${this.rating}`);
 }
}
