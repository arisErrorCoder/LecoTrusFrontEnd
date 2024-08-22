import React, { useState } from 'react'
import Header from "../Header/Header"
import Login from "../LoginIn/Login"
import SliderHome from '../Slider/SliderHome';
import CategoriesSection from '../CategoriesSection/CategoriesSection';
import ImageBanner from '../ImageBanner/ImageBanner';

const Home = () => {

  return (
    <>

    <SliderHome/>
    <CategoriesSection/>
    <ImageBanner/>

    </>
  )
}

export default Home