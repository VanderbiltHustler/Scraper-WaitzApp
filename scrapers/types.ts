/**
 * You should declare the common types for your scraper in this document.
 * Make sure to import your types in the main scraper document.
 */


/**
 * This interface will shape the information from the Waitz Occupancy API
 */
export interface Live {
    Name: string; //name of location
    isAvailable: boolean; //is the data available from the Waitz API?
    isOpen: boolean; //is the location open?
    //current occupancy information
    numPeople: number; //number of people currently there
    capacity: number; //capacity of location
    percCapacity: number; //%busy
    isSublocation: boolean; //is the location a sublocation?
    Sublocation: string | null; //name of sublocation
    //timestamp of API call
    date: string;
    dateTime: string;
  }

/**
 * This interface will shape the information from the Waitz Comparisons API
 */
export interface Trends {
    Name: string; //name of location
    isAvailable: boolean; //is the data available from the Waitz API?
    isOpen: boolean; //is the location open?
    //trend variables
    nextHour: string | null;
    peakHours: string | null;
    compareToLastWeek: string | null;
    bestLocation: string | null;
  }

/**
 * This interface will define the columns of your exported spreadsheet
 */
export interface ToExport {
    Name: string; //name of location
    isAvailable: boolean; //is the data available from the Waitz API?
    isOpen: boolean; //is the location open?
    isSublocation: string; //is the location a sublocation?
    Sublocation: string | null; //name of sublocation
    //current occupancy information
    numPeople: number; //number of people currently there
    capacity: number; //capacity of location
    //trend variables
    nextHour: string | null;
    peakHours: string | null;
    compareToLastWeek: string | null;
    bestLocation: string | null;
    //timestamp of API call
    date: Date;
    dateTime: Date;
  }
