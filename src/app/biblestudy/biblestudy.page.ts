import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biblestudy',
  templateUrl: './biblestudy.page.html',
  styleUrls: ['./biblestudy.page.scss'],
})
export class BiblestudyPage implements OnInit {

  studies = [{title: 'Verse Endings'}, {title: 'Parashiyot'}, {title: 'Chapter 2'}]
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  viewstudy(){
    this.router.navigateByUrl('/viewstudy');
  }

}
