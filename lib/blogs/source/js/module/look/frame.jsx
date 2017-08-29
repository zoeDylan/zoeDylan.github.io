const
    RMarkdown = require('react-markdown'),
    // markdown = require('markdown').markdown,
    // MD = require('markdown-it'),
    // md = new MD(),
    runCode = require('../runCode');

class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }
    escape2Html(str) {
        var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
        return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) { return arrEntities[t]; });
    }
    componentDidMount() {
        //添加可编辑功能、取消波浪线
        $('.markdown pre code').attr({
            'contenteditable': 'true',
            'spellcheck': 'false'
        });

        //添加运行按钮
        $('.markdown pre').append('<span class="text-muted">//*点击代码部分可以编辑</span><button class="btn btn-info">运行</button>');
        $('.markdown pre>button').click(function () {
            let
                btn = $(this),
                codeType = btn.parent().children('code').attr('class'),
                code = btn.parent().children('code').html();

            if (codeType == 'language-js' || codeType == 'language-javascript') {
                code = `<script>${code}</script>`;
            } else if (codeType == 'language-css') {
                code = `<style>${code}</style>`;
            }
            runCode(this.escape2Html(code));
        });

    }
    close() {
        $('#__look').removeClass('active');
    }
    render() {
        return (
            <div className="frame">
                <div onClick={this.close} className="close glyphicon glyphicon-remove"></div>
                <RMarkdown className="markdown" source={this.props.text} />
            </div>
        )
    }
}
module.exports = Frame;