const _look = require('../look');


class List extends React.Component {

    constructor(props) {
        super(props);
        // this.setList = ::this.setList;
        this.setList = this.setList.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(item) {
        console.log(item);
        location.hash = '#id_' + item.id;
    }
    setList() {
        let listElem = [];
        for (let key in this.props.list) {
            if (this.props.list.hasOwnProperty(key)) {
                const item = this.props.list[key];

                // listElem.push(<button onClick={_look.bind(this, item)} className="list-group-item" >
                listElem.push(<button onClick={this.handleClick.bind(this, item)} className="list-group-item" >
                    <span>{item.title}</span>
                    <span className="time">{new Date(item._update).toLocaleDateString()}</span>
                </button>);
            }
        }
        return listElem;
    }
    render() {
        return (
            <div>{this.setList()}</div>
        );
    }
}

module.exports = List;