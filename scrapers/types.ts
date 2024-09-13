/**
 * You should declare the common types for your scraper in this document.
 * Make sure to import your types in the main scraper document.
 */

/**
 * This interface will define the columns of your exported spreadsheet
 */
export interface WaitzData {
    Name: string;
    isSublocation: string;
    Sublocation: string | null;
    numPeople: number;
    capacity: number;
    isOpen: boolean;
    date: Date;
    dateTime: Date;
  }
