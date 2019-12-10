import React,{Component,Fragment} from "react";
import ProfileLogin from "./children/profileLogin"
import ProfileInfo from "./children/profileInfo"
import ProfileOrder from "./children/profileOrder"
import ProfileLoad from "./children/profileLoad" 
class Profile extends Component{
    render(){
        return(
            <Fragment>
                <div style={{background:"#F5F5F5",height:"100%",width:"100%"}}>
                    <ProfileLogin/>
                    <ProfileInfo/>
                    <ProfileOrder/>
                    <ProfileLoad/>
                </div>  
            </Fragment>
        )
    }
}

export default Profile;