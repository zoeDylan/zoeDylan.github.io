const
    ReactMarkdown = require('react-markdown'),
    Editor = require('./editor.jsx'),
    _data = require('../data.js'),
    runCode = require('../runCode'),
    look = require('../look');
class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.save = this.save.bind(this);
        this.isEdit = false;
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.setRunCodeButton = this.setRunCodeButton.bind(this);
        this.escape2Html = this.escape2Html.bind(this);
        this.preview = this.preview.bind(this);
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
    componentDidUpdate() {
        this.setRunCodeButton();
    }
    componentDidMount() {
        this.setRunCodeButton();
    }
    save() {
        _data.updateCont(this.props.tid, this.state.text);
    }
    escape2Html(str) {
        var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
        return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) { return arrEntities[t]; });
    }
    setRunCodeButton() {
        //添加运行按钮
        const _self = this;
        $('.markdown pre').each((i, elem) => {
            const
                fe = $(elem),
                codeElem = fe.children('code');
            if (codeElem.attr('class')=='language-html'&&fe.children('button').length <= 0) {
                //添加可编辑功能、取消波浪线
                codeElem.attr({
                    'contenteditable': 'true',
                    'spellcheck': 'false'
                });
                //添加运行按钮
                fe.append('<span class="text-muted">//*点击代码部分可以编辑</span><button class="btn btn-info">运行</button>');
                fe.children('button').click(function () {
                    let
                        btn = $(this),
                        codeType = btn.parent().children('code').attr('class'),
                        code = btn.parent().children('code').html();
                    runCode(_self.escape2Html(code));
                });
            }
        });
        //新标签打开
        $('a[href^=http]').attr('target', '_block');
    }
    preview() {
        look(this.props.tid, this.state.text);
    }
    render() {
        return <div className="frame">
            <div className="btn-group">
                <button onClick={this.save} className="btn btn-primary">保存</button>
                <button onClick={this.preview} className="btn btn-success">预览</button>
            </div>
            <Editor onInputChange={this.onInputChange} className="editor" id={'editor_' + new Date().getTime()} text={this.props.text} />
            <ReactMarkdown className="markdown" source={this.state.text} />
        </div>;
    }
}
module.exports = Frame;