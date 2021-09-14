import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId!: number
  user: any

  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.userId = +params['id']    
    })
    this.http.get(`https://jsonplaceholder.typicode.com/users?id=${this.userId}`).subscribe((data: any) => {
     this.user = data[0]
    })
  }
  
  onGoBack(){
    this.router.navigate([''], )

  }

}
