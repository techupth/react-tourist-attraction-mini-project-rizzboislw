import { useState, useEffect } from "react";
import axios from "axios"
import Header from "../components/headerpage";
import MainContent from "../components/maincontentpage";

function HomePage() {

    const [collectInput, setInput] = useState("")
    const [searchResult, setSearchResult ] = useState([])
    const [errorStatus, setErrorStatus] = useState(null)
    const [loadingStatus, setLoadingStatus] = useState(null)

    const getInputResult = (event) => {
        setInput(event.target.value)
    };
    
    const fetchServerData = async () => {
        setErrorStatus(false)
        setLoadingStatus(true)
        try {
            const dataFetch = await axios.get(`http://localhost:4001/trips?keywords=${collectInput}`)
            setSearchResult(dataFetch.data.data)
            setLoadingStatus(false)
        } catch (error){
            setErrorStatus(true)
        }
    }; 
    
    useEffect(() => {
            fetchServerData();
    },[]);

        const addSearchKeyword = (tag) => {
        setInput(`${collectInput} ${tag}`.trim());
        fetchServerData(); 
    };

    useEffect(() => {
        fetchServerData();
    }, [collectInput]);

    return (
        <div className="main-page-container" >
            <Header getInputResult={getInputResult} collectInput={collectInput} />
            <MainContent searchResult={searchResult} addSearchKeyword={addSearchKeyword} 
            loadingStatus={loadingStatus} errorStatus={errorStatus} />
        </div>
    )
}

export default HomePage;