

const Content = () => {
    const btnClick = () =>{
        document.getElementById("text-area").textContent = "Money is everything in this life"
    } 
    return (
        <div>
            <button onClick={btnClick}>Click me </button>
            <p id="text-area"></p>
        </div>
    );
};

export default Content;