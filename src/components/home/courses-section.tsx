"use client";

import { useState } from "react";
import { CourseCard } from "./course-card";
import { CourseCategories } from "./course-categories";
import type { Course } from "@/types/course.types";

const CATEGORY_ROWS = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking", "+ More"],
];

const COURSES: Course[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: 25,
    image: "/assets/images/courses/course-1.avif",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: 25,
    image: "/assets/images/courses/course-2.avif",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: 25,
    image: "/assets/images/courses/course-3.avif",
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: 25,
    image: "/assets/images/courses/course-4.avif",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: 25,
    image: "/assets/images/courses/course-5.avif",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: 25,
    image: "/assets/images/courses/course-6.jpeg",
  },
];

export function CoursesSection() {
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  return (
    <section className="relative w-full bg-white py-18">
      <div className="mx-auto flex w-full max-w-300 flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-229.25 flex-col items-center gap-4 text-center">
          <h2 className="font-poppins text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="font-satoshi max-w-229.25 text-sm leading-relaxed text-neutral-400 sm:text-base">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <CourseCategories
          categoryRows={CATEGORY_ROWS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="mt-12 grid w-full grid-cols-1 justify-items-center gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
