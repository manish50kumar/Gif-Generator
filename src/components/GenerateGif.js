import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
const API_KEY = 'jhTZFl7dmUXiE3KI6YKDIu9BhozmCmV2';
function GenerateGif() {
    
    const [loading, setLoading] = useState(false);
    const [gif, setGif] = useState("");
    const [tag, setTag] = useState("");

    async function FetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const { data } = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    function ChangeHandlar(event) {
        setTag(event.target.value);
    }

    useEffect(() => {
        FetchData();
    }, [])
    
    function ClickHandler() {
        FetchData();
    }

    return (
        <div className="flex flex-col w-1/2 items-center bg-orange-400">
            <h1 className=" mt-[20px] mb-[20px] w-10/12 bg-green-200 underline text-center font-bold text-3xl ">Generate {tag} Gif </h1>
            {
                loading ? (<Spinner/>) : (<img src= {gif} alt="gifloading" width="450" />)
            }
            <input
                type="text"
                onChange={ChangeHandlar}
                value={tag}
                className=" w-10/12 mt-[20px] text-center p-2  " />
            <button className=" mt-[20px] mb-[20px] w-10/12 bg-red-400 font-bold py-4 "
             onClick={ClickHandler}
            >Generate Gif</button>
        </div>
    )
}
export default GenerateGif; 