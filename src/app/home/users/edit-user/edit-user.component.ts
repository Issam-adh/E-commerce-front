import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  formUser!: FormGroup;
  fileToUpload: File | null = null;
  id:any;
  photo:any;
  base_picture_user=environment.base_picture;
  constructor(private fb: FormBuilder, 
    private userServices:UsersService,
    private router:Router,
    private activateRouter:ActivatedRoute) {

      this.id=this.activateRouter.snapshot.params["id"];
      
      console.log("id from activate router ",this.activateRouter.snapshot.params["id"])

     }

  ngOnInit(): void {
    this.formUser = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      photo: ['', [Validators.required]],
    });
    this.userServices.getUsers(this.id).subscribe(res=>{
      console.log("id from get by ID ",res.data)
      this.formUser.get("firstName")?.setValue(res.data?.firstName)
      this.formUser.get("lastName")?.setValue(res.data?.lastName)
      this.formUser.get("email")?.setValue(res.data?.email)
      this.formUser.get("password")?.setValue(res.data?.password)
      this.photo=this.base_picture_user+res.data?.photo;

     })
  }
  editUser() {
    console.log('Done ', this.formUser.value);
    const formdata = new FormData();
    formdata.append("firstName", this.formUser.get('firstName')!.value)
    formdata.append("lastName", this.formUser.get('lastName')!.value)
    formdata.append("email", this.formUser.get('email')!.value)
    formdata.append("password", this.formUser.get('password')!.value)
    //formdata.append("photo", this.formUser.get('photo')!.value)
    formdata.append("file", this.fileToUpload!);

    this.userServices.updateUser(this.id,formdata).subscribe((res) => {
      console.log("Update User Done ", res);
      if (res.status == 200) {
        Swal.fire('Good job!', 'You clicked the button!', 'success');
        this.router.navigate(["users"]);
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
