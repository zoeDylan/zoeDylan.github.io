const
    ReactMarkdown = require('react-markdown'),
    Editor = require('./editor.jsx'),
    _data = require('../data.js');
class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.save = this.save.bind(this);
        this.isEdit = false;
        setInterval(() => {
            if (this.isEdit) {
                this.isEdit = false;
                this.save();
            }
        }, 3000);
    }
    onInputChange(text) {
        this.isEdit = true;
        this.setState({
            text: text
        });
    }
    save() {
        _data.updateCont(this.props.tid, this.state.text);
    }
    render() {
        return <div className="frame">
            <button onClick={this.save} className="saveBtn">保存</button>
            <Editor onInputChange={this.onInputChange} className="editor" id={'editor_' + new Date().getTime()} text={this.props.text} />
            <ReactMarkdown className="markdown" source={this.state.text} />
        </div>;
    }
}
module.exports = Frame;