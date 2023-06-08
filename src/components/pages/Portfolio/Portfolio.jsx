import React from 'react';
import portfolio from "./portfolio.module.css"
import Project from "./Project"
import img1 from "../../../images/Career-Software-Engineer.png"

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <section className={portfolio.grid}>
        <div><Project/><img src="" alt="" /></div>
        <div><Project/><img src="" alt="" /></div>
        <div><Project/><img src="" alt="" /></div>
        <div><Project/><img src="" alt="" /></div>
      </section>

    </div>
  );
}
