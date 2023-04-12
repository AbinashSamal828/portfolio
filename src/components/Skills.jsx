import React from 'react'
import TechCard from './TechCard'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import firebase from '../assets/firebase.png'
import cpp from '../assets/cpp.png'
import mongo from '../assets/mongo.png'
import github from '../assets/github.png'
import ract from '../assets/react.png'
import tailwind from '../assets/tailwind.png'


const Skills = () => {
  return (
    <div className='w-full h-auto bg-black text-white pb-[100px] pt-[100px]'>
        <div className='w-full text-center text-5xl font-bold mb-10 text-cyan-500'>
            <span className='border-b-4'>Skills</span>
        </div>
        <div className='max-w-[60%] w-[60%] justify-center flex flex-row mx-auto flex-wrap'>
            <TechCard img={html} name="HTML"/>
            <TechCard img={css} name="CSS"/>
            <TechCard img={javascript} name="JAVASCRIPT"/>
            <TechCard img={ract} name="REACT.JS"/>
            <TechCard img={node} name="NODE"/>
            <TechCard img={tailwind} name="TAILWIND"/>
            <TechCard img={firebase} name="FIREBASE"/>
            <TechCard img={cpp} name="C++"/>
            <TechCard img={mongo} name="MONGO DB"/>
            <TechCard img={github} name="GITHUB"/>
        </div>
    </div>
  )
}

export default Skills