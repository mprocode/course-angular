import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Department } from 'src/app/products/models/department.model';
import { Product } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnChanges {

  @Input() departments: Department[];
  @Input() product: Product;
  @Output() onSave: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();

  productForm = this.fb.group({
    name: ['',  Validators.required],
    stock: ['',  [Validators.required, Validators.min(0)]],
    price: ['',  [Validators.required, Validators.min(0)]],
    departments: [[],  Validators.required],
    _id: ['']
  });

  constructor(private fb: FormBuilder) { }

  get formDepartments() {
    return this.productForm.get('departments');
  }

  cancel() {
    this.onCancel.emit();
  }

  onSubmit() {
    console.log(this.productForm.value);
    this.onSave.emit(this.productForm.value)
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.productForm.setValue(this.product);
  }

}
