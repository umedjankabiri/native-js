import {ages, chipPredicate, courses, predicate} from "common/components/04/04.ts";

test("The old men who are older than 90 should be taken.", ()=> {
    const oldAgesWithMethodFilter = ages.filter(age => age > 90);
    const oldAgesWithOurFunction = ages.filter(predicate);

    expect(oldAgesWithMethodFilter.length).toBe(1);
    expect(oldAgesWithMethodFilter[0]).toBe(100);
    expect(oldAgesWithOurFunction.length).toBe(1);
    expect(oldAgesWithOurFunction[0]).toBe(100);
})
test("Courses should be priced under 160.", ()=> {
    const chipCoursesWithMethodFilter = courses.filter(course => course.price < 160)
    const chipCoursesWithOurFunction = courses.filter(chipPredicate)

    expect(chipCoursesWithMethodFilter.length).toBe(2);
    expect(chipCoursesWithMethodFilter[0].title).toBe("CSS");
    expect(chipCoursesWithMethodFilter[1].title).toBe("REACT");

    expect(chipCoursesWithOurFunction.length).toBe(2);
    expect(chipCoursesWithOurFunction[0].title).toBe("CSS");
    expect(chipCoursesWithOurFunction[1].title).toBe("REACT");
})