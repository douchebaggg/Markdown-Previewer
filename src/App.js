import './App.css';
import { useState } from 'react';
import { marked } from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
function App() {
  const [markdownText, setMarkdown] = useState(`
  # Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
  
  ### And here's some other cool stuff:

  [This is a link](https://example.com)
  
  \`inline code\`
  
  \`\`\`
  // Code block
  function example() {
    console.log('Hello, world!');
  }
  \`\`\`
  
  - List item 1
  - List item 2
  
  > This is a blockquote
  
  ![Freecodecamp logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  
  **Bold text**
  `);
  marked.setOptions({breaks: true});
  const [isShown, setIsShown] = useState(true);
  const handleClick = event => {
    setIsShown(current => !current);
  };
  const [isPreview, setIsPreview] = useState(true);
  const showPreview = event => {
    setIsPreview(current => !current)
  }
  return (
    <div className="wrapper">
      <div className= {isPreview ? 'editor-container' : 'editor-container hide'}>
        <div className="toolbar"><FontAwesomeIcon icon={faFreeCodeCamp} style={{width:"30px",fontSize: "1.25rem"}} />Editor <button className='icon' onClick={handleClick}> <FontAwesomeIcon className='icon' icon={faXmark} /></button>
        </div>
        <textarea id ="editor" type ="text" value ={markdownText} onChange={(event) => {setMarkdown(event.target.value)}} className={isShown ? '' : 'textarea-full-height'}></textarea >
      </div>  
    <div className= {isShown ? "preview-wrapper maximum" : "preview-wrapper hide" }>
    <div className="toolbar"> <FontAwesomeIcon icon={faFreeCodeCamp} style={{width:"30px",fontSize: "1.25rem"}} /> Preview <button className='icon' onClick={showPreview}><FontAwesomeIcon className='icon' icon={faXmark} /></button> </div>
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdownText),}}>
      </div>
    </div>
    </div>
  );
}
export default App;
