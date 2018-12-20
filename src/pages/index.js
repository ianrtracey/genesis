import React from 'react'
import Layout from '../layouts/layout'
import Terminal from '../components/terminal'
import EmailForm from '../components/emailForm'

const IndexPage = () => (
  <Layout>
    <div>
      <header class="bg-black sans-serif">
        <div className="mw9 pt5 ph4 ph7-l">
          <h3 className="f2 lh-title mv0">
            <span className="bg-white lh-copy black pa2 tracked-tight">
              Radioactive
            </span>
            <br />
            <span className="bg-white lh-copy black pa2 tracked-tight">
              Art Collective
            </span>
          </h3>
          <h1 className="white-90 f3 f2-ns san-serif tracked-tight measured pt4">
            Creating new human experiences through
          </h1>
          <div className="pa0 mt0">
            <h1 id="typed" className="typed f3 f1-ns white tracked-tight mt3">
              <Terminal />
            </h1>
          </div>
          <div className="mt4">
            <h3 className="white-90 f3 f2-ns san-serif tracked-tight">
              in San Francisco,
              <br />
              Los Angeles,
              <br />
              and New York City
            </h3>
          </div>
        </div>
      </header>
      <div className="bg-white mt2 mw10 mb2" style={{ width: '100%' }}>
        <div className="pt3 ph4 ph7-l">
          <h1 className="f2-ns f3 mb0 pb0">Coming 2019</h1>
          <p className="f4 mb0">
            Radioactive Art Collective is an organization dedicated to bringing
            you some of the most bold, audacious and thought-provoking
            experimental artists in the world
          </p>
          <EmailForm />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
