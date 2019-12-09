import { Product } from './models/product';
import { Department } from './models/department';
import { Injectable } from '@angular/core';
import { DepartmentService } from './department.service';
import { EventEmitter } from '@angular/core';

@Injectable()
export class ProductService {

    private dataFromServer: any[] = [
        {id: 1, name: "Laptop", departmentId: 4, price: 40.00, description: 'short description laptop'},
        {id: 2, name: "Shirt", departmentId: 1, price: 10.00, description: 'short description shirt'},
        //{id: 3, name: "Polo", departmentId: 1, price: 50.00, description: 'short description Polo'},
        //{id: 4, name: "Mouse", departmentId: 4, price: 70.00, description: 'short description Mouse'},
    ];

    newProduct : EventEmitter<Product> = new EventEmitter<Product>(); // k)

    private products : Product[] = [];
    private nextId: number;

    constructor(private departmentService: DepartmentService) {
        for(let p of this.dataFromServer) {
            this.products.push(
                // new Product(p.id, p.name, new Department(1, 'teste'), p.price, p.description)
                new Product(p.id,  // k)
                    p.name, 
                    this.departmentService.getDepartmentById(p.departmentId), 
                    p.price,       
                    p.description) // k)
            );
            this.nextId = p.id + 1;
        }
    }

    getProducts() : Product[] {
        return this.products;
    }

    add(p: Product) {
        p.id = this.nextId++;
        this.products.push(p);
        console.log(this.products); 
        this.newProduct.emit(p); // k)
    }

}