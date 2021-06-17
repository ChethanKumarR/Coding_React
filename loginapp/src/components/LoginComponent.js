import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const url = "http://localhost:5000/api/auth/login";

class RegisterComponent extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password:''
        }
    }
    handleChangeEmail = (event) => {
       this.setState({email:event.target.value})
    }

    handleChangePassword = (event) => {
        this.setState({password:event.target.value})
     }

    handleSubmit = () => {
        console.log(this.state);
        //If somebody ask us to send a data in a required format
        //construct the data like below


        // var data =  {
        //     name:this.state.hotel_name,
        //     person:this.state.name
        // }

        fetch(url, {
           method: 'POST',
           headers:{
               'Accept':'appllication/json',
               'Content-Type': 'application/json',
            //    'bearer':'vfskbdfvdf'
            //    'Auth': 'token8348848'
           },
           body:JSON.stringify(this.state)
        }) 
        // .then(this.props.history.push('/profile?message=success'))
        // .catch(this.props.history.push('/profile?message=fail'))
        .then((resp) => resp.json())
        .then((data) => {
           console.log(data)
           sessionStorage.setItem("ltk",data.token)
        //    //If we get token from one api (above api) , and if we want to pass that token to the next api(below api) to get the response we are doing like the below
        //    fetch(url, {
        //     method:'GET',
        //     headers:{
        //         'x-access-token':data.token
        //     }
        // })
        // .then((res)=> res.json())
        // .then((data)=> {
        //     this.setState({
        //         user:data
        //     })
        // })
           this.props.history.push("/profile")
        })
    }
    render() {
        return (
            <div className="container">
                <div className="panel panel-success">
                    <div className="panel-heading">
                          Login
                     </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="hotel_name" value={this.state.email}
                                className="form-control" onChange={this.handleChangeEmail} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" name="hotel_name" value={this.state.password}
                                className="form-control" onChange={this.handleChangePassword} />
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit}>submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterComponent;