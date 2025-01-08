import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import React, { useEffect, useState } from "react";

const posts: React.FC = () => {
    const [postData, setPostData] = useState<PostProps[]>([]);

    const fetchPost = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url);
        const data = await response.json();
  
         setPostData(data);
    };
 
    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <div className="p-4">
            <h1>Posts</h1>
            {postData.map((post) => (
                <div>
                    <PostCard
                        key={post.id}
                        title={post.title}
                        content={post.body}
                        userId={post.userId}
                    />
                </div>
            ))}
        </div>
    );
};


export default posts;
