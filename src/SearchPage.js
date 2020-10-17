import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays • 10 October to 17 October • 2 guest</p>
                <h1>Stays nearby</h1>
                <Button 
                variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button
                variant="outlined">
                    Type of place
                </Button>
                <Button 
                variant="outlined">
                    Price
                </Button>
                <Button
                variant="outlined">
                    Rooms and beds
                </Button>
                <Button
                variant="outlined">
                    More filters
                </Button>
            </div>
            <SearchResult 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location= "Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 Guest • 1 Bedroom • 1 Bed • 1.5 Shared Bathrooms • Wifi • Kitchen • Free Parking • Washing Machine"
                star={4.73}
                price= "$400/night"
                total= "$1800 total"
            />
            <SearchResult
                    img="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    location= "Private room in center of London"
                    title="Entire homes"
                    description="1 Guest • 1 Bedroom • 1 Bed • 1.5 Shared Bathrooms • Wifi • Kitchen • Free Parking • Washing Machine"
                    star={5.0}
                    price= "$600/night"
                    total= "$1300 total"
                    />
                
                <SearchResult
                    img="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    location= "Private room in center of London"
                    title="Penthouse London"
                    description="1 Guest • 1 Bedroom • 1 Bed • 1.5 Shared Bathrooms • Wifi • Kitchen • Free Parking • Washing Machine"
                    star={5.0}
                    price= "$300/night"
                    total= "$600 total"
                    />
                <SearchResult
                    img="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    location= "Private room in center of London"
                    title="3 Bedroom flat in Bournemouth"
                    description="1 Guest • 1 Bedroom • 1 Bed • 1.5 Shared Bathrooms • Wifi • Kitchen • Free Parking • Washing Machine"
                    star={5.0}
                    price= "$140/night"
                    total= "$370 total"
                    />
        </div>
    );
}

export default SearchPage;
