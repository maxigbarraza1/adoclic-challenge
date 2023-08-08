import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss'],
})
export class ErrorDialogComponent {
  @Input() errorMsg: string | null = null;

  constructor(private _modalService: NgbModal) {}

  closeDialog(): void {
    this._modalService.dismissAll();
  }
}
