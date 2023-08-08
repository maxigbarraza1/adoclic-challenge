import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDomainRequestProduct } from '../../../../../domain/products/domain/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  @Input() product: IDomainRequestProduct | null = null;

  constructor(private _modalService: NgbModal) {}

  closeDialog(): void {
    this._modalService.dismissAll();
  }
}
