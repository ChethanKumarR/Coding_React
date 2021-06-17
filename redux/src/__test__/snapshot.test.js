import React from "react";
//importing create becoz we are doing functional or snapshot testing
import {create} from "react-test-renderer";
import Footer from "../components/Footer";

describe("Functional Testing", () => {
    //snapshot testing
    test("snapshotTtesting", () => {
        let tree = create(<Footer/>);
        expect(tree.toJSON()).toMatchSnapshot()
    })
})