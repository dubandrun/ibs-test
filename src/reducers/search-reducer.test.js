import weather from "./search-reducer";
import {
  setSearchQuery,
  setWeatherData,
  setLoading,
  setInitializing,
  setFiveDaysWeatherData,
  setError,
} from "../actions/search-action";

const initialState = {
  currentWeather: {},
  fiveDaysWeather: {},
  isLoading: false,
  isInitialized: false,
  searchQuery: "",
  isError: false,
};

describe("weather reducer", () => {
  it("search query should appear", () => {
    const action = setSearchQuery("Moscow");
    const newState = weather(initialState, action);

    expect(newState).toEqual({
      currentWeather: {},
      fiveDaysWeather: {},
      isLoading: false,
      isInitialized: false,
      searchQuery: "Moscow",
      isError: false,
    });
  });

  it("loading should toggle to true", () => {
    const action = setLoading(true);
    const newState = weather(initialState, action);

    expect(newState).toEqual({
      currentWeather: {},
      fiveDaysWeather: {},
      isLoading: true,
      isInitialized: false,
      searchQuery: "",
      isError: false,
    });
  });

  it("error should toggle to true", () => {
    const action = setError(true);
    const newState = weather(initialState, action);

    expect(newState).toEqual({
      currentWeather: {},
      fiveDaysWeather: {},
      isLoading: false,
      isInitialized: false,
      searchQuery: "",
      isError: true,
    });
  });

  it("initialized should toggle to true", () => {
    const action = setInitializing(true);
    const newState = weather(initialState, action);

    expect(newState).toEqual({
      currentWeather: {},
      fiveDaysWeather: {},
      isLoading: false,
      isInitialized: true,
      searchQuery: "",
      isError: false,
    });
  });

  it("new data in currentWeather should appear", () => {
    const action = setWeatherData({
      temp: 0,
      conditions: "snow",
    });
    const newState = weather(initialState, action);

    expect(newState).toEqual({
      currentWeather: {
        temp: 0,
        conditions: "snow",
      },
      fiveDaysWeather: {},
      isLoading: false,
      isInitialized: false,
      searchQuery: "",
      isError: false,
    });
  });

  it("new data in fiveDaysWeather should appear", () => {
    const action = setFiveDaysWeatherData({
      city: "Moscow",
      daily: [
        { day: 1, temp: 20 },
        { day: 2, temp: 24 },
        { day: 3, temp: 21 },
      ],
    });
    const newState = weather(initialState, action);

    expect(newState).toEqual({
      currentWeather: {},
      fiveDaysWeather: {
        city: "Moscow",
        daily: [
          { day: 1, temp: 20 },
          { day: 2, temp: 24 },
          { day: 3, temp: 21 },
        ],
      },
      isLoading: false,
      isInitialized: false,
      searchQuery: "",
      isError: false,
    });
  });
});
