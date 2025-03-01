import AI_AgentImg from './assets/ai_assistant.webp'
const AI_Agent = () => {
    return(
        <div className="ai_agent">
            <a href="https://agent.jotform.com/019542fb602373e390682215ba96154d5f23" className="ai_agentLink" target="_blank">
                <img src={AI_AgentImg} alt="" className="ai_agentImg" />
            </a>
            <p className="ai_agentDesc">AI Assistant</p>
        </div>
    )
}

export default AI_Agent