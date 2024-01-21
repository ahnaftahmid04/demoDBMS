import React, { useState } from 'react';
import { allUsers } from '../constants';
import '../styles/follow.css';

export default function Follow() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(allUsers);
    const [activeTab, setActiveTab] = useState('followers');

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);

        // You can add logic here to fetch and display either followers or following based on the selected tab
    };

    return (
        <div className="followContainer">
            <div className="followHeader">
                <h1>Followers and Following</h1>
            </div>
            <div className='navbar'>
                <button
                    className={activeTab === 'followers' ? 'activeTab' : ''}
                    onClick={() => handleTabChange('followers')}
                >
                    Followers
                </button>
                <button
                    className={activeTab === 'following' ? 'activeTab' : ''}
                    onClick={() => handleTabChange('following')}
                >
                    Following
                </button>
                <button
                    className={activeTab === 'search' ? 'activeTab' : ''}
                    onClick={() => handleTabChange('search')}
                >
                    Search
                </button>
            </div>
            <div className="usersContainer">
                {activeTab === 'search' && (
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className='userSearchInput'
                    />
                )}
                <ul className="userList">
                    {filteredUsers.map((user, index) => (
                        <div className='otherUserContainer'>
                            <div className='otherUserInfo'>
                                <li key={index} >{user.name}</li>
                            </div>
                            <div className='otherUserButtons'>
                                {activeTab === 'search' || activeTab === 'followers' ? (
                                    <button className='userFollowButton'>Follow</button>
                                ) : (
                                    <button className='userUnfollowButton'>Unfollow</button>
                                )}
                                {activeTab === 'followers' && (
                                    <button className='followerRemoveButton'>Remove</button>
                                )
                                }
                                <button className='userViewButton'>View</button>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}
