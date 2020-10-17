import React, {useState} from 'react';
import './Search.css';
//main style file
import 'react-date-range/dist/styles.css';
//theme css file
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@material-ui/icons/People';
import { Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

//Date Picker Component
function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange ={
        startDate: startDate,
        endDate: endDate,
        key:'selection',
    };

    function handleSelcet(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <div className="search">
            <DateRangePicker ranges={
                [selectionRange]} onChange={handleSelcet}
                />
                <h2>Number of guests
                <PeopleIcon />
                </h2>
                <input min={0} 
                defaultValue={2} 
                type="number"/>
                    <Button onClick={() => history.push('/search')}>
                    Search Airbnb
                    </Button>
                
        </div>
    );
}

export default Search;