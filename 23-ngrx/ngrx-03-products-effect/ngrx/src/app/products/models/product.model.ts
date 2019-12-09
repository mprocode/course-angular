import { Department } from './department.model';

export interface Product {
    name:  string;
    price: number;
    stock: number;
    departments: Department[] | string[];
    _id: string;
}