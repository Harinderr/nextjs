
'use client'

import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer"

export default function Lecture ({params}) {
   const {lectures} = params
   console.log(lectures)
    return (
        <div>
    {
       lectures.map((val,index )=> {
        return (
            <h1 key={index}>this is {val}</h1>
        )
       })
    }
        
        </div>
    )
}