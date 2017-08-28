class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.editor = {};
        this.onInputChange = this.onInputChange.bind(this);
    }
    componentDidMount() {
        this.editor = CodeMirror(document.getElementById(this.props.id), {
            value: this.props.text,
            mode: "markdown",
            lineNumbers: true,
            theme: 'monokai'

        });
        this.editor.on('change', (i, c) => {
            this.onInputChange(i.doc.getValue());
        });
    }
    onInputChange(text) {
        this.props.onInputChange(text);
    }
    render() {
        return React.createElement('div', this.props);
    }
}

module.exports = Editor;