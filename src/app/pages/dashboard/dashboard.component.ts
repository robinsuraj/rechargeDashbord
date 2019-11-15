import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userData=[];
  settings = {
    actions: {
      delete: false,
      add: false,
      edit:false
  },
    columns: {
      name: {
        title: ' Name',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      mobileNumber: {
        title: 'Mobile Number',
        type: 'number',
      },
      serviceType: {
        title: 'Operator',
        type: 'string',
      },
      country: {
        title: 'Country',
        type: 'string',
      },
      amount: {
        title: 'Amount',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,private http:HttpClient) {
   
    
    
  }
  
  ngOnInit(){
    this.getData().subscribe(res=>
    {
      console.log(res.data)
      res.data.map(data=>{
        console.log(data)
        this.userData.push({
          name:data.user.firstName+data.user.lastName,
          lastName:data.user.lastName,
          email:data.user.email,
          mobileNumber:data.user.mobileOperator+data.user.mobile,
          serviceType:data.user.serviceType,
          amount:data.amount,
          country:data.user.country
        })
      })
      this.source.load(this.userData);
    } 
    )
  }

  getData():Observable<any>{
  return  this.http.get('http://ec2-18-189-1-179.us-east-2.compute.amazonaws.com:7000/api/payment/list')
  }
}
