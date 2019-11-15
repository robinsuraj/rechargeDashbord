import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SmartTableService {

  constructor(private http:HttpClient){
  }
  data = [
    {
      "deleted": false,
      "_id": "5dcbce8f21a20564181fc5f1",
      "status": "succeeded",
      "trasactionId": "txn_1FeIGoEO2IGD7aGElvqvNTzB",
      "user": {
        "role": "buyer",
        "_id": "5dcbce8d21a20564181fc5f0",
        "firstName": "suraj",
        "lastName": "verma",
        "email": "sakshigadia@gmail.com",
        "mobileOperator": "+91",
        "mobile": "9871373297",
        "country": "India",
        "serviceType": "Mobile prepaid"
      },
      "amount": 25,
      "updatedAt": "2019-11-13T09:36:15.257Z",
      "createdAt": "2019-11-13T09:36:15.257Z",
      "__v": 0
    },
{
  id: 2,
  firstName: 'jitendar',
  mobileNumber: '9680379063',
  operator: 'Airtel',
  amount:100,
  email: 'jeet@gmail.com'
}
];

  // getData() {

  //     this.http.get("http://ec2-18-189-1-179.us-east-2.compute.amazonaws.com:7000/api/payment/list").subscribe(
  //       res=> 
  //     )
  //   return this.data;
  // }
}
