import WorkProcess from "./WorkProcess"
import padlock from './assets/padlock.svg'
import layers from './assets/layers.svg'
import social_mediaIcon from './assets/social_media.svg'
const WorkProcesses = () => {
    return(
        <div className="work_processes">
            <WorkProcess>
                <img src={padlock} alt="" className="work_process__img" />
                <div className="work_process__desc">
                    <h3 className="work_process__desc-header">
                        Fully Secure & 24x7 Dedicated Support
                    </h3>
                    <p className="work_process__desc-detail">
                        If you are an individual client, or just a business startup looking for good backlinks for your website.
                    </p>
                </div>
            </WorkProcess>

            <WorkProcess>
                <img src={social_mediaIcon} alt="" className="work_process__img" />
                <div className="work_process__desc">
                    <h3 className="work_process__desc-header">
                        Manage your Social & Busness Account Carefully
                    </h3>
                    <p className="work_process__desc-detail">
                        If you are an individual client, or just a business startup looking for good backlinks for your website.
                    </p>
                </div>
            </WorkProcess>

            <WorkProcess>
                <img src={layers} alt="" className="work_process__img" />
                <div className="work_process__desc">
                    <h3 className="work_process__desc-header">
                        We are Very Hard Worker and loving
                    </h3>
                    <p className="work_process__desc-detail">
                        If you are an individual client, or just a business startup looking for good backlinks for your website.
                    </p>
                </div>
            </WorkProcess>
        </div>
    )
}

export default WorkProcesses