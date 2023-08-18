import axios from "axios";

const mockAsiosIns = axios.create({
    baseURL:'/image'
})

mockAsiosIns.interceptors.response.use(
    function (response){
        return response.data.item;
    }, function (error){
        console.log(error);
        return 'responseError';
    }
)

export default class MockApiClient {

    async mainProductList(){
        return mockAsiosIns.get(`/mainProducts.json`);
    }

    async pageProductList(){
        return mockAsiosIns.get(`/products.json`);
    }

}