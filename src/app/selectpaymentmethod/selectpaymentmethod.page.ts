import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selectpaymentmethod',
  templateUrl: './selectpaymentmethod.page.html',
  styleUrls: ['./selectpaymentmethod.page.scss'],
})
export class SelectpaymentmethodPage implements OnInit {

  data;

  constructor(public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.amount;
        console.log(this.data);
      }
    });
  }

}
