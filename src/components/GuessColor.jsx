import { useEffect, useState } from "react";

const GuessColor = () => {
    const [colors,setColors] = useState([]);
    const k = Math.floor(Math.random() * colors.length);
    const [render,setRender] = useState();
    const selectedColor = colors[k];    

    useEffect(() => {
        const chars = '1234567890abcdf';
        let arr = [];
        let randomNum = "";

        for(let j=0; j<3; j++) {
            randomNum = "";
            for(let i=0; i<6; i++) {
                const index = Math.floor(Math.random() * chars.length);
                randomNum += chars[index];
            }

            randomNum = randomNum.padStart(7, "#")
            arr.push(randomNum);
        }
        
        setColors(arr);

    }, [render]);

    const selectColor = (text) => {
        if(text === selectedColor){
            setRender((prev) => !prev);
        }else{
            return;
        }
    };

    return (
        <>
            <div style={{ margin: '50px 0', height: '200px', width: '40%', background: `${selectedColor}` }}></div>
            <div className="w-100 h-100 d-flex gap-2 align-items-center justify-content-center">
                {colors.map((color, index) => (
                    <button key={index} onClick={() => selectColor(color)}>
                        {color}
                    </button>
                ))}
            </div>
        </>
    );
};

export default GuessColor;