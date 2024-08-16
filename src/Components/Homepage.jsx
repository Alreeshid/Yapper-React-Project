import { useState } from 'react'
import './Homepage.css'

function Homepage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class='welcome-banner'>Welcome!</h1>
      <br></br>
      <p class='desc-text'>
        Yapper is an application currently in development by Alec Burns.<br></br>
        Alec is a Web Development student currently in his senior year at Georgia Gwinnett College. Yapper(his capstone project), 
        is intended to be a web-based application that will assist writers with their projects. While currently still in early development, 
        Yapper has the following features planned for release:
        <ol>
            <li>Allow writers to streamline Character/Setting creation, based around answering a series of questions. 
                See demo <a href='' class='welcome-link'>here</a>.</li>
            <li>Provide a structured format for writing poems such as haiku.</li>
            <li>Contain a low-fidelity music player allowing users to relax while writing, without impacting performance.</li>
            <li>Allow users to save drafts, and export their works into .txt or .docx/.pdf files.</li>
            <li>Improve the writing skills of even the least experienced Writers!</li>
        </ol>
      </p>
    </>
  )
}

export default Homepage
