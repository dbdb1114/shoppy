
export default class Api {

    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async productList(isMain){
        return isMain ? this.#mainProductList() : this.#pageProductList();
    }

    async productInventory(productId){
        return this.apiClient.productInventory(productId);
    }

    async #mainProductList(){
        return this.apiClient.mainProductList();
    }

    async #pageProductList(){
        return this.apiClient.pageProductList();
    }

    async #productInventory(productId){
        return this.apiClient.productInventory(productId);
    }

}