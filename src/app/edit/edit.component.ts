import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  std={
    "no":"","name":"","address":""
  };
  constructor(private service:DataService,
                 private router :Router,
                 private route:ActivatedRoute)
   { }
  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      var no = result.get("no");
      console.log(no);
      let observa=this.service.selectByNo(no);
       observa.subscribe((data)=>{
         console.log(data[0]);
         this.std=data[0];
       });
    });
  }
  update()
  {
    console.log(this.std);
    var observa=this.service.update(this.std);
    console.log(observa);
    observa.subscribe((result)=>{
            console.log(result);
            this.router.navigate(['home']);
    });
     
  }

}
