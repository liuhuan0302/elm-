import React,{Component,Fragment} from "react";
import ProfileLogin from "./children/profileLogin"
import ProfileInfo from "./children/profileInfo"
import ProfileOrder from "./children/profileOrder"
import ProfileLoad from "./children/profileLoad"
import Footer from "../../components/footer" 
import Header from "../../components/header/header"
class Profile extends Component{
    render(){
        return(
            <Fragment>
                <div style={{background:"#F5F5F5",height:"100%",width:"100%",paddingTop:"47.5px"}}>
                    <Header/>
                    <ProfileLogin/>
                    <ProfileInfo/>
                    <ProfileOrder/>
                    <ProfileLoad/>
                    < Footer/>
                </div>  
            </Fragment>
        )
    }
}

export default Profile;