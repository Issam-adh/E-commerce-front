import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products:Products[] | undefined=[];
  constructor( private productsService:ProductsService) { }

  ngOnInit(): void {
 this.getAllProducts();
  }

  getAllProducts(){
    this.productsService.getAllProducts().subscribe(res=>{
      console.log(" res Products :", res)
      this.products=res.data;
    })
  }

  removeProduct(id:any){
    console.log(" Product deleted", id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productsService.removeProduct(id).subscribe((item) => {
          console.log('item remove', item);
          this.getAllProducts()
          Swal.fire('Deleted!', 'Product has been deleted.', 'success');
        });
      }
    });
  }

  

}
