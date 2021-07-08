import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-hime',
  templateUrl: './hime.component.html',
  styleUrls: ['./hime.component.css']
})
export class HimeComponent implements OnInit {

  products:any = null;
  private headers:HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor( private h: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData()
  {
    this.h.get("http://localhost:5050/products").subscribe((res)=>{
      console.log(res);
      this.products = res;
    })
  }

  deleteProduct(id:number){
    // console.log("no err")
    if(confirm("Are you sure ? "))
    {
      const url = `${"http://localhost:5050/products"}/${id}`;
      this.h.delete(url, { headers : this.headers}).toPromise().then(()=>{
        this.fetchData()
      })
    }
  }
}
