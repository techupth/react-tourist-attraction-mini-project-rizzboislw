import React from 'react';

function MainContent({ searchResult , addSearchKeyword, loadingStatus, errorStatus}){

    return (
        <main className="main-page-content">
        { loadingStatus ? ( <h1 className="status-message">Loading...</h1> 
            ) : errorStatus ? ( <h1 className="status-message">There was an error fetchign data...</h1>  
            ) : ( searchResult.map((item) => (
                <div key={item.eid} className="content-container">
                        <img src={item.photos[0]} alt="image" className="content-preview-image" />
                    <div className="content-detail">
                        <h3 className="content-title"><a href={item.url}>{item.title}</a></h3>
                        <h4 className="content-description">
                            {item.description.length > 100 ? 
                                item.description.substring(0, 100) + "..." : 
                                item.description}       
                        </h4>
                        <a href={item.url} target='_blank' className='find-more-link'>อ่านต่อ</a>
                        <h5 className="content-categories">
                            <span>หมวด</span>
                            {item.tags.map((tag, index) => (
                                <span key={index} className="content-tag" onClick={()=> {
                                    addSearchKeyword(tag)
                                }}>{tag}</span>
                            ))}
                        </h5>
                        <div className="content-more-images">
                            { item.photos.slice(1).map((photo,index) => (
                                <img src={photo} alt="image" className="more-image" key={index} />
                                ))
                            }
                        </div>
                        <span className="material-symbols-outlined" onClick={() => {
                            navigator.clipboard.writeText(item.url);
                                alert('Link was copied to clipboard');
                            }}>link</span>
                    </div>
                </div>
            )))}
     
        </main>
    );
};

export default MainContent;