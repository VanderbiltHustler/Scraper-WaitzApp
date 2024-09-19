import axios from "axios"
import { JsonObject, JsonProperty } from "json2typescript";

// import cheerio from "cheerio"; -- not needed here because we are pulling directly from the API
// import { writeToPath } from "@fast-csv/format"
import * as WaitzTypes from "./types"


// Object to Store the data
const sysDate: Date = new Date();
const date: string = sysDate.toLocaleDateString();
const dateTime: string = sysDate.toLocaleTimeString();

//console.log(date)  
//console.log(dateTime)  

/**
 * Make API call to Waitz Live page.
 * If there is an error, make this known.
 * @return object
 */
async function WaitzLiveAPICall(): Promise<Object[] | null> {
    let json: Object[] | null = null;
    try {
        // perform an HTTP GET request to target page
        const response = await axios.get("https://waitz.io/live/vanderbilt-university");
        // get HTML from the server response
        json = response.data.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
        return json;
}
/**
 * Shapes json into a row and checks sublocations
 * If there is an error, make this known.
 * @return WaitzTypes.Live[]
 */
async function WaitzLiveArray(): Promise<WaitzTypes.Live[]> {
    const results = await WaitzLiveAPICall();
    const rows: WaitzTypes.Live[] = [];
        //shape into array
        if (results) {
        results.forEach((data: any) => { //data = one row
            const row: WaitzTypes.Live = {
                isSublocation: false, //is the location a sublocation?
                Sublocation: null, //name of sublocation
                Name: data.name, //main location name
                isAvailable: data.isAvailable,
                isOpen: data.isOpen,
                numPeople: data.people,
                capacity: data.capacity, 
                percCapacity: data.percentage,  
                //timestamp of API call
                date: date,
                dateTime: dateTime     
            };
            //check sublocations
            rows.push(row);
            if (data.subLocs != false) {
            data.subLocs.forEach((subLoc: any) => {
                const subLocRow: WaitzTypes.Live = {
                isSublocation: true, //is the location a sublocation?
                Sublocation: subLoc.name, //name of sublocation
                Name: data.name, //main location name
                isAvailable: subLoc.isAvailable,
                isOpen: subLoc.isOpen,
                numPeople: subLoc.people,
                capacity: subLoc.capacity, 
                percCapacity: subLoc.percentage,  
                //timestamp of API call
                date: date,
                dateTime: dateTime     
            }
            rows.push(subLocRow);
        });
    }
    });
    rows.sort((a, b) => a.Name.localeCompare(b.Name));
    }
    console.log(rows);
    return rows;
}

/**
 * Make API call to Waitz Trends page.
 * If there is an error, make this known.
 */
async function WaitzTrendsAPICall() {
    try {
        // perform an HTTP GET request to target page
        const response = await axios.get("https://waitz.io/compare/vanderbilt-university")
        // get HTML from the server response
        const json = response.data.data
        console.log(json)

        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
  }

  
/**
 * Pull from json to export to Google Sheet.
 * If there is an error, make this known.
 */

  WaitzLiveArray()