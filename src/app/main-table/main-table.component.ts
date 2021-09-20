import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit, OnDestroy {
  users!: any
  filterValue = '';
  private getUsersSub!: Subscription;
  itemCount = 5;

  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUsersSub = this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      this.users = data
      console.log(this.users)
    })
  }

  onSelectUser(id: string, name: string) {
    this.router.navigate([`features/${id}/${name}`], { relativeTo: this.route })
  }

  onScroll() {
    this.itemCount += 5
  }

  ngOnDestroy() {
    this.getUsersSub.unsubscribe()
  }

}
