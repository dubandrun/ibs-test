import { shallow } from "enzyme";
import DayCard from "./DayCard";

const props = {
  icon:"44n", 
  temp: 22, 
  date: "21.12",
}
const setUp = (props) => shallow(<DayCard {...props} />);

describe("rendering DayCard functional component", () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  });

  it("should render DayCard component", () => {
    const wrapper = component.find(".card");
    expect(wrapper.length).toBe(1);
  });
});
