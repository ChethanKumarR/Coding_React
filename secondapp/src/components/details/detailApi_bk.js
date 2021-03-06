import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"

class Details extends Component{
    constructor(){
        super()

        this.state={
            details:'',
            tripid:sessionStorage.getItem('tripid')
        }
    }

    render(){
        var {details} = this.state;
        //var details = this.state.details;
     
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{details.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-responsive"  src={details.thumb} style={{height:400,width:1500}}/>
                            </div>
                            <div className="col-md-6">
                                <h3>{details.name}</h3>
                                <h3>{details.locality}</h3>
                                <h3>{details.address}</h3>
                            </div>
                        </div>
                        <br/>
                        <div className="">
                            <Tabs>
                                <TabList>
                                    <Tab>Overview</Tab>
                                    <Tab>Contact</Tab>
                                </TabList>
                            
                                <TabPanel>
                                    <div>About This Place</div>
                                    <div>{details.name} is simply dummy text of the printing and typesetting industry. {details.name} has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing {details.name} passages, and more recently with desktop publishing software like Aldus PageMaker including versions of {details.name}.</div>
                                </TabPanel>
                                <TabPanel>
                                    <div>Contact Info</div>
                                    <div>Phone No</div>
                                    <div>7765675656</div>

                                </TabPanel>
                                <TabPanel>
                                    <h2>Any content 3</h2>
                                </TabPanel>
                            </Tabs>
                        </div>
                        <br/>
                        <div>
                            <Link to={`/list/${this.state.tripid}`}className="btn btn-danger">Back</Link>&nbsp;
                            <Link to={`/booking/${details._id}`} className="btn btn-success">Place Order</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    async componentDidMount(){
        let hotelid = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelid}`)
        this.setState({details:response.data[0]})
    }
    
}

export default Details;