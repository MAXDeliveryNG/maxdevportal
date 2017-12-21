import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'app/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.scss']
})

export class AppDetailComponent implements OnInit {

  route$: Subscription;
  loading: boolean = true;
  loadingError: boolean = false;
  data: any;
  id: string;

  constructor(
    private route: ActivatedRoute, 
    private appService: AppService) { }

  private transform(response) {
    response.data.keys.map(key => {
      key.visible = false;
      key.created_at = key.created_at * 1000;
      key.updated_at = key.updated_at * 1000;
      return key;
    })
    return response;
  }
  
  fetchData(id: string) {
    this.loadingError = false;

    this.appService.read(id)
      .map(this.transform)
      .subscribe(response => {
        this.data = response.data;
        this.loadingError = false;
      }, err => {
        this.loading = false;
        this.loadingError = true;
      }, () => {
        this.loading = false
      })
  }

  ngOnInit() {
    this.route$ = this.route.params.subscribe(params => {
      this.id = params.id;
      this.fetchData(params.id);
    })
  }
}
