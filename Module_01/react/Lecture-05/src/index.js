const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);
const date = new Date().toISOString();
function App(){
    return (
        <div>
        <h1>Hello world, now the time is {date}<h1/>    
        <div/>
    )
}