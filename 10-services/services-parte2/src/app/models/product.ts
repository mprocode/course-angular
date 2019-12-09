import { Department } from './department';

export class Product {
    constructor(
        public id: number,
        public name: string,
        public department: Department,
        public price: number,
        public description: string
    ) {}
}