
import { parentQuery } from "./parents";
import { ParentList } from "../types/parent";
import { studentQuery } from "./students";
import { StudentList } from "../types/student";
import ParentTransforms from "../transforms/parents";
import { Parent } from "../generated/types";


const parentFull = new ParentTransforms().parents(parentQuery);


describe('get first 10 parents when id is null', function(){

    test('Test query are expected types', () =>
    {
        expect(parentFull as ParentList).toBeTruthy()
    })

    test('Test query are expected types', () =>
    {
        expect(studentQuery as StudentList).toBeTruthy()
    })
})


describe('Test transforms return correct data', () => {
    test('parent transform', async () => {
        expect(parentFull.parents[0].Id).toBe(1)
        expect(parentFull.parents[1].Id).toBe(321)
        expect(parentFull.parents[2].Id).toBe(322)
        expect(parentFull.parents[3].Id).toBe(323)
        expect(parentFull.parents[4].Id).toBe(590)
        expect(parentFull.parents[5].Id).toBe(591)
        expect(parentFull.parents[6].Id).toBe(592)
        expect(parentFull.parents[7].Id).toBe(593)

    })
})