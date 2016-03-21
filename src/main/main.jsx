// $.getJSON("/sc_Sections.json", function(sections) {
//     console.log("sections", sections);
// });

import Sections from "./sections.jsx";
import TabSet from "./tabset.jsx";

const Main = React.createClass({
    render() {
        console.log("main render");
        return (
            <div>
                <Sections ref="sections" />
                <TabSet ref="tabset" />
            </div>
        );
    },
    componentDidMount() {
        console.log("main componentDidMount");
        const layout = isc.HLayout.create({
            width: "100%",
            height: "100%",
            members: [
                this.refs["sections"].create(),
                this.refs["tabset"].create()
            ]
        });
    },
    componentDidUpdate() {
        console.log("main componentDidUpdate");
    }
});

ReactDOM.render(<Main />, document.getElementById("main"));
