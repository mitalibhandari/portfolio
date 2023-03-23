import project1 from '../assets/img/project1.png'
import project2 from '../assets/img/project2.png'
import project3 from '../assets/img/project3.png'

import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'

import addgene from "../assets/img/addgene.ico";
import neu from "../assets/img/neu.svg";

export const projects = [
    {
        title: "MerchStore",
        description: "Merch store is a full stack Ecommerce website to buy and sell University clothes.",
        imgUrl: project1,
        gitUrl: "https://github.com/mitalibhandari/merchstore#merch-store",
        tags: [
            {name: "Django", color: "blue"},
            {name: "React", color: "green"},
            {name: "PostgreSQL", color: "fuchsia"}],
    },
    {
        title: "DNA Nucleotide App",
        description: "Web application to count the number of nucleotide sequences in the inout DNA Sequence",
        imgUrl: project2,
        gitUrl: "https://github.com/mitalibhandari/DNA_nucleotide_Count.WebApp#dna-nucleotide-sequence-count-webapp",
        tags: [
            {name: "Python", color: "blue"},
            {name: "Streamlit", color: "green"},
            {name: "Pillow", color: "fuchsia"}],
    },
    {
        title: "Sliding Puzzle Game",
        description: "Users can play sliding puzzle games with five different options to choose from",
        imgUrl: project3,
        gitUrl: "https://github.com/mitalibhandari",
        tags: [
            {name: "OOP", color: "blue"},
            {name: "Turtle", color: "green"},
            {name: "Unittest", color: "fuchsia"}],
    },
]

export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const skills = [
    {
        id: "1",
        name: "Python",
        image: meter1
    }, 

    {
        id: "2",
        name: "Django",
        image: meter1
    },

    {
        id: "3",
        name: "JavaScript",
        image: meter3
    },

    {
        id: "4",
        name: "React",
        image: meter1
    },

    {
        id: "5",
        name: "HTML",
        image: meter1
    },

    {
        id: "6",
        name: "CSS",
        image: meter3
    }, 

    {
        id: "7",
        name: "Java",
        image: meter2
    },

    {
        id: "8",
        name: "SQL",
        image: meter1
    },

    {
        id: "9",
        name: "AWS",
        image: meter2
    },

]

export const experiences = [
    {
        title: "Software Engineer Intern",
        companyName: "Addgene",
        background: "#007cb9",
        color: "#fff",
        icon: addgene,
        location: "Boston, MA",
        date: "January 2022 - August 2022",
        points: [
            "Designed and developed Ecommerce website and Laboratory Information Management System",
            "Implemented a suite of tests utilizing unittest and Jasmine for primary codebase",
            "Deployed new features and bug-fixes in the Agile Sprint Cycle",
            "Collaborated with core-development and product team to fulfill requirements in frontend",
            "Reviewed 50+ pull requests for refinement and improvement of applications",
        ],
    },

    {
        title: "Graduate Teaching Assistant",
        companyName: "Northeastern University",
        background: "#e84a5f",
        color: "#fff",
        icon: neu,
        iconBg: "#383E56",
        location: "Boston, MA",
        date: "September 2021 - December 2022",
        points: [
            "Mentored, trained, and assisted 60+ Graduate students with Database Management and Data Analysis",
            "Conducted lab and demo sessions in MySQL server, Azure Data Studio, PyCharm, RStudio",
            "Introduced Grading Rubric decreasing grading time and workload by 60%",
            "Graded weekly assignments in SQL, Python and R programming languages",
        ],
    },
];