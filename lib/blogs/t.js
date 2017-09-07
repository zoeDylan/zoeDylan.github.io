function escape2Html(str) {
    var arrEntities = {
        'lt': '<',
        'gt': '>',
        'nbsp': ' ',
        'amp': '&',
        'quot': '"'
    };
    return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function(all, t) {
        return arrEntities[t];
    });
}
$('pre.highlight.html').each((i, elem) => {
    const
        fe = $(elem),
        codeElem = fe.children('code');
    if (fe.children('button').length <= 0) {
        //添加可编辑功能、取消波浪线
        codeElem.attr({
            'contenteditable': 'true',
            'spellcheck': 'false'
        });
        //添加运行按钮
        fe.append('<span class="text-muted">//*点击代码部分可以编辑</span><button style="float: right;" class="btn btn-info">运行</button>');
        fe.children('button').click(function() {
            let
                btn = $(this),
                codeType = btn.parent().children('code').attr('class'),
                code = btn.parent().children('code').html().replace(/<[a-z]+ +[a-z]+="[a-z]+">|<\/[a-z]+>/g, '');
            let win = window.open('');
            win.document.write(escape2Html(code));
        });
    }
});

/**
 
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">'div'</span>).style.width = <span class="hljs-string">'50px'</span>;
  <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">'div'</span>).style.height = <span class="hljs-string">'50px'</span>;
  <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">'div'</span>).style.background = <span class="hljs-string">'#f00'</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-tag">div</span>{
	<span class="hljs-attribute">width</span>:<span class="hljs-number">50px</span>;
    	<span class="hljs-attribute">height</span>:<span class="hljs-number">50px</span>;
        <span class="hljs-attribute">background</span>:<span class="hljs-number">#f00</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

 */