import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient)
   { }

   select()
   {
     return this.http.get("http://localhost:9990/student");
   }
   selectByNo(no)
   {
     return this.http.get("http://localhost:9990/student/"+no);
   }
   delete(no)
   {
     return this.http.delete("http://localhost:9990/student/"+no);
   }
   insert(stdobj)
   {
     return this.http.post("http://localhost:9990/student",stdobj);
   }
   update(stdobj)
   {
     return this.http.put("http://localhost:9990/student/"+stdobj.no,stdobj);
   }
}
  