import reducer from "../reducers/main_reducer";



describe("Reducer Testing", () => {
    it("should return the initial state", () => {
        expect(JSON.stringify(reducer(undefined, {})))
        .toEqual(JSON.stringify({
            article:{},
            gallery:{}
        }));
    });

    it("Reducer with actions", () => {
        let state = {
            article:[],
            gallery:[]
        };

        state=reducer(state,{action:"GET_ARTICLE"});

        expect(state).toEqual({
            article:[],
            gallery:[]
        })
    })
})