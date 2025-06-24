const RandomColor = () => {
    const Colors = [];


    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }

    colors.Push(getRandomColor())

    const [bgColor, setBgColor] = useState("white");

    return (
        <div
            style={{
                backgroundColor: bgColor,
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "30px"
            }}
        >
            <h1
                style={{
                    fontFamily: "Helvetica, sans-sarif",
                    color: bgColor === "white" ? "black" : "white",
                }}
            >
                Pick your Random Color
            </h1>
            <div style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                padding: "40px", borderRadius: "15px", backdropFilter: "blur(10)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2"
            }}>
                {colors.map((Color) => (
                    <button
                        onClick={() => setBgColor(color)}
                        style={{
                            backgroundColor: color,
                            color: ["Yellow"].includes(color) ? "black" : "white",
                            padding: "10px 20px",
                            borderRadius: "5px",
                            border: "none",
                            cursor: "pointer",
                            margin: "10px",
                            fontsize: "16px",
                            fontweight: "bold"
                        }}
                    >
                        {color}
                    </button>



                ))}
            </div>
        </div>
    );
}




export default RandomColor