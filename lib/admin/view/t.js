/**
 * //<[a-z]+ +[a-z]+="[a-z]+"><\/[a-z]+>
 * //<\/[a-z]+>
 *
 * 性别：<span class="nt">&lt;label&gt;&lt;input</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">id=</span><span class="s">"man"</span> <span class="na">name=</span><span class="s">"sex"</span><span class="nt">&gt;</span>男<span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;label&gt;&lt;input</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">id=</span><span class="s">"woman"</span> <span class="na">name=</span><span class="s">"sex"</span><span class="nt">&gt;</span>女<span class="nt">&lt;/label&gt;&lt;br&gt;</span>
<span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"man"</span><span class="nt">&gt;</span>选择男<span class="nt">&lt;/label&gt;</span>  <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"woman"</span><span class="nt">&gt;</span>选择女<span class="nt">&lt;/label&gt;&lt;br&gt;</span>
<span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"man"</span><span class="nt">&gt;</span>点击图片选择男<span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"https://zoedylan.github.io/lib/image/files/man.png"</span><span class="nt">/&gt;</span>
<span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"woman"</span><span class="nt">&gt;</span>点击图片选择女<span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"https://zoedylan.github.io/lib/image/files/woman.png"</span><span class="nt">/&gt;</span>
 *
 */




function escape2Html(str) {
    var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
    return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function(all, t) { return arrEntities[t]; });
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
        fe.append('<span class="text-muted">//*点击代码部分可以编辑</span><button class="btn btn-info">运行</button>');
        fe.children('button').click(function() {
            let
                btn = $(this),
                codeType = btn.parent().children('code').attr('class'),
                code = btn.parent().children('code').html();
            let win = window.open('');
            win.document.write(escape2Html(escape2Html(code).replace(/<[a-z]+ +[a-z]+="[a-z]+">|<\/[a-z]+>/g,'')));
        });
    }
});