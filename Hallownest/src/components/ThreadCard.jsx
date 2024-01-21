import { useState } from 'react';
import '../styles/threadCard.css';

export default function ThreadCard({props}) {
    const { description, name } = props;

    const numComments = 100;
    const numLikes = 100;
    const topicName = null;
    const timeStamp = '1h';

    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked((prevIsLiked) => !prevIsLiked);
    };

    return (
        <div className="threadCard">
            <div className='threadHeader'>
                <div className='threadUser'>
                    <p className='userName'>{name}</p>
                    <p className='timeStamp'>{timeStamp}</p>
                </div>
                {topicName && (
                    <div className='threadTopic'>
                        <p className='topicName'>{topicName}</p>
                    </div>
                )}
            </div>
            <div className='threadContent'>
                <p className='content'>{description}</p>
            </div>
            <div className='threadFooter'>
                <div className='threadLikes'>
                    <button className='likeButton' onClick={handleLikeClick}>
                        <img
                            src={`../../assets/${isLiked ? 'heart-filled.svg' : 'heart-gray.svg'}`}
                            alt='heart'
                            className='heartIcon'
                        />
                    </button>
                    <p className='numLikes'>{isLiked ? numLikes + 1 : numLikes}</p>
                </div>
                <div className='threadComments'>
                    <img src='../../assets/reply.svg' alt='comment' className='commentIcon' />
                    <p className='numComments'>{numComments}</p>
                </div>
            </div>
        </div>
    );
}
