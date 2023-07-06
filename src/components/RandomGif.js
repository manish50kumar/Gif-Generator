import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_KEY = 'jhTZFl7dmUXiE3KI6YKDIu9BhozmCmV2';

function RandomGif() {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
    async function FetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const { data } = await axios.get(url);
        
        const imageSource = data.data.images.downsized_large.url;
        // console.log(imageSource);
        setGif(imageSource);
        setLoading(false);
    }
    useEffect(() => {
        FetchData();
    }, [])
    
    function ClickHandler() {
        FetchData();
    }

    return (
        <div className="flex flex-col w-1/2 bg-green-400 border border-black rounded-lg items-center">
            <h1 className="mt-[20px] mb-[20px] w-10/12 bg-yellow-200 font-bold text-3xl text-center underline ">Random Gif</h1>
               {
                  loading ? (<Spinner/>) : (<img src= {gif} alt="gifload" width="450" />)
                }
            
            <button onClick={ClickHandler}            
                className=" mt-[20px] mb-[20px] w-10/12 bg-red-400 font-bold py-4 ">Generate Gif</button>
        </div>
    )
}
export default RandomGif;