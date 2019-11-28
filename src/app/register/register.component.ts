import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    std={
      "no":"","name":"","address":""
    };
  constructor(private service:DataService,
    private router:Router,
    private route:DataService) 
  { }

  ngOnInit() {

  }
 
  Add()
  {
  var observable=  this.service.insert(this.std);
  observable.subscribe((result)=>{
      console.log(result);
      //this.std=result[0];
      this.router.navigate(['home']);
  });
  }
   
}
