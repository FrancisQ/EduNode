import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({ course }) => (
    <div>
        <Header name={course.name}></Header>
        <Content parts={course.parts}></Content>
        <br />
    </div>
)
export default Course