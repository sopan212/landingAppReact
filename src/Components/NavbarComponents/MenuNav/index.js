import React from 'react'
import './MenuNav.css'
const MenuNav = () => {

    const DataNav = [
        {title:'Home',
    link:'/'},
    {title:'Feature',
    link:'/'},
    {title:'Service',
    link:'/'},
    {title:'Contact',
    link:'/'},
    {title:'FAQ',
    link:'/'},
    ]
    return (
        <ul>
            {DataNav.map((data=>(
                <li><a href="">{data.title}</a></li>
            )))}
        </ul>
    )
}

export default MenuNav
