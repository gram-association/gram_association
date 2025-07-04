"use client";
import type React from "react";
import { useState } from "react";

export default function Story() {
  const [story, setStory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (story.trim()) {
      console.log("Water Story Submitted:", story);

      setStory(""); // Clear the textarea after submission
    } else {
      console.log("Please write your story before submitting");
    }
  };

  return (
    <div className="w-full max-w-full h-[391px] mt-0 md:mt-10 bg-[#BAD1CA] dark:bg-gray-700 flex items-center justify-center">
      <div className="p-4 mx-auto text-center w-full">
        <h1 className="text-4xl md:text-5xl mb-8 text-gray-800 dark:text-white">
          Share your Water Story
        </h1>

        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-[600px] mx-auto"
        >
          <div className="relative">
            <textarea
              value={story}
              onChange={(e) => setStory(e.target.value)}
              placeholder="Start writing from here..."
              className="w-full p-4 pr-16 bg-white dark:bg-gray-600 dark:text-white border border-gray-300 dark:border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A8B6E] h-20 resize-none placeholder-gray-500 dark:placeholder-gray-400"
              rows={3}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[#5A8B6E] text-white text-xl rounded-md hover:bg-[#4A7A5E] focus:outline-none focus:ring-2 focus:ring-[#5A8B6E] focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!story.trim()}
            >
              ➤
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
