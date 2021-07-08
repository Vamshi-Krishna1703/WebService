import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  prodObj:object = {}
  constructor(private h:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  addNew = (product:any) =>{
    this.prodObj = {
      "name":product.name,
      "color":product.color
    }

    this.h.post("http://localhost:5050/products/", this.prodObj).subscribe((res)=>{
      console.log(res);
    })
    
    this.router.navigate(['/'])
  }
}
