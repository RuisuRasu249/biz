import { Observable } from 'rxjs';
import jsonData from '../assets/data.json';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DataService{
    
    //Implement PAGINATION
    pageSize: number = 3;

    constructor(private http: HttpClient){}

    getBusinesses(page: number){
        let pageStart = (page - 1) * this.pageSize;
        let pageEnd = pageStart + this.pageSize;
        
        return jsonData.slice(pageStart, pageEnd);
    }

    getLastPageNumber(){
        return Math.ceil(jsonData.length / this.pageSize);
    }

    getBusiness(id: any){
        let dataToReturn: any[] = [];
        jsonData.forEach(function(business){
            if(business['name'] == id){
                dataToReturn.push(business)
            }
        })
        return dataToReturn;
    }

    getLoremIpsum(paragraphs: number): Observable<any> {
        let API_key = 'YOUR-API-KEY';
        return this.http.get<any>(
            'https://api.api-ninjas.com/v1/loremipsum?paragraphs=2' + paragraphs,
            { headers: {'X-Api-Key': API_key}}
        );
    }
}