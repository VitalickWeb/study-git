import React from "react";

export type StudentType = {
    id: string
    name: string
    age: number
    active: boolean
}

type StudentPropsType = {
    students: Array<StudentType>
}

export const Students = (props: StudentPropsType) => {
    const renderStudents = props.students.map(st => {
        return (
            <li key={st.id}>
                {st.name} {st.age} {st.active}
            </li>
        )
    })
    return (
        <ul>
            {renderStudents}
        </ul>
    );
}