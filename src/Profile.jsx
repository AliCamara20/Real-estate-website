import  user from './assets/user.jpg'
const Profile = () => {
    return(
        <div className="profile right_col__col_header">
            <img src={user} alt="" className="profile_img" />
            <h2 className="username">User Profile</h2>
        </div>
    )
}
export default Profile