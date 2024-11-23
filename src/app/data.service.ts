import jsonData from '../assets/data.json';

export class DataService{
    
    //Implement PAGINATION
    pageSize: number = 3;

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

}