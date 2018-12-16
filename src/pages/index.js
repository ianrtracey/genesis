import React from 'react'
import Layout from "../layouts/layout"
import Typed from 'typed.js';

var options = {
  strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
  typeSpeed: 40
}

// var typed = new Typed("#typed", options);

const Form = () => (
  <form action="sign-up_submit" method="get" accept-charset="utf-8">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 san-serif">
      <legend class="fw6 clip white san-serif">Sign Up</legend>
      <div class="pa0">
        <input class="pa2 input-reset ba bw2 bg-transparent w-100 measure white" type="email" name="email-address"  id="email-address"/>
      </div>
    </fieldset>
    <div class=""><input class="b ph3 pv2 input-reset ba b--white bg-white dim pointer f6" type="submit" value="Get Updates →"/></div>
  </form>
)

const IndexPage = () => (
  <Layout>
  <div className="flex justify-center">
       <header class="bg-black sans-serif">
    <div className="mw9 center pt5 ph7">
      <h3 className="f1 f-headline-l measure-narrow lh-title mv0">
        <span className="bg-white lh-copy black pa2 tracked-tight">
          Absolute Zero Art Collective
        </span>
      </h3>
      <h1 className="white-90 f-title san-serif tracked-tight measured pt4">Creating new human experiences through</h1>
      <div className="pa0 mt0">
        <h1 id="typed"className="typed f1 lh-copy white tracked-tight mt3">Art + Technology</h1>
      </div>
      <h1 className="white-90 f-title san-serif tracked-tight measured pt0 pb0 mb0">in San Francisco,</h1>
      <h1 className="white-90 f-title san-serif tracked-tight measured pt0 pb0 mb0">Los Angeles,</h1>
      <h1 className="white-90 f-title san-serif tracked-tight measured pt0 pb0 mb0">and New York City</h1>
      <div className="mt4">
      <Form />
      </div>
    </div>
  </header>
 
    </div>
  
  </Layout>
)

export default IndexPage
