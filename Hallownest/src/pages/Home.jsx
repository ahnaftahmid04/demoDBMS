import MainBar from "../components/MainBar";
// import { allThreads } from '../constants';
import ThreadCard from "../components/ThreadCard";
import '../styles/home.css';
import { useEffect, useState } from "react";

export default function Home() {
    const threadOptions = [
        'All',
        'Following',
        'Community',
        'Events',
        'Interests'
    ];

    const [allThreads, setAllThreads] = useState([]);    

    const getThreads = async() => {
        try {
            const response = await fetch("http://localhost:8800/api/posts");
            const jsonData = await response.json();

            setAllThreads(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getThreads();
    }, []);

    return (
        <MainBar>
            <div className="homeHeader">
                <h1 className="homeTitle">Home Feed</h1>
                <div className="threadOptionsContainer">
                    <select id="threadOptions" name="threadOptions">
                        {threadOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="allThreadsContainer">
                {allThreads.map(thread => (
                    <ThreadCard key={thread.post_id} props={thread} />
                ))}
            </div>
        </MainBar>
    )
}