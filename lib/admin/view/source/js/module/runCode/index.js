module.exports = (code) => {
    // let
    //     src = URL.createObjectURL(new Blob(['<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />' + code], { 'type': 'text/html' }));
    let win = window.open('');
    win.document.write(code);
}