import React from "react";
import "./styles.css";
import Header from "./Components/Header";
import Editor from "./Components/Editor";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import marked from "marked";

marked.setOptions({
  breaks: true
});

const render = new marked.Renderer();

class App extends React.Component {
  state = {
    text: `# Welcome to my React Markdown Previewer!
## H2...
### H3:
      
\`<div></div>\`, between 2 backticks.
    
\`\`\`
// this is multi-line code:

function greeting(userName){
  return "Hello, "+userName;
}

\`\`\`
      
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
    
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
    
And if you want to get really crazy, even tables:
    
Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
    
- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.
    
    
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
    
![React Logo w/ Text](https://cdn.dribbble.com/users/14374/screenshots/3109703/angular_brand_angular.png)
`
  };

  textarea = React.createRef();

  add = event => {
    this.setState({ text: event.target.value });

    console.log(this.state.text);
  };

  // markdown = { __html: marked(this.state.text, { renderer: render }) };

  render() {
    return (
      <div>
        <Header />
        <Main>
          <Editor markdown={this.state.text} onChange={this.add} />
          <Preview markdown={this.state.text} />
        </Main>
        <Footer />
      </div>
    );
  }
}

const Preview = props => {
  return (
    <div className="col-md-6">
      <h4>Preview</h4>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(props.markdown, { renderer: render })
        }}
      />
    </div>
  );
};

export default App;
