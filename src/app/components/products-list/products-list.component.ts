import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products:any[];
  product:any={};
  indexOfProduct:number;
  updatedProduct:{};
  dateOfToday:any;
  expired:boolean=false;
  isVisible = false;
  isOk=false;
  IsForUpdate:boolean=true;
  isForCreate:boolean=false;
    constructor(private datePipe:DatePipe) { }
  
    ngOnInit(): void {
      this.dateOfToday=new Date();
      this.dateOfToday=this.datePipe.transform(this.dateOfToday,'yyyy-MM-dd');
      console.log(this.dateOfToday);
  
      this.products=[
        {
          name:"products 1",
          description:"product 1 discription ",
          quentity:"3",
          expir_date:"2020-12-12"
        },
        {
          name:"products 2",
          description:"product 2 discription ",
          quentity:"2",
          expir_date:"2020-12-30"
        }
      ]
   this.products.forEach(product => {
     product.expir_date =product.expir_date
     console.log(product.expir_date)
    if(product.expir_date < this.dateOfToday ){
    this.expired=true;
    console.log(this.expired);
    }
     else this.expired=false;
  });
      
    }
  

  showModal(){
    this.isVisible=true;
    this.product={};
    this.IsForUpdate = false;
  

  }

  handleCancel(){
    this.isVisible = false;
  }
  handleOk(){
    this.isVisible = false;
  }
  
  saveProduct(product:{}){
      this.products.push(product);
      this.product={};
      this.isVisible = false;
     
     
    }
    
  getProduct(i){
  this.product=this.products[i];
  this.indexOfProduct=i;
   console.log(this.product);
  this.isVisible=true;
  this.IsForUpdate = true;
  }


  updateProduct(){
  let index =this.indexOfProduct;
  console.log(index)
 for(let i=0;i<this.products.length;i++){
  if(i==index){
    this.updatedProduct=this.products[i];
  };
  this.isVisible = false;
}
 

 }
    
 
 deleteProduct(i:number){
      this.products.splice(i,1);
      return this.products;
    }

}
