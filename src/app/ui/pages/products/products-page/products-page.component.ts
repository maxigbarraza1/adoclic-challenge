import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription, map, startWith } from 'rxjs';
import { AuthService } from '../../../../domain/auth/application/auth.service';
import { ProductsService } from '../../../../domain/products/application/products.service';
import { IDomainRequestProduct } from '../../../../domain/products/domain/product.model';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit, AfterViewInit, OnDestroy {
  products: MatTableDataSource<IDomainRequestProduct> =
    new MatTableDataSource<IDomainRequestProduct>();

  filteredOptions: Observable<string[]> = new Observable<string[]>();
  filterFormControl = new FormControl('');
  options: string[] = [];

  displayedColumns: string[] = ['id', 'title', 'category', 'price', 'actions'];
  pageSizeOptions = [5, 10, 20];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private subscriptions: Subscription[] = [];

  constructor(
    private _modalService: NgbModal,
    private _productsService: ProductsService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    const productServiceSub1 = this._productsService
      .getProducts()
      .subscribe((products) => {
        this.products = new MatTableDataSource(products);
        this.products.paginator = this.paginator;
        this.products.sort = this.sort;
      });
    const productServiceSub2 = this._productsService
      .getProductCategories()
      .subscribe((categories) => {
        this.options = categories;
      });
    this.filteredOptions = this.filterFormControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterAutocomplete(value || ''))
    );
    this.subscriptions.push(productServiceSub1, productServiceSub2);
  }

  ngAfterViewInit(): void {
    this.products.paginator = this.paginator;
    this.products.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  openProductDetails(): void {
    this._modalService.open(ProductDetailsComponent);
  }

  logout(): void {
    this._authService.logout();
  }

  private _applyFilter(value: string) {
    const filterValue = value;
    this.products.filter = filterValue.trim().toLowerCase();

    if (this.products.paginator) {
      this.products.paginator.firstPage();
    }
  }

  private _filterAutocomplete(value: string): string[] {
    const filterValue = value.toLowerCase();

    if (this.options.includes(filterValue)) {
      this._applyFilter(filterValue);
    } else {
      this._applyFilter('');
    }
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
