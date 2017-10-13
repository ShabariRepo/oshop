import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../shared/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders$;

  // for admin get all orders placed
  constructor(private orderService: OrderService) {
    this.orders$ = orderService.getOrders();
  }

  ngOnInit() {
  }

}
