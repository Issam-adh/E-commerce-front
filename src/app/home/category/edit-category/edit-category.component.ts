import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  formCategory!: FormGroup;
  fileToUpload: File | null = null;
  id:any;
  photo:any;
  base_picture=environment.base_picture;
  constructor(private fb: FormBuilder, 
    private categoriesService: CategoriesService, 
    private router: Router, 
    private activateRouter: ActivatedRoute,
    ) { 

      this.id=this.activateRouter.snapshot.params["id"];
      
      console.log("id from activate router ",this.activateRouter.snapshot.params["id"])
  }
  ngOnInit(): void {
    this.formCategory = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      photo: ['', [Validators.required]],
    });
    this.categoriesService.getCategories(this.id).subscribe(res=>{
      console.log("id from get by id  ",res.data)
      this.formCategory.get("name")?.setValue(res.data?.name)
      this.formCategory.get("description")?.setValue(res.data?.description)
      this.photo=this.base_picture+res.data?.photo;

     })
  }
  editCategory() {
    console.log('Done ', this.formCategory.value);
    const formdata = new FormData();
    formdata.append("name", this.formCategory.get('name')!.value)
    formdata.append("description", this.formCategory.get('description')!.value)
    //formdata.append("photo", this.formCategory.get('photo')!.value)
    formdata.append("file", this.fileToUpload!);

    this.categoriesService.updateCategory(this.id,formdata).subscribe((res) => {
      console.log("Add Done ", res);
      if (res.status == 200) {
        Swal.fire('Good job!', 'You clicked the button!', 'success');
        this.router.navigate(["Category"]);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    });

  }
  handleFileInput(e: any) {
    console.log("Fine Input Done ", e.target.files[0])

    this.fileToUpload = e.target.files[0]

  }
  
}
