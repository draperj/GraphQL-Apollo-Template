const { RESTDataSource } = require('apollo-datasource-rest');

class exampleAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://test.com/';
    }

    async getAll(keyWord) {
        const res = await this.post(
            `/test`, // path
            {

            } // request body
        );
        console.log("results", res, res.length)
        const mappedResults = res && res.length ? res.map(e => this.contentReducer(e)) : []
        console.log("mapped results", mappedResults)
        return mappedResults
    }

    // if reuqired map item from API to require schema names
    contentReducer(item) {
        console.log("item", item)
        return {
            id: item.id
        };
    }
}

module.exports = exampleAPI;