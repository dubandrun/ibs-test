import store from "../store";
import {
  setSearchQuery,
  setWeatherData,
  setLoading,
  setInitializing,
  setFiveDaysWeatherData,
  setError,
} from "../actions/search-action";

describe("testing action creators with store", () => {
  beforeAll(() => {
    store.dispatch(setSearchQuery("Moscow"));
    store.dispatch(setLoading(true));
    store.dispatch(setInitializing(true));
    store.dispatch(setError(true));
    store.dispatch(
      setWeatherData({
        temp: 0,
        conditions: "snow",
      })
    );
    store.dispatch(
      setFiveDaysWeatherData({
        city: "Moscow",
        daily: [
          { day: 1, temp: 20 },
          { day: 2, temp: 24 },
          { day: 3, temp: 21 },
        ],
      })
    );
  });

  it("setSearchQuery should value of searchQuery", () => {
    expect(store.getState().searchQuery).toBe("Moscow");
  });

  it("setLoading should change value of isLoading", () => {
    expect(store.getState().isLoading).toBe(true);
  });

  it("setInitializing should change value of isInitialized", () => {
    expect(store.getState().isInitialized).toBe(true);
  });

  it("setError should change value of isError", () => {
    expect(store.getState().isError).toBe(true);
  });

  it("setWeatherData should set data object to currentWeather", () => {
    expect(store.getState().currentWeather).toEqual({
      temp: 0,
      conditions: "snow",
    });
  });

  it("setFiveDaysWeatherData should set data object to fiveDaysWeather", () => {
    expect(store.getState().fiveDaysWeather).toEqual({
      city: "Moscow",
      daily: [
        { day: 1, temp: 20 },
        { day: 2, temp: 24 },
        { day: 3, temp: 21 },
      ],
    });
  });
});
