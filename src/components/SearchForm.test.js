import { shallow } from "enzyme";
import SearchForm from "./SearchForm";

const props = {
  searchQuery: "Moscow",
  handleGetCurrentWeather: () => {},
  handleInputChange: () => {},
};

describe("rendering Error functional component", () => {
  const component = shallow(<SearchForm {...props} />);
  it("should render DayCard component", () => {
    const wrapper = component.find(".search-form");
    expect(wrapper.length).toBe(1);
  });
});
