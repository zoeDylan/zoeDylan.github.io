const
    reactDom = require('react-dom');


class View extends React.Component {
    render() {
        return <iframe srcDoc={this.props.srcDoc} src={this.props.src} />;
    }
}


module.exports = (id, code) => {
    let
        // cont = URL.createObjectURL(new Blob([code], { 'type': 'text/html' })),
        src = URL.createObjectURL(new Blob([code], { 'type': 'text/html' }));
    reactDom.render(<View srcDoc={'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />' + code} src="" />, document.getElementById(id));
}