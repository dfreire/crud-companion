export default React.createClass({
    render() {
        console.log("sections render");
        return <div/>;
    },
    componentDidMount() {
        console.log("sections componentDidMount");
    },
    componentDidUpdate() {
        console.log("sections componentDidUpdate");
    },
    create() {
        console.log("sections create");
        return isc.SectionStack.create({
            ID: "sectionStack",
            autoDraw: false,
            visibilityMode: "multiple",
            width: 300,
            height: 350,
            border: "1px solid blue",
            sections: [
                {
                    title: "Blue Pawn",
                    expanded: true,
                    items: [isc.Img.create({autoDraw: false, width: 48, height: 48, src: "/icons/database.png"})]
                }, {
                    title: "Green Cube",
                    expanded: true,
                    canCollapse: false,
                    items: [isc.Img.create({autoDraw: false, width: 48, height: 48, src: "/icons/database.png"})]
                }, {
                    title: "Yellow Piece",
                    expanded: false,
                    items: [isc.Img.create({autoDraw: false, width: 48, height: 48, src: "/icons/database.png"})]
                }
            ]
        });
    }
});
