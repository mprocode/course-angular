import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig, MatDialog } from '@angular/material';
import { DialogEditProductComponent } from './dialog-edit-product/dialog-edit-product.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'client';
  
  simpleReqProductsObs: Observable<Product[]>;
  productsErrorHandling: Product[];
  bLoading: boolean = false;
  productsLoading: Product[];
  productsIds: Product[];
  newlyProducts: Product[] = [];
  productsToDelete: Product[] = [];
  productsToEdit: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) {    
  }

  ngOnInit() {

  }

  getSimpleHttpRequest() {
    //this.productsService.getProducts()
      //.subscribe(prods => console.log(prods));
      //.subscribe((prods: Product[]) => console.log(prods));
    this.simpleReqProductsObs = this.productsService.getProducts();
  }
  
  cancelSimpleHttpRequest(){
    this.simpleReqProductsObs = null;
  }

  getProductsWithErrorHandling() {
    this.productsService.getProductsError()
      .subscribe(
        prods => this.productsErrorHandling = prods,
        err => {
          console.log(err);
          console.log("Message: ",err.error.msg);
          console.log("Status code", err.status);

          let config = new MatSnackBarConfig();
          config.duration = 2000;
          config.panelClass = ['snack_err'];
          // let snackBarRef = this.snackBar.open(err.error.msg, '', config);
          if (err.status != 0) {
            let snackBarRef = this.snackBar.open(err.error.msg, '', config);  
          }
          else {
            let snackBarRef = this.snackBar.open("Couldn't connect to the server.", '', config);  
          }
        }
      )
  }

  getProductsWithErrorHandlingOk() {
    this.productsService.getProductsDelay()
      .subscribe(
        prods => { 
          let config = new MatSnackBarConfig();
          config.duration = 2000;
          config.panelClass = ['snack_ok'];
          let snackBarRef = this.snackBar.open('Products have been loaded successfully', '', config);
          this.productsErrorHandling = prods;
        },
        err => {
          console.log(err);
        }
      )
  }

  getProductsLoading() {
    this.bLoading = true;
    this.productsService.getProductsDelay()
      .subscribe(
        prods => { 
          this.productsLoading = prods;
          console.log(prods);
          this.bLoading = false;
        },
        err => {
          console.log(err);
          this.bLoading = false;
        }
      )    
  }

  getProductsIds() {
    this.productsIds = [];
    this.productsService.getProductsIDs()
      .subscribe(
        ids => ids.map( 
          id => this.productsIds.push(
            { _id: id, name: "", price: 0, department: ""}))
      );
  }

  loadName(id: string) {
    this.productsService.getProductName(id)
      .subscribe(
        name => {
          let i = this.productsIds.findIndex(i=>i._id===id);
          if (i != -1)
            this.productsIds[i].name = name;
        }
      )
  }

  saveProduct(name: string, dep: string, price: number) {
    console.log(name + " " + dep + " " + price);
    this.productsService.saveProduct({
        '_id': null,
        'name': name,
        'department': dep,
        'price': price
      })
      .subscribe(
        (p: Product) => { 
          console.log(p);
          this.newlyProducts.push(p);
        },
        err => {
          console.error(err);
          let config = new MatSnackBarConfig();
          config.duration = 2000;
          config.panelClass = ['snack_err'];
          let snackBarRef = this.snackBar.open("Error during the post request", '', config);
        }
      )
  }

  loadProductsToDelete() {
    this.productsService.getProducts()
      .subscribe((prods: Product[]) => this.productsToDelete = prods);
  }

  deleteProduct(p: Product) {
    this.productsService.deleteProduct(p)
      .subscribe(
        (resp) => {
          console.log(resp);
          let i = this.productsToDelete.findIndex(prod=>prod._id==p._id);
          if (i>-1)
            this.productsToDelete.splice(i,1);
        },
        (err) => console.error(err)
    );
  }

  loadProductsToEdit() {
    this.productsService.getProducts()
      .subscribe((prods: Product[]) => this.productsToEdit = prods);    
  } 
  
  editProduct(p: Product) {
    var data = Object.assign({}, p); // clone
    const dialogRef = this.dialog.open(DialogEditProductComponent, {width: '400px', data: data});    

    dialogRef.afterClosed()
      .subscribe((res: Product) => {
        console.log(res);
        if (res) {
          this.productsService.editProduct(res)
            .subscribe(
              (resp) => {
                console.log(resp);
                let i = this.productsToEdit.findIndex(prod=>prod._id==p._id);
                if (i>-1)
                  this.productsToEdit[i] = resp;
              },
              (err) => console.error(err)
            );
        }
      });
  }
}
