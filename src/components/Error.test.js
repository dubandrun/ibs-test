import { shallow } from "enzyme";
import Error from "./Error";

describe("rendering Error functional component", () => {
  const component = shallow(<Error />);
  it("should render DayCard component", () => {
    const wrapper = component.find(".notfound");
    expect(wrapper.length).toBe(1);
  });
});
