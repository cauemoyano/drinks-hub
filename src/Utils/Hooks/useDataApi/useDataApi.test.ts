import { act, renderHook } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { useDataApi } from "./useDataApi";

const server = setupServer(
  rest.get("/api", (_, res, ctx) => {
    return res(ctx.json({ data: "test" }));
  })
);

describe("tests hook through different calls", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("should successfully retrieve data", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDataApi(""));

    await act(async () => {
      result.current.callApi("/api");
    });

    await waitForNextUpdate();

    expect(result.current.data).toEqual({ data: "test" });
  });

  test("server returns an error", async () => {
    server.use(
      rest.get("/error", (_, res, ctx) => {
        return res(
          ctx.status(500, "Server Error"),
          ctx.json({
            message: "Mocked response JSON body",
          })
        );
      })
    );

    const { result, waitForNextUpdate } = renderHook(() => useDataApi(""));

    await act(async () => {
      result.current.callApi("/error");
    });

    await waitForNextUpdate();

    expect(result.current.error).toBeTruthy();
  });

  test("loading is triggered properly", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDataApi(""));

    await act(async () => {
      result.current.callApi("/api");
    });

    expect(result.current.loading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
  });
});
