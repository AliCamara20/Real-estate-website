import WorkProcess from "./WorkProcess"
import padlock from './assets/padlock.svg'
import layers from './assets/layers.svg'
import social_mediaIcon from './assets/social_media.svg'
const WorkProcesses = () => {
    return(
        <div className="work_processes">
            <WorkProcess>
                <img src={padlock} alt="" className="work_process__img skeleton" />
                <div className="work_process__desc">
                    <h3 className="work_process__desc-header">
                        Fully Secure & 24x7 Dedicated Support
                    </h3>
                    <p className="work_process__desc-detail">
                        We prioritize your security with reliable protection and round-the-clock support. 
                        Our dedicated team is always available to assist you whenever you need help.
                    </p>
                </div>
            </WorkProcess>

            <WorkProcess>
                <img src={social_mediaIcon} alt="" className="work_process__img skeleton" />
                <div className="work_process__desc">
                    <h3 className="work_process__desc-header">
                        Manage your Social & Busness Account Carefully
                    </h3>
                    <p className="work_process__desc-detail">
                        Easily manage your social and business accounts from one place. 
                        Stay organized, maintain control, and keep your information up to date 
                        with confidence.
                    </p>
                </div>
            </WorkProcess>

            <WorkProcess>
                <img src={layers} alt="" className="work_process__img skeleton" />
                <div className="work_process__desc">
                    <h3 className="work_process__desc-header">
                        We are Very Hard Worker and loving
                    </h3>
                    <p className="work_process__desc-detail">
                        Our team is committed to delivering excellent service through dedication, 
                        hard work, and a genuine passion for helping our clients succeed.
                    </p>
                </div>
            </WorkProcess>
        </div>
    )
}

export default WorkProcesses