import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IItem } from '../items-list/items-list.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: IItem;
  @Output() onAddItem: EventEmitter<IItem> = new EventEmitter();

  onAdd(item: IItem) {
    this.onAddItem.emit(item);
  }
}
