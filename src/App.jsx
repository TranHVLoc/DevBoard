import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Section from './components/Section'

const App = () => {
  return (
    <div className="App">
      <h1>GUD DEV POST</h1>
      <h3>A best place for dev community</h3>

      <Section card1="card0" card2="card1" card3="card2" card4="card3" 
            title1 = "Top 7 JS API" title2 = "Cool Web & Mobile Idea" title3 = "22 CSS Tips & Tricks" title4 = "Auto-Deploy Node.JS App"
            url1 = "https://dev.to/ruppysuppy/7-javascript-web-apis-to-build-futuristic-websites-you-didnt-know-38bc"
            url2 = "https://dev.to/andrewbaisden/50-cool-web-and-mobile-project-ideas-for-2022-1flj"
            url3 = "https://dev.to/devsyedmohsin/22-useful-css-tips-and-tricks-every-developer-should-know-13c6"
            url4 = "https://dev.to/nil1729/auto-deploy-a-nodejs-application-with-aws-ec2-and-github-actions-epe"/>
      <Section card1="card4" card2="card5" card3="card6" card4="card7"
            title1 = "Best ML and DL Coursera" title2 = "Machine Learning Interview QA" title3 = "Top 20 ML Books" title4 = "Azure ML Instance"
            url1 = "https://dev.to/tut_ml/5-best-machine-learning-courses-on-coursera-1g43"
            url2 = "https://dev.to/damon_lamare/machine-learning-interview-questions-and-answers-machine-learning-interview-preparation-4eln"
            url3 = "https://dev.to/faijanofficial/top-20-free-machine-learning-data-science-and-python-books-4lcg"
            url4 = "https://dev.to/integerman/creating-an-azure-machine-learning-instance-58nb"/>
      <Section card1="card8" card2="card9" card3="card10" card4="card11"
            title1 = "Best Swift Templates" title2 = "IOS Dev Resource" title3 = "Flutter QR Code Scanner" title4 = "Cracking IOS Interview"
            url1 = "https://dev.to/amelia19/40-best-swift-ios-app-templates-for-developer-bge"
            url2 = "https://dev.to/onmyway133/best-resources-for-ios-development-4fio"
            url3 = "https://dev.to/yushulx/how-to-implement-a-flutter-qr-code-scanner-plugin-for-ios-in-swift-4c7h"
            url4 = "https://dev.to/hoangbkit/cracking-the-ios-interview-eim"/>
    </div>
  )
};

export default App;
