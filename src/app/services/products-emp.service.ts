import {Injectable} from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import {ProductEmp} from '../models/productsEmp';



@Injectable({
    providedIn:'root'
}) 
export class ProductsEmpService{
    productsCollection:AngularFirestoreCollection<ProductEmp>;
    productsEmp: Observable<ProductEmp[]>;
    productsDoc:AngularFirestoreDocument<ProductEmp>;

    constructor(public db:AngularFirestore){
        // this.productsEmp = this.db.collection('productsEmp').valueChanges();
        this.productsCollection = this.db.collection('productsEmp');
        this.productsEmp = this.productsCollection.snapshotChanges().pipe(map(actions=>{
            return actions.map(a =>{
                const data = a.payload.doc.data() as ProductEmp;
                data.id = a.payload.doc.id;
                return data;
            });
        }))
    }

    public getProductsEmp()
    {
        //console.log('heyyy')
        //console.log(this.productsEmp);
        return this.productsEmp;
    }
    addProductsEmp(products:ProductEmp){
        this.productsCollection.add(products);
    }


    deleteProductsEmp(products:ProductEmp){
        this.productsDoc = this.db.doc(`productsEmp/${products.id}`);
        this.productsDoc.delete();
    }
    updateProductEmp(products:ProductEmp){
        this.productsDoc = this.db.doc(`productsEmp/${products.id}`);
        this.productsDoc.update(products);
    }


}