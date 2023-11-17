import React from 'react'
import './IntroAbout.css'
const IntroAbout = () => {
    const about = "UI/UX is going to be the hottest skill of coming decade"
    // const about = "In this hands-on course, you will learn Python right starting from scratch to the level where you can build almost anything with it, be it a fully functional database oriented web application or an automation tool. This course will teach you Python right from scratch from a very basic level and will gradually move you towards more advanced topics. We not just cover all the Python basics but also the most popular Python libraries such as Django, Flask, Tkinter & Selenium."
    const topics = [
        {
            "head": "Why I am confident about the above statement?",
            "text": "Just go and take a look of the initial UI/UX of Facebook, Amazon, google and you will realise that how can somebody browse those shabby looking websites and even purchase from them. And see their UI/UX now, it's like the smoothest ever experience. And they are still continuosly improving it, you can't even imagine how the sites would look after a decade. So it's clear that a lot of investment is being done in UI/UX and trust me it is that skill which can make people buy a bad product over a valuable product. Let me confess one more thing. You can't learn UI/UX without actually implementing and brainstorming the things and that's why in this course we have focused a lot on projects and live implications."
        }
    ]
    // const topics = [
    //     {
    //         "head": "Section 1: Python",
    //         "text": "This section covers all the basics of Python, starting right from installing the required tools to covering topics like mathematical operators, strings, accepting user input, string operations, variables, conditionals like if, elif, control structures such as while & for loop, functions, modules & packages, lists, file handling, OOP in Python, regular expressions. Almost every basic Python concept is covered in this section."
    //     },
    //     {
    //         "head": "Section 2: Make GUI In Python Using Tkinter",
    //         "text": "Once done with the basics, we know learn the Tkinter library which allows us to create desktop-based applications with Python. We learn how to create GUI apps using Tkinter & Python and also build a fully functional Desktop app i.e a calculator."
    //     },
    //     {
    //         "head": "Section 3: Making Database Oriented Desktop Apps With PostgreSQL",
    //         "text": "Making a simple desktop app alone isn't sufficient; it needs a backend database to store some data. To do the same, we learn how to connect our desktop apps to the backend. In this section, we build a student management system software using Python, Tkinter to design the GUI & PostgreSQL database to store the data for our application in the backend."
    //     },
    //     {
    //         "head": "Section 4: Data Analysis",
    //         "text": "Python is being widely used in the data science domain, and hence it is important to learn how to use Python to analyze data. Hence in this section, we learn how to use the tools and techniques used to perform data analysis. We start off by learning the Pandas library, which is used to perform data analysis and all the basic concepts like DataFrames, Reindexing, Indexing, Broadcasting and also learn how to perform data plotting and visualization with the Matplotlib library."
    //     },
    //     {
    //         "head": "Section 5: Python Web Framework Django",
    //         "text": "This section will teach you how to build full-stack web applications with Python & Django. Django is one of the most popular web frameworks for Python and is used to program the back-end side of our web app. In this section, we will learn Django right from basics and will build a simple book store web application. We will learn how to create models, how to route URL requests, how to create different views for our web app, how to integrate HTML templates and a lot more."
    //     },
    //     {
    //         "head": "Section 6: Python Web Framework Flask",
    //         "text": "Flask is a micro web framework for Python used to build simpler web apps. If you want to develop some simple and small websites, you can do so using Flask. In this section we cover flask basics suck as Routing, Dynamic URLs, Templates, passing data to the server & site cookies."
    //     },
    //     {
    //         "head": "Section 7: REST APIs Using Django Rest Framework",
    //         "text": "In this section we learn how to build our own REST APIs using the Django Rest Framework. If you already have a Django web app built, you can create API endpoints for it using the Django Rest Framework. In this section we will build a fully functional REST API with features such as search, filtering & authentication."
    //     },
    //     {
    //         "head": "Section 8: Web Scraping in Python",
    //         "text": "Python can also be used to crawl websites and gather data from it. In this section we learn the same, we build a web crawler which crawls up any website of our choice and gathers links from it. Web crawlers are used by many search engines to rank websites and in this section we learn how to build a smaller version of it using Python."
    //     },
    //     {
    //         "head": "Section 9: Automation with Python & Selenium",
    //         "text": "Python is widely used for automation as well, especially for testing. Selenium web driver is one such tool which has been built for automating tests but the same can be used for automating other browser based tasks as well. In this section we learn how to automate tasks using Selenium and will also build a Facebook Bot that automatically posts status for us."
    //     },
    //     {
    //         "head": "Section 10: Best Practices: Writing Clean & Efficient Python Code",
    //         "text": "To be a good Python engineer/ developer you need to know how to write clean, concise and efficient Python code. In this section we learn some of the best practices that you must follow while writing Python code."
    //     },
    //     {
    //         "head": "Section 11: Image Processing With Python & OpenCV",
    //         "text": "Python can also be used to process and manipulate images and videos. In this section we learn how to use OpenCV library with Python to manipulate images. We learn some interesting things like capturing webcam video, tracking images from a live video, different image thresholding techniques, image blurring, averaging and Gaussain filtering."
    //     }
    // ]
    // const regards = {
    //     name: "Krishanth M"
    // }
    return (
        <div className='iab-cont' id="abt">
            <div className='iab-head'>About this course</div>
            <div className='iab-inner-cont'>
                <div className='iab-main-head'>{about}</div>
                {
                    topics && topics.map((ab, i) => <div className='iab-content-cont' key={i}>
                        <div className='iab-content-head'>{ab.head}</div>
                        <div className='iab-content-text'>{ab.text}</div>
                    </div>)
                }
                <div className='iab-content-text' style={{ width: "70vw" }}>
                    Trust me this is the only course you need to master UI/UX, enough for now I will see you inside the course.
                </div>
                <div className='iab-content-text' style={{ width: "70vw" }}>
                    All The Best!                </div>
                {/* {
                    regards && <><div style={{ width: "70vw" }} className='iab-content-text'>Join the journey.</div>
                        <div style={{ width: "70vw" }} className='iab-content-text'>Sincerely,</div>
                        <div style={{ width: "70vw" }} className='iab-content-text'>
                            <b>{regards.name}</b>
                        </div>
                    </>
                } */}
            </div>
        </div>
    )
}

export default IntroAbout