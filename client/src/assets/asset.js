import logo1 from './logo1.svg';
import user from './user.svg';
import search_icon from './search_icon.svg';
import Capgemini_Logo from './Capgemini_Logo.png';
import infosys from './infosys.jpg';
import tcs_icon from  './tcs_icon.png'
import devsync from './devsync.png'
import star_icon from './star_icon.jpg'
import star_blank from './star_blank.png'


export const assets = {
  logo1: logo1,
  user: user,
  search_icon: search_icon,
  Capgemini_Logo:Capgemini_Logo,
  infosys: infosys,
  tcs_icon:tcs_icon,
  devsync:devsync,
  star_icon:star_icon,
  star_blank : star_blank,
}

export const dummyCourses = [
  /* ───────────────────────── 1. INTRODUCTION TO JAVASCRIPT ───────────────────────── */
  {
    _id: "605c72efb3f1c2b1f8e4e1a1",
    courseTitle: "Introduction to JavaScript",
    courseDescription: `
      <h2>Learn the Basics of JavaScript</h2>
      <p>JavaScript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JavaScript, including syntax, data types, and control structures.</p>
      <p>This course is perfect for beginners who want to start their journey in web development. By the end of this course, you will be able to create interactive web pages and understand the core concepts of JavaScript.</p>
      <ul>
        <li>Understand the basics of programming</li>
        <li>Manipulate the DOM</li>
        <li>Create dynamic web applications</li>
      </ul>
    `,
    coursePrice: 49.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Getting Started with JavaScript",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "What is JavaScript?",
            lectureDuration: 16,
            lectureUrl: "https://youtu.be/CBWnBi-awSA",
            isPreviewFree: true,
            lectureOrder: 1
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Setting Up Your Environment",
            lectureDuration: 19,
            lectureUrl: "https://youtu.be/4187c2aeB4I",
            isPreviewFree: false,
            lectureOrder: 2
          }
        ]
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Variables and Data Types",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Understanding Variables",
            lectureDuration: 20,
            lectureUrl: "https://youtu.be/pZQeBJsGoDQ",
            isPreviewFree: true,
            lectureOrder: 1
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Data Types in JavaScript",
            lectureDuration: 10,
            lectureUrl: "https://youtu.be/ufHT2WEkkC4",
            isPreviewFree: false,
            lectureOrder: 2
          }
        ]
      }
    ],
    educator: "675ac1512100b91a6d98bb24",
    enrolledStudents: [
      "user_2qQlvXyr02B4Bq6hT0Gva5fT9v",
      "user_2qjIgkAqIMpiR2fIWIRzvWktE0w"
    ],
    courseRatings: [
      { userId: "user_2qjIgkAqIMpiR2fIWIRzvWktE0w", rating: 5, _id: "6773e37360cb0a974342314" }
    ],
    createdAt: "2024-12-17T08:16:53.622Z",
    updatedAt: "2025-01-02T04:47:44.701Z",
    __v: 4,
    courseThumbnail: "https://i.ytimg.com/vi/PwsigsH4oXw/maxresdefault.jpg"
  },

  /* ───────────────────────────── 2. REACT FUNDAMENTALS ──────────────────────────── */
  {
    _id: "60af11d6acbf4b2c9f97bf56",
    courseTitle: "React Fundamentals",
    courseDescription: `
      <h2>Build Modern UIs with React</h2>
      <p>This hands‑on course teaches you the essentials of React, including components, hooks, and state management.</p>
      <p>By the end you will be able to build fast, scalable single‑page applications.</p>
      <ul>
        <li>Master JSX and component architecture</li>
        <li>Manage state with hooks</li>
        <li>Set up routing and Context API</li>
      </ul>
    `,
    coursePrice: 54.99,
    isPublished: true,
    discount: 15,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "React Setup",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Create React App",
            lectureDuration: 15,
            lectureUrl: "https://youtu.be/qrItpq2xFEg",
            isPreviewFree: true,
            lectureOrder: 1
          },
          {
            lectureId: "lecture2",
            lectureTitle: "JSX Deep Dive",
            lectureDuration: 18,
            lectureUrl: "https://youtu.be/mBgN0ul7lxg",
            isPreviewFree: false,
            lectureOrder: 2
          }
        ]
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "State and Props",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Using useState",
            lectureDuration: 14,
            lectureUrl: "https://youtu.be/oY5LSgT1bsw",
            isPreviewFree: true,
            lectureOrder: 1
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Passing Props",
            lectureDuration: 12,
            lectureUrl: "https://youtu.be/IYvD9oBCuJI",
            isPreviewFree: false,
            lectureOrder: 2
          }
        ]
      }
    ],
    educator: "67c4bf2019756d9312eaab09",
    enrolledStudents: [
      "user_a8PDwXr938Fj20FvX3Ty",
      "user_Gh74Kld832FoKd23dL6w",
      "user_83NFvj304yDyR8kLf92l"
    ],
    courseRatings: [
      { userId: "user_a8PDwXr938Fj20FvX3Ty", rating: 5, _id: "6883ea7b05c5a1234def4567" },
      { userId: "user_Gh74Kld832FoKd23dL6w", rating: 4, _id: "6883ea7b05c5a1234def4568" }
    ],
    createdAt: "2025-05-18T08:00:00.000Z",
    updatedAt: "2025-07-02T09:40:00.000Z",
    __v: 2,
    courseThumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1fd-o3TUEb572k_EMh3FFpP95yQcEoLzMA&s"
  },

  /* ─────────────────────────── 3. ADVANCED PYTHON PROGRAMMING ───────────────────── */
  {
    _id: "65a11c8149de4e2fa0c76e91",
    courseTitle: "Advanced Python Programming",
    courseDescription: `
      <h2>Deep Dive into Python</h2>
      <p>Take your Python skills to the next level by exploring advanced topics such as generators, decorators, concurrency, and metaprogramming.</p>
      <ul>
        <li>Write highly efficient code with generators & coroutines</li>
        <li>Implement decorators for clean architecture</li>
        <li>Leverage async/await for concurrent programs</li>
      </ul>
    `,
    coursePrice: 64.99,
    isPublished: true,
    discount: 10,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Iterators & Generators",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Creating Custom Iterators",
            lectureDuration: 22,
            lectureUrl: "https://youtu.be/9sZcnbwhb04",
            isPreviewFree: true,
            lectureOrder: 1
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Lazy Evaluation with Generators",
            lectureDuration: 18,
            lectureUrl: "https://youtu.be/Y2M5DGcW5yw",
            isPreviewFree: false,
            lectureOrder: 2
          }
        ]
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Decorators & Metaprogramming",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Function & Class Decorators",
            lectureDuration: 20,
            lectureUrl: "https://youtu.be/JEU2Qqwa4Es",
            isPreviewFree: true,
            lectureOrder: 1
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Dynamic Class Creation",
            lectureDuration: 17,
            lectureUrl: "https://youtu.be/zdJEZ9bjz3A",
            isPreviewFree: false,
            lectureOrder: 2
          }
        ]
      }
    ],
    educator: "67f91e3b5d8e497720ceaad4",
    enrolledStudents: [
      "user_Dj83nS9kAq19Psle4MxA",
      "user_Lm72kPx91s0Oqnt5ZcC"
    ],
    courseRatings: [
      { userId: "user_Dj83nS9kAq19Psle4MxA", rating: 5, _id: "69ab7ee2350ce606def41890" }
    ],
    createdAt: "2025-02-12T13:05:00.000Z",
    updatedAt: "2025-07-01T10:15:00.000Z",
    __v: 1,
    courseThumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLPLTvH7cp91HZy-1Wq7gSrr_JThs3hQQ_Bg&s"
  },

  /* ────────────────────────────── 4. UI/UX DESIGN MASTERCLASS ───────────────────── */
  {
    _id: "64bf32e6165ed2aa5f38c8a4",
    courseTitle: "UI/UX Design Masterclass",
    courseDescription: `
      <h2>Create Stunning User Experiences</h2>
      <p>Learn research methods, wireframing, prototyping, and usability testing to build beautiful and intuitive products.</p>
      <ul>
        <li>User research & personas</li>
        <li>High‑fidelity prototyping in Figma</li>
        <li>Accessibility best practices</li>
      </ul>
    `,
    coursePrice: 59.99,
    isPublished: true,
    discount: 0,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Design Thinking & Research",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Empathize with Users",
            lectureDuration: 14,
            lectureUrl: "https://youtu.be/LuMz2RS2m04",
            isPreviewFree: true,
            lectureOrder: 1
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Creating Personas",
            lectureDuration: 12,
            lectureUrl: "https://youtu.be/jcgsXYCwfeo",
            isPreviewFree: false,
            lectureOrder: 2
          }
        ]
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Wireframes & Prototypes",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Low‑Fidelity Wireframing",
            lectureDuration: 11,
            lectureUrl: "https://youtu.be/2o3T1OkpLsw",
            isPreviewFree: true,
            lectureOrder: 1
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Interactive Prototypes in Figma",
            lectureDuration: 19,
            lectureUrl: "https://youtu.be/7tGIYBJ3bA8",
            isPreviewFree: false,
            lectureOrder: 2
          }
        ]
      }
    ],
    educator: "67c1126a107c8ba68fee907e",
    enrolledStudents: ["user_9Bc72k4daFIlqwe24NsM"],
    courseRatings: [],
    createdAt: "2025-03-28T09:00:00.000Z",
    updatedAt: "2025-06-30T16:22:00.000Z",
    __v: 0,
    courseThumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0z7FC15bpkpTDrDrYfQ7P5UhKz3P41H_HA&sl"
  },

  /* ──────────────────────── 5. NODE.JS & EXPRESS API DEVELOPMENT ────────────────── */
  {
    _id: "65c0f47e31bbac0d8e09292e",
    courseTitle: "Node.js & Express API Development",
    courseDescription: `
      <h2>Build Scalable Back‑End Services</h2>
      <p>Design and implement RESTful APIs with Node.js, Express, and MongoDB, then secure them with JWT authentication.</p>
      <ul>
        <li>Express routing & middleware</li>
        <li>MongoDB data modeling</li>
        <li>Authentication & testing</li>
      </ul>
    `,
    coursePrice: 69.99,
    isPublished: true,
    discount: 25,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Setting Up the Project",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Initializing with npm",
            lectureDuration: 13,
            lectureUrl: "https://youtu.be/TlB_eWDSMt4",
            isPreviewFree: true,
            lectureOrder: 1
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Basic Express Server",
            lectureDuration: 15,
            lectureUrl: "https://youtu.be/pKd0Rpw7O48",
            isPreviewFree: false,
            lectureOrder: 2
          }
        ]
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "CRUD with MongoDB",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Mongoose Models",
            lectureDuration: 17,
            lectureUrl: "https://youtu.be/4yqu8m3Ba28",
            isPreviewFree: true,
            lectureOrder: 1
          },
          {
            lectureId: "lecture4",
            lectureTitle: "JWT Auth & Middleware",
            lectureDuration: 21,
            lectureUrl: "https://youtu.be/2jqok-WgelI",
            isPreviewFree: false,
            lectureOrder: 2
          }
        ]
      }
    ],
    educator: "67d237b1c4172f59bd811f83",
    enrolledStudents: [
      "user_Xs812nTqp91lw2dAs0Dm",
      "user_Gz22bVsg83jKpdls98Sq"
    ],
    courseRatings: [
      { userId: "user_Gz22bVsg83jKpdls98Sq", rating: 4, _id: "69c12aa342109ba30d135d7f" }
    ],
    createdAt: "2025-04-10T11:45:00.000Z",
    updatedAt: "2025-07-03T08:30:00.000Z",
    __v: 1,
    courseThumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEPN0MIYMMEOPcqi11fzsqGrrkwJ4ZtnYjg&s"
  },

  /* ───────────────────────────── 6. DIGITAL MARKETING ESSENTIALS ────────────────── */
  {
    _id: "65d109ae47a1fa2e3b567c18",
    courseTitle: "Digital Marketing Essentials",
    courseDescription: `
      <h2>Grow Brands in the Digital Age</h2>
      <p>Cover SEO, social media, email campaigns, and paid advertising to create a full‑funnel marketing strategy.</p>
      <ul>
        <li>Keyword research & on‑page SEO</li>
        <li>Facebook & Instagram ads</li>
        <li>Email automation workflows</li>
      </ul>
    `,
    coursePrice: 45.99,
    isPublished: true,
    discount: 30,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "SEO Foundations",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Keyword Research Tools",
            lectureDuration: 16,
            lectureUrl: "https://youtu.be/fAZ6xH5wmsU",
            isPreviewFree: true,
            lectureOrder: 1
          },
          {
            lectureId: "lecture2",
            lectureTitle: "On‑Page Optimization",
            lectureDuration: 14,
            lectureUrl: "https://youtu.be/kQEDk0UaqDI",
            isPreviewFree: false,
            lectureOrder: 2
          }
        ]
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Social Media Ads",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Crafting Ad Creatives",
            lectureDuration: 12,
            lectureUrl: "https://youtu.be/tv‑yesj5lzQ",
            isPreviewFree: true,
            lectureOrder: 1
          },
          {
            lectureId: "lecture4",
            lectureTitle: "A/B Testing Campaigns",
            lectureDuration: 18,
            lectureUrl: "https://youtu.be/cSACv‑xIhbM",
            isPreviewFree: false,
            lectureOrder: 2
          }
        ]
      }
    ],
    educator: "67e7334e4d6c65a91ee55e21",
    enrolledStudents: [],
    courseRatings: [],
    createdAt: "2025-06-05T14:10:00.000Z",
    updatedAt: "2025-07-02T17:55:00.000Z",
    __v: 0,
    courseThumbnail: "https://fueler.io/storage/users/timeline_image/1659279686-jy2p84ykvimsekzsjsx3.png"
  }
];

export const dummyTestimonial = [
  {
    name: "Aarav Sharma",
    role: "B.Tech (CSE), 2nd Year",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.9,
    feedback:
      "The JavaScript track turned my basic coding skills into a solid foundation. Project‑based lessons and quick mentor feedback kept me engaged from day one."
  },
  {
    name: "Meera Nair",
    role: "MBA Candidate",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.7,
    feedback:
      "I juggled classes and work, so the bite‑sized business analytics modules were perfect. The case‑study approach helped me apply concepts directly to my internship."
  },
  {
    name: "Rohan Patel",
    role: "UX Design Bootcamp Graduate",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    rating: 5.0,
    feedback:
      "From Figma basics to a polished capstone project, the course covered it all. The peer‑review sessions felt like real client critiques—huge confidence booster!"
  }


];




