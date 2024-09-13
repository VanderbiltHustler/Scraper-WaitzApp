import axios from "axios"
import { JsonObject, JsonProperty } from "json2typescript";

// import cheerio from "cheerio"; -- not needed here because we are pulling directly from the API
// import { writeToPath } from "@fast-csv/format"
import * as WaitzTypes from "./types"


// Object to Store the data
const sysDate: Date = new Date();
const date: string = sysDate.toLocaleDateString();
const dateTime: string = date + sysDate.toLocaleTimeString();

console.log(date)  
console.log(dateTime)  

/**
 * Make API call to Waitz Live page.
 * If there is an error, make this known.
 */
async function WaitzLiveAPICall(): Promise<WaitzTypes.Live[] | null> {
    const rows: WaitzTypes.Live[] = [];
    try {
        // perform an HTTP GET request to target page
        const response = await axios.get("https://waitz.io/live/vanderbilt-university");
        // get HTML from the server response
        const json = response.data.data;

        //shape into array
        json.forEach((data: any) => {
            const row: WaitzTypes.Live = {
                Name: data.name,
                isAvailable: data.isAvailable,
                isOpen: data.isOpen,
                numPeople: data.people,
                capacity: data.capacity, 
                percCapacity: data.percentage           
            };
            rows.push(row)
        });
    } catch (error) {
        console.error("Error fetching data:", error);
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
 * Pull information from sublocations.
 * If there is an error, make this known.
 */


  
/**
 * Pull from json to export to Google Sheet.
 * If there is an error, make this known.
 */
/*function shapeWaitzDataType(data: any): WaitzData[] {
    const rows: WaitzData[] = []
    const row: WaitzData = {
        Name: data.name,
        isAvailable: data.isAvailable,
        isOpen: data.isOpen,
        numPeople: data.people,
        capacity: data.capacity
    };
    rows.push(row)
    return rows;
}
    */


  WaitzLiveAPICall()
  //WaitzTrendsAPICall()
