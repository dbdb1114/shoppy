import axios from "axios";

const mockAxiosIns = axios.create({
    // baseURL:'/image'
})

mockAxiosIns.interceptors.response.use(
    function (response){
        console.log(response)
        return response.data.item;
    }, function (error){
        console.log(error);
        return 'responseError';
    }
)

export default class MockApiClient {

    async mainProductList(){
        return mockAxiosIns.get(`/mainProduct.json`);
    }

    async pageProductList(){
        return mockAxiosIns.get(`/product.json`);
    }

    async productInventory(productId){
        return mockAxiosIns.get(`/productInventory/id${productId}.json`);
    }

}