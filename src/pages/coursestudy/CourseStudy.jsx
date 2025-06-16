// import React, { useEffect } from 'react'
// import "./coursestudy.css";
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import { CourseData } from '../../context/CourseContext';
// import { server } from '../../main';

// const CourseStudy = ({user}) => {
//     const params = useParams();

//     const { fetchCourse, course } = CourseData();
//     const navigate = useNavigate();

//     if(user && user.role !== "admin" && !user.subscription.includes(params.id)) 
//       return navigate("/");

//     useEffect(() => {
//         fetchCourse(params.id);
//     }, []);
//   return <>
//   {course && <div className="course-study-page">
//        <img src={`${server}/${course.image}`} alt="" width={350}/>
//        <h2>{course.title}</h2>
//        <h4>{course.description}</h4>
//        <h5>by - {course.createdBy}</h5>
//        <h5>Duration - {course.duration} weeks</h5>
//        <Link to={`/lectures/${course._id}`} ><h2>Lecture</h2></Link>
//     </div>}
//   </>
// }

// export default CourseStudy;

import React, { useEffect } from 'react';
import "./coursestudy.css";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CourseData } from '../../context/CourseContext';
import { server } from '../../main';

const CourseStudy = ({ user }) => {
    const params = useParams();
    const { fetchCourse, course } = CourseData();
    const navigate = useNavigate();

    useEffect(() => {
        if (user && user.role !== "admin" && !user.subscription.includes(params.id)) {
            navigate("/");
        }
    }, [user, params.id, navigate]);

    useEffect(() => {
        fetchCourse(params.id);
    }, [fetchCourse, params.id]);

    return (
        course && (
            <div className="course-study-page">
                <div className="course-card">
                    <img src={`${server}/${course.image}`} alt={course.title} />
                    <div className="course-info">
                        <h2>{course.title}</h2>
                        <p className="description">{course.description}</p>
                        <p className="meta">By: <strong>{course.createdBy}</strong></p>
                        <p className="meta">Duration: <strong>{course.duration} weeks</strong></p>
                        <Link to={`/lectures/${course._id}`} className="lecture-btn">Start Lecture</Link>
                    </div>
                </div>
            </div>
        )
    );
};

export default CourseStudy;


