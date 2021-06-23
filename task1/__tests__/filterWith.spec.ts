import { MOCK_DATA } from './../__MOCKS__/mockForTest';
import { filterWith } from "./../ts-fn/filterWith";

describe("has proper validation", () => {
    it("return empty array when phrase length is smaller than 2", () => {
        expect(filterWith(MOCK_DATA, "A")).toStrictEqual([])
        expect(filterWith(MOCK_DATA, 1)).toStrictEqual([])
    })
})


describe("work correctly when provided valid value", () => {
    it("returns element searched by string", () => {
        expect(filterWith(MOCK_DATA, "VELOS")).toContainEqual(MOCK_DATA[0])
        expect(filterWith(MOCK_DATA, "KENGEN")).toContainEqual(MOCK_DATA[1])
        expect(filterWith(MOCK_DATA, "Mcguire Mercado")).toContainEqual(MOCK_DATA[2])
    })

    it("returns element searched by number", () => {
        expect(filterWith(MOCK_DATA, 24)).toContainEqual(MOCK_DATA[0])
        expect(filterWith(MOCK_DATA, 25)).toContainEqual(MOCK_DATA[4])
    })

    it("return false when value is not found", () => {
        expect(filterWith(MOCK_DATA, "cristiano rondaldo")).toStrictEqual([])
        expect(filterWith(MOCK_DATA, "Maryla Rodowicz")).toStrictEqual([])
        expect(filterWith(MOCK_DATA, "Lidl")).toStrictEqual([])
    })

})