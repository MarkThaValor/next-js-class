"use client";

import React, { useEffect, useState } from "react";

export default function AboutLayout() {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const response = await fetch("/about.json");

                if (!response.ok) {
                    throw new Error(`Failed to fetch about.json: ${response.status}`);
                }

                const data = await response.json();

                setUsers(data);
            } catch (error) {
                console.error("Error fetching about.json:", error);
                setError("Failed to load about information.");
            } finally {
                setLoading(false);
            }
        };

        fetchAbout();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>

        </div>
    );
}