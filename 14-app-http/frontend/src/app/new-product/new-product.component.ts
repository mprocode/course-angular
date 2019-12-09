import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { FormControl, FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  //workaround to reset the material form
  @ViewChild('form') form: NgForm; // https://github.com/angular/material2/issues/4190

  private products: Product[];

  private prod: Product = null;
  private name: string = "";
  private alldepartments: Department[] = [];
  private stock: number = 0;
  private price: number = 0.00;

  private unsubscribe$: Subject<any> = new Subject();

  productForm: FormGroup = this.fb.group({
    _id: [null],
    name: ['', [Validators.required]],
    stock: ['', [Validators.required, Validators.min(0)]],
    price: [0, [Validators.required, , Validators.min(0)]],
    departments: [[], [Validators.required] ]
  });

  constructor(
    private departmentService: DepartmentService,
    private productService: ProductService,
    private  snackBar: MatSnackBar,
    private fb: FormBuilder    ) {}

  ngOnInit() {
    console.log(this.productForm.controls['departments']);
    this.productService.get()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((prods)=>this.products = prods);
    this.departmentService.get()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(deps => this.alldepartments = deps);
  }

  save() {
    let data = {
      ...this.productForm.value, 
      departments: Object.assign([], this.productForm.value.departments)
    };
    if (data._id != null) 
      this.productService.update(data)
        .subscribe(
          (prod) => this.notify("Updated!"),
          (err) =>  this.notify(err.error.msg)
        );
    else 
      this.productService.add(data)
        .subscribe(
          ()    => this.notify("Inserted!"),
          (err) => this.notify(err.error.msg)
        );      
    this.clearFields();
  }

  cancel() {
    this.clearFields();  
  }

  clearFields() {
    //this.productForm.reset();
    this.form.resetForm();
    // https://github.com/angular/material2/issues/4190
  }

  edit(p: Product) {
    this.productForm.setValue(p);
  }

  del(p: Product) {
    this.productService.del(p)
    .subscribe(
      ()    => this.notify("Removed!"),
      (err) => this.notify(err.error.msg)
    );    
  }
  
  ngOnDestroy() {
    this.unsubscribe$.next();
  }

  notify(msg: string) {
    this.snackBar.open(msg, "OK", {duration: 3000});
  }


}
