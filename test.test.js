const {expect} = require("chai")
const {isAnagram} = require("./app")

describe("testing for isAnagram function",()=>{
    it("", ()=>{
        expect( isAnagram("silent","listen")).to.equal(true)
    })
})


// 3 problem

const {expect} = require("chai")
const {getData} = require("./app")


describe("testing for getData function",  ()=>{
    it("", async()=>{
        expect( await getData("https://jsonplaceholder.typicode.com/post/1")).to.deep.equal(

        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
            }

        )
    })
})