import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  toggleSideBar = new EventEmitter<any>();
  faCartPlus = faCartPlus;
  public totalItems : number = 0;

  constructor(private cartService : CartService) {
  }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(result => {
        this.totalItems = result.length;
      })
  }

  emitToggleSideBar() {
    this.toggleSideBar.emit();
  }
}
