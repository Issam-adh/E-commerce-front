import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Categories[]| undefined=[];
  base_picture=environment.base_picture;
  constructor(private categorieService:CategoriesService) { }
  ngOnInit(): void {
     this.getAllCategories();
  }
   getAllCategories(){
     this.categorieService.getAllCategories().subscribe(res=>{
      console.log("res categories : ",res)
      this.categories=res.data;
     })
   }

   removeCategory(id:any){
    console.log(" category deleted", id)
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
        this.categorieService.removeCategory(id).subscribe((item) => {
          console.log('item remove', item);
          this.getAllCategories()
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        });
      }
    });
  }
  updateCategory(category: Categories) {
    console.log('categories', category);
   /* this.categorieService
      .updateCategory(category.id, category)
      .subscribe((item) => {
        console.log('item update', item);
      });*/
  }
  

}
