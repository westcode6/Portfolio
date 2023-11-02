import {
    mobile,
    responsive,
    contentCreator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    whoscore,
    kidbro,
    sellz,

  } from "../assets";
  

  export const navLinks = [
  
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Project",
    },

    {
      id: "contact",
      title: "Contact",
    },
  ];

  export const profileLinks = [
  
    {
      id: "LinkedIn",
      title: "LinkedIn",
    },
    {
      id: "Dribble",
      title: "Dribble",
    },

    {
      id: "Instagram",
      title: "Instagram",
    },
  ];
  
  const services = [
    {
      title: "UX & UI",
      icon: web,
      desc: "Desiging user interfaces that are intuitive, efficient, and enjoyable to use",
    },
    {
      title: "Web & Mobile App",
      icon: responsive,
      desc: "Transforming ideas  into exceptional web and mobile app experience",
    },
    {
      title: "Design & Creative",
      icon: mobile,
      desc: "Crafting visually stunning designs that connect with your audience.",
    },
    {
      title: "Development",
      icon: contentCreator,
      desc: "Bringing your vision to life with the latest technology and design trends",
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "SvelteJS",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Vite JS",
      icon: nodejs,
    },
 
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "FrontLead Developer",
      company_name: "Goviral Inc",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Junior Developer",
      company_name: "Whoscore",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Gopluva",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2020 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Team Lead Frontend",
      company_name: "Kokolity",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "From the start of the project, through to completion, God'spower supported us and exceeded our expectations in every way. Not only was our experience personal and friendly, his ability to identify and present our key messages in an imaginative and creative way gave us a huge amount of confidence in him",
      name: "Jake Athersmith",
      designation: "CFO",
      company: "Acme Co",
      image: {sellz},
    },
    {
      testimonial:
        "Just thought I’d share something with you about my website. I have had so much positive feedback from friends and family on how great the site looks, and have also sold four toppers already this week direct from the website. Thanks for making it look so professional!",
      name: "Andrew Smith",
      designation: "Cake Figures",
      company: "CakeFigures.com",
      image: {kidbro}
    },
    {
      testimonial:
        "God'spower has done a fantastic job overall. Not only the site is to design, the code is very clean and slick. Love the way he achieved the transition portion of the site",
      name: "Kalwinder Dohil",
      designation: "CTO",
      company: "Structures Salon",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDwLTbTSMGZwcsWKqEIYO2TGEeNleK7Mrmg&usqp=CAU",
    },
  ];
  
  const projects = [
    {
      name: "WhoScore",
      description:
        "Viral Inc, Whoscore's parent company, is an Ad-Tech Startup that is building tools that help businesses connect better with their potential Users.",
      tags: [
        {
          name: "react",
          color: "milky",
        },
        {
          name: "mongodb",
          color: "greeny",
        },
        {
          name: "tailwind",
          color: "pinky",
        },
      ],
      image: whoscore,
      source_code_link: "https://test-whoscore-v2.vercel.app/home",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "milky",
        },
        {
          name: "mongodb",
          color: "greeny",
        },
        {
          name: "tailwind",
          color: "pinky",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "InsightJob",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "milky",
        },
        {
          name: "restapi",
          color: "greeny",
        },
        {
          name: "scss",
          color: "pinky",
        },
      ],
      image: jobit,
      source_code_link: "https://ko-kolity-funds.vercel.app/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "greeny",
        },
        {
          name: "supabase",
          color: "milky",
        },
        {
          name: "css",
          color: "pinky",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };