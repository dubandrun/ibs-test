import { shallow } from "enzyme";
import Results from "./Results";

const props = {
  currentWeather: {
    name: "Moscow", 
    weather: "12", 
    main: "21"
  },
  fiveDaysWeather: {
    daily: [{icon: "44n", temp: 21, }]
  },
  currentDate: "21.12",
  getFiveDaysDates: ["22.12", "23.12", "24.12", "25.12", "26.12"],
};

describe("rendering Error functional component", () => {
  const component = shallow(<Results {...props} />);
  it("should render DayCard component", () => {
    const wrapper = component.find(".results");
    expect(wrapper.length).toBe(1);
  });
});
