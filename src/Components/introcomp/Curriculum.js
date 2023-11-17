import React, { useState } from "react";
import section from "../../Assests/section.svg";
import lectures from "../../Assests/lectures.svg";
import duration from "../../Assests/duration.svg";
import courseaccess from "../../Assests/courseaccess.svg";
import "./IntroCurric.css";
const Curriculum = () => {
  // const topics1 = [
  //     {
  //         section_name: "Introduction",
  //         section_lectures: ["Introduction to the course"]
  //     },
  //     {
  //         section_name: "Basic Python Concepts",
  //         section_lectures: ["Installing Python And PyCharm",
  //             "Hello World Program In Python",
  //             "Some other mathematical operations in Python",
  //             "Strings In Python",
  //             "Accepting input from the user in Python",
  //             "Performing operations on a string in Python",
  //             "Variables in Python",
  //             "In place operators in Python.",
  //             "Writing our very first program in PyCharm",
  //             "Coding Challenge Part 1"]
  //     },
  //     {
  //         section_name: "Control Structures In Python",
  //         section_lectures: ["If statement in Python",
  //             "Elif statement in Python",
  //             "Introduction to lists in Python",
  //             "List operations in Python",
  //             "List functions in Python",
  //             "Range function in Python",
  //             " Code reuse and functions in Python",
  //             "For Loop in Python",
  //             "Boolean logic in Python",
  //             "While loop in Python"]
  //     },
  //     {
  //         section_name: "Functions & Modules In Python",
  //         section_lectures: ["Passing arguments to functions in Python",
  //             "Making function return value in Python",
  //             "Passing functions as arguments in Python",
  //             "Modules in Python"]
  //     },
  //     {
  //         section_name: "Exception Handling & File Handling In Python",
  //         section_lectures: ["Errors & exceptions in Python",
  //             "Exception handling in Python",
  //             "Finally block",
  //             "File handling",
  //             "Reading data from file",
  //             "Adding data to the file",
  //             "Appending to a file"]
  //     },
  //     {
  //         section_name: "Some More Types In Python",
  //         section_lectures: [
  //             "Dictionaries",
  //             "Dictionary Functions",
  //             "Tuples",
  //             "List Slicing",
  //             "List Comprehension",
  //             "String formatting",
  //             "String functions",
  //             "Numeric functions"]
  //     },
  //     {
  //         section_name: "Functional Programming In Python",
  //         section_lectures: [
  //             "Functional programming",
  //             "Lambdas in Python",
  //             "Map in Python",
  //             "Filters in Python",
  //             "Generators in Python"]
  //     },
  //     {
  //         section_name: "Object Oriented Programming In Python",
  //         section_lectures: [
  //             "Introduction To Object Oriented Programming, Classes & Objects",
  //             "Class Methods",
  //             "Creating A Class & Defining Class Attributes",
  //             "Instance Attributes & Constructor",
  //             "Implementing Methods In Object Oriented Programming",
  //             "Function Based vs OOP Way Of Writing Code",
  //             "Inheritance",
  //             "Multiple Inheritance",
  //             "Multi-level Inheritance",
  //             "Recursion in Python",
  //             "Sets",
  //             "Itertools",
  //             "Operator overloading in Python",
  //             "Data hiding in Python"]
  //     },
  //     {
  //         section_name: "Regular Expressions In Python",
  //         section_lectures: [
  //             "Regular expressions in Python",
  //             "Search & find all",
  //             "Find & replace",
  //             "The dot metacharacter",
  //             "Caret & dollar metacharacter",
  //             "Character class",
  //             "Star metacharacter",
  //             "Group"]
  //     },
  //     {
  //         section_name: "Create GUI Apps In Python Using Tkinter",
  //         section_lectures: [
  //             "Tkinter : Hello world program",
  //             "Tkinter: Using frames",
  //             "Tkinter: Grid layout",
  //             "Tkinter: Self adjusting widgets",
  //             "Tkinter: Handling button clicks",
  //             "Tkinter: Using classes",
  //             "Tkinter: Using drop downs",
  //             "Tkinter: Toolbar",
  //             "Tkinter: Making Status Bar",
  //             "Tkinter: Message box",
  //             "Tkinter Drawing"]
  //     },
  //     {
  //         section_name: "Building Calculator App Using Tkinter",
  //         section_lectures: ["Building Calculator App Part 1",
  //             "Building Calculator App Part 2",
  //             "Building Calculator App Part 3",
  //             "Building Calculator App Part 4",]
  //     },
  //     {
  //         section_name: "Building Database Apps With PostgreSQL & Python",
  //         section_lectures: [
  //             "Introduction To Databases",
  //             "Introduction To PostgreSQL",
  //             "Installing PostgreSQL On Windows",
  //             "Installing PostgreSQL On Mac",
  //             "Creating A Database",
  //             "Creating Table & Adding Data",
  //             "Reading Data From Database",
  //             "Setting Up Virtualenv on Mac",
  //             "Setting Up Virtualenv On Windows",
  //             "Installing Psycopg2",
  //             'Connecting To Database With Python Code',
  //             "Creating Database Tables With Python",
  //             "Adding Data To Database Tables With Python",
  //             "User Submitted Data To Database",
  //             'Creating App Layout',
  //             "Adding Entries",
  //             "Saving Entries To Database",
  //             'Search Functionality',
  //             "Listing All Entries"]
  //     },
  //     {
  //         section_name: "Data Analysis Using Python",
  //         section_lectures: ["Introduction to Data Analysis Using Python",
  //             "Installing Tools For Data Analysis",
  //             "Introduction to Pandas & Series",
  //             "Converting Dictionaries to Series",
  //             "Introduction to Data Frames",
  //             "Changing Column Sequence",
  //             "Changing Columns & Transposing Dataframe",
  //             "Reindexing Series & DataFrames",
  //             "Deleting Rows & Coulumns",
  //             "Arithmetic operations on dataframe and series",
  //             "Arithmetic operations in between dataframe and series",
  //             "Sorting series and dataframes",
  //             "Sorting according to values",
  //             "Handling duplicate values",
  //             "Calculating sum, max & min values",
  //             "Dropping nan values",
  //             "Loading data from a file",
  //             "Analyzing file data",
  //             "Creating Numpy Array",
  //             "19 Another way to create an array",
  //             "Logspace & Linspace",
  //             "Slicing a Numpy Array",
  //             "Advanced indexing and slicing techniques",
  //             "Broadcasting",
  //             "Iterating using ndite",
  //             "Plotting data using Matplotlib",
  //             "Analysing Supermarket Sales Data Part 1: Reading CSV File",
  //             "Analysing Supermarket Sales Data Part 2: Switching Up The Theme",
  //             "Analysing Supermarket Sales Data Part 3: Accessing Different Parts Of Data",
  //             "Analysing Supermarket Sales Data Part 4: Selecting Rows On A Condition",
  //             "Analysing Supermarket Sales Data Part 5: Queries To Find Conditional Data",
  //             "Analysing Supermarket Sales Data Part 6: Sum, Max, Min & Average",
  //             "Analysing Supermarket Sales Data Part 7: Using GroupBy To Group Data By Location",
  //             "Analysing Supermarket Sales Data Part 8: Finding Market Share",
  //             "Analysing Supermarket Sales Data Part 9: Classifying Shoppers",
  //             "Analysing Supermarket Sales Data Part 10: Analysing Memberships & Ratings",
  //             "Analysing Supermarket Sales Data Part 11: Answering Multiple Queries",
  //             "Analysing Supermarket Sales Data Part 12: Classifying Sales By Day",
  //             "Analysing Supermarket Sales Data Part 13: Classifying Sales By Month",
  //             "Analysing Supermarket Sales Data Part 14: Classifying Sales By Hour",
  //             "Analysing Supermarket Sales Data Part 15: Classifying Payment Types With Hour"]
  //     },

  // ]

  const topicsUIUX1 = [
    {
      section_name: "Introduction to the Course",
      section_lectures: ["Introduction"],
    },
    {
      section_name: "Sketching",
      section_lectures: [
        "Introduction to sketching",
        "The sketching process",
        "Sketching user flows",
        "Sketching user flows 2",
        "Sketching user flows 3",
        "Sketching user flows 4",
        "Sketching tips",
      ],
    },
    {
      section_name: "Inspiration",
      section_lectures: ["How to stay inspired", "How to find inspiration"],
    },
    {
      section_name: "Introduction to figma",
      section_lectures: [
        "INTRODUCING FIGMA",
        "figma dashboard",
        "figma tools",
        "layers and pages",
        "the top bar",
        "design properties",
        "prototyping in figma",
        "Exercise creating a responsive layout",
      ],
    },
    {
      section_name: "User flows",
      section_lectures: [
        "The Do's and Dont's",
        "Speedup workflow with components",
        "Creating own user flows.",
        "Creating own user flows 2",
        "Creating own userflows 3",
      ],
    },
    {
      section_name: "Sitemaps",
      section_lectures: [
        "Creating a basic sitemap",
        "Before you start",
        "Creating a sitemap 1",
        "Creating a sitemap 2",
        "Before getting started with wireframes",
      ],
    },
    {
      section_name: "Wireframe",
      section_lectures: [
        "What is a wireframe",
        "How to create wireframes",
        "Wireframes in figma",
        "Creating our homepage",
        "Creating product page",
        "Creating the Cart page",
      ],
    },
    {
      section_name: "Prototyping",
      section_lectures: [
        "Prototyping basics in figma",
        "Prototyping basics in figma 2",
        "Prototyping basics in figma 3",
        "Prototyping basics in figma 4",
        "Linking a quick user flow",
        "Working on small interactions",
      ],
    },
    {
      section_name: "Feedback",
      section_lectures: ["Why is feedback important and how to work on them"],
    },
    {
      section_name: "Spacing and Grids",
      section_lectures: [
        "Grid",
        "Grid Basics",
        "Responsive Grids and Breakpoints",
        "Creating own grid in figma",
        "Grid Guidelines",
      ],
    },
    {
      section_name: "Typography",
      section_lectures: [
        "Serif",
        "Sans Serif",
        "Display and mono",
        "Choosing a typeface",
        "Creating our own type system",
      ],
    },
    {
      section_name: "Color",
      section_lectures: [
        "Color schemes",
        "Important questions to ask",
        "Creating Color Palettes",
        "Creating a monochromatic color palette",
        "Applying our Color palette",
        "Expanding a strict color palette",
        "Creating our own color palette",
      ],
    },
    {
      section_name: "Forms+UI elements",
      section_lectures: [
        "What are forms and UI elements",
        "Best practices for forms",
        "Best practices for inputs",
        "Best practices for inputs_2",
        "Best practices for inputs_3",
        "Best practices for inputs_4",
        "Best practices for buttons",
        "Creating components in figma",
        "Using Atomic elements",
        "Using instances in figma",
        "Editing instances",
        "Responsive components",
        "Creating a registration form",
      ],
    },
    {
      section_name: "Visual Assets",
      section_lectures: [
        "Visual Assets introduction",
        "Photos in Figma",
        "Photos in figma 2",
        "Working with developers",
        "Figma plugins and icons",
        "Custom icons",
      ],
    },
    {
      section_name: "Accessibility",
      section_lectures: [
        "Visual patterns for accessibility",
        "Tools to make design accessible",
        "Visual patterns for accessibility",
      ],
    },
  ];
  const topicsUIUX2 = [
    {
      section_name: "Design Patterns",
      section_lectures: [
        "What are design patterns",
        "Why are design patterns so valuable",
        "How to apply design patterns",
        "Analyzing design patterns",
        "Analyzing, Dissecting, and choosing design patterns",
      ],
    },
    {
      section_name: "Mobile Design",
      section_lectures: [
        "Mobile design best practices",
        "Best practice part 2",
      ],
    },
    {
      section_name: "Visual style+Exploration",
      section_lectures: [
        "Design fidelity",
        "Style Exploration",
        "Style Exploration 2",
        "Style Exploration 3",
        "Style Exploration 4",
      ],
    },
    {
      section_name: "Motion",
      section_lectures: [
        "Importance of motion",
        "The purpose of motion",
        "Intro to smart animate",
        "The power of smart animate",
      ],
    },
    {
      section_name: "Microinteractions",
      section_lectures: [
        "What is a microinteraction",
        "Why are microinteractions important",
        "Creating our own microinteraction",
        "Creating our own microinteraction part2",
        "Figmotion",
        "Using Figmotion 2",
      ],
    },
    {
      section_name: "Design Systems",
      section_lectures: [
        "Components Cards",
        "Vertical Cards",
        "Recipes Search",
        "Recipes Order List",
      ],
    },
    {
      section_name: "Final Compositions",
      section_lectures: [
        "Using our design system",
        "Using our design system system 2 part 1",
        "Using our design system 2 part 2",
        "Using our design systems 3",
        "Final prototypes",
        "Final prototypes 2",
        "Final prototypes 3",
        "Final prototypes 4",
      ],
    },
    {
      section_name: "Web Portfolio",
      section_lectures: [
        "Where to host your web portfolio",
        "How to place and export designs",
      ],
    },
    {
      section_name: "From Figma to Website_Building out Website",
      section_lectures: [
        "Initial setup figma handoff",
        "Build UI_Adding image assets",
        "Build UI_Styling Image Assets",
      ],
    },
    {
      section_name: "Extra_HTML",
      section_lectures: [
        "Build your first website",
        "Developer fundamentals",
        "HTML Tags",
        "HTML Tags2",
        "Self closing tags",
        "Anchor tag",
        "index.html",
        "Relative vs absolute path",
        "HTML forms",
        "HTML forms 2",
        "Submitting a form",
        "HTML tags3",
        "HTML vs HTML5",
        "Copy a website",
      ],
    },
    {
      section_name: "CSS3",
      section_lectures: [
        "CSS INTRO",
        "Your first CSS part 2",
        "Part 3",
        "Part 2 selectors",
        "CSS properties",
        "Selectors in CSS",
        "Text and font",
        "Images in CSS",
        "Box model",
        "px vs em vs rem",
        "Critical render path",
        "Flexbox",
        "CSS3",
        "Responsive UI",
      ],
    },
    {
      section_name:
        "Bootstrap templates, and building your startup landing page",
      section_lectures: [
        "Bootstrap Introduction",
        "Bootstrap",
        "Bootstrap Grid",
        "Exercise: Building our startup landing page part 1+part 2",
        "Exercise: Startup landing page part 3",
        "Exercise: Startup landing page part 4",
        "Exercise: Startup landing page part 5",
        "Adding email subscribe form with Mailchimp",
        "Developer fundamentals",
        "Working with templates",
      ],
    },
    {
      section_name: "CSS Grid+Css layout",
      section_lectures: [
        "Overview",
        "Grid vs Flexbox Vs Bootstrap",
        "CSS Grid1",
        "CSS Grid2",
        "CSS Grid3",
        "CSS Grid4",
        "CSS Grid5",
        "Solution_Navigation bar",
        "Solution_Navigation bar 2",
        "Solution Cover",
        "Project grid+footer",
        "Solution prettify",
      ],
    },
    {
      section_name: "Conclusion",
      section_lectures: ["Conclusion"],
    },
  ];
  const details = {
    ratings: 4.9,
    lectures: 179,
    duration: " 31h 54m",
  };
  // const topics2 = [
  //     {
  //         section_name: "Make Web Applications In Python Using Django",
  //         section_lectures: ["Django Tutorial 1: Installing Django on Windows",
  //             "Django Tutorial 2: Creating Our First Django Project",
  //             "Django Tutorial 3: Creating Our Own App",
  //             "Django Tutorial 4: Overview Of an App in Django",
  //             "Django Tutorial 5: Creating Our Own Views in Django",
  //             "Django Tutorial 6: Applying Migrations",
  //             "Django Tutorial 7: Creating Books Table in Django",
  //             "Django Tutorial 8: Final Steps in Creating Table",
  //             "Django Tutorial 9: Adding Data to the Database Tables",
  //             "Django Tutorial 10: Filtering the Results",
  //             "Django Tutorial 11: Admin Panel in Django",
  //             "Django Tutorial 12: Creating Another View in Django",
  //             "Django Tutorial 13: Connecting to the Database",
  //             "Django Tutorial 14: Creating Templates",
  //             "Django Tutorial 15: Rendering Templates",
  //             "Django Tutorial 16: Raising a 404 Error",
  //             "Django Tutorial 17: Designing The Detail View",
  //             "Django Tutorial 18: Removing The Hardcoded Urls",
  //             "Django Tutorial 19: Namespaces in Django",
  //             "Django Tutorial 20: Using Static Files In Django",
  //             "Django Tutorial 21: Creating Our Navigation Bar",
  //             "Django Tutorial 22: Navigation Bar Touchup",
  //             "Django Tutorial 23: Using Base Templates",
  //             "Django Tutorial 24: Generic Views In Django",
  //             "Django Tutorial 25: Design Touchup",
  //             "Django Tutorial 26: Form To Add Books",
  //             "Django Tutorial 27: Form part - 2"]
  //     },
  //     {
  //         section_name: "Make Web Applications Using Django Part-2",
  //         section_lectures: ["Using virtual environment",
  //             "Django 2 Lecture 1 Creating a project",
  //             "Django 2 Lecture 2 Creating An App",
  //             "Django 2 Lecture 3 Overview of an app",
  //             "Django 2 Lecture 4 Creating a View",
  //             "Django 2 Lecture 5 Applying Migrations",
  //             "Django 2 Lecture 6 Creating Models",
  //             "Django 2 Lecture 7 Creating Database Tables",
  //             "Django 2 Lecture 8 Adding Data To Database",
  //             "Django 2 Lecture 9 Filtering Results",
  //             "Django 2 Lecture 10 Creating A Super User",
  //             "Django 2 Lecture 11 Creating Another View",
  //             "Django 2 Lecture 12 Connecting To The Database",
  //             "Django 2 Lecture 13 Creating Templates",
  //             "Django 2 Lecture 14 Using Render",
  //             "Django 2 Lecture 15 Raising 404 Error",
  //             "Django 2 Lecture 16 Designing The Detail View",
  //             "Django 2 Lecture 17 Removing Hard Coded URLs",
  //             "Django 2 Lecture 18 Using Namespaces",
  //             "Django 2 Lecture 19 Using Static Files",
  //             "Django 2 Lecture 20 Designing Navbar",
  //             "Django 2 Lecture 21 Navbar Touchup"]
  //     },
  //     {
  //         section_name: "Make Web Applications in Python Using Flask",
  //         section_lectures: ["Flask Tutorial 1: Creating Directory Structure",
  //             "Flask Tutorial 2: Hello world",
  //             "Flask Tutorial 3: Routing",
  //             "Flask Tutorial 4: Variables",
  //             "Flask Tutorial 5: Dynamic Urls",
  //             "Flask Tutorial 6: Passing Data To The Server",
  //             "Flask Tutorial 7: Templates",
  //             "Flask Tutorial 8: Templates Passing Data",
  //             "Flask Tutorial 9: Using Templates",
  //             "Flask Tutorial 10: Passing Form Data To Templates",
  //             "Flask Tutorial 11: Using Cookies"]
  //     },
  //     {
  //         section_name: "Building REST API's with Python and Django",
  //         section_lectures: ["Introduction to API",
  //             "Building a basic REST API using Django REST Framework",
  //             "Creating API Endpoints",
  //             "Adding Image Field",
  //             "Filtering",
  //             "Search functionality",
  //             "API Authentication"]
  //     },
  //     {
  //         section_name: "Crawl Websites Using Python : Web Crawling",
  //         section_lectures: ["Python Web Crawler Part -1",
  //             "Python Web Crawler Part -2",
  //             "Python Web Crawler Part -3",
  //             "Python Web Crawler Part -4",
  //             "Python Web Crawler Part -5",
  //             "Python Web Crawler Part -6",
  //             "Python Web Crawler Part -7",
  //             "Python Web Crawler Part -8",
  //             "Python Web Crawler Part -9",
  //             "Python Web Crawler Part -10",
  //             "Python Web Crawler Part -11",
  //             "Python Web Crawler Part -12",
  //             "Python Web Crawler Part -13",
  //             "Python Web Crawler Part -14",
  //             "Python Web Crawler Part -15",
  //             "Python Web Crawler Part -16",
  //             "Python Web Crawler Part -17",
  //             "Python Web Crawler Part -18",
  //             "Python Web Crawler Part -19"]
  //     },
  //     {
  //         section_name: "Automation With Selenium Web Driver and Python",
  //         section_lectures: ["Introduction to Selenium",
  //             "Installing Selenium",
  //             "Opening a URL",
  //             "Automating Google Search",
  //             "Find Elements By XPATH",
  //             "Clicking Links",
  //             "Refreshing a Webpage",
  //             "Using Forward and Backward Navigation Buttons",
  //             "Scrolling and Getting the Current URL"]
  //     },
  //     {
  //         section_name: "Building A Facebook Auto Poster",
  //         section_lectures: ["Building A Facebook Auto Poster"]
  //     },
  //     {
  //         section_name: "Python Best Practices: Writing Clean & Efficient Python Code",
  //         section_lectures: ["Writing Clean Python Code: Best Practices part 1",
  //             "Writing Clean Python Code: Best Practices part 2",
  //             "Writing Clean Python Code: Best Practices part 3",
  //             "Writing Clean Python Code: Best Practices part 4",
  //             "Writing Clean Python Code: Best Practices part 5"]
  //     },
  //     {
  //         section_name: "Network Programming In Python Using Sockets : Building A Chat Application",
  //         section_lectures: ["IP Address",
  //             "Ports & Sockets",
  //             "Creating A Client",
  //             "Sending Messages",
  //             "Using Buffer",
  //             "Building The Messaging Functionality",
  //             "Sending Messages To Client",
  //             "Programming Send Functionality",
  //             "Completing Our Chat App"]
  //     },
  //     {
  //         section_name: "Image Processing With OpenCV & Python",
  //         section_lectures: ["Introduction To OpenCV",
  //             "Installing OpenCV",
  //             "Reading & Displaying Images",
  //             "Capturing Video From Webcam",
  //             "Drawing Shapes On Images",
  //             "Mouse Callback Events",
  //             "Manipulating Pixels",
  //             "Color Spaces In OpenCV",
  //             "Object Tracking In Images",
  //             "Object Tracking In Videos",
  //             "Simple Thresholding",
  //             "Simple Thresholding Implementation",
  //             "Adaptive Thresholding",
  //             "Adaptive Thresholding Implementation",
  //             "Geometric Transformation Of Images",
  //             "Geometric Transformation Of Images Implementation",
  //             "Image Blurring",
  //             "Image Blurring Implementation",
  //             "Averaging",
  //             "Gaussian Filtering"]
  //     },
  //     {
  //         section_name: "Miscellaneous Content",
  //         section_lectures: ["Updating entries in Django with UpdateView",
  //             "Bootstrap part 1: Introduction To Bootstrap",
  //             "Bootstrap Part 2: Adding Bootstrap To Our Site",
  //             "Bootstrap Part 3: Bootstrap Grid System",
  //             "Bootstrap Part 4: Grid Classes Part 1",
  //             "Bootstrap Part 5: Grid Classes Part 2",
  //             "Bootstrap Part 6: Grid Column Offset",
  //             "Bootstrap Part 7: Making Images Responsive",
  //             "Bootstrap Part 8: Nesting of Rows & Columns"]
  //     },
  //     {
  //         section_name: "Regular Expressions Revisited",
  //         section_lectures: ["Introduction to Regular Expressions & Raw Strings",
  //             "Search & Match Methods",
  //             "Introduction To Meta Characters",
  //             "Introduction To Plus Meta Character",
  //             "Plus Meta Character Example",
  //             "Introduction To Curly Braces",
  //             "Curly Braces Example",
  //             "Introduction To Wildcard",
  //             "Wildcard Example",
  //             "Optional Meta Character",
  //             "Caret Meta Character",
  //             "Character Classes Part 1",
  //             "Character Classes Part 2"
  //         ]
  //     },
  //     {
  //         section_name: "Conclusion",
  //         section_lectures: ["Conclusion"]
  //     },
  // ]
  return (
    <div className="icurr-cont">
      <div className="icurr-inner-cont">
        <div className="icurr-head">Curriculum</div>
        <div className="icurr-subhead-cont">
          <div className="ihero-card-out-cont">
            <div className="ihero-card-cont">
              <div className="ihero-card-img-cont">
                <img src={section} alt="section"></img>
              </div>
              <div>
                <div className="ihero-card-head">{details.ratings}</div>
                <div className="ihero-card-text">Ratings</div>
              </div>
            </div>
          </div>
          <div className="ihero-card-out-cont">
            <div className="ihero-card-cont">
              <div className="ihero-card-img-cont">
                <img src={lectures} alt="lectures"></img>
              </div>
              <div>
                <div className="ihero-card-head">{details.lectures}</div>
                <div className="ihero-card-text">Lectures</div>
              </div>
            </div>
          </div>
          <div className="ihero-card-out-cont">
            <div className="ihero-card-cont">
              <div className="ihero-card-img-cont">
                <img src={duration} alt="duration"></img>
              </div>
              <div>
                <div className="ihero-card-head">{details.duration}</div>
                <div className="ihero-card-text">Total Duration</div>
              </div>
            </div>
          </div>
          <div className="ihero-card-out-cont">
            <div className="ihero-card-cont">
              <div className="ihero-card-img-cont">
                <img src={courseaccess} alt="courseaccess"></img>
              </div>
              <div>
                <div className="ihero-card-head">Lifetime</div>
                <div className="ihero-card-text">Access</div>
              </div>
            </div>
          </div>
        </div>
        <div className="icurr-main-cont">
          <div className="icurr-main-left">
            {topicsUIUX1.map((topic, i) => (
              <LectrureList key={i} topic={topic} />
            ))}
          </div>
          <div className="icurr-main-right">
            {topicsUIUX2.map((topic, i) => (
              <LectrureList key={i} topic={topic} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const LectrureList = ({ topic }) => {
  const [topicClicked, setTopicClicked] = useState();
  return (
    <div style={{ width: "100%" }}>
      <div
        className="ileclist-topic"
        onClick={() => setTopicClicked(!topicClicked)}
      >
        <p>{topic.section_name}</p>
        <svg
          width="22"
          height="15"
          viewBox="0 0 22 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.585 0.748047L11 9.14471L19.415 0.748047L22 3.33305L11 14.333L0 3.33305L2.585 0.748047Z"
            fill="#800080"
          />
        </svg>
      </div>
      {topicClicked &&
        topic.section_lectures.map((lec, i) => (
          <div className="ileclist-quesDiv" key={i}>
            <div className="icurr-video">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
              >
                <path
                  d="M12 2V10H2V2H12ZM13 0H1C0.45 0 0 0.45 0 1V11C0 11.55 0.45 12 1 12H13C13.55 12 14 11.55 14 11V7.5L18 11.5V0.5L14 4.5V1C14 0.45 13.55 0 13 0Z"
                  fill="#828282"
                />
              </svg>
            </div>
            <span> {lec}</span>
          </div>
        ))}
    </div>
  );
};

export default Curriculum;
