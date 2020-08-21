import React from "react";
import "./App.css";
import marked from "marked";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: "",
      preview: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.parseMarkdown = this.parseMarkdown.bind(this);
    marked.setOptions({
      breaks: true,
    });
  }
  componentDidMount() {
    this.setState({
      editor:
        "# Markdown Text goes here\n## You can also make subheadings\n\nOne of the **trickiest** parts of getting this project to work was learning how to use `dangerouslySetInnerHTML` to make the previewer display the output of [marked.js](https://github.com/markedjs/marked/blob/master/README.md) as HTML instead of a string.\n\nAccording to the React Documentation,\n>dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack.\n\nExample Code:\n```\nfunction createMarkup() {\n  return {__html: 'First &middot; Second'};\n}\n\nfunction MyComponent() {\n  return <div dangerouslySetInnerHTML={createMarkup()} />;\n}\n```\n\nJust remember to:\n- Search, Read, Ask\n- Ask for help on the Forum (that's what worked for me.)\n\n![Vipatron icon](http://vipinjeetsandhu.com/images/BW_Scaryface_icon.jpg 'Vip face1')\n\n![Vipatron icon][picref]\n\n[picref]: http://vipinjeetsandhu.com/images/BW_Scaryface_icon.jpg 'Vip face2'\n",
    });
  }
  handleChange(event) {
    this.setState({
      editor: event.target.value,
    });
    // this.parseMarkdown();
  }
  parseMarkdown() {
    this.setState({
      preview: marked(this.state.editor),
    });
  }
  render() {
    return (
      <div className="container col-md-6 align-middle">
        <textarea
          className="col-md-12"
          id="editor"
          onChange={this.handleChange}
          value={this.state.editor}
          rows="5"
        />
        {/* <div id="preview">{this.state.preview}</div> */}
        <div className="card">
          <p className="card-title">Preview</p>
          <div
            className="card-body"
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(this.state.editor) }}
          ></div>
        </div>
      </div>
    );
  }
}
export default App;
