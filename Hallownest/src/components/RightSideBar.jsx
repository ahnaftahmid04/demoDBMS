import '../styles/rightsidebar.css';
import { trendingTopics, suggestedUsers } from '../constants';
import { Link } from 'react-router-dom';

export default function RightSideBar({user}) {
    const {name, userName} = user;

    return (
        <div className="rightsidebar">
            <div className='userProfile'>
                <div className='userDetailsContainer'>
                    <h3 className='actualName'>{name}</h3>
                    <p className='rightUserName'>@{userName}</p>
                </div>
            </div>
            <div className='trendingTopics'>
                <h3 className='trendingTitle'>Trending</h3>
                <div className='trendingContent'>
                    {trendingTopics.map((topic, index) => (
                        <div key={index} className='trendingTopic'>
                            <div className='topicDetails'>
                                <p className='rightTopicName'>{topic.label}</p>
                                <p className='topicThreads'>{topic.value} Threads</p>
                            </div>
                            <Link to='/' className='topicLink'>
                                <button className='topicButton'>View</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className='suggestedUsers'>
                <h3 className='suggestedTitle'>Similar Minds</h3>
                <div className='suggestedContent'>
                    {suggestedUsers.map((mind, index) => (
                        <div key={index} className='suggestedUser'>
                            <div className='userDetails'>
                                <p className='mindName'>{mind.label}</p>
                                <p className='mindMutuals'>{mind.value} Mutuals</p>
                            </div>
                            <button className='followButton'>Follow</button>
                        </div>
                    ))}
                </div>            
            </div>
        </div>
    )
}