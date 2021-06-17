
import React,{Component} from "react";

// export default class ComponentSecond extends Component{
//     constructor(props){
//         super(props);
//         this.state= {
//             data : this.props.dataParentToChild,
//         }
//     }

//     render(){
//         const {data} = this.state;
//         return (
//            <div>
//                {data}
//            </div>
//         )
//     }
// }


// function Child({dataParentToChild}) {
//   return (
//       <div>
//           {dataParentToChild}
//       </div>
//   )
// }


// Props are passed down like normal function args
// Destructure `names` from the props object

// export default function Name({name}){
//  return (
//      <div>
//          My name is : {name}
//      </div>
//  )
// }


export default class Name extends Component {
     constructor(){
         super();
         this.state= {

         }
     }

     onTrigger = (event) => {
         this.props.parentCallback("Data from child");
         event.preventDefault();
     }

     render() {
         return(
             <div>
                <form onSubmit = {this.onTrigger}>
                    <input type = "submit" value="submit"/>
                </form>
            </div>
         )
     }
}

