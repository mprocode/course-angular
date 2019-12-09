import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../product.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-dialog-edit-product',
  templateUrl: './dialog-edit-product.component.html',
  styleUrls: ['./dialog-edit-product.component.css']
})
export class DialogEditProductComponent implements OnInit {
  
  product: Product = { _id: null, name: '', department: '', price: 0};

  constructor( public dialogRef: MatDialogRef<DialogEditProductComponent>,
               @Inject(MAT_DIALOG_DATA) public p: Product) 
  { 
    this.product = p;
    console.log(p);
  }

  ngOnInit() {
  }

  cancel(){
    this.dialogRef.close();
  }

}
