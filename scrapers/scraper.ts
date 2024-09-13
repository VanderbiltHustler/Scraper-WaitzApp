import axios from "axios"
// import cheerio from "cheerio"; -- not needed here because we are pulling directly from the API
import { writeToPath } from "@fast-csv/format"
import { WaitzData } from "./types"


// Object to Store the data
const rows: WaitzData[] = []

/**
 * Make API call to Waitz Live page
 * If there is an error, make this known
 */
async function WaitzLiveAPICall() {
    // perform an HTTP GET request to target page
    const response = await axios.get("https://waitz.io/live/vanderbilt-university")
    // get HTML from the server response
    const json = response.data
    console.log(json)
  }
  
  WaitzLiveAPICall()

