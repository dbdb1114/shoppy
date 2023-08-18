
export default class Api {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async productList(isMain){
        console.log(isMain);
        return isMain ? this.#mainProductList() : this.#pageProductList();
    }

    async #mainProductList(){
        return this.apiClient.mainProductList();
    }

    async #pageProductList(){
        return this.apiClient.pageProductList();
    }

}