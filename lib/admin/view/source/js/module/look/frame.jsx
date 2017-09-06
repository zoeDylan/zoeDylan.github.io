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
        this.escape2Html = this.escape2Html.bind(this);
    }
    escape2Html(str) {
        var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
        return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) { return arrEntities[t]; });
    }
    componentDidMount() {
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
    close() {
        $('#__look').removeClass('active');
        location.hash = '';
    }
    render() {
        return (
            <div className="frame">
                <a href="https://github.com/zoeDylan" title="github" target="_block">
                    <span className="label label-primary">
                        <i className="glyphicon glyphicon-user"></i>
                        Github
                </span>
                </a>
                <a href="https://github.com/zoeDylan/zoeDylan.github.io/issues" title="issues" target="_block">
                    <span className="label label-warning">
                        <i className="glyphicon glyphicon-question-sign"></i> Issues
                </span>
                </a>
                <div onClick={this.close} className="close glyphicon glyphicon-remove"></div>
                <RMarkdown className="markdown" source={this.props.text +
                    '\n\n --- \n\n *文章创建时间:' + new Date(this.props.item._insert).toLocaleDateString() + '*' +
                    '\n\n *最后修改时间:' + new Date(this.props.item._update).toLocaleDateString() + '*' +
                    '\n\n *By:zoeDylan*'} />
            </div>
        )
    }
}
module.exports = Frame;