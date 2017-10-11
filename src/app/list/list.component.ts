import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Advertisement } from '../models';
import { Filter } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    constructor(private http: Http) { }
    filter: Filter = new Filter();
    advertisements: Advertisement[];
    ngOnInit() {
      this.getAdvertisements();
    }
    getAdvertisements() {
      this.http.get('/api/Advertisement/Search', { params: this.filter })
              .subscribe(r => this.advertisements = r.json());
    }


}
