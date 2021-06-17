// import React ,{ Component } from "react";
// import ComponentSecond from "./ComponentSecond"

// Passing Data From Parent to Child using props(class based components)
// ==========================================================================

// export default class ComponentOne extends Component {
//     constructor(props){
//       super(props);
//       this.state = {
//           data:"Data from parent"
//       }
//     }

//     render() {
//         const {data} = this.state;
//         return(
//             <div>
//                 <ComponentSecond dataParentToChild={data}/>
//             </div>
//         )
//     }
// }


// Passing Data From Parent to Child using props(Functional based components)
// ==============================================================================


// function Parent() {
//     const data ="Data from parent";
//     return (
//         <div>
//             <Child dataParentToChild = {data} />
//         </div>
//     )
// }

// Passing Data From Parent to Child using props(Functional based componentsusing Hooks)
// =====================================================================================

// import React, {useState} from "react";
// import Name from "./Name";
// export default  function App() {
//     //useState returns an array with the state
//     //and the method used to update the state
//     //we can initialize the state with a variable/object
//     const[name , setName] = useState('Chethan');
//     // No need for a render method
//     // Just return the JSX from the function
//     return (
//         <div>
//             <Name name={name}/>
//         </div>
//     )

// }


//  Passing Data from Child to Parent
//  ==================================

import React, {Component} from "react";
import Name from "./Name";
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:null,
        }
    }

    handleCallback = (childData) => {
        this.setState({data:childData})
    }

    render(){
         const {data} = this.state;
        return(
              <div>
                  <Name parentCallback = {this.handleCallback} />
                  {data}
              </div>
        )
    }
}