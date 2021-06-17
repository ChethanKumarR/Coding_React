import React from "react";
//importing create becoz we are doing functional or snapshot testing
import {create} from "react-test-renderer";
import BaseButton from "../components/BaseButton";
import Footer from "../components/Footer";

describe("Functional Testing", () => {

    //we can write multiple test cases like this
    ////functional testing
    test("button test", () => {
        const component = create(<BaseButton/>);
        const instance = component.root;
        const button = instance.findByType("button");
        button.props.onClick();
        expect(button.props.children).toBe("Unit Testing");
    });

    //snapshot testing
    test("snapshot Testing", () => {
        let tree = create(<Footer/>);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});