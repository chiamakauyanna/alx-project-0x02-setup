import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";

const Home: React.FC<CardProps> = () => {
    const [formData, setFormData] = useState([
        { title: "Card 1", content: "This is the content of card 1." },
        { title: "Card 2", content: "This is the content of card 2." },
        { title: "Card 3", content: "This is the content of card 3." },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const addPost = (post: { title: string; content: string }) => {
        setFormData([...formData, post]);
    };

    return (
        <div>
            <h1>This is the home page</h1>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-green-500 text-white px-4 py-2 rounded mb-4"
            >
                Add New Post
            </button>
            {isModalOpen && (
                <PostModal
                    onSubmit={addPost}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
            {formData.map((data, index) => (
                <div key={index}>
                    <Card title={data.title} content={data.content} />
                </div>
            ))}
        </div>
    );
};

export default Home;
