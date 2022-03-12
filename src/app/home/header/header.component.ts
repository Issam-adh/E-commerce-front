import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
​
​
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
​
  constructor(private router:Router) { }
​
  ngOnInit(): void {
  }
​
  logout(){
​
    Swal.fire({
      title: 'Are you sure you want to logout?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!'
    }).then((result) => {
      if (result.isConfirmed) {
​
        this.router.navigate(["/login"])
      }
    })
  }
​
}