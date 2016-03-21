export default React.createClass({
    render() {
        console.log("tabset render");
        return <div/>;
    },
    componentDidMount() {
        console.log("tabset componentDidMount");
    },
    componentDidUpdate() {
        console.log("tabset componentDidUpdate");
    },
    create() {
        console.log("tabset create");
        return isc.TabSet.create({
            ID: "topTabSet",
            autoDraw: false,
            tabBarPosition: "top",
            width: 400,
            height: 200,
            tabs: [
                {
                    title: "Blue",
                    icon: "/icons/database.png",
                    iconSize: 16,
                    pane: isc.Img.create({autoDraw: false, width: 48, height: 48, src: "/icons/database.png"})
                }, {
                    title: "Green",
                    icon: "/icons/database.png",
                    iconSize: 16,
                    pane: isc.Img.create({autoDraw: false, width: 48, height: 48, src: "/icons/database.png"})
                }
            ]
        });
    }
});
