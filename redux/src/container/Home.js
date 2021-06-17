import React,{Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {latestNews, articleNews, galleryNews} from "../actions/action_file";
import LatestDisplay from "../components/Home/latest_display";
import GalleryDisplay from "../components/Home/gallery_display";
import ArticleDisplay from "../components/Home/article_display";

class Home extends Component {
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleryNews())
    }
    render(){
        return(
            <div>
                <LatestDisplay ldata={this.props.datalist.latestNews}/>
                <ArticleDisplay adata={this.props.datalist.articleNews}/>
                <GalleryDisplay gdata={this.props.gallist.galleryNews}/>
            </div>
        )
    }
}

//Will receive the state from the store
function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.article,
        gallist:state.gallery
    }
}

//inherit dispatch for Home
//dispatch is not default available we hwve to inherit form PropTypes package
Home.protoTypes={
   dispatch:PropTypes.func
}


export default connect(mapStateToProps)(Home)