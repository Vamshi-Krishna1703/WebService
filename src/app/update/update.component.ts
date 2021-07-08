import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id:number = 0;
  data:any = null;
  prods:any = null;
  prodObj:object = {};

  private headers:HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private router :Router, private route: ActivatedRoute, private h:HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe((a)=>{
      this.id = +a['id']
      console.log(this.id)
    })

    this.h.get("http://localhost:5050/products").subscribe((res)=>{
      // console.log(res);
      this.prods = res;
      for (let i = 0; i < this.prods.length; i++) {
        if (parseInt(this.prods[i].id) == this.id)
        {
          this.data = this.prods[i];
          console.log(this.data)
          break;
        }
      }
    })
  }

  update(obj:any)
  {
    // console.log("update");
    this.prodObj = {
      "name" : obj.name,
      "color" : obj.color
    }

    const url = `${"http://localhost:5050/products"}/${this.id}`;
    this.h.put(url, JSON.stringify(this.prodObj), { headers: this.headers}).toPromise().then( ()=>{
      this.router.navigate(['/'])
    })
  }
}
