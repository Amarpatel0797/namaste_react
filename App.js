const parent = React.createElement(
    "div",
    {id:"child"},
    [React.createElement("h1",{},"I am a H1"),React.createElement("h2",{},"I am a H2")]
)



// const heading = React.createElement(
//     "h1", 
//     {id:"heading", xyz: "abc"},
//      "Hello world from React "
//      );

     console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));    

root.render(parent);