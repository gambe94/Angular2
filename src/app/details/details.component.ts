import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Advertisement } from '../models';
import { Http } from '@angular/http';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  advertisement: Advertisement;
  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.http.get('api/Advertisement/Details', { params: { id: params['id'] } })
        .subscribe(data => this.advertisement = data.json());
    });
  }
}

