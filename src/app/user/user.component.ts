import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  userId!: number
  user: any
  private getUserSub!: Subscription

  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.userId = +params['id']    
    })
    this.getUserSub = this.http.get(`https://jsonplaceholder.typicode.com/users?id=${this.userId}`).subscribe((data: any) => {
     this.user = data[0]
    })
  }
  
  onGoBack(){
    this.router.navigate([''], )
  }

  ngOnDestroy() {
    this.getUserSub.unsubscribe()
  }
}
