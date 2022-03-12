import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/orders';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:Orders[] | undefined=[];
  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
    this.getAllOrders();

  }
  getAllOrders(){
    this.ordersService.getAllOrders().subscribe(res=>{
      console.log(" res orders:",res)
      this.orders=res.data;
    }) 
  }
}
