import axios from "axios"

export default class BackApiClient {
    constructor(){ 
        this.httpClient = axios.create({
            baseURL: 'localhost:8080/',
            param : "jwtToken"
        })
    }

    async mainProductList(){

    }

    async pageProductList(){
        
    }
    async productDetail(productId){
    }
}

export const mainProductList = axios()