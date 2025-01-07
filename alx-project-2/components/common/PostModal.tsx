import React, { useState } from "react";

interface PostModalProps {
    onSubmit: (post: { title: string; content: string }) => void;
    onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ onSubmit, onClose }) => {
    const [form, setForm] = useState({
        title: "",
        content: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
                <h2 className="text-lg font-semibold mb-4">Add Content</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <label htmlFor="title" className="flex flex-col">
                        Title:
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            className="border p-2 rounded-md"
                            required
                        />
                    </label>
                    <label htmlFor="content" className="flex flex-col">
                        Content:
                        <textarea
                            id="content"
                            name="content"
                            value={form.content}
                            onChange={handleChange}
                            className="border p-2 rounded-md"
                            rows={4}
                            required
                        />
                    </label>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostModal;
