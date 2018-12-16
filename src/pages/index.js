import React from 'react'
import Layout from '../layouts/layout'
import Terminal from '../components/terminal'
import EmailForm from '../components/emailForm'

const IndexPage = () => (
  <Layout>
    <div className="flex justify-center">
      <div>
        <header class="bg-black sans-serif">
          <div className="mw9 center pt5 ph7">
            <h3 className="f1 f-headline-l measure-narrow lh-title mv0">
              <span className="bg-white lh-copy black pa2 tracked-tight">
                Absolute Zero Art Collective
              </span>
            </h3>
            <h1 className="white-90 f-title san-serif tracked-tight measured pt4">
              Creating new human experiences through
            </h1>
            <div className="pa0 mt0">
              <h1
                id="typed"
                className="typed f1 lh-copy white tracked-tight mt3"
              >
                <Terminal />
              </h1>
            </div>
            <h1 className="white-90 f-title san-serif tracked-tight measured pt0 pb0 mb0">
              in San Francisco,
            </h1>
            <h1 className="white-90 f-title san-serif tracked-tight measured pt0 pb0 mb0">
              Los Angeles,
            </h1>
            <h1 className="white-90 f-4 san-serif tracked-tight measured pt0 pb0 mb0">
              and New York City
            </h1>
          </div>
        </header>
        <div className="bg-white mt5 mw10" style={{ width: '100%' }}>
          <div className="ph7">
            <EmailForm />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
