import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service:DataService,
    private router:Router,
    private route : ActivatedRoute ) {
      
    }

  ngOnInit() {
          this.route.paramMap.subscribe((result)=>{
            var no = result.get("no");
            var observable=this.service.delete(no);
            observable.subscribe((data)=>{
              console.log(data);
              this.router.navigate(['/home']);
            });
          });
  }

}
