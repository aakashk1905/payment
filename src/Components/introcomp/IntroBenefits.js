import React from 'react'
import './IntroBenefits.css'
import book from '../../Assests/book.svg'
const IntroBenefits = () => {
    const benifits1 = [
        "Learn to create stunning UI/UX designs for any website",
        "Get hired as a UI/UX designer.",
        "Build an amazing portfolio with great and extensive designs"
    ];

    const benifits2 = [
        "Convert your awesome design to code with the help of HTML/CSS.",
        "Get high-paying freelance projects for UI/UX.",
        "Master Web Design and App Design both in this course."
    ];
    // const benifits1 = [
    //     "Complete Understanding of Python from Scratch",
    //     "Python for Data Science and Machine Learning",
    //     "Write your own Custom Modules",
    //     "Build Games with Python",
    //     "Write your own Decorators and higher-order functions",
    //     "NumPy Array, NumPy Operations",
    //     "Data Analysis with Pandas",
    //     "Graphical User Interface (GUI) in Python",
    //     "Functions and Lambda Expressions"
    // ];

    // const benifits2 = [
    //     "Error and Exceptions Handling",
    //     "Create your own Generators and other Iterators",
    //     "DataFrames, Pandas Series, Pandas Matrix",
    //     "Matplotlib for Data Visualization",
    //     "Data Analysis with NumPy",
    //     "Master Object Oriented Programming (OOP) in Python 3",
    //     "If-else statement, For loop and While loop",
    //     "CREATE your own Programs and Applications"
    // ];
    return (
        <div className='iben-cont'>
            <div className='iben-inner-cont'>
                <div className='iben-head'>Course Benefits</div>
                <div className='iben-main-cont'>
                    <div className='iben-main-left'>
                        {
                            benifits1.map((ben, ind) => {
                                return (
                                    <div className='iben-ben-cont' key={ind}>
                                        <img src={book} alt='booksvg' />
                                        <div className='iben-ben-text'>{ben}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='iben-main-right'>
                        {
                            benifits2.map((ben, ind) => {
                                return (
                                    <div className='iben-ben-cont' key={ind}>
                                        <img src={book} alt='booksvg' />
                                        <div className='iben-ben-text'>{ben}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroBenefits