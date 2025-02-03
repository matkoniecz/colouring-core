import React, { Fragment } from 'react';
import { commonSourceTypes, dataFields } from '../../config/data-fields-config';
import DataEntry from '../data-components/data-entry';
import { MultiDataEntry } from '../data-components/multi-data-entry/multi-data-entry';
import SelectDataEntry from '../data-components/select-data-entry';
import withCopyEdit from '../data-container';
import { CategoryViewProps } from './category-view-props';
import Verification from '../data-components/verification';
import { useDisplayPreferences } from '../../displayPreferences-context';
import { DataEntryGroup } from '../data-components/data-entry-group';
import { DataTitleCopyable } from '../data-components/data-title';
import InfoBox from '../../components/info-box';
import Tooltip from '../../components/tooltip';
import './land-use.css';

/**
 * Use view/edit section
 */
const LandUseView: React.FunctionComponent<CategoryViewProps> = (props) => {
    const switchToIsDomesticMapStyle = (e) => {
        e.preventDefault();
        props.onMapColourScale('is_domestic')
    }
    const switchToLandUseMapStyle = (e) => {
        e.preventDefault();
        props.onMapColourScale('landuse')
    }

    const landuseCodesData = {"AA/RAC Service Centres and Boxes": {
    SCAT: {code: "1", description: "AA/RAC Service Centres and Boxes"},
    CPA: {code: "95.31", description: "Repair and maintenance services of motor vehicles"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "95.31", description: "Repair and maintenance of motor vehicles"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Advertising Right": {
    SCAT: {code: "3", description: "Advertising Right"},
    CPA: {code: "73.11", description: "Services provided by advertising agencies"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "73.11", description: "Activities of advertising agencies"},
    UK_SIC: {code: "73.11", description: "Advertising agencies"},
},
"Agricultural Showgrounds (National Scheme)": {
    SCAT: {code: "4", description: "Agricultural Showgrounds (National Scheme)"},
    CPA: {code: "93.29", description: "Other amusement and recreation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.29", description: "Amusement and recreation activities not elsewhere classified"},
    UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
},
"Air Ports (Minor) (National Scheme)": {
    SCAT: {code: "5", description: "Air Ports (Minor) (National Scheme)"},
    CPA: {code: "51.10", description: "Passenger air transport services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "51.10", description: "Passenger air transport"},
    UK_SIC: {code: "51.10", description: "Passenger air transport"},
},
"Air Strips (National Scheme)": {
    SCAT: {code: "6", description: "Air Strips (National Scheme)"},
    CPA: {code: "52.23", description: "Services incidental to air transportation"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.23", description: "Service activities incidental to air transportation"},
    UK_SIC: {code: "52.23", description: "Service activities incidental to air transportation"},
},
"Aircraft Works With Airfields": {
    SCAT: {code: "7", description: "Aircraft Works With Airfields"},
    CPA: {code: "51.10", description: "Passenger air transport services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "51.10", description: "Passenger air transport"},
    UK_SIC: {code: "51.10", description: "Passenger air transport"},
},
"Airport Let Outs": {
    SCAT: {code: "8", description: "Airport Let Outs"},
    CPA: {code: "68.20", description: "Rental and operating services of own or leased real estate"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "68.20", description: "Rental and operating of own or leased real estate"},
    UK_SIC: {code: "68.20", description: "Renting and operating of own or leased real estate"},
},
"Aluminum Smelting Works": {
    SCAT: {code: "9", description: "Aluminum Smelting Works"},
    CPA: {code: "25.52", description: "Heat treatment services of metals"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "25.52", description: "Heat treatment of metals"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Ambulance Stations": {
    SCAT: {code: "10", description: "Ambulance Stations"},
    CPA: {code: "86.92", description: "Patient transportation services by ambulance"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "86.92", description: "Patient transportation by ambulance"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Amusement Arcades": {
    SCAT: {code: "11", description: "Amusement Arcades"},
    CPA: {code: "93.21", description: "Amusement park and theme park services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.21", description: "Activities of amusement parks and theme parks"},
    UK_SIC: {code: "93.21", description: "Activities of amusement parks and theme parks"},
},
"Amusement Parks": {
    SCAT: {code: "12", description: "Amusement Parks"},
    CPA: {code: "93.21", description: "Amusement park and theme park services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.21", description: "Activities of amusement parks and theme parks"},
    UK_SIC: {code: "93.21", description: "Activities of amusement parks and theme parks"},
},
"Animal Boarding": {
    SCAT: {code: "13", description: "Animal Boarding"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Arenas": {
    SCAT: {code: "14", description: "Arenas"},
    CPA: {code: "93.21", description: "Amusement park and theme park services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.21", description: "Activities of amusement parks and theme parks"},
    UK_SIC: {code: "93.21", description: "Activities of amusement parks and theme parks"},
},
"Army Hereditaments": {
    SCAT: {code: "15", description: "Army Hereditaments"},
    CPA: {code: "84.22", description: "Defence services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "84.22", description: "Defence activities"},
    UK_SIC: {code: "84.22", description: "Defence activities"},
},
"Artificial Fibre Works": {
    SCAT: {code: "16", description: "Artificial Fibre Works"},
    CPA: {code: "20.60", description: "Man-made fibres"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "20.60", description: "Manufacture of man-made fibres"},
    UK_SIC: {code: "20.60", description: "Manufacture of man-made fibres"},
},
"Asphalt Plants": {
    SCAT: {code: "17", description: "Asphalt Plants"},
    CPA: {code: "23.52", description: "Lime and plaster"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.52", description: "Manufacture of lime and plaster"},
    UK_SIC: {code: "23.52", description: "Manufacture of lime and plaster"},
},
"ATMs": {
    SCAT: {code: "18", description: "ATMs"},
    CPA: {code: "64.19", description: "Other monetary intermediation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "64.19", description: "Other monetary intermediation"},
    UK_SIC: {code: "64.19", description: "Other monetary intermediation"},
},
"Auction Rooms": {
    SCAT: {code: "19", description: "Auction Rooms"},
    CPA: {code: "64.19", description: "Other monetary intermediation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "64.19", description: "Other monetary intermediation"},
    UK_SIC: {code: "64.19", description: "Other monetary intermediation"},
},
"Baling Plants": {
    SCAT: {code: "20", description: "Baling Plants"},
    CPA: {code: "32.99", description: "Other manufactured goods n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "32.99", description: "Other manufacturing not elsewhere classified"},
    UK_SIC: {code: "32.99", description: "Other manufacturing n.e.c."},
},
"Banks/Insurance/Building Society Offices & Other A2 Uses": {
    SCAT: {code: "21", description: "Banks/Insurance/Building Society Offices & Other A2 Uses"},
    CPA: {code: "65.12", description: "Non-life insurance services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "65.12", description: "Non-life insurance"},
    UK_SIC: {code: "65.12", description: "Non-life insurance"},
},
"Beach Huts": {
    SCAT: {code: "22", description: "Beach Huts"},
    CPA: {code: "55.20", description: "Holiday and other short-stay accommodation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "55.20", description: "Holiday and other short-stay accommodation"},
    UK_SIC: {code: "55.20", description: "Holiday and other short-stay accommodation"},
},
"Beet Sugar Factories": {
    SCAT: {code: "23", description: "Beet Sugar Factories"},
    CPA: {code: "10.81", description: "Sugar"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "10.81", description: "Manufacture of sugar"},
    UK_SIC: {code: "10.81", description: "Manufacture of sugar"},
},
"Betting Offices": {
    SCAT: {code: "24", description: "Betting Offices"},
    CPA: {code: "92.00", description: "Gambling and betting services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "92.00", description: "Gambling and betting activities"},
    UK_SIC: {code: "92.00", description: "Gambling and betting activities"},
},
"Bingo Halls (National Scheme)": {
    SCAT: {code: "25", description: "Bingo Halls (National Scheme)"},
    CPA: {code: "92.00", description: "Gambling and betting services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "92.00", description: "Gambling and betting activities"},
    UK_SIC: {code: "92.00", description: "Gambling and betting activities"},
},
"Bird Sanctuaries": {
    SCAT: {code: "26", description: "Bird Sanctuaries"},
    CPA: {code: "91.41", description: "Botanical and zoological garden services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "91.41", description: "Botanical and zoological garden activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Boat Yards": {
    SCAT: {code: "27", description: "Boat Yards"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Bowling Alleys": {
    SCAT: {code: "28", description: "Bowling Alleys"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Bowling Centres (Indoor)": {
    SCAT: {code: "29", description: "Bowling Centres (Indoor)"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Bowling Greens (Outdoor)": {
    SCAT: {code: "30", description: "Bowling Greens (Outdoor)"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Breweries (National Scheme)": {
    SCAT: {code: "31", description: "Breweries (National Scheme)"},
    CPA: {code: "11.05", description: "Beer and brewing dregs"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "11.05", description: "Manufacture of beer"},
    UK_SIC: {code: "11.05", description: "Manufacture of beer"},
},
"Brickworks (Traditional), Clay Tile/Pipe Works": {
    SCAT: {code: "32", description: "Brickworks (Traditional), Clay Tile/Pipe Works"},
    CPA: {code: "23.32", description: "Bricks, tiles and construction products, in baked clay"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.32", description: "Manufacture of bricks, tiles and construction products, in baked clay"},
    UK_SIC: {code: "23.32", description: "Manufacture of bricks, tiles and construction products, in baked clay"},
},
"Bulk Cement Storage Depots": {
    SCAT: {code: "33", description: "Bulk Cement Storage Depots"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Bullion/Money Stores (National Scheme)": {
    SCAT: {code: "34", description: "Bullion/Money Stores (National Scheme)"},
    CPA: {code: "64.19", description: "Other monetary intermediation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "64.19", description: "Other monetary intermediation"},
    UK_SIC: {code: "64.19", description: "Other monetary intermediation"},
},
"Bus Garages": {
    SCAT: {code: "35", description: "Bus Garages"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Bus Stations": {
    SCAT: {code: "36", description: "Bus Stations"},
    CPA: {code: "49.39", description: "Other passenger land transport services n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "49.39", description: "Other passenger land transport not elsewhere classified"},
    UK_SIC: {code: "49.39", description: "Other passenger land transport n.e.c."},
},
"Cable Head End Buildings": {
    SCAT: {code: "37", description: "Cable Head End Buildings"},
    CPA: {code: "61.10", description: "Wired, wireless, and satellite telecommunication services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "61.10", description: "Wired, wireless, and satellite telecommunication activities"},
    UK_SIC: {code: "61.10", description: "Wired telecommunications activities"},
},
"Car Auction Buildings/Sites": {
    SCAT: {code: "38", description: "Car Auction Buildings/Sites"},
    CPA: {code: "64.19", description: "Other monetary intermediation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "64.19", description: "Other monetary intermediation"},
    UK_SIC: {code: "64.19", description: "Other monetary intermediation"},
},
"Car Parks (Multi-Storey)": {
    SCAT: {code: "39", description: "Car Parks (Multi-Storey)"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Car Parks (Surfaced Open)": {
    SCAT: {code: "40", description: "Car Parks (Surfaced Open)"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Car Parks (Unsurfaced Open)": {
    SCAT: {code: "41", description: "Car Parks (Unsurfaced Open)"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Car Showrooms": {
    SCAT: {code: "42", description: "Car Showrooms"},
    CPA: {code: "47.81", description: "Retail sale services of motor vehicles"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.81", description: "Retail sale of motor vehicles"},
    UK_SIC: {code: "47.81", description: "Retail sale via stalls and markets of food, beverages and tobacco products"},
},
"Car Spaces": {
    SCAT: {code: "43", description: "Car Spaces"},
    CPA: {code: "47.81", description: "Retail sale services of motor vehicles"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.81", description: "Retail sale of motor vehicles"},
    UK_SIC: {code: "47.81", description: "Retail sale via stalls and markets of food, beverages and tobacco products"},
},
"Car Supermarkets": {
    SCAT: {code: "44", description: "Car Supermarkets"},
    CPA: {code: "47.81", description: "Retail sale services of motor vehicles"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.81", description: "Retail sale of motor vehicles"},
    UK_SIC: {code: "47.81", description: "Retail sale via stalls and markets of food, beverages and tobacco products"},
},
"Car Washes (Stand Alone)": {
    SCAT: {code: "45", description: "Car Washes (Stand Alone)"},
    CPA: {code: "95.31", description: "Repair and maintenance services of motor vehicles"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "95.31", description: "Repair and maintenance of motor vehicles"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Car/Caravan Sales/Display/Hiring Sites": {
    SCAT: {code: "46", description: "Car/Caravan Sales/Display/Hiring Sites"},
    CPA: {code: "47.81", description: "Retail sale services of motor vehicles"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.81", description: "Retail sale of motor vehicles"},
    UK_SIC: {code: "47.81", description: "Retail sale via stalls and markets of food, beverages and tobacco products"},
},
"Caravan Parks (Leisure) (National Scheme)": {
    SCAT: {code: "47", description: "Caravan Parks (Leisure) (National Scheme)"},
    CPA: {code: "55.30", description: "Camping grounds and recreational vehicle parks services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "55.30", description: "Camping grounds and recreational vehicle parks"},
    UK_SIC: {code: "55.30", description: "Camping grounds, recreational vehicle parks and trailer parks"},
},
"Caravan Sites and Pitches (National Scheme)": {
    SCAT: {code: "48", description: "Caravan Sites and Pitches (National Scheme)"},
    CPA: {code: "55.30", description: "Camping grounds and recreational vehicle parks services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "55.30", description: "Camping grounds and recreational vehicle parks"},
    UK_SIC: {code: "55.30", description: "Camping grounds, recreational vehicle parks and trailer parks"},
},
"Casinos and Gambling Clubs": {
    SCAT: {code: "49", description: "Casinos and Gambling Clubs"},
    CPA: {code: "92.00", description: "Gambling and betting services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "92.00", description: "Gambling and betting activities"},
    UK_SIC: {code: "92.00", description: "Gambling and betting activities"},
},
"Cattle Breeding Centres": {
    SCAT: {code: "50", description: "Cattle Breeding Centres"},
    CPA: {code: "01.42", description: "Other cattle and buffaloes, live and their semen"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "01.42", description: "Raising of other cattle and buffaloes"},
    UK_SIC: {code: "01.42", description: "Raising of other cattle and buffaloes"},
},
"Cement Tile Works": {
    SCAT: {code: "51", description: "Cement Tile Works"},
    CPA: {code: "42.99", description: "Constructions and construction works for other civil engineering projects n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "42.99", description: "Construction of other civil engineering projects not elsewhere classified"},
    UK_SIC: {code: "42.99", description: "Construction of other civil engineering projects n.e.c."},
},
"Cement Works": {
    SCAT: {code: "52", description: "Cement Works"},
    CPA: {code: "42.99", description: "Constructions and construction works for other civil engineering projects n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "42.99", description: "Construction of other civil engineering projects not elsewhere classified"},
    UK_SIC: {code: "42.99", description: "Construction of other civil engineering projects n.e.c."},
},
"Cemeteries (National Scheme)": {
    SCAT: {code: "53", description: "Cemeteries (National Scheme)"},
    CPA: {code: "96.30", description: "Funeral and related services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "96.30", description: "Funeral and related activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Chalet Parks (National Scheme)": {
    SCAT: {code: "54", description: "Chalet Parks (National Scheme)"},
    CPA: {code: "55.30", description: "Camping grounds and recreational vehicle parks services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "55.30", description: "Camping grounds and recreational vehicle parks"},
    UK_SIC: {code: "55.30", description: "Camping grounds, recreational vehicle parks and trailer parks"},
},
"Chemical Works": {
    SCAT: {code: "55", description: "Chemical Works"},
    CPA: {code: "20.60", description: "Man-made fibres"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "20.60", description: "Manufacture of man-made fibres"},
    UK_SIC: {code: "20.60", description: "Manufacture of man-made fibres"},
},
"Cinemas (National Scheme)": {
    SCAT: {code: "56", description: "Cinemas (National Scheme)"},
    CPA: {code: "93.29", description: "Other amusement and recreation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.29", description: "Amusement and recreation activities not elsewhere classified"},
    UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
},
"Civic  and  Public  Buildings  (Local Authority Occupations)": {
    SCAT: {code: "57", description: "Civic  and  Public  Buildings  (Local Authority Occupations)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Civic Amenity Sites": {
    SCAT: {code: "58", description: "Civic Amenity Sites"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Civil Airports": {
    SCAT: {code: "59", description: "Civil Airports"},
    CPA: {code: "51.10", description: "Passenger air transport services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "51.10", description: "Passenger air transport"},
    UK_SIC: {code: "51.10", description: "Passenger air transport"},
},
"Clubhouses": {
    SCAT: {code: "60", description: "Clubhouses"},
    CPA: {code: "56.30", description: "Beverage serving services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "56.30", description: "Beverage serving activities"},
    UK_SIC: {code: "56.30", description: "Beverage serving activities"},
},
"Licensed Sports, Social & Private Members Clubs": {
    SCAT: {code: "61", description: "Licensed Sports, Social & Private Members Clubs"},
    CPA: {code: "93.12", description: "Services of sports clubs"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.12", description: "Activities of sports clubs"},
    UK_SIC: {code: "93.12", description: "Activities of sport clubs"},
},
"Inns": {
    SCAT: {code: "62", description: "Inns"},
    CPA: {code: "55.10", description: "Hotel and similar accommodation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "55.10", description: "Hotels and similar accommodation"},
    UK_SIC: {code: "55.10", description: "Hotels and similar accommodation"},
},
"Coking and Carbonising Plants": {
    SCAT: {code: "63", description: "Coking and Carbonising Plants"},
    CPA: {code: "19.20", description: "Refined petroleum products and fossil fuel products"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "19.20", description: "Manufacture of refined petroleum products and fossil fuel products"},
    UK_SIC: {code: "19.20", description: "Manufacture of refined petroleum products"},
},
"Cold Stores": {
    SCAT: {code: "64", description: "Cold Stores"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Colleges of Further Education (National Scheme)": {
    SCAT: {code: "65", description: "Colleges of Further Education (National Scheme)"},
    CPA: {code: "85.33", description: "Post-secondary non-tertiary education services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "85.33", description: "Post-secondary non-tertiary education"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Communication Stations (National Scheme)": {
    SCAT: {code: "66", description: "Communication Stations (National Scheme)"},
    CPA: {code: "61.90", description: "Other telecommunication services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "61.90", description: "Other telecommunication activities"},
    UK_SIC: {code: "61.90", description: "Other telecommunications activities"},
},
"Community Day Centres": {
    SCAT: {code: "67", description: "Community Day Centres"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Computer Centres (Non-Purpose Built)": {
    SCAT: {code: "68", description: "Computer Centres (Non-Purpose Built)"},
    CPA: {code: "95.40", description: "Intermediation services of repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "95.40", description: "Intermediation service activities for repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Computer Centres (Purpose Built)": {
    SCAT: {code: "69", description: "Computer Centres (Purpose Built)"},
    CPA: {code: "95.40", description: "Intermediation services of repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "95.40", description: "Intermediation service activities for repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Concert Halls (National Scheme)": {
    SCAT: {code: "70", description: "Concert Halls (National Scheme)"},
    CPA: {code: "93.29", description: "Other amusement and recreation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.29", description: "Amusement and recreation activities not elsewhere classified"},
    UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
},
"Concrete Batching Plants": {
    SCAT: {code: "71", description: "Concrete Batching Plants"},
    CPA: {code: "23.61", description: "Concrete products for construction purposes"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.61", description: "Manufacture of concrete products for construction purposes"},
    UK_SIC: {code: "23.61", description: "Manufacture of concrete products for construction purposes"},
},
"Concrete Block Works": {
    SCAT: {code: "72", description: "Concrete Block Works"},
    CPA: {code: "23.61", description: "Concrete products for construction purposes"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.61", description: "Manufacture of concrete products for construction purposes"},
    UK_SIC: {code: "23.61", description: "Manufacture of concrete products for construction purposes"},
},
"Concrete Product Works": {
    SCAT: {code: "73", description: "Concrete Product Works"},
    CPA: {code: "23.61", description: "Concrete products for construction purposes"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.61", description: "Manufacture of concrete products for construction purposes"},
    UK_SIC: {code: "23.61", description: "Manufacture of concrete products for construction purposes"},
},
"Conference & Exhibition Centres": {
    SCAT: {code: "74", description: "Conference & Exhibition Centres"},
    CPA: {code: "82.30", description: "Organisation of conventions and trade shows services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "82.30", description: "Organisation of conventions and trade shows"},
    UK_SIC: {code: "82.30", description: "Organisation of conventions and trade shows"},
},
"Wedding & Function Venues": {
    SCAT: {code: "75", description: "Wedding & Function Venues"},
    CPA: {code: "77.21", description: "Rental and leasing services of recreational and sports goods"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "77.21", description: "Rental and leasing of recreational and sports goods"},
    UK_SIC: {code: "77.21", description: "Renting and leasing of recreational and sports goods"},
},
"Contractors Huts & Compounds": {
    SCAT: {code: "76", description: "Contractors Huts & Compounds"},
    CPA: {code: "43.99", description: "Other specialised construction works n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "43.99", description: "Other specialised construction activities not elsewhere classified"},
    UK_SIC: {code: "43.99", description: "Other specialised construction activities n.e.c."},
},
"Country House Hotels": {
    SCAT: {code: "77", description: "Country House Hotels"},
    CPA: {code: "55.10", description: "Hotel and similar accommodation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "55.10", description: "Hotels and similar accommodation"},
    UK_SIC: {code: "55.10", description: "Hotels and similar accommodation"},
},
"Creameries": {
    SCAT: {code: "79", description: "Creameries"},
    CPA: {code: "10.51", description: "Dairy and cheese products"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "10.51", description: "Manufacture of dairy products"},
    UK_SIC: {code: "10.51", description: "Operation of dairies and cheese making"},
},
"Crematoria (With & Without Cemeteries) (National Scheme)": {
    SCAT: {code: "80", description: "Crematoria (With & Without Cemeteries) (National Scheme)"},
    CPA: {code: "96.30", description: "Funeral and related services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "96.30", description: "Funeral and related activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Cricket Centres": {
    SCAT: {code: "81", description: "Cricket Centres"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Cricket Grounds (County)": {
    SCAT: {code: "82", description: "Cricket Grounds (County)"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Cricket Grounds/Pitches (Non- County)": {
    SCAT: {code: "83", description: "Cricket Grounds/Pitches (Non- County)"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Dance Schools & Centres": {
    SCAT: {code: "84", description: "Dance Schools & Centres"},
    CPA: {code: "85.51", description: "Sports and recreation education services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "85.51", description: "Sports and recreation education"},
    UK_SIC: {code: "85.51", description: "Sports and recreation education"},
},
"Day Nurseries/Play Schools": {
    SCAT: {code: "85", description: "Day Nurseries/Play Schools"},
    CPA: {code: "85.10", description: "Pre-primary education services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "85.10", description: "Pre-primary education"},
    UK_SIC: {code: "85.10", description: "Pre-primary education"},
},
"Departmental and Walk Round Stores (Large)": {
    SCAT: {code: "86", description: "Departmental and Walk Round Stores (Large)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.12", description: "Other non-specialised retail sale"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Distilleries": {
    SCAT: {code: "87", description: "Distilleries"},
    CPA: {code: "11.01", description: "Distilled, rectified and blended spirits"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "11.01", description: "Distilling, rectifying and blending of spirits"},
    UK_SIC: {code: "11.01", description: "Distilling, rectifying and blending of spirits"},
},
"District Heating Undertakings & Networks": {
    SCAT: {code: "88", description: "District Heating Undertakings & Networks"},
    CPA: {code: "35.30", description: "Steam and air conditioning supply services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "35.30", description: "Steam and air conditioning supply"},
    UK_SIC: {code: "35.30", description: "Steam and air conditioning supply"},
},
"Docks and Harbours (Non-Statutory)": {
    SCAT: {code: "89", description: "Docks and Harbours (Non-Statutory)"},
    CPA: {code: "50.10", description: "Sea and coastal passenger water transport services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "50.10", description: "Sea and coastal passenger water transport"},
    UK_SIC: {code: "50.10", description: "Sea and coastal passenger water transport"},
},
"Domestic Fuel Installations": {
    SCAT: {code: "90", description: "Domestic Fuel Installations"},
    CPA: {code: "43.22", description: "Plumbing, heat and air conditioning installation works"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "43.22", description: "Plumbing, heat and air-conditioning installation"},
    UK_SIC: {code: "43.22", description: "Plumbing, heat and air-conditioning installation"},
},
"Drive-In Restaurants": {
    SCAT: {code: "91", description: "Drive-In Restaurants"},
    CPA: {code: "56.11", description: "Restaurant serving services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "56.11", description: "Restaurant activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Drive-Thru Restaurants": {
    SCAT: {code: "92", description: "Drive-Thru Restaurants"},
    CPA: {code: "56.11", description: "Restaurant serving services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "56.11", description: "Restaurant activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Mine Water Treatment Plant and Premises": {
    SCAT: {code: "93", description: "Mine Water Treatment Plant and Premises"},
    CPA: {code: "36.00", description: "Natural water; water treatment and supply services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "36.00", description: "Water collection, treatment and supply"},
    UK_SIC: {code: "36.00", description: "Water collection, treatment and supply"},
},
"Electricity Undertakings (Non- Statutory)": {
    SCAT: {code: "94", description: "Electricity Undertakings (Non- Statutory)"},
    CPA: {code: "35.14", description: "Distribution services of electricity"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "35.14", description: "Distribution of electricity"},
    UK_SIC: {code: "35.14", description: "Trade of electricity"},
},
"Exhaust and Tyre Centres": {
    SCAT: {code: "95", description: "Exhaust and Tyre Centres"},
    CPA: {code: "95.31", description: "Repair and maintenance services of motor vehicles"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "95.31", description: "Repair and maintenance of motor vehicles"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Factories, Workshops and Warehouses (Incl Bakeries & Dairies)": {
    SCAT: {code: "96", description: "Factories, Workshops and Warehouses (Incl Bakeries & Dairies)"},
    CPA: {code: "10.71", description: "Bread, fresh pastry goods and cakes"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "10.71", description: "Manufacture of bread; manufacture of fresh pastry goods and cakes"},
    UK_SIC: {code: "10.71", description: "Manufacture of bread; manufacture of fresh pastry goods and cakes"},
},
"Factory Shops": {
    SCAT: {code: "97", description: "Factory Shops"},
    CPA: {code: "47.78", description: "Retail sale services of other new goods"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.78", description: "Retail sale of other new goods"},
    UK_SIC: {code: "47.78", description: "Other retail sale of new goods in specialised stores"},
},
"Farm Shops": {
    SCAT: {code: "98", description: "Farm Shops"},
    CPA: {code: "47.78", description: "Retail sale services of other new goods"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.78", description: "Retail sale of other new goods"},
    UK_SIC: {code: "47.78", description: "Other retail sale of new goods in specialised stores"},
},
"Field Study, Activity and Adventure Centres": {
    SCAT: {code: "99", description: "Field Study, Activity and Adventure Centres"},
    CPA: {code: "85.59", description: "Other education services n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "85.59", description: "Other education not elsewhere classified"},
    UK_SIC: {code: "85.59", description: "Other education n.e.c."},
},
"Film and TV Studios": {
    SCAT: {code: "100", description: "Film and TV Studios"},
    CPA: {code: "59.11", description: "Motion picture, video and television programme production services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "59.11", description: "Motion picture, video and television programme production activities"},
    UK_SIC: {code: "59.11", description: "Motion picture, video and television programme production activities"},
},
"Fire Stations": {
    SCAT: {code: "101", description: "Fire Stations"},
    CPA: {code: "84.25", description: "Fire brigade services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "84.25", description: "Fire service activities"},
    UK_SIC: {code: "84.25", description: "Fire service activities"},
},
"Fish Farms": {
    SCAT: {code: "102", description: "Fish Farms"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "03.21", description: "Marine aquaculture"},
    UK_SIC: {code: "03.21", description: "Marine aquaculture"},
},
"Flour Mills (National Scheme)": {
    SCAT: {code: "103", description: "Flour Mills (National Scheme)"},
    CPA: {code: "10.61", description: "Grain mill products"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "10.61", description: "Manufacture of grain mill products"},
    UK_SIC: {code: "10.61", description: "Manufacture of grain mill products"},
},
"Food Courts": {
    SCAT: {code: "104", description: "Food Courts"},
    CPA: {code: "56.40", description: "Intermediation services of food and beverage serving services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "56.40", description: "Intermediation service activities for food and beverage services activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Food Processing Centres": {
    SCAT: {code: "105", description: "Food Processing Centres"},
    CPA: {code: "10.89", description: "Other food products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "10.89", description: "Manufacture of other food products not elsewhere classified"},
    UK_SIC: {code: "10.89", description: "Manufacture of other food products n.e.c."},
},
"Convenience Store": {
    SCAT: {code: "106", description: "Convenience Store"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.11", description: "Non-specialised retail sale of predominately food, beverages or tobacco"},
    UK_SIC: {code: "47.11", description: "Retail sale in non-specialised stores with food, beverages or tobacco predominating"},
},
"Football Grounds": {
    SCAT: {code: "107", description: "Football Grounds"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Football Pitches": {
    SCAT: {code: "108", description: "Football Pitches"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Football Stadia": {
    SCAT: {code: "109", description: "Football Stadia"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Foundries": {
    SCAT: {code: "110", description: "Foundries"},
    CPA: {code: "24.51", description: "Casting services of iron"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "24.51", description: "Casting of iron"},
    UK_SIC: {code: "24.51", description: "Casting of iron"},
},
"Funeral Parlours/Chapels Of Rest": {
    SCAT: {code: "111", description: "Funeral Parlours/Chapels Of Rest"},
    CPA: {code: "96.30", description: "Funeral and related services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "96.30", description: "Funeral and related activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Game Farms": {
    SCAT: {code: "112", description: "Game Farms"},
    CPA: {code: "01.48", description: "Other animals and animal products"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "01.48", description: "Raising of other animals"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Garages (Transport and Commercial)": {
    SCAT: {code: "113", description: "Garages (Transport and Commercial)"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Garden Centres": {
    SCAT: {code: "114", description: "Garden Centres"},
    CPA: {code: "47.76", description: "Retail sale services of flowers, plants, fertilisers, pets and pet food"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.76", description: "Retail sale of flowers, plants, fertilisers, pets and pet food"},
    UK_SIC: {code: "47.76", description: "Retail sale of flowers, plants, seeds, fertilisers, pet animals and pet food in specialised stores"},
},
"Gas Processing Plants": {
    SCAT: {code: "115", description: "Gas Processing Plants"},
    CPA: {code: "35.21", description: "Manufactured gas, for energy supply"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "35.21", description: "Manufacture of gas"},
    UK_SIC: {code: "35.21", description: "Manufacture of gas"},
},
"Go Kart Rinks": {
    SCAT: {code: "116", description: "Go Kart Rinks"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Golf Courses": {
    SCAT: {code: "117", description: "Golf Courses"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Golf Driving Ranges": {
    SCAT: {code: "118", description: "Golf Driving Ranges"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Grain Silos": {
    SCAT: {code: "119", description: "Grain Silos"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Granaries and Intervention Stores": {
    SCAT: {code: "120", description: "Granaries and Intervention Stores"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Greyhound Racetracks": {
    SCAT: {code: "121", description: "Greyhound Racetracks"},
    CPA: {code: "93.19", description: "Other sports services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.19", description: "Sports activities not elsewhere classified"},
    UK_SIC: {code: "93.19", description: "Other sports activities"},
},
"Guest & Boarding Houses": {
    SCAT: {code: "122", description: "Guest & Boarding Houses"},
    CPA: {code: "55.10", description: "Hotel and similar accommodation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "55.10", description: "Hotels and similar accommodation"},
    UK_SIC: {code: "55.10", description: "Hotels and similar accommodation"},
},
"Traveller Sites": {
    SCAT: {code: "123", description: "Traveller Sites"},
    CPA: {code: "55.90", description: "Other accommodation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "55.90", description: "Other accommodation"},
    UK_SIC: {code: "55.90", description: "Other accommodation"},
},
"Hatcheries/Poultry Farms": {
    SCAT: {code: "124", description: "Hatcheries/Poultry Farms"},
    CPA: {code: "01.47", description: "Poultry, live and eggs"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "01.47", description: "Raising of poultry"},
    UK_SIC: {code: "01.47", description: "Raising of poultry"},
},
"Health Farms": {
    SCAT: {code: "125", description: "Health Farms"},
    CPA: {code: "86.99", description: "Other human health services n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "86.99", description: "Other human health activities not elsewhere classified"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Heliports": {
    SCAT: {code: "126", description: "Heliports"},
    CPA: {code: "52.23", description: "Services incidental to air transportation"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.23", description: "Service activities incidental to air transportation"},
    UK_SIC: {code: "52.23", description: "Service activities incidental to air transportation"},
},
"Heredits Used For Primary Treatment/Processing Of Minerals": {
    SCAT: {code: "127", description: "Heredits Used For Primary Treatment/Processing Of Minerals"},
    CPA: {code: "08.99", description: "Other mining and quarrying products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "08.99", description: "Other mining and quarrying not elsewhere classified"},
    UK_SIC: {code: "08.99", description: "Other mining and quarrying n.e.c."},
},
"Heritage Railways": {
    SCAT: {code: "128", description: "Heritage Railways"},
    CPA: {code: "49.12", description: "Other passenger rail transport services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "49.12", description: "Other passenger rail transport"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"High Tech Warehouses": {
    SCAT: {code: "129", description: "High Tech Warehouses"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Holiday Centres": {
    SCAT: {code: "130", description: "Holiday Centres"},
    CPA: {code: "55.10", description: "Hotel and similar accommodation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "55.10", description: "Hotels and similar accommodation"},
    UK_SIC: {code: "55.10", description: "Hotels and similar accommodation"},
},
"Holiday Homes (Self Catering)": {
    SCAT: {code: "131", description: "Holiday Homes (Self Catering)"},
    CPA: {code: "55.10", description: "Hotel and similar accommodation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "55.10", description: "Hotels and similar accommodation"},
    UK_SIC: {code: "55.10", description: "Hotels and similar accommodation"},
},
"Horse Racecourses": {
    SCAT: {code: "132", description: "Horse Racecourses"},
    CPA: {code: "55.10", description: "Hotel and similar accommodation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "55.10", description: "Hotels and similar accommodation"},
    UK_SIC: {code: "55.10", description: "Hotels and similar accommodation"},
},
"Hospital Let Outs": {
    SCAT: {code: "133", description: "Hospital Let Outs"},
    CPA: {code: "68.20", description: "Rental and operating services of own or leased real estate"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "68.20", description: "Rental and operating of own or leased real estate"},
    UK_SIC: {code: "68.20", description: "Renting and operating of own or leased real estate"},
},
"Hospitals & Clinics NHS (National Scheme)": {
    SCAT: {code: "134", description: "Hospitals & Clinics NHS (National Scheme)"},
    CPA: {code: "86.21", description: "General medical practice services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "86.21", description: "General medical practice activities"},
    UK_SIC: {code: "86.21", description: "General medical practice activities"},
},
"Hospitals & Clinics (Private) (National Scheme)": {
    SCAT: {code: "135", description: "Hospitals & Clinics (Private) (National Scheme)"},
    CPA: {code: "86.10", description: "Hospital services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "86.10", description: "Hospital activities"},
    UK_SIC: {code: "86.10", description: "Hospital activities"},
},
"Hostels": {
    SCAT: {code: "136", description: "Hostels"},
    CPA: {code: "55.10", description: "Hotel and similar accommodation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "55.10", description: "Hotels and similar accommodation"},
    UK_SIC: {code: "55.10", description: "Hotels and similar accommodation"},
},
"Hotels (3 Star And Under)": {
    SCAT: {code: "137", description: "Hotels (3 Star And Under)"},
    CPA: {code: "55.10", description: "Hotel and similar accommodation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "55.10", description: "Hotels and similar accommodation"},
    UK_SIC: {code: "55.10", description: "Hotels and similar accommodation"},
},
"Hotels (4 Star & Above) & Major Chain Operated ( includes 3* & above consortium hotels)": {
    SCAT: {code: "138", description: "Hotels (4 Star & Above) & Major Chain Operated ( includes 3* & above consortium hotels)"},
    CPA: {code: "55.10", description: "Hotel and similar accommodation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "55.10", description: "Hotels and similar accommodation"},
    UK_SIC: {code: "55.10", description: "Hotels and similar accommodation"},
},
"Hypermarkets/Superstores (over 2500m²)": {
    SCAT: {code: "139", description: "Hypermarkets/Superstores (over 2500m²)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.11", description: "Non-specialised retail sale of predominately food, beverages or tobacco"},
    UK_SIC: {code: "47.11", description: "Retail sale in non-specialised stores with food, beverages or tobacco predominating"},
},
"Ice Rinks": {
    SCAT: {code: "140", description: "Ice Rinks"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Interactive Telephone Kiosks": {
    SCAT: {code: "141", description: "Interactive Telephone Kiosks"},
    CPA: {code: "61.90", description: "Other telecommunication services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "61.90", description: "Other telecommunication activities"},
    UK_SIC: {code: "61.90", description: "Other telecommunications activities"},
},
"Iron and/or Steel Works": {
    SCAT: {code: "142", description: "Iron and/or Steel Works"},
    CPA: {code: "25.53", description: "Machining services of metals"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "25.53", description: "Machining of metals"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Kennels and Catteries": {
    SCAT: {code: "143", description: "Kennels and Catteries"},
    CPA: {code: "96.40", description: "Intermediation services of personal services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "96.40", description: "Intermediation service activities for personal services"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Laboratories": {
    SCAT: {code: "144", description: "Laboratories"},
    CPA: {code: "71.20", description: "Technical testing and analysis services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "71.20", description: "Technical testing and analysis"},
    UK_SIC: {code: "71.20", description: "Technical testing and analysis"},
},
"Lakes With Water Sport Facilities": {
    SCAT: {code: "145", description: "Lakes With Water Sport Facilities"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Land Used For Advertising": {
    SCAT: {code: "146", description: "Land Used For Advertising"},
    CPA: {code: "73.20", description: "Market research and public opinion polling services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "73.20", description: "Market research and public opinion polling"},
    UK_SIC: {code: "73.20", description: "Market research and public opinion polling"},
},
"Land Used For Car Boot Sales": {
    SCAT: {code: "147", description: "Land Used For Car Boot Sales"},
    CPA: {code: "47.92", description: "Intermediation services of retail sale services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.92", description: "Intermediation service activities for specialised retail sale"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Land Used For Storage": {
    SCAT: {code: "148", description: "Land Used For Storage"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Landfill Gas Generator Sites": {
    SCAT: {code: "149", description: "Landfill Gas Generator Sites"},
    CPA: {code: "35.11", description: "Electricity from non-renewable sources"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "35.11", description: "Production of electricity from non-renewable sources"},
    UK_SIC: {code: "35.11", description: "Production of electricity"},
},
"Land used for Waste Composting": {
    SCAT: {code: "150", description: "Land used for Waste Composting"},
    CPA: {code: "38.21", description: "Materials recovery services and secondary raw materials"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "38.21", description: "Materials recovery"},
    UK_SIC: {code: "38.21", description: "Treatment and disposal of non-hazardous waste"},
},
"Large Distribution Warehouses": {
    SCAT: {code: "151", description: "Large Distribution Warehouses"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Large Food Stores (750 - 2500m²)": {
    SCAT: {code: "152", description: "Large Food Stores (750 - 2500m²)"},
    CPA: {code: "47.27", description: "Retail sale services of other food"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.27", description: "Retail sale of other food"},
    UK_SIC: {code: "47.11", description: "Retail sale in non-specialised stores with food, beverages or tobacco predominating"},
},
"Large Industrials (Over 20,000m²)": {
    SCAT: {code: "153", description: "Large Industrials (Over 20,000m²)"},
    CPA: {code: "46.90", description: "Non-specialised wholesale trade services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "46.90", description: "Non-specialised wholesale trade"},
    UK_SIC: {code: "46.90", description: "Non-specialised wholesale trade"},
},
"Large Shops (750 - 1850m²)": {
    SCAT: {code: "154", description: "Large Shops (750 - 1850m²)"},
    CPA: {code: "47.78", description: "Retail sale services of other new goods"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.78", description: "Retail sale of other new goods"},
    UK_SIC: {code: "47.78", description: "Other retail sale of new goods in specialised stores"},
},
"Large Shops (Over 1850m²)": {
    SCAT: {code: "155", description: "Large Shops (Over 1850m²)"},
    CPA: {code: "47.78", description: "Retail sale services of other new goods"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.78", description: "Retail sale of other new goods"},
    UK_SIC: {code: "47.78", description: "Other retail sale of new goods in specialised stores"},
},
"Libraries": {
    SCAT: {code: "156", description: "Libraries"},
    CPA: {code: "91.11", description: "Library services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "91.11", description: "Library activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Liquid Bulk Storage (Incl Petrol & Oil) (National Scheme)": {
    SCAT: {code: "157", description: "Liquid Bulk Storage (Incl Petrol & Oil) (National Scheme)"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Livestock Markets (National Scheme)": {
    SCAT: {code: "158", description: "Livestock Markets (National Scheme)"},
    CPA: {code: "47.22", description: "Retail sale services of meat and meat products"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.22", description: "Retail sale of meat and meat products"},
    UK_SIC: {code: "47.22", description: "Retail sale of meat and meat products in specialised stores"},
},
"Local Authority Schools (National Scheme)": {
    SCAT: {code: "159", description: "Local Authority Schools (National Scheme)"},
    CPA: {code: "85.20", description: "Primary education services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "85.20", description: "Primary education"},
    UK_SIC: {code: "85.20", description: "Primary education"},
},
"Lodges (National Scheme)": {
    SCAT: {code: "160", description: "Lodges (National Scheme)"},
    CPA: {code: "55.20", description: "Holiday and other short-stay accommodation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "55.20", description: "Holiday and other short-stay accommodation"},
    UK_SIC: {code: "55.20", description: "Holiday and other short-stay accommodation"},
},
"Lorry Parks": {
    SCAT: {code: "161", description: "Lorry Parks"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Maltings - Non Trad": {
    SCAT: {code: "162", description: "Maltings - Non Trad"},
    CPA: {code: "11.06", description: "Malt"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "11.06", description: "Manufacture of malt"},
    UK_SIC: {code: "11.06", description: "Manufacture of malt"},
},
"Maltings - Trad": {
    SCAT: {code: "163", description: "Maltings - Trad"},
    CPA: {code: "11.06", description: "Malt"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "11.06", description: "Manufacture of malt"},
    UK_SIC: {code: "11.06", description: "Manufacture of malt"},
},
"Marinas (National Scheme)": {
    SCAT: {code: "164", description: "Marinas (National Scheme)"},
    CPA: {code: "93.29", description: "Other amusement and recreation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.29", description: "Amusement and recreation activities not elsewhere classified"},
    UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
},
"Markets (Other Than Livestock)": {
    SCAT: {code: "165", description: "Markets (Other Than Livestock)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.91", description: "Intermediation service activities for non-specialised retail sale"},
    UK_SIC: {code: "47.91", description: "Retail sale via mail order houses or via Internet"},
},
"Mineral Depot and Premises": {
    SCAT: {code: "166", description: "Mineral Depot and Premises"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament - Blockstone": {
    SCAT: {code: "167", description: "Mineral Producing Hereditament - Blockstone"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament - Brine": {
    SCAT: {code: "168", description: "Mineral Producing Hereditament - Brine"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament - Chalk": {
    SCAT: {code: "169", description: "Mineral Producing Hereditament - Chalk"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament - China Clay": {
    SCAT: {code: "170", description: "Mineral Producing Hereditament - China Clay"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament - Clay": {
    SCAT: {code: "171", description: "Mineral Producing Hereditament - Clay"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament - Coal": {
    SCAT: {code: "172", description: "Mineral Producing Hereditament - Coal"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament - Fluorspar": {
    SCAT: {code: "173", description: "Mineral Producing Hereditament - Fluorspar"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament - Gas": {
    SCAT: {code: "174", description: "Mineral Producing Hereditament - Gas"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament - Hardrock": {
    SCAT: {code: "175", description: "Mineral Producing Hereditament - Hardrock"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament - Inert": {
    SCAT: {code: "176", description: "Mineral Producing Hereditament - Inert"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament - Oil": {
    SCAT: {code: "177", description: "Mineral Producing Hereditament - Oil"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament - Other Mineral Category": {
    SCAT: {code: "178", description: "Mineral Producing Hereditament - Other Mineral Category"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament - Putrescible": {
    SCAT: {code: "179", description: "Mineral Producing Hereditament - Putrescible"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral  Producing  Hereditament  - Sand and Gravel": {
    SCAT: {code: "180", description: "Mineral  Producing  Hereditament  - Sand and Gravel"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament - Sand": {
    SCAT: {code: "181", description: "Mineral Producing Hereditament - Sand"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament - Shale Unburnt": {
    SCAT: {code: "182", description: "Mineral Producing Hereditament - Shale Unburnt"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament - Slate": {
    SCAT: {code: "183", description: "Mineral Producing Hereditament - Slate"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament With Batching Plant": {
    SCAT: {code: "184", description: "Mineral Producing Hereditament With Batching Plant"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Hereditament With Coating Plant": {
    SCAT: {code: "185", description: "Mineral Producing Hereditament With Coating Plant"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"Mineral Producing Heredtament With Tunnel Kiln": {
    SCAT: {code: "186", description: "Mineral Producing Heredtament With Tunnel Kiln"},
    CPA: {code: "23.99", description: "Other non-metallic mineral products n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.99", description: "Manufacture of other non-metallic mineral products not elsewhere classified"},
    UK_SIC: {code: "23.99", description: "Manufacture of other non-metallic mineral products n.e.c."},
},
"MOD Hereditaments": {
    SCAT: {code: "187", description: "MOD Hereditaments"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Model Villages": {
    SCAT: {code: "188", description: "Model Villages"},
    CPA: {code: "73.11", description: "Services provided by advertising agencies"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "73.11", description: "Activities of advertising agencies"},
    UK_SIC: {code: "73.11", description: "Advertising agencies"},
},
"Moorings (Floating Hereditaments)": {
    SCAT: {code: "189", description: "Moorings (Floating Hereditaments)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Mortuaries": {
    SCAT: {code: "190", description: "Mortuaries"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Motor Racetracks": {
    SCAT: {code: "191", description: "Motor Racetracks"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Motor Vehicle Works": {
    SCAT: {code: "192", description: "Motor Vehicle Works"},
    CPA: {code: "95.31", description: "Repair and maintenance services of motor vehicles"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "95.31", description: "Repair and maintenance of motor vehicles"},
    UK_SIC: {code: "29.10", description: "Manufacture of motor vehicles"},
},
"Motorway Service Area Let Outs": {
    SCAT: {code: "193", description: "Motorway Service Area Let Outs"},
    CPA: {code: "68.20", description: "Rental and operating services of own or leased real estate"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "68.20", description: "Rental and operating of own or leased real estate"},
    UK_SIC: {code: "68.20", description: "Renting and operating of own or leased real estate"},
},
"Motorway and Major Road Service Areas": {
    SCAT: {code: "194", description: "Motorway and Major Road Service Areas"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Museums and Art Galleries (Contractors)": {
    SCAT: {code: "195", description: "Museums and Art Galleries (Contractors)"},
    CPA: {code: "91.21", description: "Museum and collection services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "91.21", description: "Museum and collection activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Museums and Art Galleries (NonContractors)": {
    SCAT: {code: "196", description: "Museums and Art Galleries (NonContractors)"},
    CPA: {code: "91.21", description: "Museum and collection services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "91.21", description: "Museum and collection activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Navy Hereditaments": {
    SCAT: {code: "197", description: "Navy Hereditaments"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Newspaper Printing Works (National Scheme)": {
    SCAT: {code: "198", description: "Newspaper Printing Works (National Scheme)"},
    CPA: {code: "18.11", description: "Newspaper printing services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "18.11", description: "Printing of newspapers"},
    UK_SIC: {code: "18.11", description: "Printing of newspapers"},
},
"Night Clubs & Discotheques": {
    SCAT: {code: "199", description: "Night Clubs & Discotheques"},
    CPA: {code: "93.29", description: "Other amusement and recreation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.29", description: "Amusement and recreation activities not elsewhere classified"},
    UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
},
"Nuclear Establishments": {
    SCAT: {code: "200", description: "Nuclear Establishments"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Nursing Homes (Inc. Old Peoples Homes)": {
    SCAT: {code: "201", description: "Nursing Homes (Inc. Old Peoples Homes)"},
    CPA: {code: "87.10", description: "Residential nursing care services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "87.10", description: "Residential nursing care activities"},
    UK_SIC: {code: "87.10", description: "Residential nursing care activities"},
},
"Observatories": {
    SCAT: {code: "202", description: "Observatories"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Offices (Inc Computer Centres)": {
    SCAT: {code: "203", description: "Offices (Inc Computer Centres)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Offices (Headquarters/Institutional)": {
    SCAT: {code: "204", description: "Offices (Headquarters/Institutional)"},
    CPA: {code: "70.10", description: "Services of head offices"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "70.10", description: "Activities of head offices"},
    UK_SIC: {code: "70.10", description: "Activities of head offices"},
},
"Oil Refineries": {
    SCAT: {code: "205", description: "Oil Refineries"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Oxbridge Colleges": {
    SCAT: {code: "206", description: "Oxbridge Colleges"},
    CPA: {code: "85.33", description: "Post-secondary non-tertiary education services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "85.33", description: "Post-secondary non-tertiary education"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Paper Mills": {
    SCAT: {code: "207", description: "Paper Mills"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Pavilions": {
    SCAT: {code: "208", description: "Pavilions"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Petrol Filling Stations (National Scheme)": {
    SCAT: {code: "209", description: "Petrol Filling Stations (National Scheme)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Pharmacies": {
    SCAT: {code: "210", description: "Pharmacies"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Photographic Booths": {
    SCAT: {code: "211", description: "Photographic Booths"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Pipelines": {
    SCAT: {code: "212", description: "Pipelines"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Pleasure Piers": {
    SCAT: {code: "213", description: "Pleasure Piers"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Point to Point and Eventing Courses": {
    SCAT: {code: "214", description: "Point to Point and Eventing Courses"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Police Stations": {
    SCAT: {code: "215", description: "Police Stations"},
    CPA: {code: "84.24", description: "Public order and safety services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "84.24", description: "Public order and safety activities"},
    UK_SIC: {code: "84.24", description: "Public order and safety activities"},
},
"Polo Grounds": {
    SCAT: {code: "216", description: "Polo Grounds"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Post Office Sorting Centres": {
    SCAT: {code: "217", description: "Post Office Sorting Centres"},
    CPA: {code: "53.10", description: "Postal services under universal service obligation"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "53.10", description: "Postal activities under universal service obligation"},
    UK_SIC: {code: "53.10", description: "Postal activities under universal service obligation"},
},
"Potteries": {
    SCAT: {code: "218", description: "Potteries"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Power Generators": {
    SCAT: {code: "219", description: "Power Generators"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Prison Service Hereditaments": {
    SCAT: {code: "220", description: "Prison Service Hereditaments"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Property used for Secondary Aggregate Processing": {
    SCAT: {code: "221", description: "Property used for Secondary Aggregate Processing"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Provender Mills (National Scheme)": {
    SCAT: {code: "222", description: "Provender Mills (National Scheme)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Public and Independent Schools (National Scheme)": {
    SCAT: {code: "223", description: "Public and Independent Schools (National Scheme)"},
    CPA: {code: "85.59", description: "Other education services n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "85.59", description: "Other education not elsewhere classified"},
    UK_SIC: {code: "85.59", description: "Other education n.e.c."},
},
"Public Conveniences (National Scheme)": {
    SCAT: {code: "224", description: "Public Conveniences (National Scheme)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Public Halls": {
    SCAT: {code: "225", description: "Public Halls"},
    CPA: {code: "56.30", description: "Beverage serving services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "56.30", description: "Beverage serving activities"},
    UK_SIC: {code: "56.30", description: "Beverage serving activities"},
},
"Public    Houses/Pub    Restaurants (National Scheme)": {
    SCAT: {code: "226", description: "Public    Houses/Pub    Restaurants (National Scheme)"},
    CPA: {code: "56.30", description: "Beverage serving services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "56.30", description: "Beverage serving activities"},
    UK_SIC: {code: "56.30", description: "Beverage serving activities"},
},
"Public Houses/Pub Restaurants (Inc. Lodge) (National Scheme)": {
    SCAT: {code: "227", description: "Public Houses/Pub Restaurants (Inc. Lodge) (National Scheme)"},
    CPA: {code: "56.30", description: "Beverage serving services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "56.30", description: "Beverage serving activities"},
    UK_SIC: {code: "56.30", description: "Beverage serving activities"},
},
"Public Telephone Kiosks (National Scheme)": {
    SCAT: {code: "228", description: "Public Telephone Kiosks (National Scheme)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Racing Stables (National Scheme)": {
    SCAT: {code: "229", description: "Racing Stables (National Scheme)"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"RAF Hereditaments": {
    SCAT: {code: "230", description: "RAF Hereditaments"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Railways & Tramways (Non Leisure)": {
    SCAT: {code: "231", description: "Railways & Tramways (Non Leisure)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Recording Studios": {
    SCAT: {code: "232", description: "Recording Studios"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Refuse Destructor Plants/Disposal Sites": {
    SCAT: {code: "233", description: "Refuse Destructor Plants/Disposal Sites"},
    CPA: {code: "38.33", description: "Other waste disposal services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "38.33", description: "Other waste disposal"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Restaurants": {
    SCAT: {code: "234", description: "Restaurants"},
    CPA: {code: "56.11", description: "Restaurant serving services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "56.11", description: "Restaurant activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Retail Warehouses and Foodstores": {
    SCAT: {code: "235", description: "Retail Warehouses and Foodstores"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Riding Schools & Livery Stables (National Scheme)": {
    SCAT: {code: "236", description: "Riding Schools & Livery Stables (National Scheme)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Rifle and Weapons Ranges": {
    SCAT: {code: "237", description: "Rifle and Weapons Ranges"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Roadside Restaurants (National Scheme)": {
    SCAT: {code: "238", description: "Roadside Restaurants (National Scheme)"},
    CPA: {code: "56.11", description: "Restaurant serving services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "56.11", description: "Restaurant activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Roller Skating Rinks": {
    SCAT: {code: "239", description: "Roller Skating Rinks"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Royal Palaces": {
    SCAT: {code: "240", description: "Royal Palaces"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Rugby League Grounds": {
    SCAT: {code: "241", description: "Rugby League Grounds"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Rugby Union Grounds": {
    SCAT: {code: "242", description: "Rugby Union Grounds"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Sales Kiosks": {
    SCAT: {code: "243", description: "Sales Kiosks"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Scrap Metal/Breakers Yard": {
    SCAT: {code: "244", description: "Scrap Metal/Breakers Yard"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Sea Dredged Aggregate Processing Plants & Depots": {
    SCAT: {code: "245", description: "Sea Dredged Aggregate Processing Plants & Depots"},
    CPA: {code: "25.11", description: "Metal structures and parts of structures"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "25.11", description: "Manufacture of metal structures and parts of structures"},
    UK_SIC: {code: "25.11", description: "Manufacture of metal structures and parts of structures"},
},
"Sewage Works (National Scheme)": {
    SCAT: {code: "246", description: "Sewage Works (National Scheme)"},
    CPA: {code: "37.00", description: "Sewerage services; sewage sludge"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "37.00", description: "Sewerage"},
    UK_SIC: {code: "37.00", description: "Sewerage"},
},
"Ship Building Yards": {
    SCAT: {code: "247", description: "Ship Building Yards"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Ship Repair Yards": {
    SCAT: {code: "248", description: "Ship Repair Yards"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Shops": {
    SCAT: {code: "249", description: "Shops"},
    CPA: {code: "47.78", description: "Retail sale services of other new goods"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.78", description: "Retail sale of other new goods"},
    UK_SIC: {code: "47.78", description: "Other retail sale of new goods in specialised stores"},
},
"Showhouses (National Scheme)": {
    SCAT: {code: "250", description: "Showhouses (National Scheme)"},
    CPA: {code: "93.29", description: "Other amusement and recreation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.29", description: "Amusement and recreation activities not elsewhere classified"},
    UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
},
"Showrooms": {
    SCAT: {code: "251", description: "Showrooms"},
    CPA: {code: "47.78", description: "Retail sale services of other new goods"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.78", description: "Retail sale of other new goods"},
    UK_SIC: {code: "47.78", description: "Other retail sale of new goods in specialised stores"},
},
"Ski Centres": {
    SCAT: {code: "252", description: "Ski Centres"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Snooker Halls/Clubs": {
    SCAT: {code: "253", description: "Snooker Halls/Clubs"},
    CPA: {code: "93.12", description: "Services of sports clubs"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.12", description: "Activities of sports clubs"},
    UK_SIC: {code: "93.12", description: "Activities of sport clubs"},
},
"Speedway Racetracks": {
    SCAT: {code: "254", description: "Speedway Racetracks"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Spoil Heap Workings": {
    SCAT: {code: "255", description: "Spoil Heap Workings"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Sporting Rights": {
    SCAT: {code: "256", description: "Sporting Rights"},
    CPA: {code: "93.19", description: "Other sports services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.19", description: "Sports activities not elsewhere classified"},
    UK_SIC: {code: "93.19", description: "Other sports activities"},
},
"Sports & Leisure Centres (LA) (Dry Only) (National Scheme)": {
    SCAT: {code: "257", description: "Sports & Leisure Centres (LA) (Dry Only) (National Scheme)"},
    CPA: {code: "93.21", description: "Amusement park and theme park services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.21", description: "Activities of amusement parks and theme parks"},
    UK_SIC: {code: "93.21", description: "Activities of amusement parks and theme parks"},
},
"Sports & Leisure Centres (LA) (Wet & Dry) (National Scheme)": {
    SCAT: {code: "258", description: "Sports & Leisure Centres (LA) (Wet & Dry) (National Scheme)"},
    CPA: {code: "93.21", description: "Amusement park and theme park services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.21", description: "Activities of amusement parks and theme parks"},
    UK_SIC: {code: "93.21", description: "Activities of amusement parks and theme parks"},
},
"Sports & Leisure Centres (Private)(Dry Only)": {
    SCAT: {code: "259", description: "Sports & Leisure Centres (Private)(Dry Only)"},
    CPA: {code: "93.21", description: "Amusement park and theme park services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.21", description: "Activities of amusement parks and theme parks"},
    UK_SIC: {code: "93.21", description: "Activities of amusement parks and theme parks"},
},
"Sports & Leisure Centres (Private)(Wet & Dry)": {
    SCAT: {code: "260", description: "Sports & Leisure Centres (Private)(Wet & Dry)"},
    CPA: {code: "93.21", description: "Amusement park and theme park services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.21", description: "Activities of amusement parks and theme parks"},
    UK_SIC: {code: "93.21", description: "Activities of amusement parks and theme parks"},
},
"Sports Grounds": {
    SCAT: {code: "261", description: "Sports Grounds"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Sports Stadia": {
    SCAT: {code: "262", description: "Sports Stadia"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Squash Courts": {
    SCAT: {code: "263", description: "Squash Courts"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Stables and Loose Boxes": {
    SCAT: {code: "264", description: "Stables and Loose Boxes"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Stately  Homes  &  Historic  Houses (National Scheme)": {
    SCAT: {code: "265", description: "Stately  Homes  &  Historic  Houses (National Scheme)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Station Let Outs": {
    SCAT: {code: "266", description: "Station Let Outs"},
    CPA: {code: "68.20", description: "Rental and operating services of own or leased real estate"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "68.20", description: "Rental and operating of own or leased real estate"},
    UK_SIC: {code: "68.20", description: "Renting and operating of own or leased real estate"},
},
"Storage Depots": {
    SCAT: {code: "267", description: "Storage Depots"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Stores": {
    SCAT: {code: "268", description: "Stores"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Stud Farms": {
    SCAT: {code: "269", description: "Stud Farms"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Studios": {
    SCAT: {code: "270", description: "Studios"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Surgeries, Clinics, Health Centre (incl Dentists etc)": {
    SCAT: {code: "271", description: "Surgeries, Clinics, Health Centre (incl Dentists etc)"},
    CPA: {code: "86.23", description: "Dental practice care services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "86.23", description: "Dental practice care activities"},
    UK_SIC: {code: "86.23", description: "Dental practice activities"},
},
"Swimming Pools (Local Authority)": {
    SCAT: {code: "272", description: "Swimming Pools (Local Authority)"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Swimming Pools (Private)": {
    SCAT: {code: "273", description: "Swimming Pools (Private)"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Tanneries": {
    SCAT: {code: "274", description: "Tanneries"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Telecommunications Cable Networks (National Scheme)": {
    SCAT: {code: "275", description: "Telecommunications Cable Networks (National Scheme)"},
    CPA: {code: "42.22", description: "Constructions and construction works for utility projects for electricity and telecommunications"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "42.22", description: "Construction of utility projects for electricity and telecommunications"},
    UK_SIC: {code: "42.22", description: "Construction of utility projects for electricity and telecommunications"},
},
"Telecommunications Switching Centres": {
    SCAT: {code: "276", description: "Telecommunications Switching Centres"},
    CPA: {code: "61.90", description: "Other telecommunication services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "61.90", description: "Other telecommunication activities"},
    UK_SIC: {code: "61.90", description: "Other telecommunications activities"},
},
"Tennis Centres": {
    SCAT: {code: "277", description: "Tennis Centres"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Tennis Courts/Clubs": {
    SCAT: {code: "278", description: "Tennis Courts/Clubs"},
    CPA: {code: "93.12", description: "Services of sports clubs"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.12", description: "Activities of sports clubs"},
    UK_SIC: {code: "93.12", description: "Activities of sport clubs"},
},
"Theatres (National Scheme)": {
    SCAT: {code: "279", description: "Theatres (National Scheme)"},
    CPA: {code: "93.29", description: "Other amusement and recreation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.29", description: "Amusement and recreation activities not elsewhere classified"},
    UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
},
"Theme Parks": {
    SCAT: {code: "280", description: "Theme Parks"},
    CPA: {code: "93.21", description: "Amusement park and theme park services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.21", description: "Activities of amusement parks and theme parks"},
    UK_SIC: {code: "93.21", description: "Activities of amusement parks and theme parks"},
},
"Timeshare Complexes (National Scheme)": {
    SCAT: {code: "281", description: "Timeshare Complexes (National Scheme)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Tolls (Ferries, Roads And Bridges)": {
    SCAT: {code: "282", description: "Tolls (Ferries, Roads And Bridges)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Totalisators On Horse Racecourses": {
    SCAT: {code: "283", description: "Totalisators On Horse Racecourses"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Tourist Attractions/Dark Rides": {
    SCAT: {code: "284", description: "Tourist Attractions/Dark Rides"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Training Centre (Non Residential)": {
    SCAT: {code: "285", description: "Training Centre (Non Residential)"},
    CPA: {code: "85.59", description: "Other education services n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "85.59", description: "Other education not elsewhere classified"},
    UK_SIC: {code: "85.59", description: "Other education n.e.c."},
},
"Training Centre (Residential)": {
    SCAT: {code: "286", description: "Training Centre (Residential)"},
    CPA: {code: "85.59", description: "Other education services n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "85.59", description: "Other education not elsewhere classified"},
    UK_SIC: {code: "85.59", description: "Other education n.e.c."},
},
"Truck Stops": {
    SCAT: {code: "287", description: "Truck Stops"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Universities   (Excluding   Oxbridge) (National Scheme)": {
    SCAT: {code: "288", description: "Universities   (Excluding   Oxbridge) (National Scheme)"},
    CPA: {code: "85.59", description: "Other education services n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "85.59", description: "Other education not elsewhere classified"},
    UK_SIC: {code: "85.59", description: "Other education n.e.c."},
},
"Vehicle Repair Workshops & Garages": {
    SCAT: {code: "289", description: "Vehicle Repair Workshops & Garages"},
    CPA: {code: "95.31", description: "Repair and maintenance services of motor vehicles"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "95.31", description: "Repair and maintenance of motor vehicles"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Vehicle Testing Centres (With Test Tracks)": {
    SCAT: {code: "290", description: "Vehicle Testing Centres (With Test Tracks)"},
    CPA: {code: "95.40", description: "Intermediation services of repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "95.40", description: "Intermediation service activities for repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Vehicle Testing Centres (Without Test Tracks)": {
    SCAT: {code: "291", description: "Vehicle Testing Centres (Without Test Tracks)"},
    CPA: {code: "95.40", description: "Intermediation services of repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "95.40", description: "Intermediation service activities for repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Veterinary Clinics / Animal Clinics": {
    SCAT: {code: "292", description: "Veterinary Clinics / Animal Clinics"},
    CPA: {code: "75.00", description: "Veterinary services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "75.00", description: "Veterinary activities"},
    UK_SIC: {code: "75.00", description: "Veterinary activities"},
},
"Village Halls, Scout Huts, Cadet Huts Etc": {
    SCAT: {code: "293", description: "Village Halls, Scout Huts, Cadet Huts Etc"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Vineyards/Wineries": {
    SCAT: {code: "294", description: "Vineyards/Wineries"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Wafer Fabrications (National Scheme)": {
    SCAT: {code: "295", description: "Wafer Fabrications (National Scheme)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"War Games Courses/Misc Ag. Use": {
    SCAT: {code: "296", description: "War Games Courses/Misc Ag. Use"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Waste Incinerator Plants": {
    SCAT: {code: "297", description: "Waste Incinerator Plants"},
    CPA: {code: "38.23", description: "Other waste recovery services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "38.23", description: "Other waste recovery"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Waste Recycling Plants": {
    SCAT: {code: "298", description: "Waste Recycling Plants"},
    CPA: {code: "38.23", description: "Other waste recovery services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "38.23", description: "Other waste recovery"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Waste Transfer Stations": {
    SCAT: {code: "299", description: "Waste Transfer Stations"},
    CPA: {code: "38.23", description: "Other waste recovery services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "38.23", description: "Other waste recovery"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Water Undertakings (Non-Statutory)": {
    SCAT: {code: "300", description: "Water Undertakings (Non-Statutory)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Wholesale Warehouses": {
    SCAT: {code: "301", description: "Wholesale Warehouses"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Windmills": {
    SCAT: {code: "302", description: "Windmills"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Wine Bars": {
    SCAT: {code: "303", description: "Wine Bars"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Zoos & Safari Parks": {
    SCAT: {code: "304", description: "Zoos & Safari Parks"},
    CPA: {code: "93.21", description: "Amusement park and theme park services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.21", description: "Activities of amusement parks and theme parks"},
    UK_SIC: {code: "93.21", description: "Activities of amusement parks and theme parks"},
},
"Abattoirs   &   Slaughter   Houses (Contractors Valuation)": {
    SCAT: {code: "400", description: "Abattoirs   &   Slaughter   Houses (Contractors Valuation)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Abattoirs & Slaughter Houses (Rental Valuation)": {
    SCAT: {code: "401", description: "Abattoirs & Slaughter Houses (Rental Valuation)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Agricultural Research Centres": {
    SCAT: {code: "402", description: "Agricultural Research Centres"},
    CPA: {code: "72.10", description: "Research and development services on natural sciences, engineering and technology"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "72.10", description: "Research and experimental development on natural sciences and engineering"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Aquaria": {
    SCAT: {code: "403", description: "Aquaria"},
    CPA: {code: "93.29", description: "Other amusement and recreation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.29", description: "Amusement and recreation activities not elsewhere classified"},
    UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
},
"Archives": {
    SCAT: {code: "404", description: "Archives"},
    CPA: {code: "91.12", description: "Archive services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "91.12", description: "Archive activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Boathouses": {
    SCAT: {code: "405", description: "Boathouses"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Bus Garages (Contractors Valuation)": {
    SCAT: {code: "406", description: "Bus Garages (Contractors Valuation)"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Bus Garages (Rental Valuation)": {
    SCAT: {code: "407", description: "Bus Garages (Rental Valuation)"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Business Units": {
    SCAT: {code: "408", description: "Business Units"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Cafes": {
    SCAT: {code: "409", description: "Cafes"},
    CPA: {code: "56.30", description: "Beverage serving services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "56.30", description: "Beverage serving activities"},
    UK_SIC: {code: "56.30", description: "Beverage serving activities"},
},
"Changing Rooms": {
    SCAT: {code: "410", description: "Changing Rooms"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Coastguard Stations": {
    SCAT: {code: "411", description: "Coastguard Stations"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Cold Stores (Contractors Valuation)": {
    SCAT: {code: "412", description: "Cold Stores (Contractors Valuation)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Cold Stores (Rental Valuation)": {
    SCAT: {code: "413", description: "Cold Stores (Rental Valuation)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Courts (Contractors Valuation)": {
    SCAT: {code: "414", description: "Courts (Contractors Valuation)"},
    CPA: {code: "84.23", description: "Justice and judicial services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "84.23", description: "Justice and judicial activities"},
    UK_SIC: {code: "84.23", description: "Justice and judicial activities"},
},
"Courts (Rental Valuation)": {
    SCAT: {code: "415", description: "Courts (Rental Valuation)"},
    CPA: {code: "84.23", description: "Justice and judicial services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "84.23", description: "Justice and judicial activities"},
    UK_SIC: {code: "84.23", description: "Justice and judicial activities"},
},
"Gymnasia/Fitness Suites": {
    SCAT: {code: "416", description: "Gymnasia/Fitness Suites"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Hairdressing/Beauty Salons": {
    SCAT: {code: "417", description: "Hairdressing/Beauty Salons"},
    CPA: {code: "96.22", description: "Beauty care and other beauty treatment services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "96.22", description: "Beauty care and other beauty treatment activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Information/Visitor Centres": {
    SCAT: {code: "418", description: "Information/Visitor Centres"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Land Used for Display": {
    SCAT: {code: "419", description: "Land Used for Display"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Lifeboat Stations": {
    SCAT: {code: "420", description: "Lifeboat Stations"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Miniature Railways": {
    SCAT: {code: "421", description: "Miniature Railways"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Pack Houses": {
    SCAT: {code: "422", description: "Pack Houses"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Peat Fields": {
    SCAT: {code: "423", description: "Peat Fields"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Pet Grooming Parlours": {
    SCAT: {code: "424", description: "Pet Grooming Parlours"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Pharmacies    Within/Adjacent    to Surgery/Health Centre": {
    SCAT: {code: "425", description: "Pharmacies    Within/Adjacent    to Surgery/Health Centre"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Pitch and Putt/Putting Greens": {
    SCAT: {code: "426", description: "Pitch and Putt/Putting Greens"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Pitches for Stalls, Sales or Promotions": {
    SCAT: {code: "427", description: "Pitches for Stalls, Sales or Promotions"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Police Training Colleges": {
    SCAT: {code: "428", description: "Police Training Colleges"},
    CPA: {code: "85.59", description: "Other education services n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "85.59", description: "Other education not elsewhere classified"},
    UK_SIC: {code: "85.59", description: "Other education n.e.c."},
},
"Post Offices": {
    SCAT: {code: "429", description: "Post Offices"},
    CPA: {code: "53.10", description: "Postal services under universal service obligation"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "53.10", description: "Postal activities under universal service obligation"},
    UK_SIC: {code: "53.10", description: "Postal activities under universal service obligation"},
},
"Pumping Mines": {
    SCAT: {code: "430", description: "Pumping Mines"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Religious Retreats/Study Centres (Residential)": {
    SCAT: {code: "431", description: "Religious Retreats/Study Centres (Residential)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Sales Offices": {
    SCAT: {code: "432", description: "Sales Offices"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Statutory Docks and Harbours (Formula)": {
    SCAT: {code: "433", description: "Statutory Docks and Harbours (Formula)"},
    CPA: {code: "50.10", description: "Sea and coastal passenger water transport services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "50.10", description: "Sea and coastal passenger water transport"},
    UK_SIC: {code: "50.10", description: "Sea and coastal passenger water transport"},
},
"Statutory Docks and Harbours (Non- Formula, Prescribed)": {
    SCAT: {code: "434", description: "Statutory Docks and Harbours (Non- Formula, Prescribed)"},
    CPA: {code: "50.10", description: "Sea and coastal passenger water transport services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "50.10", description: "Sea and coastal passenger water transport"},
    UK_SIC: {code: "50.10", description: "Sea and coastal passenger water transport"},
},
"Statutory Docks and Harbours (Other)": {
    SCAT: {code: "435", description: "Statutory Docks and Harbours (Other)"},
    CPA: {code: "50.10", description: "Sea and coastal passenger water transport services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "50.10", description: "Sea and coastal passenger water transport"},
    UK_SIC: {code: "50.10", description: "Sea and coastal passenger water transport"},
},
"Surgeries, Clinics, Health Centres (Contractors Valuation)": {
    SCAT: {code: "436", description: "Surgeries, Clinics, Health Centres (Contractors Valuation)"},
    CPA: {code: "86.10", description: "Hospital services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "86.10", description: "Hospital activities"},
    UK_SIC: {code: "86.10", description: "Hospital activities"},
},
"Surgeries,  Clinics,  Health  Centres (Rental Valuation)": {
    SCAT: {code: "437", description: "Surgeries,  Clinics,  Health  Centres (Rental Valuation)"},
    CPA: {code: "86.10", description: "Hospital services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "86.10", description: "Hospital activities"},
    UK_SIC: {code: "86.10", description: "Hospital activities"},
},
"Telescope Sites": {
    SCAT: {code: "438", description: "Telescope Sites"},
    CPA: {code: "61.10", description: "Wired, wireless, and satellite telecommunication services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "61.10", description: "Wired, wireless, and satellite telecommunication activities"},
    UK_SIC: {code: "61.10", description: "Wired telecommunications activities"},
},
"University - Ancillary Land or Buildings": {
    SCAT: {code: "439", description: "University - Ancillary Land or Buildings"},
    CPA: {code: "85.40", description: "Tertiary education services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "85.40", description: "Tertiary education"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"University Occupation Within Hospitals": {
    SCAT: {code: "440", description: "University Occupation Within Hospitals"},
    CPA: {code: "85.40", description: "Tertiary education services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "85.40", description: "Tertiary education"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Weighbridges": {
    SCAT: {code: "441", description: "Weighbridges"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Takeaway Food Outlet (Predominantly Off Premises)": {
    SCAT: {code: "442", description: "Takeaway Food Outlet (Predominantly Off Premises)"},
    CPA: {code: "56.40", description: "Intermediation services of food and beverage serving services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "56.40", description: "Intermediation service activities for food and beverage services activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Cafes/Restaurants Within/Part of Specialist Property": {
    SCAT: {code: "500", description: "Cafes/Restaurants Within/Part of Specialist Property"},
    CPA: {code: "56.30", description: "Beverage serving services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "56.30", description: "Beverage serving activities"},
    UK_SIC: {code: "56.30", description: "Beverage serving activities"},
},
"Car Parking Within/Part of Specialist Property": {
    SCAT: {code: "501", description: "Car Parking Within/Part of Specialist Property"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Garages Within/Part of Specialist Property": {
    SCAT: {code: "502", description: "Garages Within/Part of Specialist Property"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Gymnasia/Fitness Suites Within/Part of Specialist Property": {
    SCAT: {code: "503", description: "Gymnasia/Fitness Suites Within/Part of Specialist Property"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Kiosks Within/Part of Specialist Property": {
    SCAT: {code: "504", description: "Kiosks Within/Part of Specialist Property"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Nurseries/Creches Within/Part of Specialist Property": {
    SCAT: {code: "505", description: "Nurseries/Creches Within/Part of Specialist Property"},
    CPA: {code: "85.10", description: "Pre-primary education services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "85.10", description: "Pre-primary education"},
    UK_SIC: {code: "85.10", description: "Pre-primary education"},
},
"Offices Within/Part of Specialist Property": {
    SCAT: {code: "506", description: "Offices Within/Part of Specialist Property"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Salons/Clinics Within/Part of Specialist Property": {
    SCAT: {code: "507", description: "Salons/Clinics Within/Part of Specialist Property"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Shops Within/Part of Specialist Property": {
    SCAT: {code: "508", description: "Shops Within/Part of Specialist Property"},
    CPA: {code: "47.78", description: "Retail sale services of other new goods"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.78", description: "Retail sale of other new goods"},
    UK_SIC: {code: "47.78", description: "Other retail sale of new goods in specialised stores"},
},
"Sports & Leisure Centres Within/Part of Specialist Property": {
    SCAT: {code: "509", description: "Sports & Leisure Centres Within/Part of Specialist Property"},
    CPA: {code: "93.21", description: "Amusement park and theme park services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.21", description: "Activities of amusement parks and theme parks"},
    UK_SIC: {code: "93.21", description: "Activities of amusement parks and theme parks"},
},
"Stores Within/Part of Specialist Property": {
    SCAT: {code: "510", description: "Stores Within/Part of Specialist Property"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Warehouses Within/Part of Specialist Property": {
    SCAT: {code: "511", description: "Warehouses Within/Part of Specialist Property"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Workshops Within/Part of Specialist Property": {
    SCAT: {code: "512", description: "Workshops Within/Part of Specialist Property"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Miscellaneous Within/Part of Specialist Property": {
    SCAT: {code: "513", description: "Miscellaneous Within/Part of Specialist Property"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Sponsored Roundabout Advertising Displays": {
    SCAT: {code: "700", description: "Sponsored Roundabout Advertising Displays"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Restaurant With Letting Accomodation": {
    SCAT: {code: "701", description: "Restaurant With Letting Accomodation"},
    CPA: {code: "56.11", description: "Restaurant serving services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "56.11", description: "Restaurant activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Driving Standards Agency Centre": {
    SCAT: {code: "702", description: "Driving Standards Agency Centre"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Residual Shopping Mall": {
    SCAT: {code: "703", description: "Residual Shopping Mall"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Land Used For Seasonal Markets & Events": {
    SCAT: {code: "704", description: "Land Used For Seasonal Markets & Events"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Market Stall (Not Pitch)": {
    SCAT: {code: "705", description: "Market Stall (Not Pitch)"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.91", description: "Intermediation service activities for non-specialised retail sale"},
    UK_SIC: {code: "47.91", description: "Retail sale via mail order houses or via Internet"},
},
"Advertising Displays On Pavements & Bus Shelters": {
    SCAT: {code: "706", description: "Advertising Displays On Pavements & Bus Shelters"},
    CPA: {code: "73.11", description: "Services provided by advertising agencies"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "73.11", description: "Activities of advertising agencies"},
    UK_SIC: {code: "73.11", description: "Advertising agencies"},
},
"Advertising Displays At Superstores": {
    SCAT: {code: "707", description: "Advertising Displays At Superstores"},
    CPA: {code: "73.11", description: "Services provided by advertising agencies"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "73.11", description: "Activities of advertising agencies"},
    UK_SIC: {code: "73.11", description: "Advertising agencies"},
},
"Advertising Displays From Phone Booths": {
    SCAT: {code: "708", description: "Advertising Displays From Phone Booths"},
    CPA: {code: "73.11", description: "Services provided by advertising agencies"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "73.11", description: "Activities of advertising agencies"},
    UK_SIC: {code: "73.11", description: "Advertising agencies"},
},
"Dark Retailing/Internet Sites": {
    SCAT: {code: "709", description: "Dark Retailing/Internet Sites"},
    CPA: {code: "47.92", description: "Intermediation services of retail sale services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.92", description: "Intermediation service activities for specialised retail sale"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Residual Mall": {
    SCAT: {code: "710", description: "Residual Mall"},
    CPA: {code: "35.40", description: "Services of brokers and agents for electric power and natural gas"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.91", description: "Intermediation service activities for non-specialised retail sale"},
    UK_SIC: {code: "47.91", description: "Retail sale via mail order houses or via Internet"},
},
"Advertising Displays From Agricultural Land": {
    SCAT: {code: "711", description: "Advertising Displays From Agricultural Land"},
    CPA: {code: "73.11", description: "Services provided by advertising agencies"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "73.11", description: "Activities of advertising agencies"},
    UK_SIC: {code: "73.11", description: "Advertising agencies"},
},
"Rail Freight Depots": {
    SCAT: {code: "712", description: "Rail Freight Depots"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Bicycle Folding Box Site": {
    SCAT: {code: "713", description: "Bicycle Folding Box Site"},
    CPA: {code: "49.39", description: "Other passenger land transport services n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "49.39", description: "Other passenger land transport not elsewhere classified"},
    UK_SIC: {code: "49.39", description: "Other passenger land transport n.e.c."},
},
"Rail Maintenance Depots": {
    SCAT: {code: "714", description: "Rail Maintenance Depots"},
    CPA: {code: "33.17", description: "Repair and maintenance services of other civilian transport equipment"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "33.17", description: "Repair and maintenance of other civilian transport equipment"},
    UK_SIC: {code: "33.17", description: "Repair and maintenance of other transport equipment"},
},
"Football Training Grounds": {
    SCAT: {code: "715", description: "Football Training Grounds"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Cafe/Restaurants   Within/Part   of NonSpecialist Properties": {
    SCAT: {code: "716", description: "Cafe/Restaurants   Within/Part   of NonSpecialist Properties"},
    CPA: {code: "56.30", description: "Beverage serving services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "56.30", description: "Beverage serving activities"},
    UK_SIC: {code: "56.30", description: "Beverage serving activities"},
},
"Delivery Box Site & Premises": {
    SCAT: {code: "717", description: "Delivery Box Site & Premises"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Electric Charge Stations": {
    SCAT: {code: "718", description: "Electric Charge Stations"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Car Washes (Stand Alone - Hand Car Wash)": {
    SCAT: {code: "719", description: "Car Washes (Stand Alone - Hand Car Wash)"},
    CPA: {code: "95.31", description: "Repair and maintenance services of motor vehicles"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "95.31", description: "Repair and maintenance of motor vehicles"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"LPG Service Station": {
    SCAT: {code: "720", description: "LPG Service Station"},
    CPA: {code: "35.40", description: "Services of brokers and agents for electric power and natural gas"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "35.40", description: "Activities of brokers and agents for electric power and natural gas"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Self Storage Facility": {
    SCAT: {code: "721", description: "Self Storage Facility"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Serviced Appartments": {
    SCAT: {code: "722", description: "Serviced Appartments"},
    CPA: {code: "55.20", description: "Holiday and other short-stay accommodation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "55.20", description: "Holiday and other short-stay accommodation"},
    UK_SIC: {code: "55.20", description: "Holiday and other short-stay accommodation"},
},
"Serviced Offices": {
    SCAT: {code: "723", description: "Serviced Offices"},
    CPA: {code: "82.10", description: "Office administrative and support services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "82.10", description: "Office administrative and support activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Street Points (eg Cycle Docking Stations)": {
    SCAT: {code: "724", description: "Street Points (eg Cycle Docking Stations)"},
    CPA: {code: "52.21", description: "Services incidental to land transportation"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.21", description: "Service activities incidental to land transportation"},
    UK_SIC: {code: "52.21", description: "Service activities incidental to land transportation"},
},
"Park & Ride Car Parks": {
    SCAT: {code: "725", description: "Park & Ride Car Parks"},
    CPA: {code: "52.10", description: "Warehousing and storage services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.10", description: "Warehousing and storage"},
    UK_SIC: {code: "52.10", description: "Warehousing and storage"},
},
"Telecommunications Large Broadcast Sites": {
    SCAT: {code: "726", description: "Telecommunications Large Broadcast Sites"},
    CPA: {code: "61.90", description: "Other telecommunication services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "61.90", description: "Other telecommunication activities"},
    UK_SIC: {code: "61.90", description: "Other telecommunications activities"},
},
"Waste Anaerobic Digestion Plants": {
    SCAT: {code: "727", description: "Waste Anaerobic Digestion Plants"},
    CPA: {code: "38.23", description: "Other waste recovery services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "38.23", description: "Other waste recovery"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Bagging Plant & Premises": {
    SCAT: {code: "728", description: "Bagging Plant & Premises"},
    CPA: {code: "22.26", description: "Other plastic products"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "22.26", description: "Manufacture of other plastic products"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Renewable Generators - Mixed Technologies": {
    SCAT: {code: "729", description: "Renewable Generators - Mixed Technologies"},
    CPA: {code: "35.12", description: "Electricity from renewable sources"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "35.12", description: "Production of electricity from renewable sources"},
    UK_SIC: {code: "35.12", description: "Transmission of electricity"},
},
"Biomass Biological (Crop & Slurry Based Anaerobic Digestors, Incl Gas to Grid)": {
    SCAT: {code: "730", description: "Biomass Biological (Crop & Slurry Based Anaerobic Digestors, Incl Gas to Grid)"},
    CPA: {code: "35.21", description: "Manufactured gas, for energy supply"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "35.21", description: "Manufacture of gas"},
    UK_SIC: {code: "35.21", description: "Manufacture of gas"},
},
"Biomass Thermal (Incl Combustion, Gasification and Pyrolysis)": {
    SCAT: {code: "731", description: "Biomass Thermal (Incl Combustion, Gasification and Pyrolysis)"},
    CPA: {code: "35.21", description: "Manufactured gas, for energy supply"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "35.21", description: "Manufacture of gas"},
    UK_SIC: {code: "35.21", description: "Manufacture of gas"},
},
"Click & Collect Locker Site": {
    SCAT: {code: "732", description: "Click & Collect Locker Site"},
    CPA: {code: "53.10", description: "Postal services under universal service obligation"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "53.10", description: "Postal activities under universal service obligation"},
    UK_SIC: {code: "53.10", description: "Postal activities under universal service obligation"},
},
"Battery Store": {
    SCAT: {code: "733", description: "Battery Store"},
    CPA: {code: "47.54", description: "Retail sale services of electrical household appliances"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "47.54", description: "Retail sale of electrical household appliances"},
    UK_SIC: {code: "47.54", description: "Retail sale of electrical household appliances in specialised stores"},
},
"Wedding and Function Venue": {
    SCAT: {code: "734", description: "Wedding and Function Venue"},
    CPA: {code: "77.21", description: "Rental and leasing services of recreational and sports goods"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "77.21", description: "Rental and leasing of recreational and sports goods"},
    UK_SIC: {code: "77.21", description: "Renting and leasing of recreational and sports goods"},
},
"Historic Property (National Trust/English Heritage)": {
    SCAT: {code: "735", description: "Historic Property (National Trust/English Heritage)"},
    CPA: {code: "91.22", description: "Historical site and monument services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "91.22", description: "Historical site and monument activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Holiday Home Self Catering (Complexs)": {
    SCAT: {code: "736", description: "Holiday Home Self Catering (Complexs)"},
    CPA: {code: "55.10", description: "Hotel and similar accommodation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "55.10", description: "Hotels and similar accommodation"},
    UK_SIC: {code: "55.10", description: "Hotels and similar accommodation"},
},
"Ferry Terminal": {
    SCAT: {code: "737", description: "Ferry Terminal"},
    CPA: {code: "52.22", description: "Services incidental to water transportation"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "52.22", description: "Service activities incidental to water transportation"},
    UK_SIC: {code: "52.22", description: "Service activities incidental to water transportation"},
},
"Builders Merchant": {
    SCAT: {code: "738", description: "Builders Merchant"},
    CPA: {code: "46.73", description: "Wholesale trade services of motorcycles, motorcycle parts and accessories"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "46.73", description: "Wholesale of motorcycles, motorcycle parts and accessories"},
    UK_SIC: {code: "46.73", description: "Wholesale of wood, construction materials and sanitary equipment"},
},
"Soccer Centres": {
    SCAT: {code: "739", description: "Soccer Centres"},
    CPA: {code: "93.11", description: "Sports facility operation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.11", description: "Operation of sports facilities"},
    UK_SIC: {code: "93.11", description: "Operation of sports facilities"},
},
"Secure Childrens Homes": {
    SCAT: {code: "740", description: "Secure Childrens Homes"},
    CPA: {code: "87.99", description: "Other residential care services n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "87.99", description: "Other residential care activities not elsewhere classified"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Independent Gas Transport (IGT)": {
    SCAT: {code: "741", description: "Independent Gas Transport (IGT)"},
    CPA: {code: "35.23", description: "Trade services of gas through mains"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "35.23", description: "Trade of gas through mains"},
    UK_SIC: {code: "35.23", description: "Trade of gas through mains"},
},
"Independent Distribution Network Operators (IDNO)": {
    SCAT: {code: "742", description: "Independent Distribution Network Operators (IDNO)"},
    CPA: {code: "35.24", description: "Storage services of gas as part of the network supply services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "35.24", description: "Storage of gas as part of network supply services"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Renewable Power Generators - Photovoltaic": {
    SCAT: {code: "743", description: "Renewable Power Generators - Photovoltaic"},
    CPA: {code: "35.12", description: "Electricity from renewable sources"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "35.12", description: "Production of electricity from renewable sources"},
    UK_SIC: {code: "35.12", description: "Transmission of electricity"},
},
"Renewable Power Generators – Wind": {
    SCAT: {code: "744", description: "Renewable Power Generators – Wind"},
    CPA: {code: "35.12", description: "Electricity from renewable sources"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "35.12", description: "Production of electricity from renewable sources"},
    UK_SIC: {code: "35.12", description: "Transmission of electricity"},
},
"Renewable Power Generators – Other": {
    SCAT: {code: "745", description: "Renewable Power Generators – Other"},
    CPA: {code: "35.12", description: "Electricity from renewable sources"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "35.12", description: "Production of electricity from renewable sources"},
    UK_SIC: {code: "35.12", description: "Transmission of electricity"},
},
"Renewable Power Generators - Hydro": {
    SCAT: {code: "746", description: "Renewable Power Generators - Hydro"},
    CPA: {code: "35.12", description: "Electricity from renewable sources"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "35.12", description: "Production of electricity from renewable sources"},
    UK_SIC: {code: "35.12", description: "Transmission of electricity"},
},
"Fossil Fuel Power Stations": {
    SCAT: {code: "747", description: "Fossil Fuel Power Stations"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Nuclear Power Stations": {
    SCAT: {code: "748", description: "Nuclear Power Stations"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Underground Gas Storage Facility": {
    SCAT: {code: "749", description: "Underground Gas Storage Facility"},
    CPA: {code: "35.24", description: "Storage services of gas as part of the network supply services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "35.24", description: "Storage of gas as part of network supply services"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"NHS Clinics & Health Centres (Contractors)": {
    SCAT: {code: "750", description: "NHS Clinics & Health Centres (Contractors)"},
    CPA: {code: "86.21", description: "General medical practice services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "86.21", description: "General medical practice activities"},
    UK_SIC: {code: "86.21", description: "General medical practice activities"},
},
"NHS Clinics & Health Centres (Rentals)": {
    SCAT: {code: "751", description: "NHS Clinics & Health Centres (Rentals)"},
    CPA: {code: "86.21", description: "General medical practice services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "86.21", description: "General medical practice activities"},
    UK_SIC: {code: "86.21", description: "General medical practice activities"},
},
"Surgeries (Other Than GP/NHS) (Contractors)": {
    SCAT: {code: "752", description: "Surgeries (Other Than GP/NHS) (Contractors)"},
    CPA: {code: "86.22", description: "Medical specialists services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "86.22", description: "Medical specialists activities"},
    UK_SIC: {code: "86.22", description: "Specialist medical practice activities"},
},
"Surgeries (Other Than GP/NHS) (Rentals)": {
    SCAT: {code: "753", description: "Surgeries (Other Than GP/NHS) (Rentals)"},
    CPA: {code: "86.22", description: "Medical specialists services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "86.22", description: "Medical specialists activities"},
    UK_SIC: {code: "86.22", description: "Specialist medical practice activities"},
},
"GP Surgeries (Contractors)": {
    SCAT: {code: "754", description: "GP Surgeries (Contractors)"},
    CPA: {code: "86.22", description: "Medical specialists services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "86.22", description: "Medical specialists activities"},
    UK_SIC: {code: "86.22", description: "Specialist medical practice activities"},
},
"GP Surgeries (Rentals)": {
    SCAT: {code: "755", description: "GP Surgeries (Rentals)"},
    CPA: {code: "86.22", description: "Medical specialists services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "86.22", description: "Medical specialists activities"},
    UK_SIC: {code: "86.22", description: "Specialist medical practice activities"},
},
"Equestrian Hospitals": {
    SCAT: {code: "756", description: "Equestrian Hospitals"},
    CPA: {code: "75.00", description: "Veterinary services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "75.00", description: "Veterinary activities"},
    UK_SIC: {code: "75.00", description: "Veterinary activities"},
},
"Plant Nurseries": {
    SCAT: {code: "757", description: "Plant Nurseries"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Commercial Miscellaneous": {
    SCAT: {code: "992", description: "Commercial Miscellaneous"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Leisure Miscellaneous": {
    SCAT: {code: "993", description: "Leisure Miscellaneous"},
    CPA: {code: "93.29", description: "Other amusement and recreation services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "93.29", description: "Amusement and recreation activities not elsewhere classified"},
    UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
},
"Industrial Miscellaneous": {
    SCAT: {code: "994", description: "Industrial Miscellaneous"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Educational Miscellaneous": {
    SCAT: {code: "995", description: "Educational Miscellaneous"},
    CPA: {code: "85.59", description: "Other education services n.e.c."},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "85.59", description: "Other education not elsewhere classified"},
    UK_SIC: {code: "85.59", description: "Other education n.e.c."},
},
"Formula Assessed Miscellaneous": {
    SCAT: {code: "996", description: "Formula Assessed Miscellaneous"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Minerals Miscellaneous": {
    SCAT: {code: "997", description: "Minerals Miscellaneous"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Crown Miscellaneous": {
    SCAT: {code: "998", description: "Crown Miscellaneous"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Miscellaneous": {
    SCAT: {code: "999", description: "Miscellaneous"},
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "", description: "missing entry in classification"},
    UK_SIC: {code: "", description: "missing entry in classification"},
}}

    const queryParameters = new URLSearchParams(window.location.search);
    const subcat = queryParameters.get("sc");

    const ScatInfoBox = ({ item, landuseCodesData }) => {
        const codeLines = landuseCodesData[item].SCAT.code.split("\n");
        const descriptionLines = landuseCodesData[item].SCAT.description.split("\n");
      
        return (
          <div className="info-box-container">
            <div
              className={`alert alert-dark`}
              role="alert"
              style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}
            >
              <Tooltip text={"tooltip"} />
              <div className="label">UK National Non-Domestic Rates (VOA SCat):</div>
              <div className="info-details">
                {codeLines.map((line, index) => (
                  <React.Fragment key={index}>
                    <div className="code">{line}</div>
                    <div className="description">
                      {descriptionLines[index] || ""}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        );
      };

    return (
        <Fragment>
            <DataEntryGroup name="General Land Use" collapsed={subcat==null || subcat!="2"}>
                {(props.mapColourScale != "is_domestic") ? 
                    <button className={`map-switcher-inline disabled-state btn btn-outline btn-outline-dark key-button`} onClick={switchToIsDomesticMapStyle}>
                        {"Click to see residential, non-residential and mixed-use buildings."}
                    </button>
                    :
                    <></>
                }
                <SelectDataEntry
                    title={dataFields.is_domestic.title}
                    slug="is_domestic"
                    value={props.building.is_domestic}
                    options={dataFields.is_domestic.items}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    placeholder={dataFields.is_domestic.placeholder}
                    tooltip={dataFields.is_domestic.tooltip}
                />
                <Verification
                    slug="is_domestic"
                    allow_verify={props.user !== undefined && props.building.is_domestic !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("is_domestic")}
                    user_verified_as={props.user_verified.is_domestic}
                    verified_count={props.building.verified.is_domestic}
                />
                <SelectDataEntry
                    title={dataFields.is_domestic_source.title}
                    slug="is_domestic_source"
                    value={props.building.is_domestic_source}
                    options={dataFields.is_domestic_source.items}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.is_domestic_source.tooltip}
                />
                {(props.building.is_domestic_source == commonSourceTypes[0] ||
                    props.building.is_domestic_source == commonSourceTypes[1] ||
                    props.building.is_domestic_source == null) ? <></> :
                    <><MultiDataEntry
                        title={dataFields.is_domestic_links.title}
                        slug="is_domestic_links"
                        value={props.building.is_domestic_links}
                        mode={props.mode}
                        copy={props.copy}
                        onChange={props.onChange}
                        tooltip={dataFields.is_domestic_links.tooltip}
                        placeholder="https://..."
                        editableEntries={true}
                        isUrl={true}
                        />
                    </>
                }
            </DataEntryGroup>
            {/*
            <DataEntryGroup name="AAAAAA" collapsed={subcat==null || subcat!="1"}>
            {"aaaaaaaaaaaaaaaa"}
            {props.building.is_domestic ? "props.building.is_domestic is true" : "props.building.is_domestic is false"}
            {props.building.is_domestic != null ? "props.building.is_domestic is not null" : "props.building.is_domestic is null"}
            </DataEntryGroup>
            */}
            {props.building.is_domestic == "Non-residential" || props.building.is_domestic == "Mixed residential/non-residential" ? 
            <DataEntryGroup name="Specific Land Use/s" collapsed={subcat==null || subcat!="1"}>
                {(props.mapColourScale != "landuse") ? 
                    <button className={`map-switcher-inline disabled-state btn btn-outline btn-outline-dark key-button`} onClick={switchToLandUseMapStyle}>
                        {"Click to see specific land use."}
                    </button>
                    :
                    <></>
                }
                <MultiDataEntry
                    title={"Current land use(s) (SCat)"}
                    slug="current_landuse_group"
                    value={props.building.current_landuse_group}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    confirmOnEnter={true}
                    tooltip={dataFields.current_landuse_group.tooltip}
                    placeholder="Enter search word/s’ here"
                    copyable={true}
                    autofill={true}
                    showAllOptionsOnEmpty={true}
                />
                <Verification
                    slug="current_landuse_group"
                    allow_verify={props.user !== undefined && props.building.current_landuse_group !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("current_landuse_group")}
                    user_verified_as={props.user_verified.current_landuse_group && props.user_verified.current_landuse_group.join(", ")}
                    verified_count={props.building.verified.current_landuse_group}
                    />
                <SelectDataEntry
                    title={dataFields.current_landuse_source.title}
                    slug="current_landuse_source"
                    value={props.building.current_landuse_source}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.current_landuse_source.tooltip}
                    placeholder={dataFields.current_landuse_source.example}
                    options={dataFields.current_landuse_source.items}
                    />
                {(props.building.current_landuse_source == commonSourceTypes[0] ||
                    props.building.current_landuse_source == commonSourceTypes[1] ||
                    props.building.current_landuse_source == null) ? <></> :
                    <><MultiDataEntry
                        title={dataFields.current_landuse_link.title}
                        slug="current_landuse_link"
                        value={props.building.current_landuse_link}
                        mode={props.mode}
                        copy={props.copy}
                        onChange={props.onChange}
                        tooltip={dataFields.current_landuse_link.tooltip}
                        placeholder="https://..."
                        editableEntries={true}
                        isUrl={true}
                        />
                    </>
                }
                <DataEntry
                    title={dataFields.current_landuse_order.title}
                    tooltip={dataFields.current_landuse_order.tooltip}
                    slug="current_landuse_order"
                    value={props.building.current_landuse_order}
                    mode={props.mode}
                    disabled={true}
                    copy={props.copy}
                    onChange={props.onChange}
                />
                <input className="form-control" type={"text"}
                placeholder={"If no correct description found, add tag here"}
                />
                {
                /*
                id={idAttr}
                name={nameAttr}
                value={props.value || ''}
                maxLength={props.maxLength}
                required={props.required}
                disabled={props.disabled}
                onKeyDown={e => {
                    if(e.keyCode === 13) {
                        if(props.confirmOnEnter) {
                            handleConfirm();
                        }
                    }
                }                onChange={e => handleChange(e.target.value)}
                onInput={e => setEditing(true)}
                onFocus={e => setEditing(true)}
                onBlur={e => setEditing(false)}
                     */

                }
                {/*
                <DataEntry
                    title={null}
                    tooltip={null}
                    slug={null}
                    value={null}
                    mode={props.mode}
                    copy={props.copy}
                    placeholder="If no correct description found, add tag here"
                    onChange={props.onChange}
                />
                */}
                <hr />
                {props.building.current_landuse_group != null ? <> {
                  props.building.current_landuse_group.map((item, index) => (
                    item in landuseCodesData ?                  
                    <>
                <div className="info-box-container">
                <DataTitleCopyable
                    slug={"props.slug"}
                    slugModifier={"props.slugModifier"}
                    title={"Relevant UK landuse codes"}
                    tooltip={null}
                    disabled={false}
                /> 
                <ScatInfoBox item={item} landuseCodesData={landuseCodesData} />
                <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                    <Tooltip text={ "[UK SIC: The UK Standard Industrial Classification of economic activities](https://www.ons.gov.uk/methodology/classificationsandstandards/ukstandardindustrialclassificationofeconomicactivities)" } />
                    <div className="label">UK Standard Industrial Classification (SIC):</div>
                    <div className="info-details">
                    <div className="code">{landuseCodesData[item].UK_SIC.code}</div>
                    <div className="description">{landuseCodesData[item].UK_SIC.description}</div>
                    </div>
                </div>
                <DataTitleCopyable
                    slug={"props.slug"}
                    slugModifier={"props.slugModifier"}
                    title={"Relevant international landuse codes"}
                    tooltip={null}
                    disabled={false}
                /> 
                <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                    <Tooltip text={ "[NACE: The Statistical Classification of Economic Activities in the European Community]( https://ec.europa.eu/eurostat/web/nace)" } />
                    <div className="label">NACE:</div>
                    <div className="info-details">
                    <div className="code">{landuseCodesData[item].NACE.code}</div>
                    <div className="description">{landuseCodesData[item].NACE.description}</div>
                    </div>
                </div>
                <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                    <Tooltip text={ "[ISIC: The International Standard Industrial Classification of All Economic Activities]( https://unstats.un.org/unsd/classifications/Econ/isic)" } />
                    <div className="label">ISIC:</div>
                    <div className="info-details">
                    <div className="code">{landuseCodesData[item].ISIC.code}</div>
                    <div className="description">{landuseCodesData[item].ISIC.description}</div>
                    </div>
                </div>
                <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                    <Tooltip text={ "[CPA: The Statistical Classification of Products by Activity](https://ec.europa.eu/eurostat/web/cpa)" } />
                    <div className="label">CPA:</div>
                    <div className="info-details">
                    <div className="code">{landuseCodesData[item].CPA.code}</div>
                    <div className="description">{landuseCodesData[item].CPA.description}</div>
                    </div>
                </div>
                </div>
                </>
                   : ""
                 ))
                }</>: ""}
            </DataEntryGroup>
            : <></>}
        </Fragment>
    );
};
const LandUseContainer = withCopyEdit(LandUseView);

export default LandUseContainer;
