import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Product } from './models/product';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsCollection: AngularFirestoreCollection<Product> = this.afs.collection('products');

  constructor(private afs: AngularFirestore) {
  }

  getProducts(): Observable<Product[]> {
    return this.productsCollection.valueChanges();
  }

  addProduct(p: Product) {
    // return this.productsCollection.add(p);

    // id faz parte do metadado do registro, nao retornado
    const id = this.afs.createId();
    p.id = id;
    return this.productsCollection.doc(id).set(p);
  }
  
  updateProduct(p: Product) {
    return this.productsCollection.doc(p.id).set(p);
  }
  
  deleteProduct(p: Product) {
    return this.productsCollection.doc(p.id).delete();
  }  

  findName(s: string): Observable<Product[]> {
    // https://github.com/angular/angularfire2/blob/master/docs/firestore/querying-collections.md
    // https://firebase.google.com/docs/firestore/query-data/queries
    return this.afs
      .collection<Product>('products', 
        ref => ref.where('name',">=",s))
      .valueChanges();
    /*
    return this.afs.collection<Product>('products',
        ref => ref.orderBy("name").startAt(s).endAt(s+"\uf8ff"))
      .valueChanges();
    */
  }
}
