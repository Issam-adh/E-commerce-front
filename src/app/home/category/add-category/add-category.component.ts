import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import Swal from 'sweetalert2';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  formCategory!: FormGroup;
  fileToUpload: File | null = null;
  constructor(private fb: FormBuilder, private categoriesService: CategoriesService, private router:Router) { }
  ngOnInit(): void {
    this.formCategory = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      photo: ['', [Validators.required]],
    });
  }
  addCategory() {
    console.log('Done ', this.formCategory.value);
    const formdata = new FormData();
    formdata.append("name", this.formCategory.get('name')!.value)
    formdata.append("description", this.formCategory.get('description')!.value)
    formdata.append("file", this.fileToUpload!);

    this.categoriesService.addCategory(formdata).subscribe((res) => {
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