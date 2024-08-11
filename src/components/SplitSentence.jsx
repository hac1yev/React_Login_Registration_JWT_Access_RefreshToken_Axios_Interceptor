import { useEffect, useState } from "react";

const SplitSentence = () => {
    const [inputText,setInputText] = useState('');
    const [arr,setArr] = useState([]);
    const [index,setIndex] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setArr([...inputText.split(" ")]);
        setInputText("");
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            if(arr.length > index) {
                setIndex((prev) => prev + 1);
            }
        }, 2000);

        return () => clearTimeout(timeout);
    }, [index, arr]);

    return (
        <>
            <form className="d-flex gap-2" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="form-control" 
                    value={inputText} 
                    onChange={(e) => setInputText(e.target.value)} 
                />
                <button className="btn btn-primary">Submit</button>
            </form>
            <h5 className="mt-3">
                {arr.slice(0, index).map((item) => (
                    `${item} `
                ))}
            </h5>
        </>
    );
};

export default SplitSentence;