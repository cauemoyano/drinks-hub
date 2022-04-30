import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { generateDrinkItems } from "../../Functions/general.functions";
import usePagination from "./usePagination";

const testData = {
  offset: 12,
  initialItems: generateDrinkItems(24),
};

describe("usePagination hook", () => {
  test("should return pages according to the offset", () => {
    const { result } = renderHook(() => usePagination(testData));

    expect(result.current.pages).toBe(2);
  });
  test("should return data from a specific page when requested", async () => {
    const { result } = renderHook(() => usePagination(testData));
    //go to second page
    await act(async () => result.current.setPage(2));
    //get first item of second page
    const pageData = result.current.pageData;
    const offset = pageData.length;
    const firstItemExpected = { idDrink: `${offset + 1}` };

    expect(pageData[0]).toMatchObject(firstItemExpected);

    const lastItemExpected = { idDrink: `${2 * offset}` };

    expect(pageData[offset - 1]).toMatchObject(lastItemExpected);
  });
});
