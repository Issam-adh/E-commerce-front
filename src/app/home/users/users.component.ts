import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:Users[] | undefined=[];
  base_picture_user=environment.base_picture;

  constructor(private usersService:UsersService ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
 getAllUsers(){
   this.usersService.getAllUsers().subscribe(res=>{
     console.log(" res users : ",res)
      this.users=res.data;

    })
 }

 removeUser(id:any){
  console.log(" User deleted", id)
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
      this.usersService.removeUser(id).subscribe((item) => {
        console.log('item remove', item);
        this.getAllUsers()
        Swal.fire('Deleted!', 'User has been deleted.', 'success');
      });
    }
  });
}


}
