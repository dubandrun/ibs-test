import "@testing-library/jest-dom";
import { configure, shallow, render, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

global.shallow = shallow;
global.render = render;
global.mount = mount;

configure({ adapter: new Adapter() });
