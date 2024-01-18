'use client'
export default function StudentRoute({params}) {
  console.log('hello')
    return (
        
        <h1>{params.students} </h1>
    )
}