import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard";

export function App() {
    const data = [
        {
            name: "Jean Paul Duarte",
            userName: "JeanP78",
            initialFollowed: true,
            follower: true,
        },
        {
            name: "Yorgen Galvis",
            userName: "yorgengalvis",
            initialFollowed: true,
            follower: false,
        },
        {
            name: "Diego Galvis",
            userName: "diegogalvisr",
            initialFollowed: false,
            follower: true,
        },
        {
            name: "An0nym0u5",
            userName: "anonymous",
            initialFollowed: false,
            follower: true,
        },
        {
            name: "Alice",
            userName: "alice123",
            initialFollowed: true,
            follower: false,
        },
        {
            name: "Bob",
            userName: "bob456",
            initialFollowed: false,
            follower: true,
        },
        {
            name: "Charlie",
            userName: "charlie789",
            initialFollowed: true,
            follower: true,
        },
        {
            name: "David",
            userName: "david101",
            initialFollowed: false,
            follower: false,
        },
        {
            name: "Emma",
            userName: "emma2022",
            initialFollowed: true,
            follower: true,
        },
        {
            name: "Frank",
            userName: "frank33",
            initialFollowed: false,
            follower: true,
        },
        {
            name: "Grace",
            userName: "grace45",
            initialFollowed: true,
            follower: false,
        },
        {
            name: "Hannah",
            userName: "hannah67",
            initialFollowed: false,
            follower: false,
        },
        {
            name: "Isaac",
            userName: "isaac89",
            initialFollowed: true,
            follower: true,
        },
        {
            name: "Julia",
            userName: "julia1010",
            initialFollowed: false,
            follower: true,
        },
    ];

    return (
        <section className="tw-cards-container">
            <h1 style={{ textAlign: "center", color: "white" }}>COMPONENTE TWITTER CARD</h1>

            {data.map((el) => {
                const { name, userName, initialFollowed, follower } = el;
                return (
                    <TwitterFollowCard key={userName} userName={userName} follower={follower} initialFollowed={initialFollowed}>
                        {name}
                    </TwitterFollowCard>
                );
            })}
        </section>
    );
}
