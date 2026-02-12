import { FaUser,FaPen } from "react-icons/fa";


function Profile(){
    return(
        <div className="section-card">
            <p className="section-title">Profile Component</p>
            <div className="section-divider"></div>
            <div className="profile-row">
                <div className="profile-left">
                <FaUser className="profile-icon"/>
                    <p>This is the Profile component content.</p>
                </div>

                <button className="edit-btn"><FaPen style={{marginRight:"8px"}}/>Edit Profile</button>
            </div>
        </div>
    );
}

export default Profile