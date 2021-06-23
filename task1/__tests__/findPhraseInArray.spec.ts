import { findPhraseInArray } from "../ts-fn/findPhraseInArray";

describe("findPhraseInArray", () => {
    const randomWords = ['settle',
        'toothpaste',
        'fascinated',
        'animal',
        'workable',
        'plate',
        'tail',
        'tempt',
        'jelly',
        'roasted',
        'geese',
        'cure',
        'desert',
        'cheap',
        'mountain'
    ]

    
    it("returns information when array is empty", () => {
       try {
           findPhraseInArray([], "prhase")
       }
       catch(e) {
           expect(e.message).toBe("Given array seems to be empty")
       }
    })

    it("returns empty array when no matching word found", () => {
        expect(findPhraseInArray(randomWords, "sunshine")).toStrictEqual([])
        expect(findPhraseInArray(randomWords, "ge")).toStrictEqual([[10, "geese"]])
        expect(findPhraseInArray(randomWords, " ")).toStrictEqual([])
    })

    it("returns word matching given phrase when found", () => {
        expect(findPhraseInArray(randomWords, "desert")).toEqual([[12, "desert"]])
        expect(findPhraseInArray(randomWords, "settle")).toEqual([[0, "settle"]])
        expect(findPhraseInArray(randomWords, "mountain")).toEqual([[14, "mountain"]])
    })
        
})