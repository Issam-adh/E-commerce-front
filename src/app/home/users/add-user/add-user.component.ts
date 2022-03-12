import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  formUser!: FormGroup;
  fileToUpload: File | null = null;
  constructor(private fb: FormBuilder, private userService: UsersService, private router:Router) { }

  ngOnInit(): void {
    this.formUser = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      photo: ['', [Validators.required]],
    });
  }

  addUser() {
    console.log('Done ', this.formUser.value);
    const formdata = new FormData();
    formdata.append("firstName", this.formUser.get('firstName')!.value)
    formdata.append("lastName", this.formUser.get('lastName')!.value)
    formdata.append("email", this.formUser.get('email')!.value)
    formdata.append("password", this.formUser.get('password')!.value)
    formdata.append("file", this.fileToUpload!);
 

    this.userService.addUser(formdata).subscribe((res) => {
      console.log("Add Done ", res);
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
