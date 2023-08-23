import { useState } from "react";

export function TwitterFollowCard({ children, userName = "unknown", follower, initialFollowed }) {
    const isFollower = follower ? <small> - Te sigue</small> : "";
    const [followed, setFollowed] = useState(initialFollowed);
    const text = followed ? "Siguiendo" : "Seguir";
    const buttonClass = `tw-button ${followed ? "followed" : "follow"}`;

    const handleClick = () => {
        setFollowed(!followed);
    };

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-image" src={`https://unavatar.io/${userName}`} alt="avatar" />
                <div className="tw-followCard-info">
                    <strong className="tw-userName">{children}</strong>
                    <span>
                        @{userName} {isFollower}
                    </span>
                </div>
            </header>
            <aside className="tw-followCard-aside">
                <button className={buttonClass} onClick={handleClick}>
                    <span className="follow-text">{text}</span>
                    <span className="unfollow-text">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}
