import { shallow } from "enzyme";
import Preloader from "./Preloader";

describe("rendering Preloader functional component", () => {
  const component = shallow(<Preloader />);
  it("should render DayCard component", () => {
    const wrapper = component.find(".preloader");
    expect(wrapper.length).toBe(1);
  });
});