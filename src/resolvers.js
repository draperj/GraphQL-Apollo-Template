module.exports = {
    Query: {
        content: async (_, { keyWord }, { dataSources }) => {
            console.log("calling api")
            const exampleItems = await dataSources.exampleAPI.getAll(keyWord)
            console.log("resolver example", example)
            return exampleItems
        }
    }
};