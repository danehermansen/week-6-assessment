const {shuffleArray} = require('./utils')




describe('shuffleArray should', () => {
    test("shuffleArray should return an array", () => {
        let shuffledArray = shuffleArray()
        expect(shuffledArray).toBe(shuffleArray())

    })
    test("shuffleArray should contain elipsis", () => {
        
        expect(shuffleArray()).toContain("...")
    })
})