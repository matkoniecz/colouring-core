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
import InfoBox from '../../components/info-box';
import Tooltip from '../../components/tooltip';
import { DataTitleCopyable } from '../data-components/data-title';

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
        props.onMapColourScale('landuse_scat')
    }
    const switchToOldLandUseMapStyle = (e) => {
        e.preventDefault();
        props.onMapColourScale('landuse')
    }

    const landuseCodesData = {
        "AA/RAC Service Centres and Boxes": {
            SCAT: {code: "1", description: "AA/RAC Service Centres and Boxes"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Advertising Right": {
            SCAT: {code: "3", description: "Advertising Right"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Agricultural Showgrounds (National Scheme)": {
            SCAT: {code: "4", description: "Agricultural Showgrounds (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "4719", description: "Other non-specialized retail sale"},
            NACE_level_4: {code: "47.12", description: "Other non-specialised retail sale"},
            NACE_level_3: {code: "47.2", description: "Retail sale of food, beverages and tobacco"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Air Ports (Minor) (National Scheme)": {
            SCAT: {code: "5", description: "Air Ports (Minor) (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Air Strips (National Scheme)": {
            SCAT: {code: "6", description: "Air Strips (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Aircraft Works With Airfields": {
            SCAT: {code: "7", description: "Aircraft Works With Airfields"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Airport Let Outs": {
            SCAT: {code: "8", description: "Airport Let Outs"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Aluminum Smelting Works": {
            SCAT: {code: "9", description: "Aluminum Smelting Works"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Ambulance Stations": {
            SCAT: {code: "10", description: "Ambulance Stations"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Amusement Arcades": {
            SCAT: {code: "11", description: "Amusement Arcades"},
            CPA: {code: "93.29", description: "Other amusement and recreation services"},
            ISIC: {code: "9329", description: "Other amusement and recreation activities"},
            NACE_level_4: {code: "93.29", description: "Amusement and recreation activities n.e.c."},
            NACE_level_3: {code: "94.1", description: "Activities of business, employers and professional membership organisations"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
        },
        "Amusement Parks": {
            SCAT: {code: "12", description: "Amusement Parks"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Animal Boarding": {
            SCAT: {code: "13", description: "Animal Boarding"},
            CPA: {code: "75.00", description: "Veterinary services"},
            ISIC: {code: "7500", description: "Veterinary activities"},
            NACE_level_4: {code: "75.00", description: "Veterinary activities"},
            NACE_level_3: {code: "77.1", description: "Rental and leasing of motor vehicles"},
            NACE_level_1: {code: "N", description: "Professional, scientific and technical activities"},
            UK_SIC: {code: "75.00", description: "Veterinary activities"},
        },
        "Arenas": {
            SCAT: {code: "14", description: "Arenas"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Army Hereditaments": {
            SCAT: {code: "15", description: "Army Hereditaments"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Artificial Fibre Works": {
            SCAT: {code: "16", description: "Artificial Fibre Works"},
            CPA: {code: "20.60", description: "Man-made fibres"},
            ISIC: {code: "2030", description: "Manufacture of man-made fibres"},
            NACE_level_4: {code: "20.60", description: "Manufacture of man-made fibres"},
            NACE_level_3: {code: "21.1", description: "Manufacture of basic pharmaceutical products"},
            NACE_level_1: {code: "C", description: "Manufacturing"},
            UK_SIC: {code: "20.60", description: "Manufacture of man-made fibres"},
        },
        "Asphalt Plants": {
            SCAT: {code: "17", description: "Asphalt Plants"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "ATMs": {
            SCAT: {code: "18", description: "ATMs"},
            CPA: {code: "64.19", description: "Other monetary intermediation services"},
            ISIC: {code: "6419", description: "Other monetary intermediation"},
            NACE_level_4: {code: "64.19", description: "Other monetary intermediation"},
            NACE_level_3: {code: "64.2", description: "Activities of holding companies and financing conduits"},
            NACE_level_1: {code: "L", description: "Financial and Insurance activities"},
            UK_SIC: {code: "64.19", description: "Other monetary intermediation"},
        },
        "Auction Rooms": {
            SCAT: {code: "19", description: "Auction Rooms"},
            CPA: {code: "47.79", description: "Retail sale services of second-hand goods, except motor vehicles and motorcycles"},
            ISIC: {code: "4774", description: "Retail sale of second-hand goods"},
            NACE_level_4: {code: "47.79", description: "Retail sale of second-hand goods"},
            NACE_level_3: {code: "47.8", description: "Retail sale of motor vehicles, motorcycles and related parts and accessories"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "47.79", description: "Retail sale of second-hand goods in stores"},
        },
        "Baling Plants": {
            SCAT: {code: "20", description: "Baling Plants"},
            CPA: {code: "01.30", description: "Planting material: live plants, bulbs, tubers and roots, cuttings and slips; mushroom spawn"},
            ISIC: {code: "0130", description: "Plant propagation"},
            NACE_level_4: {code: "01.30", description: "Plant propagation"},
            NACE_level_3: {code: "01.4", description: "Animal production"},
            NACE_level_1: {code: "A", description: "Agriculture, forestry and fishing"},
            UK_SIC: {code: "01.30", description: "Plant propagation"},
        },
        "Banks/Insurance/Building Society Offices & Other A2 Uses": {
            SCAT: {code: "21", description: "Banks/Insurance/Building Society Offices & Other A2 Uses"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Beach Huts": {
            SCAT: {code: "22", description: "Beach Huts"},
            CPA: {code: "55.20", description: "Holiday and other short-stay accommodation services"},
            ISIC: {code: "5520", description: "Other short term accommodation activities"},
            NACE_level_4: {code: "55.20", description: "Holiday and other short-stay accommodation"},
            NACE_level_3: {code: "55.3", description: "Camping grounds and recreational vehicle parks"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "55.20", description: "Holiday and other short-stay accommodation"},
        },
        "Beet Sugar Factories": {
            SCAT: {code: "23", description: "Beet Sugar Factories"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Betting Offices": {
            SCAT: {code: "24", description: "Betting Offices"},
            CPA: {code: "92.00", description: "Gambling and betting services"},
            ISIC: {code: "9200", description: "Gambling and betting activities"},
            NACE_level_4: {code: "92.00", description: "Gambling and betting activities"},
            NACE_level_3: {code: "93.1", description: "Sports activities"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "92.00", description: "Gambling and betting activities"},
        },
        "Bingo Halls (National Scheme)": {
            SCAT: {code: "25", description: "Bingo Halls (National Scheme)"},
            CPA: {code: "93.29", description: "Other amusement and recreation services"},
            ISIC: {code: "9329", description: "Other amusement and recreation activities"},
            NACE_level_4: {code: "93.29", description: "Amusement and recreation activities n.e.c."},
            NACE_level_3: {code: "94.1", description: "Activities of business, employers and professional membership organisations"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
        },
        "Bird Sanctuaries": {
            SCAT: {code: "26", description: "Bird Sanctuaries"},
            CPA: {code: "91.42", description: "Nature reserve services"},
            ISIC: {code: "9142", description: "Nature reserve activities"},
            NACE_level_4: {code: "91.42", description: "Nature reserve activities"},
            NACE_level_3: {code: "92.0", description: "Gambling and betting activities"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "91.04", description: "Botanical and zoological gardens and nature reserve activities"},
        },
        "Boat Yards": {
            SCAT: {code: "27", description: "Boat Yards"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Bowling Alleys": {
            SCAT: {code: "28", description: "Bowling Alleys"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Bowling Centres (Indoor)": {
            SCAT: {code: "29", description: "Bowling Centres (Indoor)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Bowling Greens (Outdoor)": {
            SCAT: {code: "30", description: "Bowling Greens (Outdoor)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Breweries (National Scheme)": {
            SCAT: {code: "31", description: "Breweries (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Brickworks (Traditional), Clay Tile/Pipe Works": {
            SCAT: {code: "32", description: "Brickworks (Traditional), Clay Tile/Pipe Works"},
            CPA: {code: "23.32", description: "Bricks, tiles and construction products, in baked clay"},
            ISIC: {code: "2392", description: "Manufacture of clay building materials"},
            NACE_level_4: {code: "23.32", description: "Manufacture of bricks, tiles and construction products, in baked clay"},
            NACE_level_3: {code: "23.4", description: "Manufacture of other porcelain and ceramic products"},
            NACE_level_1: {code: "C", description: "Manufacturing"},
            UK_SIC: {code: "23.32", description: "Manufacture of bricks, tiles and construction products, in baked clay"},
        },
        "Bulk Cement Storage Depots": {
            SCAT: {code: "33", description: "Bulk Cement Storage Depots"},
            CPA: {code: "52.10", description: "Warehousing and storage services"},
            ISIC: {code: "5210", description: "Warehousing and storage"},
            NACE_level_4: {code: "52.10", description: "Warehousing and storage"},
            NACE_level_3: {code: "52.2", description: "Support activities for transportation"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "52.10", description: "Warehousing and storage"},
        },
        "Bullion/Money Stores (National Scheme)": {
            SCAT: {code: "34", description: "Bullion/Money Stores (National Scheme)"},
            CPA: {code: "64.19", description: "Other monetary intermediation services"},
            ISIC: {code: "6419", description: "Other monetary intermediation"},
            NACE_level_4: {code: "64.19", description: "Other monetary intermediation"},
            NACE_level_3: {code: "64.2", description: "Activities of holding companies and financing conduits"},
            NACE_level_1: {code: "L", description: "Financial and Insurance activities"},
            UK_SIC: {code: "64.19", description: "Other monetary intermediation"},
        },
        "Bus Garages": {
            SCAT: {code: "35", description: "Bus Garages"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Bus Stations": {
            SCAT: {code: "36", description: "Bus Stations"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Cable Head End Buildings": {
            SCAT: {code: "37", description: "Cable Head End Buildings"},
            CPA: {code: "61.10", description: "Wired, wireless, and satellite telecommunication services"},
            ISIC: {code: "6110", description: "Wired, wireless, and satellite telecommunication activities"},
            NACE_level_4: {code: "61.10", description: "Wired, wireless, and satellite telecommunication activities"},
            NACE_level_3: {code: "61.2", description: "Telecommunication reselling activities and intermediation service activities for telecommunication"},
            NACE_level_1: {code: "K", description: "Telecommunication, computer programming, consulting, computing infrastructure and other information service activities"},
            UK_SIC: {code: "61.10", description: "Wired telecommunications activities"},
        },
        "Car Auction Buildings/Sites": {
            SCAT: {code: "38", description: "Car Auction Buildings/Sites"},
            CPA: {code: "47.81", description: "Retail sale services of motor vehicles"},
            ISIC: {code: "4781", description: "Retail sale of motor vehicles"},
            NACE_level_4: {code: "47.81", description: "Retail sale of motor vehicles"},
            NACE_level_3: {code: "68.2", description: "Rental and operating of own or leased real estate"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "47.81", description: "Retail sale via stalls and markets of food, beverages and tobacco products"},
        },
        "Car Parks (Multi-Storey)": {
            SCAT: {code: "39", description: "Car Parks (Multi-Storey)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Car Parks (Surfaced Open)": {
            SCAT: {code: "40", description: "Car Parks (Surfaced Open)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Car Parks (Unsurfaced Open)": {
            SCAT: {code: "41", description: "Car Parks (Unsurfaced Open)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Car Showrooms": {
            SCAT: {code: "42", description: "Car Showrooms"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Car Spaces": {
            SCAT: {code: "43", description: "Car Spaces"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Car Supermarkets": {
            SCAT: {code: "44", description: "Car Supermarkets"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Car Washes (Stand Alone)": {
            SCAT: {code: "45", description: "Car Washes (Stand Alone)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Car/Caravan Sales/Display/Hiring Sites": {
            SCAT: {code: "46", description: "Car/Caravan Sales/Display/Hiring Sites"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Caravan Parks (Leisure) (National Scheme)": {
            SCAT: {code: "47", description: "Caravan Parks (Leisure) (National Scheme)"},
            CPA: {code: "55.30", description: "Camping grounds and recreational vehicle parks services"},
            ISIC: {code: "5530", description: "Camping grounds, recreational vehicle parks and trailer parks"},
            NACE_level_4: {code: "55.30", description: "Camping grounds and recreational vehicle parks"},
            NACE_level_3: {code: "55.4", description: "Intermediation service activities for accommodation"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "55.30", description: "Camping grounds, recreational vehicle parks and trailer parks"},
        },
        "Caravan Sites and Pitches (National Scheme)": {
            SCAT: {code: "48", description: "Caravan Sites and Pitches (National Scheme)"},
            CPA: {code: "55.30", description: "Camping grounds and recreational vehicle parks services"},
            ISIC: {code: "5530", description: "Camping grounds, recreational vehicle parks and trailer parks"},
            NACE_level_4: {code: "55.30", description: "Camping grounds and recreational vehicle parks"},
            NACE_level_3: {code: "55.4", description: "Intermediation service activities for accommodation"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "55.30", description: "Camping grounds, recreational vehicle parks and trailer parks"},
        },
        "Casinos and Gambling Clubs": {
            SCAT: {code: "49", description: "Casinos and Gambling Clubs"},
            CPA: {code: "92.00", description: "Gambling and betting services"},
            ISIC: {code: "9200", description: "Gambling and betting activities"},
            NACE_level_4: {code: "92.00", description: "Gambling and betting activities"},
            NACE_level_3: {code: "93.1", description: "Sports activities"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "92.00", description: "Gambling and betting activities"},
        },
        "Cattle Breeding Centres": {
            SCAT: {code: "50", description: "Cattle Breeding Centres"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Cement Tile Works": {
            SCAT: {code: "51", description: "Cement Tile Works"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Cement Works": {
            SCAT: {code: "52", description: "Cement Works"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Cemeteries (National Scheme)": {
            SCAT: {code: "53", description: "Cemeteries (National Scheme)"},
            CPA: {code: "96.30", description: "Funeral and related services"},
            ISIC: {code: "9630", description: "Funeral and related activities"},
            NACE_level_4: {code: "96.30", description: "Funeral and related activities"},
            NACE_level_3: {code: "96.4", description: "Intermediation service activities for personal services"},
            NACE_level_1: {code: "T", description: "Other services activities"},
            UK_SIC: {code: "96.03", description: "Funeral and related activities"},
        },
        "Chalet Parks (National Scheme)": {
            SCAT: {code: "54", description: "Chalet Parks (National Scheme)"},
            CPA: {code: "55.20", description: "Holiday and other short-stay accommodation services"},
            ISIC: {code: "5520", description: "Other short term accommodation activities"},
            NACE_level_4: {code: "55.20", description: "Holiday and other short-stay accommodation"},
            NACE_level_3: {code: "55.3", description: "Camping grounds and recreational vehicle parks"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "55.20", description: "Holiday and other short-stay accommodation"},
        },
        "Chemical Works": {
            SCAT: {code: "55", description: "Chemical Works"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Cinemas (National Scheme)": {
            SCAT: {code: "56", description: "Cinemas (National Scheme)"},
            CPA: {code: "59.14", description: "Motion picture projection services"},
            ISIC: {code: "5914", description: "Motion picture projection activities"},
            NACE_level_4: {code: "59.14", description: "Motion picture projection activities"},
            NACE_level_3: {code: "59.2", description: "Sound recording and music publishing activities"},
            NACE_level_1: {code: "J", description: "Publishing, broadcasting, and content production and distribution activities"},
            UK_SIC: {code: "59.14", description: "Motion picture projection activities"},
        },
        "Civic and Public Buildings (Local Authority Occupations)": {
            SCAT: {code: "57", description: "Civic and Public Buildings (Local Authority Occupations)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Civic Amenity Sites": {
            SCAT: {code: "58", description: "Civic Amenity Sites"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Civil Airports": {
            SCAT: {code: "59", description: "Civil Airports"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Clubhouses": {
            SCAT: {code: "60", description: "Clubhouses"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Licensed Sports, Social & Private Members Clubs": {
            SCAT: {code: "61", description: "Licensed Sports, Social & Private Members Clubs"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Inns": {
            SCAT: {code: "62", description: "Inns"},
            CPA: {code: "55.10", description: "Hotel and similar accommodation services"},
            ISIC: {code: "5510", description: "Hotels and similar accommodation activities"},
            NACE_level_4: {code: "55.10", description: "Hotels and similar accommodation"},
            NACE_level_3: {code: "55.2", description: "Holiday and other short-stay accommodation"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "55.10", description: "Hotels and similar accommodation"},
        },
        "Coking and Carbonising Plants": {
            SCAT: {code: "63", description: "Coking and Carbonising Plants"},
            CPA: {code: "19.10", description: "Coke oven products"},
            ISIC: {code: "1910", description: "Manufacture of coke oven products"},
            NACE_level_4: {code: "19.10", description: "Manufacture of coke oven products"},
            NACE_level_3: {code: "19.2", description: "Manufacture of refined petroleum products and fossil fuel products"},
            NACE_level_1: {code: "C", description: "Manufacturing"},
            UK_SIC: {code: "19.10", description: "Manufacture of coke oven products"},
        },
        "Cold Stores": {
            SCAT: {code: "64", description: "Cold Stores"},
            CPA: {code: "52.10", description: "Warehousing and storage services"},
            ISIC: {code: "5210", description: "Warehousing and storage"},
            NACE_level_4: {code: "52.10", description: "Warehousing and storage"},
            NACE_level_3: {code: "52.2", description: "Support activities for transportation"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "52.10", description: "Warehousing and storage"},
        },
        "Colleges of Further Education (National Scheme)": {
            SCAT: {code: "65", description: "Colleges of Further Education (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Communication Stations (National Scheme)": {
            SCAT: {code: "66", description: "Communication Stations (National Scheme)"},
            CPA: {code: "61.10", description: "Wired, wireless, and satellite telecommunication services"},
            ISIC: {code: "6110", description: "Wired, wireless, and satellite telecommunication activities"},
            NACE_level_4: {code: "61.10", description: "Wired, wireless, and satellite telecommunication activities"},
            NACE_level_3: {code: "61.2", description: "Telecommunication reselling activities and intermediation service activities for telecommunication"},
            NACE_level_1: {code: "K", description: "Telecommunication, computer programming, consulting, computing infrastructure and other information service activities"},
            UK_SIC: {code: "61.10", description: "Wired telecommunications activities"},
        },
        "Community Day Centres": {
            SCAT: {code: "67", description: "Community Day Centres"},
            CPA: {code: "88.10", description: "Social work services without accommodation for older persons or persons with disabilities"},
            ISIC: {code: "8810", description: "Social work activities without accommodation for older persons or persons with disabilities"},
            NACE_level_4: {code: "88.10", description: "Social work activities without accommodation for older persons or persons with disabilities"},
            NACE_level_3: {code: "88.9", description: "Other social work activities without accommodation"},
            NACE_level_1: {code: "R", description: "Human health and social work activities"},
            UK_SIC: {code: "88.10", description: "Social work activities without accommodation for the elderly and disabled"},
        },
        "Computer Centres (Non-Purpose Built)": {
            SCAT: {code: "68", description: "Computer Centres (Non-Purpose Built)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Computer Centres (Purpose Built)": {
            SCAT: {code: "69", description: "Computer Centres (Purpose Built)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Concert Halls (National Scheme)": {
            SCAT: {code: "70", description: "Concert Halls (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Concrete Batching Plants": {
            SCAT: {code: "71", description: "Concrete Batching Plants"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Concrete Block Works": {
            SCAT: {code: "72", description: "Concrete Block Works"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Concrete Product Works": {
            SCAT: {code: "73", description: "Concrete Product Works"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Conference & Exhibition Centres": {
            SCAT: {code: "74", description: "Conference & Exhibition Centres"},
            CPA: {code: "82.30", description: "Organisation of conventions and trade shows services"},
            ISIC: {code: "8230", description: "Organization of conventions and trade shows"},
            NACE_level_4: {code: "82.30", description: "Organisation of conventions and trade shows"},
            NACE_level_3: {code: "82.4", description: "Intermediation service activities for business support service activities not elsewhere classified"},
            NACE_level_1: {code: "O", description: "Administrative and support service activities"},
            UK_SIC: {code: "82.30", description: "Organisation of conventions and trade shows"},
        },
        "Wedding & Function Venues": {
            SCAT: {code: "75", description: "Wedding & Function Venues"},
            CPA: {code: "96.99", description: "Other personal services n.e.c."},
            ISIC: {code: "9690", description: "Other personal service activities n.e.c."},
            NACE_level_4: {code: "96.99", description: "Other personal service activities n.e.c."},
            NACE_level_3: {code: "97.0", description: "Activities of households as employers of domestic personnel"},
            NACE_level_1: {code: "T", description: "Other services activities"},
            UK_SIC: {code: "96.09", description: "Other personal service activities n.e.c."},
        },
        "Contractors Huts & Compounds": {
            SCAT: {code: "76", description: "Contractors Huts & Compounds"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Country House Hotels": {
            SCAT: {code: "77", description: "Country House Hotels"},
            CPA: {code: "55.10", description: "Hotel and similar accommodation services"},
            ISIC: {code: "5510", description: "Hotels and similar accommodation activities"},
            NACE_level_4: {code: "55.10", description: "Hotels and similar accommodation"},
            NACE_level_3: {code: "55.2", description: "Holiday and other short-stay accommodation"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "55.10", description: "Hotels and similar accommodation"},
        },
        "Creameries": {
            SCAT: {code: "79", description: "Creameries"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Crematoria (With & Without Cemeteries) (National Scheme)": {
            SCAT: {code: "80", description: "Crematoria (With & Without Cemeteries) (National Scheme)"},
            CPA: {code: "96.30", description: "Funeral and related services"},
            ISIC: {code: "9630", description: "Funeral and related activities"},
            NACE_level_4: {code: "96.30", description: "Funeral and related activities"},
            NACE_level_3: {code: "96.4", description: "Intermediation service activities for personal services"},
            NACE_level_1: {code: "T", description: "Other services activities"},
            UK_SIC: {code: "96.03", description: "Funeral and related activities"},
        },
        "Cricket Centres": {
            SCAT: {code: "81", description: "Cricket Centres"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Cricket Grounds (County)": {
            SCAT: {code: "82", description: "Cricket Grounds (County)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Cricket Grounds/Pitches (Non- County)": {
            SCAT: {code: "83", description: "Cricket Grounds/Pitches (Non- County)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Dance Schools & Centres": {
            SCAT: {code: "84", description: "Dance Schools & Centres"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Day Nurseries/Play Schools": {
            SCAT: {code: "85", description: "Day Nurseries/Play Schools"},
            CPA: {code: "85.10", description: "Pre-primary education services"},
            ISIC: {code: "8510", description: "Pre-primary education"},
            NACE_level_4: {code: "85.10", description: "Pre-primary education"},
            NACE_level_3: {code: "85.2", description: "Primary education"},
            NACE_level_1: {code: "Q", description: "Education"},
            UK_SIC: {code: "85.10", description: "Pre-primary education"},
        },
        "Departmental and Walk Round Stores (Large)": {
            SCAT: {code: "86", description: "Departmental and Walk Round Stores (Large)"},
            CPA: {code: "47.27", description: "Retail sale services of other food"},
            ISIC: {code: "4719", description: "Other non-specialized retail sale"},
            NACE_level_4: {code: "47.12", description: "Other non-specialised retail sale"},
            NACE_level_3: {code: "47.2", description: "Retail sale of food, beverages and tobacco"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Distilleries": {
            SCAT: {code: "87", description: "Distilleries"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "District Heating Undertakings & Networks": {
            SCAT: {code: "88", description: "District Heating Undertakings & Networks"},
            CPA: {code: "35.30", description: "Steam and air conditioning supply services"},
            ISIC: {code: "3530", description: "Steam and air conditioning supply"},
            NACE_level_4: {code: "35.30", description: "Steam and air conditioning supply"},
            NACE_level_3: {code: "35.4", description: "Activities of brokers and agents for electric power and natural gas"},
            NACE_level_1: {code: "D", description: "Electricity, gas, steam and air conditioning supply"},
            UK_SIC: {code: "35.30", description: "Steam and air conditioning supply"},
        },
        "Docks and Harbours (Non-Statutory)": {
            SCAT: {code: "89", description: "Docks and Harbours (Non-Statutory)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Domestic Fuel Installations": {
            SCAT: {code: "90", description: "Domestic Fuel Installations"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Drive-In Restaurants": {
            SCAT: {code: "91", description: "Drive-In Restaurants"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Drive-Thru Restaurants": {
            SCAT: {code: "92", description: "Drive-Thru Restaurants"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Mine Water Treatment Plant and Premises": {
            SCAT: {code: "93", description: "Mine Water Treatment Plant and Premises"},
            CPA: {code: "36.00", description: "Natural water; water treatment and supply services"},
            ISIC: {code: "3600", description: "Water collection, treatment and supply"},
            NACE_level_4: {code: "36.00", description: "Water collection, treatment and supply"},
            NACE_level_3: {code: "37.0", description: "Sewerage"},
            NACE_level_1: {code: "E", description: "Water supply; sewerage; waste managment and remediation activities"},
            UK_SIC: {code: "36.00", description: "Water collection, treatment and supply"},
        },
        "Electricity Undertakings (Non- Statutory)": {
            SCAT: {code: "94", description: "Electricity Undertakings (Non- Statutory)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Exhaust and Tyre Centres": {
            SCAT: {code: "95", description: "Exhaust and Tyre Centres"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Factories, Workshops and Warehouses (Incl Bakeries & Dairies)": {
            SCAT: {code: "96", description: "Factories, Workshops and Warehouses (Incl Bakeries & Dairies)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Factory Shops": {
            SCAT: {code: "97", description: "Factory Shops"},
            CPA: {code: "47.27", description: "Retail sale services of other food"},
            ISIC: {code: "4719", description: "Other non-specialized retail sale"},
            NACE_level_4: {code: "47.12", description: "Other non-specialised retail sale"},
            NACE_level_3: {code: "47.2", description: "Retail sale of food, beverages and tobacco"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Farm Shops": {
            SCAT: {code: "98", description: "Farm Shops"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Field Study, Activity and Adventure Centres": {
            SCAT: {code: "99", description: "Field Study, Activity and Adventure Centres"},
            CPA: {code: "85.59", description: "Other education services n.e.c."},
            ISIC: {code: "8559", description: "Other education n.e.c."},
            NACE_level_4: {code: "85.59", description: "Other education n.e.c."},
            NACE_level_3: {code: "85.6", description: "Educational support activities"},
            NACE_level_1: {code: "Q", description: "Education"},
            UK_SIC: {code: "85.59", description: "Other education n.e.c."},
        },
        "Film and TV Studios": {
            SCAT: {code: "100", description: "Film and TV Studios"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Fire Stations": {
            SCAT: {code: "101", description: "Fire Stations"},
            CPA: {code: "84.25", description: "Fire brigade services"},
            ISIC: {code: "8423", description: "Public order and safety activities"},
            NACE_level_4: {code: "84.25", description: "Fire service activities"},
            NACE_level_3: {code: "84.3", description: "Compulsory social security activities"},
            NACE_level_1: {code: "P", description: "Public administration and defence; compulsory social security"},
            UK_SIC: {code: "84.25", description: "Fire service activities"},
        },
        "Fish Farms": {
            SCAT: {code: "102", description: "Fish Farms"},
            CPA: {code: "03.00", description: "Fish and other fishing products; aquaculture products; support services to fishing"},
            ISIC: {code: "0322", description: "Freshwater aquaculture"},
            NACE_level_4: {code: "03.22", description: "Freshwater aquaculture"},
            NACE_level_3: {code: "03.3", description: "Support activities for fishing and aquaculture"},
            NACE_level_1: {code: "A", description: "Agriculture, forestry and fishing"},
            UK_SIC: {code: "03.22", description: "Freshwater aquaculture"},
        },
        "Flour Mills (National Scheme)": {
            SCAT: {code: "103", description: "Flour Mills (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Food Courts": {
            SCAT: {code: "104", description: "Food Courts"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Food Processing Centres": {
            SCAT: {code: "105", description: "Food Processing Centres"},
            CPA: {code: "10.89", description: "Other food products n.e.c."},
            ISIC: {code: "1079", description: "Manufacture of other food products n.e.c."},
            NACE_level_4: {code: "10.89", description: "Manufacture of other food products n.e.c."},
            NACE_level_3: {code: "10.9", description: "Manufacture of prepared animal feeds"},
            NACE_level_1: {code: "C", description: "Manufacturing"},
            UK_SIC: {code: "10.89", description: "Manufacture of other food products n.e.c."},
        },
        "Convenience Store": {
            SCAT: {code: "106", description: "Convenience Store"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Football Grounds": {
            SCAT: {code: "107", description: "Football Grounds"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Football Pitches": {
            SCAT: {code: "108", description: "Football Pitches"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Football Stadia": {
            SCAT: {code: "109", description: "Football Stadia"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Foundries": {
            SCAT: {code: "110", description: "Foundries"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Funeral Parlours/Chapels Of Rest": {
            SCAT: {code: "111", description: "Funeral Parlours/Chapels Of Rest"},
            CPA: {code: "96.30", description: "Funeral and related services"},
            ISIC: {code: "9630", description: "Funeral and related activities"},
            NACE_level_4: {code: "96.30", description: "Funeral and related activities"},
            NACE_level_3: {code: "96.4", description: "Intermediation service activities for personal services"},
            NACE_level_1: {code: "T", description: "Other services activities"},
            UK_SIC: {code: "96.03", description: "Funeral and related activities"},
        },
        "Game Farms": {
            SCAT: {code: "112", description: "Game Farms"},
            CPA: {code: "01.48", description: "Other animals and animal products"},
            ISIC: {code: "0149", description: "Raising of other animals"},
            NACE_level_4: {code: "01.48", description: "Raising of other animals"},
            NACE_level_3: {code: "01.5", description: "Mixed farming"},
            NACE_level_1: {code: "A", description: "Agriculture, forestry and fishing"},
            UK_SIC: {code: "01.49", description: "Raising of other animals"},
        },
        "Garages (Transport and Commercial)": {
            SCAT: {code: "113", description: "Garages (Transport and Commercial)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Garden Centres": {
            SCAT: {code: "114", description: "Garden Centres"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Gas Processing Plants": {
            SCAT: {code: "115", description: "Gas Processing Plants"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Go Kart Rinks": {
            SCAT: {code: "116", description: "Go Kart Rinks"},
            CPA: {code: "93.29", description: "Other amusement and recreation services"},
            ISIC: {code: "9329", description: "Other amusement and recreation activities"},
            NACE_level_4: {code: "93.29", description: "Amusement and recreation activities n.e.c."},
            NACE_level_3: {code: "94.1", description: "Activities of business, employers and professional membership organisations"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
        },
        "Golf Courses": {
            SCAT: {code: "117", description: "Golf Courses"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Golf Driving Ranges": {
            SCAT: {code: "118", description: "Golf Driving Ranges"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Grain Silos": {
            SCAT: {code: "119", description: "Grain Silos"},
            CPA: {code: "52.10", description: "Warehousing and storage services"},
            ISIC: {code: "5210", description: "Warehousing and storage"},
            NACE_level_4: {code: "52.10", description: "Warehousing and storage"},
            NACE_level_3: {code: "52.2", description: "Support activities for transportation"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "52.10", description: "Warehousing and storage"},
        },
        "Granaries and Intervention Stores": {
            SCAT: {code: "120", description: "Granaries and Intervention Stores"},
            CPA: {code: "52.10", description: "Warehousing and storage services"},
            ISIC: {code: "5210", description: "Warehousing and storage"},
            NACE_level_4: {code: "52.10", description: "Warehousing and storage"},
            NACE_level_3: {code: "52.2", description: "Support activities for transportation"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "52.10", description: "Warehousing and storage"},
        },
        "Greyhound Racetracks": {
            SCAT: {code: "121", description: "Greyhound Racetracks"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Guest & Boarding Houses": {
            SCAT: {code: "122", description: "Guest & Boarding Houses"},
            CPA: {code: "55.20", description: "Holiday and other short-stay accommodation services"},
            ISIC: {code: "5520", description: "Other short term accommodation activities"},
            NACE_level_4: {code: "55.20", description: "Holiday and other short-stay accommodation"},
            NACE_level_3: {code: "55.3", description: "Camping grounds and recreational vehicle parks"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "55.20", description: "Holiday and other short-stay accommodation"},
        },
        "Traveller Sites": {
            SCAT: {code: "123", description: "Traveller Sites"},
            CPA: {code: "55.30", description: "Camping grounds and recreational vehicle parks services"},
            ISIC: {code: "5530", description: "Camping grounds, recreational vehicle parks and trailer parks"},
            NACE_level_4: {code: "55.30", description: "Camping grounds and recreational vehicle parks"},
            NACE_level_3: {code: "55.4", description: "Intermediation service activities for accommodation"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "55.30", description: "Camping grounds, recreational vehicle parks and trailer parks"},
        },
        "Hatcheries/Poultry Farms": {
            SCAT: {code: "124", description: "Hatcheries/Poultry Farms"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Health Farms": {
            SCAT: {code: "125", description: "Health Farms"},
            CPA: {code: "86.99", description: "Other human health services n.e.c."},
            ISIC: {code: "8699", description: "Other human health activities n.e.c."},
            NACE_level_4: {code: "86.99", description: "Other human health activities n.e.c."},
            NACE_level_3: {code: "87.1", description: "Residential nursing care activities"},
            NACE_level_1: {code: "R", description: "Human health and social work activities"},
            UK_SIC: {code: "86.90", description: "Other human health activities"},
        },
        "Heliports": {
            SCAT: {code: "126", description: "Heliports"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Heredits Used For Primary Treatment/Processing Of Minerals": {
            SCAT: {code: "127", description: "Heredits Used For Primary Treatment/Processing Of Minerals"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Heritage Railways": {
            SCAT: {code: "128", description: "Heritage Railways"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "High Tech Warehouses": {
            SCAT: {code: "129", description: "High Tech Warehouses"},
            CPA: {code: "52.10", description: "Warehousing and storage services"},
            ISIC: {code: "5210", description: "Warehousing and storage"},
            NACE_level_4: {code: "52.10", description: "Warehousing and storage"},
            NACE_level_3: {code: "52.2", description: "Support activities for transportation"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "52.10", description: "Warehousing and storage"},
        },
        "Holiday Centres": {
            SCAT: {code: "130", description: "Holiday Centres"},
            CPA: {code: "55.20", description: "Holiday and other short-stay accommodation services"},
            ISIC: {code: "5520", description: "Other short term accommodation activities"},
            NACE_level_4: {code: "55.20", description: "Holiday and other short-stay accommodation"},
            NACE_level_3: {code: "55.3", description: "Camping grounds and recreational vehicle parks"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "55.20", description: "Holiday and other short-stay accommodation"},
        },
        "Holiday Homes (Self Catering)": {
            SCAT: {code: "131", description: "Holiday Homes (Self Catering)"},
            CPA: {code: "55.20", description: "Holiday and other short-stay accommodation services"},
            ISIC: {code: "5520", description: "Other short term accommodation activities"},
            NACE_level_4: {code: "55.20", description: "Holiday and other short-stay accommodation"},
            NACE_level_3: {code: "55.3", description: "Camping grounds and recreational vehicle parks"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "55.20", description: "Holiday and other short-stay accommodation"},
        },
        "Horse Racecourses": {
            SCAT: {code: "132", description: "Horse Racecourses"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Hospital Let Outs": {
            SCAT: {code: "133", description: "Hospital Let Outs"},
            CPA: {code: "68.20", description: "Rental and operating services of own or leased real estate"},
            ISIC: {code: "6821", description: "Intermediation service activities for real estate"},
            NACE_level_4: {code: "68.20", description: "Rental and operating of own or leased real estate"},
            NACE_level_3: {code: "68.3", description: "Real estate activities on a fee or contract basis"},
            NACE_level_1: {code: "M", description: "Real estate activities"},
            UK_SIC: {code: "68.20", description: "Renting and operating of own or leased real estate"},
        },
        "Hospitals & Clinics NHS (National Scheme)": {
            SCAT: {code: "134", description: "Hospitals & Clinics NHS (National Scheme)"},
            CPA: {code: "86.10", description: "Hospital services"},
            ISIC: {code: "8610", description: "Hospital activities"},
            NACE_level_4: {code: "86.10", description: "Hospital activities"},
            NACE_level_3: {code: "86.2", description: "Medical and dental practice activities"},
            NACE_level_1: {code: "R", description: "Human health and social work activities"},
            UK_SIC: {code: "86.10", description: "Hospital activities"},
        },
        "Hospitals & Clinics (Private) (National Scheme)": {
            SCAT: {code: "135", description: "Hospitals & Clinics (Private) (National Scheme)"},
            CPA: {code: "86.10", description: "Hospital services"},
            ISIC: {code: "8610", description: "Hospital activities"},
            NACE_level_4: {code: "86.10", description: "Hospital activities"},
            NACE_level_3: {code: "86.2", description: "Medical and dental practice activities"},
            NACE_level_1: {code: "R", description: "Human health and social work activities"},
            UK_SIC: {code: "86.10", description: "Hospital activities"},
        },
        "Hostels": {
            SCAT: {code: "136", description: "Hostels"},
            CPA: {code: "55.20", description: "Holiday and other short-stay accommodation services"},
            ISIC: {code: "5520", description: "Other short term accommodation activities"},
            NACE_level_4: {code: "55.20", description: "Holiday and other short-stay accommodation"},
            NACE_level_3: {code: "55.3", description: "Camping grounds and recreational vehicle parks"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "55.20", description: "Holiday and other short-stay accommodation"},
        },
        "Hotels (3 Star And Under)": {
            SCAT: {code: "137", description: "Hotels (3 Star And Under)"},
            CPA: {code: "55.10", description: "Hotel and similar accommodation services"},
            ISIC: {code: "5510", description: "Hotels and similar accommodation activities"},
            NACE_level_4: {code: "55.10", description: "Hotels and similar accommodation"},
            NACE_level_3: {code: "55.2", description: "Holiday and other short-stay accommodation"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "55.10", description: "Hotels and similar accommodation"},
        },
        "Hotels (4 Star & Above) & Major Chain Operated ( includes 3* & above consortium hotels)": {
            SCAT: {code: "138", description: "Hotels (4 Star & Above) & Major Chain Operated ( includes 3* & above consortium hotels)"},
            CPA: {code: "55.10", description: "Hotel and similar accommodation services"},
            ISIC: {code: "5510", description: "Hotels and similar accommodation activities"},
            NACE_level_4: {code: "55.10", description: "Hotels and similar accommodation"},
            NACE_level_3: {code: "55.2", description: "Holiday and other short-stay accommodation"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "55.10", description: "Hotels and similar accommodation"},
        },
        "Hypermarkets/Superstores (over 2500m²)": {
            SCAT: {code: "139", description: "Hypermarkets/Superstores (over 2500m²)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Ice Rinks": {
            SCAT: {code: "140", description: "Ice Rinks"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Interactive Telephone Kiosks": {
            SCAT: {code: "141", description: "Interactive Telephone Kiosks"},
            CPA: {code: "61.90", description: "Other telecommunication services"},
            ISIC: {code: "6190", description: "Other telecommunication activities"},
            NACE_level_4: {code: "61.90", description: "Other telecommunication activities"},
            NACE_level_3: {code: "62.1", description: "Computer programming activities"},
            NACE_level_1: {code: "K", description: "Telecommunication, computer programming, consulting, computing infrastructure and other information service activities"},
            UK_SIC: {code: "61.90", description: "Other telecommunications activities"},
        },
        "Iron and/or Steel Works": {
            SCAT: {code: "142", description: "Iron and/or Steel Works"},
            CPA: {code: "24.10", description: "Basic iron, steel and ferro-alloys"},
            ISIC: {code: "2410", description: "Manufacture of basic iron and steel"},
            NACE_level_4: {code: "24.10", description: "Manufacture of basic iron and steel and of ferro-alloys"},
            NACE_level_3: {code: "24.2", description: "Manufacture of tubes, pipes, hollow profiles and related fittings, of steel"},
            NACE_level_1: {code: "C", description: "Manufacturing"},
            UK_SIC: {code: "24.10", description: "Manufacture of basic iron and steel and of ferro-alloys"},
        },
        "Kennels and Catteries": {
            SCAT: {code: "143", description: "Kennels and Catteries"},
            CPA: {code: "75.00", description: "Veterinary services"},
            ISIC: {code: "7500", description: "Veterinary activities"},
            NACE_level_4: {code: "75.00", description: "Veterinary activities"},
            NACE_level_3: {code: "77.1", description: "Rental and leasing of motor vehicles"},
            NACE_level_1: {code: "N", description: "Professional, scientific and technical activities"},
            UK_SIC: {code: "75.00", description: "Veterinary activities"},
        },
        "Laboratories": {
            SCAT: {code: "144", description: "Laboratories"},
            CPA: {code: "72.10", description: "Research and development services on natural sciences, engineering and technology"},
            ISIC: {code: "7210", description: "Research and experimental development on natural sciences and engineering"},
            NACE_level_4: {code: "72.10", description: "Research and experimental development on natural sciences and engineering"},
            NACE_level_3: {code: "72.2", description: "Research and experimental development on social sciences and humanities"},
            NACE_level_1: {code: "N", description: "Professional, scientific and technical activities"},
            UK_SIC: {code: "72.19", description: "Other research and experimental development on natural sciences and engineering"},
        },
        "Lakes With Water Sport Facilities": {
            SCAT: {code: "145", description: "Lakes With Water Sport Facilities"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Land Used For Advertising": {
            SCAT: {code: "146", description: "Land Used For Advertising"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Land Used For Car Boot Sales": {
            SCAT: {code: "147", description: "Land Used For Car Boot Sales"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Land Used For Storage": {
            SCAT: {code: "148", description: "Land Used For Storage"},
            CPA: {code: "52.10", description: "Warehousing and storage services"},
            ISIC: {code: "5210", description: "Warehousing and storage"},
            NACE_level_4: {code: "52.10", description: "Warehousing and storage"},
            NACE_level_3: {code: "52.2", description: "Support activities for transportation"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "52.10", description: "Warehousing and storage"},
        },
        "Landfill Gas Generator Sites": {
            SCAT: {code: "149", description: "Landfill Gas Generator Sites"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Land used for Waste Composting": {
            SCAT: {code: "150", description: "Land used for Waste Composting"},
            CPA: {code: "38.23", description: "Other waste recovery services"},
            ISIC: {code: "3830", description: "Materials and other waste recovery"},
            NACE_level_4: {code: "38.23", description: "Other waste recovery"},
            NACE_level_3: {code: "38.3", description: "Waste disposal without recovery"},
            NACE_level_1: {code: "E", description: "Water supply; sewerage; waste managment and remediation activities"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Large Distribution Warehouses": {
            SCAT: {code: "151", description: "Large Distribution Warehouses"},
            CPA: {code: "52.10", description: "Warehousing and storage services"},
            ISIC: {code: "5210", description: "Warehousing and storage"},
            NACE_level_4: {code: "52.10", description: "Warehousing and storage"},
            NACE_level_3: {code: "52.2", description: "Support activities for transportation"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "52.10", description: "Warehousing and storage"},
        },
        "Large Food Stores (750 - 2500m²)": {
            SCAT: {code: "152", description: "Large Food Stores (750 - 2500m²)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Large Industrials (Over 20,000m²)": {
            SCAT: {code: "153", description: "Large Industrials (Over 20,000m²)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Large Shops (750 - 1850m²)": {
            SCAT: {code: "154", description: "Large Shops (750 - 1850m²)"},
            CPA: {code: "47.27", description: "Retail sale services of other food"},
            ISIC: {code: "4719", description: "Other non-specialized retail sale"},
            NACE_level_4: {code: "47.12", description: "Other non-specialised retail sale"},
            NACE_level_3: {code: "47.2", description: "Retail sale of food, beverages and tobacco"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Large Shops (Over 1850m²)": {
            SCAT: {code: "155", description: "Large Shops (Over 1850m²)"},
            CPA: {code: "47.27", description: "Retail sale services of other food"},
            ISIC: {code: "4719", description: "Other non-specialized retail sale"},
            NACE_level_4: {code: "47.12", description: "Other non-specialised retail sale"},
            NACE_level_3: {code: "47.2", description: "Retail sale of food, beverages and tobacco"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Libraries": {
            SCAT: {code: "156", description: "Libraries"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Liquid Bulk Storage (Incl Petrol & Oil) (National Scheme)": {
            SCAT: {code: "157", description: "Liquid Bulk Storage (Incl Petrol & Oil) (National Scheme)"},
            CPA: {code: "52.10", description: "Warehousing and storage services"},
            ISIC: {code: "5210", description: "Warehousing and storage"},
            NACE_level_4: {code: "52.10", description: "Warehousing and storage"},
            NACE_level_3: {code: "52.2", description: "Support activities for transportation"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "52.10", description: "Warehousing and storage"},
        },
        "Livestock Markets (National Scheme)": {
            SCAT: {code: "158", description: "Livestock Markets (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Local Authority Schools (National Scheme)": {
            SCAT: {code: "159", description: "Local Authority Schools (National Scheme)"},
            CPA: {code: "85.59", description: "Other education services n.e.c."},
            ISIC: {code: "8559", description: "Other education n.e.c."},
            NACE_level_4: {code: "85.59", description: "Other education n.e.c."},
            NACE_level_3: {code: "85.6", description: "Educational support activities"},
            NACE_level_1: {code: "Q", description: "Education"},
            UK_SIC: {code: "85.59", description: "Other education n.e.c."},
        },
        "Lodges (National Scheme)": {
            SCAT: {code: "160", description: "Lodges (National Scheme)"},
            CPA: {code: "55.10", description: "Hotel and similar accommodation services"},
            ISIC: {code: "5510", description: "Hotels and similar accommodation activities"},
            NACE_level_4: {code: "55.10", description: "Hotels and similar accommodation"},
            NACE_level_3: {code: "55.2", description: "Holiday and other short-stay accommodation"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "55.10", description: "Hotels and similar accommodation"},
        },
        "Lorry Parks": {
            SCAT: {code: "161", description: "Lorry Parks"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Maltings - Non Trad": {
            SCAT: {code: "162", description: "Maltings - Non Trad"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Maltings - Trad": {
            SCAT: {code: "163", description: "Maltings - Trad"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Marinas (National Scheme)": {
            SCAT: {code: "164", description: "Marinas (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Markets (Other Than Livestock)": {
            SCAT: {code: "165", description: "Markets (Other Than Livestock)"},
            CPA: {code: "47.27", description: "Retail sale services of other food"},
            ISIC: {code: "4719", description: "Other non-specialized retail sale"},
            NACE_level_4: {code: "47.12", description: "Other non-specialised retail sale"},
            NACE_level_3: {code: "47.2", description: "Retail sale of food, beverages and tobacco"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Mineral Depot and Premises": {
            SCAT: {code: "166", description: "Mineral Depot and Premises"},
            CPA: {code: "08.99", description: "Other mining and quarrying products n.e.c."},
            ISIC: {code: "0899", description: "Other mining and quarrying n.e.c."},
            NACE_level_4: {code: "08.99", description: "Other mining and quarrying n.e.c."},
            NACE_level_3: {code: "09.1", description: "Support activities for petroleum and natural gas extraction"},
            NACE_level_1: {code: "B", description: "Mining and quarrying"},
            UK_SIC: {code: "08.99", description: "Other mining and quarrying n.e.c."},
        },
        "Mineral Producing Hereditament - Blockstone": {
            SCAT: {code: "167", description: "Mineral Producing Hereditament - Blockstone"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Mineral Producing Hereditament - Brine": {
            SCAT: {code: "168", description: "Mineral Producing Hereditament - Brine"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Mineral Producing Hereditament - Chalk": {
            SCAT: {code: "169", description: "Mineral Producing Hereditament - Chalk"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Mineral Producing Hereditament - China Clay": {
            SCAT: {code: "170", description: "Mineral Producing Hereditament - China Clay"},
            CPA: {code: "08.12", description: "Gravel, sand, clay and kaolin"},
            ISIC: {code: "0810", description: "Quarrying of stone, sand and clay"},
            NACE_level_4: {code: "08.12", description: "Operation of gravel and sand pits and mining of clay and kaolin"},
            NACE_level_3: {code: "08.9", description: "Mining and quarrying not elsewhere classified"},
            NACE_level_1: {code: "B", description: "Mining and quarrying"},
            UK_SIC: {code: "08.12", description: "Operation of gravel and sand pits; mining of clays and kaolin"},
        },
        "Mineral Producing Hereditament - Clay": {
            SCAT: {code: "171", description: "Mineral Producing Hereditament - Clay"},
            CPA: {code: "08.12", description: "Gravel, sand, clay and kaolin"},
            ISIC: {code: "0810", description: "Quarrying of stone, sand and clay"},
            NACE_level_4: {code: "08.12", description: "Operation of gravel and sand pits and mining of clay and kaolin"},
            NACE_level_3: {code: "08.9", description: "Mining and quarrying not elsewhere classified"},
            NACE_level_1: {code: "B", description: "Mining and quarrying"},
            UK_SIC: {code: "08.12", description: "Operation of gravel and sand pits; mining of clays and kaolin"},
        },
        "Mineral Producing Hereditament - Coal": {
            SCAT: {code: "172", description: "Mineral Producing Hereditament - Coal"},
            CPA: {code: "05.10", description: "Hard coal and other coal"},
            ISIC: {code: "0510", description: "Mining of hard coal"},
            NACE_level_4: {code: "05.10", description: "Mining of hard coal"},
            NACE_level_3: {code: "05.2", description: "Mining of lignite"},
            NACE_level_1: {code: "B", description: "Mining and quarrying"},
            UK_SIC: {code: "05.10", description: "Mining of hard coal"},
        },
        "Mineral Producing Hereditament - Fluorspar": {
            SCAT: {code: "173", description: "Mineral Producing Hereditament - Fluorspar"},
            CPA: {code: "08.99", description: "Other mining and quarrying products n.e.c."},
            ISIC: {code: "0899", description: "Other mining and quarrying n.e.c."},
            NACE_level_4: {code: "08.99", description: "Other mining and quarrying n.e.c."},
            NACE_level_3: {code: "09.1", description: "Support activities for petroleum and natural gas extraction"},
            NACE_level_1: {code: "B", description: "Mining and quarrying"},
            UK_SIC: {code: "08.99", description: "Other mining and quarrying n.e.c."},
        },
        "Mineral Producing Hereditament - Gas": {
            SCAT: {code: "174", description: "Mineral Producing Hereditament - Gas"},
            CPA: {code: "06.20", description: "Natural gas, liquefied or in gaseous state"},
            ISIC: {code: "0620", description: "Extraction of natural gas"},
            NACE_level_4: {code: "06.20", description: "Extraction of natural gas"},
            NACE_level_3: {code: "07.1", description: "Mining of iron ores"},
            NACE_level_1: {code: "B", description: "Mining and quarrying"},
            UK_SIC: {code: "06.20", description: "Extraction of natural gas"},
        },
        "Mineral Producing Hereditament - Hardrock": {
            SCAT: {code: "175", description: "Mineral Producing Hereditament - Hardrock"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Mineral Producing Hereditament - Inert": {
            SCAT: {code: "176", description: "Mineral Producing Hereditament - Inert"},
            CPA: {code: "08.12", description: "Gravel, sand, clay and kaolin"},
            ISIC: {code: "0810", description: "Quarrying of stone, sand and clay"},
            NACE_level_4: {code: "08.12", description: "Operation of gravel and sand pits and mining of clay and kaolin"},
            NACE_level_3: {code: "08.9", description: "Mining and quarrying not elsewhere classified"},
            NACE_level_1: {code: "B", description: "Mining and quarrying"},
            UK_SIC: {code: "08.12", description: "Operation of gravel and sand pits; mining of clays and kaolin"},
        },
        "Mineral Producing Hereditament - Oil": {
            SCAT: {code: "177", description: "Mineral Producing Hereditament - Oil"},
            CPA: {code: "06.10", description: "Crude petroleum"},
            ISIC: {code: "0610", description: "Extraction of crude petroleum"},
            NACE_level_4: {code: "06.10", description: "Extraction of crude petroleum"},
            NACE_level_3: {code: "06.2", description: "Extraction of natural gas"},
            NACE_level_1: {code: "B", description: "Mining and quarrying"},
            UK_SIC: {code: "06.10", description: "Extraction of crude petroleum"},
        },
        "Mineral Producing Hereditament - Other Mineral Category": {
            SCAT: {code: "178", description: "Mineral Producing Hereditament - Other Mineral Category"},
            CPA: {code: "08.99", description: "Other mining and quarrying products n.e.c."},
            ISIC: {code: "0899", description: "Other mining and quarrying n.e.c."},
            NACE_level_4: {code: "08.99", description: "Other mining and quarrying n.e.c."},
            NACE_level_3: {code: "09.1", description: "Support activities for petroleum and natural gas extraction"},
            NACE_level_1: {code: "B", description: "Mining and quarrying"},
            UK_SIC: {code: "08.99", description: "Other mining and quarrying n.e.c."},
        },
        "Mineral Producing Hereditament - Putrescible": {
            SCAT: {code: "179", description: "Mineral Producing Hereditament - Putrescible"},
            CPA: {code: "08.99", description: "Other mining and quarrying products n.e.c."},
            ISIC: {code: "0899", description: "Other mining and quarrying n.e.c."},
            NACE_level_4: {code: "08.99", description: "Other mining and quarrying n.e.c."},
            NACE_level_3: {code: "09.1", description: "Support activities for petroleum and natural gas extraction"},
            NACE_level_1: {code: "B", description: "Mining and quarrying"},
            UK_SIC: {code: "08.99", description: "Other mining and quarrying n.e.c."},
        },
        "Mineral Producing Hereditament - Sand and Gravel": {
            SCAT: {code: "180", description: "Mineral Producing Hereditament - Sand and Gravel"},
            CPA: {code: "08.12", description: "Gravel, sand, clay and kaolin"},
            ISIC: {code: "0810", description: "Quarrying of stone, sand and clay"},
            NACE_level_4: {code: "08.12", description: "Operation of gravel and sand pits and mining of clay and kaolin"},
            NACE_level_3: {code: "08.9", description: "Mining and quarrying not elsewhere classified"},
            NACE_level_1: {code: "B", description: "Mining and quarrying"},
            UK_SIC: {code: "08.12", description: "Operation of gravel and sand pits; mining of clays and kaolin"},
        },
        "Mineral Producing Hereditament - Sand": {
            SCAT: {code: "181", description: "Mineral Producing Hereditament - Sand"},
            CPA: {code: "08.12", description: "Gravel, sand, clay and kaolin"},
            ISIC: {code: "810", description: "Quarrying of stone, sand and clay"},
            NACE_level_4: {code: "08.12", description: "Operation of gravel and sand pits and mining of clay and kaolin"},
            NACE_level_3: {code: "08.9", description: "Mining and quarrying not elsewhere classified"},
            NACE_level_1: {code: "B", description: "Mining and quarrying"},
            UK_SIC: {code: "08.12", description: "Operation of gravel and sand pits; mining of clays and kaolin"},
        },
        "Mineral Producing Hereditament - Shale Unburnt": {
            SCAT: {code: "182", description: "Mineral Producing Hereditament - Shale Unburnt"},
            CPA: {code: "08.99", description: "Other mining and quarrying products n.e.c."},
            ISIC: {code: "0899", description: "Other mining and quarrying n.e.c."},
            NACE_level_4: {code: "08.99", description: "Other mining and quarrying n.e.c."},
            NACE_level_3: {code: "09.1", description: "Support activities for petroleum and natural gas extraction"},
            NACE_level_1: {code: "B", description: "Mining and quarrying"},
            UK_SIC: {code: "08.99", description: "Other mining and quarrying n.e.c."},
        },
        "Mineral Producing Hereditament - Slate": {
            SCAT: {code: "183", description: "Mineral Producing Hereditament - Slate"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Mineral Producing Hereditament With Batching Plant": {
            SCAT: {code: "184", description: "Mineral Producing Hereditament With Batching Plant"},
            CPA: {code: "08.99", description: "Other mining and quarrying products n.e.c."},
            ISIC: {code: "0899", description: "Other mining and quarrying n.e.c."},
            NACE_level_4: {code: "08.99", description: "Other mining and quarrying n.e.c."},
            NACE_level_3: {code: "09.1", description: "Support activities for petroleum and natural gas extraction"},
            NACE_level_1: {code: "B", description: "Mining and quarrying"},
            UK_SIC: {code: "08.99", description: "Other mining and quarrying n.e.c."},
        },
        "Mineral Producing Hereditament With Coating Plant": {
            SCAT: {code: "185", description: "Mineral Producing Hereditament With Coating Plant"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Mineral Producing Heredtament With Tunnel Kiln": {
            SCAT: {code: "186", description: "Mineral Producing Heredtament With Tunnel Kiln"},
            CPA: {code: "23.32", description: "Bricks, tiles and construction products, in baked clay"},
            ISIC: {code: "2392", description: "Manufacture of clay building materials"},
            NACE_level_4: {code: "23.32", description: "Manufacture of bricks, tiles and construction products, in baked clay"},
            NACE_level_3: {code: "23.4", description: "Manufacture of other porcelain and ceramic products"},
            NACE_level_1: {code: "C", description: "Manufacturing"},
            UK_SIC: {code: "23.32", description: "Manufacture of bricks, tiles and construction products, in baked clay"},
        },
        "MOD Hereditaments": {
            SCAT: {code: "187", description: "MOD Hereditaments"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Model Villages": {
            SCAT: {code: "188", description: "Model Villages"},
            CPA: {code: "93.29", description: "Other amusement and recreation services"},
            ISIC: {code: "9329", description: "Other amusement and recreation activities"},
            NACE_level_4: {code: "93.29", description: "Amusement and recreation activities n.e.c."},
            NACE_level_3: {code: "94.1", description: "Activities of business, employers and professional membership organisations"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
        },
        "Moorings (Floating Hereditaments)": {
            SCAT: {code: "189", description: "Moorings (Floating Hereditaments)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Mortuaries": {
            SCAT: {code: "190", description: "Mortuaries"},
            CPA: {code: "96.30", description: "Funeral and related services"},
            ISIC: {code: "9630", description: "Funeral and related activities"},
            NACE_level_4: {code: "96.30", description: "Funeral and related activities"},
            NACE_level_3: {code: "96.4", description: "Intermediation service activities for personal services"},
            NACE_level_1: {code: "T", description: "Other services activities"},
            UK_SIC: {code: "96.03", description: "Funeral and related activities"},
        },
        "Motor Racetracks": {
            SCAT: {code: "191", description: "Motor Racetracks"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Motor Vehicle Works": {
            SCAT: {code: "192", description: "Motor Vehicle Works"},
            CPA: {code: "29.10", description: "Motor vehicles"},
            ISIC: {code: "2910", description: "Manufacture of motor vehicles"},
            NACE_level_4: {code: "29.10", description: "Manufacture of motor vehicles"},
            NACE_level_3: {code: "29.2", description: "Manufacture of bodies and coachwork for motor vehicles; manufacture of trailers and semi-trailers"},
            NACE_level_1: {code: "C", description: "Manufacturing"},
            UK_SIC: {code: "29.10", description: "Manufacture of motor vehicles"},
        },
        "Motorway Service Area Let Outs": {
            SCAT: {code: "193", description: "Motorway Service Area Let Outs"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Motorway and Major Road Service Areas": {
            SCAT: {code: "194", description: "Motorway and Major Road Service Areas"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Museums and Art Galleries (Contractors)": {
            SCAT: {code: "195", description: "Museums and Art Galleries (Contractors)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Museums and Art Galleries (NonContractors)": {
            SCAT: {code: "196", description: "Museums and Art Galleries (NonContractors)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Navy Hereditaments": {
            SCAT: {code: "197", description: "Navy Hereditaments"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Newspaper Printing Works (National Scheme)": {
            SCAT: {code: "198", description: "Newspaper Printing Works (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Night Clubs & Discotheques": {
            SCAT: {code: "199", description: "Night Clubs & Discotheques"},
            CPA: {code: "93.29", description: "Other amusement and recreation services"},
            ISIC: {code: "9329", description: "Other amusement and recreation activities"},
            NACE_level_4: {code: "93.29", description: "Amusement and recreation activities n.e.c."},
            NACE_level_3: {code: "94.1", description: "Activities of business, employers and professional membership organisations"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
        },
        "Nuclear Establishments": {
            SCAT: {code: "200", description: "Nuclear Establishments"},
            CPA: {code: "24.46", description: "Natural uranium and its compounds; alloys, dispersions, ceramic products and mixtures containing natural uranium or natural uranium compounds"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "24.46", description: "Processing of nuclear fuel"},
            NACE_level_3: {code: "24.5", description: "Casting of metals"},
            NACE_level_1: {code: "C", description: "Manufacturing"},
            UK_SIC: {code: "24.46", description: "Processing of nuclear fuel"},
        },
        "Nursing Homes (Inc. Old Peoples Homes)": {
            SCAT: {code: "201", description: "Nursing Homes (Inc. Old Peoples Homes)"},
            CPA: {code: "87.10", description: "Residential nursing care services"},
            ISIC: {code: "8710", description: "Residential nursing care activities"},
            NACE_level_4: {code: "87.10", description: "Residential nursing care activities"},
            NACE_level_3: {code: "87.2", description: "Residential care activities for persons living with or having a diagnosis of a mental illness or substance abuse"},
            NACE_level_1: {code: "R", description: "Human health and social work activities"},
            UK_SIC: {code: "87.10", description: "Residential nursing care activities"},
        },
        "Observatories": {
            SCAT: {code: "202", description: "Observatories"},
            CPA: {code: "72.10", description: "Research and development services on natural sciences, engineering and technology"},
            ISIC: {code: "7210", description: "Research and experimental development on natural sciences and engineering"},
            NACE_level_4: {code: "72.10", description: "Research and experimental development on natural sciences and engineering"},
            NACE_level_3: {code: "72.2", description: "Research and experimental development on social sciences and humanities"},
            NACE_level_1: {code: "N", description: "Professional, scientific and technical activities"},
            UK_SIC: {code: "72.19", description: "Other research and experimental development on natural sciences and engineering"},
        },
        "Offices (Inc Computer Centres)": {
            SCAT: {code: "203", description: "Offices (Inc Computer Centres)"},
            CPA: {code: "70.20", description: "Business and other management consultancy services"},
            ISIC: {code: "7020", description: "Business and other management consultancy activities"},
            NACE_level_4: {code: "70.20", description: "Business and other management consultancy activities"},
            NACE_level_3: {code: "71.1", description: "Architectural and engineering activities and related technical consultancy"},
            NACE_level_1: {code: "N", description: "Professional, scientific and technical activities"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Offices (Headquarters/Institutional)": {
            SCAT: {code: "204", description: "Offices (Headquarters/Institutional)"},
            CPA: {code: "70.10", description: "Services of head offices"},
            ISIC: {code: "7010", description: "Activities of head offices"},
            NACE_level_4: {code: "70.10", description: "Activities of head offices"},
            NACE_level_3: {code: "70.2", description: "Business and other management consultancy activities"},
            NACE_level_1: {code: "N", description: "Professional, scientific and technical activities"},
            UK_SIC: {code: "70.10", description: "Activities of head offices"},
        },
        "Oil Refineries": {
            SCAT: {code: "205", description: "Oil Refineries"},
            CPA: {code: "19.20", description: "Refined petroleum products and fossil fuel products"},
            ISIC: {code: "1920", description: "Manufacture of refined petroleum products; manufacture of fossil fuel products"},
            NACE_level_4: {code: "19.20", description: "Manufacture of refined petroleum products and fossil fuel products"},
            NACE_level_3: {code: "20.1", description: "Manufacture of basic chemicals, fertilisers and nitrogen compounds, plastics and synthetic rubber in primary forms"},
            NACE_level_1: {code: "C", description: "Manufacturing"},
            UK_SIC: {code: "19.20", description: "Manufacture of refined petroleum products"},
        },
        "Oxbridge Colleges": {
            SCAT: {code: "206", description: "Oxbridge Colleges"},
            CPA: {code: "85.40", description: "Tertiary education services"},
            ISIC: {code: "8540", description: "Tertiary education"},
            NACE_level_4: {code: "85.40", description: "Tertiary education"},
            NACE_level_3: {code: "85.5", description: "Other education"},
            NACE_level_1: {code: "Q", description: "Education"},
            UK_SIC: {code: "85.42", description: "Tertiary education"},
        },
        "Paper Mills": {
            SCAT: {code: "207", description: "Paper Mills"},
            CPA: {code: "17.12", description: "Paper and paperboard"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "17.12", description: "Manufacture of paper and paperboard"},
            NACE_level_3: {code: "17.2", description: "Manufacture of articles of paper and paperboard"},
            NACE_level_1: {code: "C", description: "Manufacturing"},
            UK_SIC: {code: "17.12", description: "Manufacture of paper and paperboard"},
        },
        "Pavilions": {
            SCAT: {code: "208", description: "Pavilions"},
            CPA: {code: "93.29", description: "Other amusement and recreation services"},
            ISIC: {code: "9329", description: "Other amusement and recreation activities"},
            NACE_level_4: {code: "93.29", description: "Amusement and recreation activities n.e.c."},
            NACE_level_3: {code: "94.1", description: "Activities of business, employers and professional membership organisations"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
        },
        "Petrol Filling Stations (National Scheme)": {
            SCAT: {code: "209", description: "Petrol Filling Stations (National Scheme)"},
            CPA: {code: "47.30", description: "Retail sale services of automotive fuel"},
            ISIC: {code: "4730", description: "Retail sale of automotive fuel"},
            NACE_level_4: {code: "47.30", description: "Retail sale of automotive fuel"},
            NACE_level_3: {code: "47.4", description: "Retail sale of information and communication equipment"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "47.30", description: "Retail sale of automotive fuel in specialised stores"},
        },
        "Pharmacies": {
            SCAT: {code: "210", description: "Pharmacies"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Photographic Booths": {
            SCAT: {code: "211", description: "Photographic Booths"},
            CPA: {code: "74.20", description: "Photographic services"},
            ISIC: {code: "7420", description: "Photographic activities"},
            NACE_level_4: {code: "74.20", description: "Photographic activities"},
            NACE_level_3: {code: "74.3", description: "Translation and interpretation activities"},
            NACE_level_1: {code: "N", description: "Professional, scientific and technical activities"},
            UK_SIC: {code: "74.20", description: "Photographic activities"},
        },
        "Pipelines": {
            SCAT: {code: "212", description: "Pipelines"},
            CPA: {code: "49.50", description: "Transport services via pipeline"},
            ISIC: {code: "4930", description: "Transport via pipeline"},
            NACE_level_4: {code: "49.50", description: "Transport via pipeline"},
            NACE_level_3: {code: "50.1", description: "Sea and coastal passenger water transport"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "49.50", description: "Transport via pipeline"},
        },
        "Pleasure Piers": {
            SCAT: {code: "213", description: "Pleasure Piers"},
            CPA: {code: "93.29", description: "Other amusement and recreation services"},
            ISIC: {code: "9329", description: "Other amusement and recreation activities"},
            NACE_level_4: {code: "93.29", description: "Amusement and recreation activities n.e.c."},
            NACE_level_3: {code: "94.1", description: "Activities of business, employers and professional membership organisations"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
        },
        "Point to Point and Eventing Courses": {
            SCAT: {code: "214", description: "Point to Point and Eventing Courses"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Police Stations": {
            SCAT: {code: "215", description: "Police Stations"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Polo Grounds": {
            SCAT: {code: "216", description: "Polo Grounds"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Post Office Sorting Centres": {
            SCAT: {code: "217", description: "Post Office Sorting Centres"},
            CPA: {code: "53.20", description: "Other postal and courier services"},
            ISIC: {code: "5320", description: "Courier activities"},
            NACE_level_4: {code: "53.20", description: "Other postal and courier activities"},
            NACE_level_3: {code: "53.3", description: "Intermediation service activities for postal and courier activities"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "53.20", description: "Other postal and courier activities"},
        },
        "Potteries": {
            SCAT: {code: "218", description: "Potteries"},
            CPA: {code: "23.45", description: "Other ceramic products"},
            ISIC: {code: "2393", description: "Manufacture of other porcelain and ceramic products"},
            NACE_level_4: {code: "23.45", description: "Manufacture of other ceramic products"},
            NACE_level_3: {code: "23.5", description: "Manufacture of cement, lime and plaster"},
            NACE_level_1: {code: "C", description: "Manufacturing"},
            UK_SIC: {code: "23.49", description: "Manufacture of other ceramic products"},
        },
        "Power Generators": {
            SCAT: {code: "219", description: "Power Generators"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Prison Service Hereditaments": {
            SCAT: {code: "220", description: "Prison Service Hereditaments"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Property used for Secondary Aggregate Processing": {
            SCAT: {code: "221", description: "Property used for Secondary Aggregate Processing"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Provender Mills (National Scheme)": {
            SCAT: {code: "222", description: "Provender Mills (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Public and Independent Schools (National Scheme)": {
            SCAT: {code: "223", description: "Public and Independent Schools (National Scheme)"},
            CPA: {code: "85.59", description: "Other education services n.e.c."},
            ISIC: {code: "8559", description: "Other education n.e.c."},
            NACE_level_4: {code: "85.59", description: "Other education n.e.c."},
            NACE_level_3: {code: "85.6", description: "Educational support activities"},
            NACE_level_1: {code: "Q", description: "Education"},
            UK_SIC: {code: "85.59", description: "Other education n.e.c."},
        },
        "Public Conveniences (National Scheme)": {
            SCAT: {code: "224", description: "Public Conveniences (National Scheme)"},
            CPA: {code: "93.29", description: "Other amusement and recreation services"},
            ISIC: {code: "9329", description: "Other amusement and recreation activities"},
            NACE_level_4: {code: "93.29", description: "Amusement and recreation activities n.e.c."},
            NACE_level_3: {code: "94.1", description: "Activities of business, employers and professional membership organisations"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
        },
        "Public Halls": {
            SCAT: {code: "225", description: "Public Halls"},
            CPA: {code: "93.29", description: "Other amusement and recreation services"},
            ISIC: {code: "9329", description: "Other amusement and recreation activities"},
            NACE_level_4: {code: "93.29", description: "Amusement and recreation activities n.e.c."},
            NACE_level_3: {code: "94.1", description: "Activities of business, employers and professional membership organisations"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
        },
        "Public Houses/Pub Restaurants (National Scheme)": {
            SCAT: {code: "226", description: "Public Houses/Pub Restaurants (National Scheme)"},
            CPA: {code: "56.30", description: "Beverage serving services"},
            ISIC: {code: "5630", description: "Beverage serving activities"},
            NACE_level_4: {code: "56.30", description: "Beverage serving activities"},
            NACE_level_3: {code: "56.4", description: "Intermediation service activities for food and beverage services activities"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "56.30", description: "Beverage serving activities"},
        },
        "Public Houses/Pub Restaurants (Inc. Lodge) (National Scheme)": {
            SCAT: {code: "227", description: "Public Houses/Pub Restaurants (Inc. Lodge) (National Scheme)"},
            CPA: {code: "56.30", description: "Beverage serving services"},
            ISIC: {code: "5630", description: "Beverage serving activities"},
            NACE_level_4: {code: "56.30", description: "Beverage serving activities"},
            NACE_level_3: {code: "56.4", description: "Intermediation service activities for food and beverage services activities"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "56.30", description: "Beverage serving activities"},
        },
        "Public Telephone Kiosks (National Scheme)": {
            SCAT: {code: "228", description: "Public Telephone Kiosks (National Scheme)"},
            CPA: {code: "61.90", description: "Other telecommunication services"},
            ISIC: {code: "6190", description: "Other telecommunication activities"},
            NACE_level_4: {code: "61.90", description: "Other telecommunication activities"},
            NACE_level_3: {code: "62.1", description: "Computer programming activities"},
            NACE_level_1: {code: "K", description: "Telecommunication, computer programming, consulting, computing infrastructure and other information service activities"},
            UK_SIC: {code: "61.90", description: "Other telecommunications activities"},
        },
        "Racing Stables (National Scheme)": {
            SCAT: {code: "229", description: "Racing Stables (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "RAF Hereditaments": {
            SCAT: {code: "230", description: "RAF Hereditaments"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Railways & Tramways (Non Leisure)": {
            SCAT: {code: "231", description: "Railways & Tramways (Non Leisure)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Recording Studios": {
            SCAT: {code: "232", description: "Recording Studios"},
            CPA: {code: "59.20", description: "Sound recording and music publishing services"},
            ISIC: {code: "5920", description: "Sound recording and music publishing activities"},
            NACE_level_4: {code: "59.20", description: "Sound recording and music publishing activities"},
            NACE_level_3: {code: "60.1", description: "Radio broadcasting and audio distribution activities"},
            NACE_level_1: {code: "J", description: "Publishing, broadcasting, and content production and distribution activities"},
            UK_SIC: {code: "59.20", description: "Sound recording and music publishing activities"},
        },
        "Refuse Destructor Plants/Disposal Sites": {
            SCAT: {code: "233", description: "Refuse Destructor Plants/Disposal Sites"},
            CPA: {code: "38.33", description: "Other waste disposal services"},
            ISIC: {code: "3830", description: "Materials and other waste recovery"},
            NACE_level_4: {code: "38.33", description: "Other waste disposal"},
            NACE_level_3: {code: "39.0", description: "Remediation activities and other waste management service activities"},
            NACE_level_1: {code: "E", description: "Water supply; sewerage; waste managment and remediation activities"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Restaurants": {
            SCAT: {code: "234", description: "Restaurants"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Retail Warehouses and Foodstores": {
            SCAT: {code: "235", description: "Retail Warehouses and Foodstores"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Riding Schools & Livery Stables (National Scheme)": {
            SCAT: {code: "236", description: "Riding Schools & Livery Stables (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Rifle and Weapons Ranges": {
            SCAT: {code: "237", description: "Rifle and Weapons Ranges"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Roadside Restaurants (National Scheme)": {
            SCAT: {code: "238", description: "Roadside Restaurants (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Roller Skating Rinks": {
            SCAT: {code: "239", description: "Roller Skating Rinks"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Royal Palaces": {
            SCAT: {code: "240", description: "Royal Palaces"},
            CPA: {code: "91.22", description: "Historical site and monument services"},
            ISIC: {code: "9122", description: "Historical site and monument activities"},
            NACE_level_4: {code: "91.22", description: "Historical site and monument activities"},
            NACE_level_3: {code: "91.3", description: "Conservation, restoration and other support activities for cultural heritage"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "91.03", description: "Operation of historical sites and buildings and similar visitor attractions"},
        },
        "Rugby League Grounds": {
            SCAT: {code: "241", description: "Rugby League Grounds"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Rugby Union Grounds": {
            SCAT: {code: "242", description: "Rugby Union Grounds"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Sales Kiosks": {
            SCAT: {code: "243", description: "Sales Kiosks"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Scrap Metal/Breakers Yard": {
            SCAT: {code: "244", description: "Scrap Metal/Breakers Yard"},
            CPA: {code: "32.99", description: "Other manufactured goods n.e.c."},
            ISIC: {code: "3290", description: "Other manufacturing n.e.c."},
            NACE_level_4: {code: "32.99", description: "Other manufacturing n.e.c."},
            NACE_level_3: {code: "33.1", description: "Repair and maintenance of fabricated metal products, machinery and equipment"},
            NACE_level_1: {code: "C", description: "Manufacturing"},
            UK_SIC: {code: "32.99", description: "Other manufacturing n.e.c."},
        },
        "Sea Dredged Aggregate Processing Plants & Depots": {
            SCAT: {code: "245", description: "Sea Dredged Aggregate Processing Plants & Depots"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Sewage Works (National Scheme)": {
            SCAT: {code: "246", description: "Sewage Works (National Scheme)"},
            CPA: {code: "37.00", description: "Sewerage services; sewage sludge"},
            ISIC: {code: "3700", description: "Sewerage"},
            NACE_level_4: {code: "37.00", description: "Sewerage"},
            NACE_level_3: {code: "38.1", description: "Waste collection"},
            NACE_level_1: {code: "E", description: "Water supply; sewerage; waste managment and remediation activities"},
            UK_SIC: {code: "37.00", description: "Sewerage"},
        },
        "Ship Building Yards": {
            SCAT: {code: "247", description: "Ship Building Yards"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Ship Repair Yards": {
            SCAT: {code: "248", description: "Ship Repair Yards"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Shops": {
            SCAT: {code: "249", description: "Shops"},
            CPA: {code: "47.27", description: "Retail sale services of other food"},
            ISIC: {code: "4719", description: "Other non-specialized retail sale"},
            NACE_level_4: {code: "47.12", description: "Other non-specialised retail sale"},
            NACE_level_3: {code: "47.2", description: "Retail sale of food, beverages and tobacco"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Showhouses (National Scheme)": {
            SCAT: {code: "250", description: "Showhouses (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Showrooms": {
            SCAT: {code: "251", description: "Showrooms"},
            CPA: {code: "47.27", description: "Retail sale services of other food"},
            ISIC: {code: "4719", description: "Other non-specialized retail sale"},
            NACE_level_4: {code: "47.12", description: "Other non-specialised retail sale"},
            NACE_level_3: {code: "47.2", description: "Retail sale of food, beverages and tobacco"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Ski Centres": {
            SCAT: {code: "252", description: "Ski Centres"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Snooker Halls/Clubs": {
            SCAT: {code: "253", description: "Snooker Halls/Clubs"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Speedway Racetracks": {
            SCAT: {code: "254", description: "Speedway Racetracks"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Spoil Heap Workings": {
            SCAT: {code: "255", description: "Spoil Heap Workings"},
            CPA: {code: "08.99", description: "Other mining and quarrying products n.e.c."},
            ISIC: {code: "0899", description: "Other mining and quarrying n.e.c."},
            NACE_level_4: {code: "08.99", description: "Other mining and quarrying n.e.c."},
            NACE_level_3: {code: "09.1", description: "Support activities for petroleum and natural gas extraction"},
            NACE_level_1: {code: "B", description: "Mining and quarrying"},
            UK_SIC: {code: "08.99", description: "Other mining and quarrying n.e.c."},
        },
        "Sporting Rights": {
            SCAT: {code: "256", description: "Sporting Rights"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Sports & Leisure Centres (LA) (Dry Only) (National Scheme)": {
            SCAT: {code: "257", description: "Sports & Leisure Centres (LA) (Dry Only) (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Sports & Leisure Centres (LA) (Wet & Dry) (National Scheme)": {
            SCAT: {code: "258", description: "Sports & Leisure Centres (LA) (Wet & Dry) (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Sports & Leisure Centres (Private)(Dry Only)": {
            SCAT: {code: "259", description: "Sports & Leisure Centres (Private)(Dry Only)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Sports & Leisure Centres (Private)(Wet & Dry)": {
            SCAT: {code: "260", description: "Sports & Leisure Centres (Private)(Wet & Dry)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Sports Grounds": {
            SCAT: {code: "261", description: "Sports Grounds"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Sports Stadia": {
            SCAT: {code: "262", description: "Sports Stadia"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Squash Courts": {
            SCAT: {code: "263", description: "Squash Courts"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Stables and Loose Boxes": {
            SCAT: {code: "264", description: "Stables and Loose Boxes"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Stately Homes & Historic Houses (National Scheme)": {
            SCAT: {code: "265", description: "Stately Homes & Historic Houses (National Scheme)"},
            CPA: {code: "91.22", description: "Historical site and monument services"},
            ISIC: {code: "9122", description: "Historical site and monument activities"},
            NACE_level_4: {code: "91.22", description: "Historical site and monument activities"},
            NACE_level_3: {code: "91.3", description: "Conservation, restoration and other support activities for cultural heritage"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "91.03", description: "Operation of historical sites and buildings and similar visitor attractions"},
        },
        "Station Let Outs": {
            SCAT: {code: "266", description: "Station Let Outs"},
            CPA: {code: "68.20", description: "Rental and operating services of own or leased real estate"},
            ISIC: {code: "6821", description: "Intermediation service activities for real estate"},
            NACE_level_4: {code: "68.20", description: "Rental and operating of own or leased real estate"},
            NACE_level_3: {code: "68.3", description: "Real estate activities on a fee or contract basis"},
            NACE_level_1: {code: "M", description: "Real estate activities"},
            UK_SIC: {code: "68.20", description: "Renting and operating of own or leased real estate"},
        },
        "Storage Depots": {
            SCAT: {code: "267", description: "Storage Depots"},
            CPA: {code: "52.10", description: "Warehousing and storage services"},
            ISIC: {code: "5210", description: "Warehousing and storage"},
            NACE_level_4: {code: "52.10", description: "Warehousing and storage"},
            NACE_level_3: {code: "52.2", description: "Support activities for transportation"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "52.10", description: "Warehousing and storage"},
        },
        "Stores": {
            SCAT: {code: "268", description: "Stores"},
            CPA: {code: "47.27", description: "Retail sale services of other food"},
            ISIC: {code: "4719", description: "Other non-specialized retail sale"},
            NACE_level_4: {code: "47.12", description: "Other non-specialised retail sale"},
            NACE_level_3: {code: "47.2", description: "Retail sale of food, beverages and tobacco"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Stud Farms": {
            SCAT: {code: "269", description: "Stud Farms"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Studios": {
            SCAT: {code: "270", description: "Studios"},
            CPA: {code: "96.99", description: "Other personal services n.e.c."},
            ISIC: {code: "9690", description: "Other personal service activities n.e.c."},
            NACE_level_4: {code: "96.99", description: "Other personal service activities n.e.c."},
            NACE_level_3: {code: "97.0", description: "Activities of households as employers of domestic personnel"},
            NACE_level_1: {code: "T", description: "Other services activities"},
            UK_SIC: {code: "96.09", description: "Other personal service activities n.e.c."},
        },
        "Surgeries, Clinics, Health Centre (incl Dentists etc)": {
            SCAT: {code: "271", description: "Surgeries, Clinics, Health Centre (incl Dentists etc)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Swimming Pools (Local Authority)": {
            SCAT: {code: "272", description: "Swimming Pools (Local Authority)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Swimming Pools (Private)": {
            SCAT: {code: "273", description: "Swimming Pools (Private)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Tanneries": {
            SCAT: {code: "274", description: "Tanneries"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Telecommunications Cable Networks (National Scheme)": {
            SCAT: {code: "275", description: "Telecommunications Cable Networks (National Scheme)"},
            CPA: {code: "61.10", description: "Wired, wireless, and satellite telecommunication services"},
            ISIC: {code: "6110", description: "Wired, wireless, and satellite telecommunication activities"},
            NACE_level_4: {code: "61.10", description: "Wired, wireless, and satellite telecommunication activities"},
            NACE_level_3: {code: "61.2", description: "Telecommunication reselling activities and intermediation service activities for telecommunication"},
            NACE_level_1: {code: "K", description: "Telecommunication, computer programming, consulting, computing infrastructure and other information service activities"},
            UK_SIC: {code: "61.10", description: "Wired telecommunications activities"},
        },
        "Telecommunications Switching Centres": {
            SCAT: {code: "276", description: "Telecommunications Switching Centres"},
            CPA: {code: "61.10", description: "Wired, wireless, and satellite telecommunication services"},
            ISIC: {code: "6110", description: "Wired, wireless, and satellite telecommunication activities"},
            NACE_level_4: {code: "61.10", description: "Wired, wireless, and satellite telecommunication activities"},
            NACE_level_3: {code: "61.2", description: "Telecommunication reselling activities and intermediation service activities for telecommunication"},
            NACE_level_1: {code: "K", description: "Telecommunication, computer programming, consulting, computing infrastructure and other information service activities"},
            UK_SIC: {code: "61.10", description: "Wired telecommunications activities"},
        },
        "Tennis Centres": {
            SCAT: {code: "277", description: "Tennis Centres"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Tennis Courts/Clubs": {
            SCAT: {code: "278", description: "Tennis Courts/Clubs"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Theatres (National Scheme)": {
            SCAT: {code: "279", description: "Theatres (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Theme Parks": {
            SCAT: {code: "280", description: "Theme Parks"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Timeshare Complexes (National Scheme)": {
            SCAT: {code: "281", description: "Timeshare Complexes (National Scheme)"},
            CPA: {code: "55.20", description: "Holiday and other short-stay accommodation services"},
            ISIC: {code: "5520", description: "Other short term accommodation activities"},
            NACE_level_4: {code: "55.20", description: "Holiday and other short-stay accommodation"},
            NACE_level_3: {code: "55.3", description: "Camping grounds and recreational vehicle parks"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "55.20", description: "Holiday and other short-stay accommodation"},
        },
        "Tolls (Ferries, Roads And Bridges)": {
            SCAT: {code: "282", description: "Tolls (Ferries, Roads And Bridges)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Totalisators On Horse Racecourses": {
            SCAT: {code: "283", description: "Totalisators On Horse Racecourses"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Tourist Attractions/Dark Rides": {
            SCAT: {code: "284", description: "Tourist Attractions/Dark Rides"},
            CPA: {code: "93.29", description: "Other amusement and recreation services"},
            ISIC: {code: "9329", description: "Other amusement and recreation activities"},
            NACE_level_4: {code: "93.29", description: "Amusement and recreation activities n.e.c."},
            NACE_level_3: {code: "94.1", description: "Activities of business, employers and professional membership organisations"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
        },
        "Training Centre (Non Residential)": {
            SCAT: {code: "285", description: "Training Centre (Non Residential)"},
            CPA: {code: "85.59", description: "Other education services n.e.c."},
            ISIC: {code: "8559", description: "Other education n.e.c."},
            NACE_level_4: {code: "85.59", description: "Other education n.e.c."},
            NACE_level_3: {code: "85.6", description: "Educational support activities"},
            NACE_level_1: {code: "Q", description: "Education"},
            UK_SIC: {code: "85.59", description: "Other education n.e.c."},
        },
        "Training Centre (Residential)": {
            SCAT: {code: "286", description: "Training Centre (Residential)"},
            CPA: {code: "85.59", description: "Other education services n.e.c."},
            ISIC: {code: "8559", description: "Other education n.e.c."},
            NACE_level_4: {code: "85.59", description: "Other education n.e.c."},
            NACE_level_3: {code: "85.6", description: "Educational support activities"},
            NACE_level_1: {code: "Q", description: "Education"},
            UK_SIC: {code: "85.59", description: "Other education n.e.c."},
        },
        "Truck Stops": {
            SCAT: {code: "287", description: "Truck Stops"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Universities (Excluding Oxbridge) (National Scheme)": {
            SCAT: {code: "288", description: "Universities (Excluding Oxbridge) (National Scheme)"},
            CPA: {code: "85.40", description: "Tertiary education services"},
            ISIC: {code: "8540", description: "Tertiary education"},
            NACE_level_4: {code: "85.40", description: "Tertiary education"},
            NACE_level_3: {code: "85.5", description: "Other education"},
            NACE_level_1: {code: "Q", description: "Education"},
            UK_SIC: {code: "85.42", description: "Tertiary education"},
        },
        "Vehicle Repair Workshops & Garages": {
            SCAT: {code: "289", description: "Vehicle Repair Workshops & Garages"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Vehicle Testing Centres (With Test Tracks)": {
            SCAT: {code: "290", description: "Vehicle Testing Centres (With Test Tracks)"},
            CPA: {code: "71.20", description: "Technical testing and analysis services"},
            ISIC: {code: "7120", description: "Technical testing and analysis"},
            NACE_level_4: {code: "71.20", description: "Technical testing and analysis"},
            NACE_level_3: {code: "72.1", description: "Research and experimental development on natural sciences and engineering"},
            NACE_level_1: {code: "N", description: "Professional, scientific and technical activities"},
            UK_SIC: {code: "71.20", description: "Technical testing and analysis"},
        },
        "Vehicle Testing Centres (Without Test Tracks)": {
            SCAT: {code: "291", description: "Vehicle Testing Centres (Without Test Tracks)"},
            CPA: {code: "71.20", description: "Technical testing and analysis services"},
            ISIC: {code: "7120", description: "Technical testing and analysis"},
            NACE_level_4: {code: "71.20", description: "Technical testing and analysis"},
            NACE_level_3: {code: "72.1", description: "Research and experimental development on natural sciences and engineering"},
            NACE_level_1: {code: "N", description: "Professional, scientific and technical activities"},
            UK_SIC: {code: "71.20", description: "Technical testing and analysis"},
        },
        "Veterinary Clinics / Animal Clinics": {
            SCAT: {code: "292", description: "Veterinary Clinics / Animal Clinics"},
            CPA: {code: "75.00", description: "Veterinary services"},
            ISIC: {code: "7500", description: "Veterinary activities"},
            NACE_level_4: {code: "75.00", description: "Veterinary activities"},
            NACE_level_3: {code: "77.1", description: "Rental and leasing of motor vehicles"},
            NACE_level_1: {code: "N", description: "Professional, scientific and technical activities"},
            UK_SIC: {code: "75.00", description: "Veterinary activities"},
        },
        "Village Halls, Scout Huts, Cadet Huts Etc": {
            SCAT: {code: "293", description: "Village Halls, Scout Huts, Cadet Huts Etc"},
            CPA: {code: "94.99", description: "Services furnished by other membership organisations n.e.c."},
            ISIC: {code: "9499", description: "Activities of other membership organizations n.e.c."},
            NACE_level_4: {code: "94.99", description: "Activities of other membership organisations n.e.c."},
            NACE_level_3: {code: "95.1", description: "Repair and maintenance of computers and communication equipment"},
            NACE_level_1: {code: "T", description: "Other services activities"},
            UK_SIC: {code: "94.99", description: "Activities of other membership organisations n.e.c."},
        },
        "Vineyards/Wineries": {
            SCAT: {code: "294", description: "Vineyards/Wineries"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Wafer Fabrications (National Scheme)": {
            SCAT: {code: "295", description: "Wafer Fabrications (National Scheme)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "War Games Courses/Misc Ag. Use": {
            SCAT: {code: "296", description: "War Games Courses/Misc Ag. Use"},
            CPA: {code: "93.29", description: "Other amusement and recreation services"},
            ISIC: {code: "9329", description: "Other amusement and recreation activities"},
            NACE_level_4: {code: "93.29", description: "Amusement and recreation activities n.e.c."},
            NACE_level_3: {code: "94.1", description: "Activities of business, employers and professional membership organisations"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
        },
        "Waste Incinerator Plants": {
            SCAT: {code: "297", description: "Waste Incinerator Plants"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Waste Recycling Plants": {
            SCAT: {code: "298", description: "Waste Recycling Plants"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Waste Transfer Stations": {
            SCAT: {code: "299", description: "Waste Transfer Stations"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Water Undertakings (Non-Statutory)": {
            SCAT: {code: "300", description: "Water Undertakings (Non-Statutory)"},
            CPA: {code: "36.00", description: "Natural water; water treatment and supply services"},
            ISIC: {code: "3600", description: "Water collection, treatment and supply"},
            NACE_level_4: {code: "36.00", description: "Water collection, treatment and supply"},
            NACE_level_3: {code: "37.0", description: "Sewerage"},
            NACE_level_1: {code: "E", description: "Water supply; sewerage; waste managment and remediation activities"},
            UK_SIC: {code: "36.00", description: "Water collection, treatment and supply"},
        },
        "Wholesale Warehouses": {
            SCAT: {code: "301", description: "Wholesale Warehouses"},
            CPA: {code: "52.10", description: "Warehousing and storage services"},
            ISIC: {code: "5210", description: "Warehousing and storage"},
            NACE_level_4: {code: "52.10", description: "Warehousing and storage"},
            NACE_level_3: {code: "52.2", description: "Support activities for transportation"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "52.10", description: "Warehousing and storage"},
        },
        "Windmills": {
            SCAT: {code: "302", description: "Windmills"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Wine Bars": {
            SCAT: {code: "303", description: "Wine Bars"},
            CPA: {code: "56.30", description: "Beverage serving services"},
            ISIC: {code: "5630", description: "Beverage serving activities"},
            NACE_level_4: {code: "56.30", description: "Beverage serving activities"},
            NACE_level_3: {code: "56.4", description: "Intermediation service activities for food and beverage services activities"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "56.30", description: "Beverage serving activities"},
        },
        "Zoos & Safari Parks": {
            SCAT: {code: "304", description: "Zoos & Safari Parks"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Abattoirs & Slaughter Houses (Contractors Valuation)": {
            SCAT: {code: "400", description: "Abattoirs & Slaughter Houses (Contractors Valuation)"},
            CPA: {code: "10.13", description: "Preserves and preparations of meat, meat offal or blood"},
            ISIC: {code: "1010", description: "Processing and preserving of meat"},
            NACE_level_4: {code: "10.13", description: "Production of meat and poultry meat products"},
            NACE_level_3: {code: "10.2", description: "Processing and preserving of fish, crustaceans and molluscs"},
            NACE_level_1: {code: "C", description: "Manufacturing"},
            UK_SIC: {code: "10.13", description: "Production of meat and poultry meat products"},
        },
        "Abattoirs & Slaughter Houses (Rental Valuation)": {
            SCAT: {code: "401", description: "Abattoirs & Slaughter Houses (Rental Valuation)"},
            CPA: {code: "10.13", description: "Preserves and preparations of meat, meat offal or blood"},
            ISIC: {code: "1010", description: "Processing and preserving of meat"},
            NACE_level_4: {code: "10.13", description: "Production of meat and poultry meat products"},
            NACE_level_3: {code: "10.2", description: "Processing and preserving of fish, crustaceans and molluscs"},
            NACE_level_1: {code: "C", description: "Manufacturing"},
            UK_SIC: {code: "10.13", description: "Production of meat and poultry meat products"},
        },
        "Agricultural Research Centres": {
            SCAT: {code: "402", description: "Agricultural Research Centres"},
            CPA: {code: "72.10", description: "Research and development services on natural sciences, engineering and technology"},
            ISIC: {code: "7210", description: "Research and experimental development on natural sciences and engineering"},
            NACE_level_4: {code: "72.10", description: "Research and experimental development on natural sciences and engineering"},
            NACE_level_3: {code: "72.2", description: "Research and experimental development on social sciences and humanities"},
            NACE_level_1: {code: "N", description: "Professional, scientific and technical activities"},
            UK_SIC: {code: "72.19", description: "Other research and experimental development on natural sciences and engineering"},
        },
        "Aquaria": {
            SCAT: {code: "403", description: "Aquaria"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Archives": {
            SCAT: {code: "404", description: "Archives"},
            CPA: {code: "91.12", description: "Archive services"},
            ISIC: {code: "9112", description: "Archives activities"},
            NACE_level_4: {code: "91.12", description: "Archive activities"},
            NACE_level_3: {code: "91.2", description: "Museum, collection, historical site and monument activities"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "91.01", description: "Library and archive activities"},
        },
        "Boathouses": {
            SCAT: {code: "405", description: "Boathouses"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Bus Garages (Contractors Valuation)": {
            SCAT: {code: "406", description: "Bus Garages (Contractors Valuation)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Bus Garages (Rental Valuation)": {
            SCAT: {code: "407", description: "Bus Garages (Rental Valuation)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Business Units": {
            SCAT: {code: "408", description: "Business Units"},
            CPA: {code: "82.10", description: "Office administrative and support services"},
            ISIC: {code: "8210", description: "Office administrative and support activities"},
            NACE_level_4: {code: "82.10", description: "Office administrative and support activities"},
            NACE_level_3: {code: "82.2", description: "Activities of call centres"},
            NACE_level_1: {code: "O", description: "Administrative and support service activities"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Cafes": {
            SCAT: {code: "409", description: "Cafes"},
            CPA: {code: "56.30", description: "Beverage serving services"},
            ISIC: {code: "5630", description: "Beverage serving activities"},
            NACE_level_4: {code: "56.30", description: "Beverage serving activities"},
            NACE_level_3: {code: "56.4", description: "Intermediation service activities for food and beverage services activities"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "56.30", description: "Beverage serving activities"},
        },
        "Changing Rooms": {
            SCAT: {code: "410", description: "Changing Rooms"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Coastguard Stations": {
            SCAT: {code: "411", description: "Coastguard Stations"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Cold Stores (Contractors Valuation)": {
            SCAT: {code: "412", description: "Cold Stores (Contractors Valuation)"},
            CPA: {code: "52.10", description: "Warehousing and storage services"},
            ISIC: {code: "5210", description: "Warehousing and storage"},
            NACE_level_4: {code: "52.10", description: "Warehousing and storage"},
            NACE_level_3: {code: "52.2", description: "Support activities for transportation"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "52.10", description: "Warehousing and storage"},
        },
        "Cold Stores (Rental Valuation)": {
            SCAT: {code: "413", description: "Cold Stores (Rental Valuation)"},
            CPA: {code: "52.10", description: "Warehousing and storage services"},
            ISIC: {code: "5210", description: "Warehousing and storage"},
            NACE_level_4: {code: "52.10", description: "Warehousing and storage"},
            NACE_level_3: {code: "52.2", description: "Support activities for transportation"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "52.10", description: "Warehousing and storage"},
        },
        "Courts (Contractors Valuation)": {
            SCAT: {code: "414", description: "Courts (Contractors Valuation)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Courts (Rental Valuation)": {
            SCAT: {code: "415", description: "Courts (Rental Valuation)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Gymnasia/Fitness Suites": {
            SCAT: {code: "416", description: "Gymnasia/Fitness Suites"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Hairdressing/Beauty Salons": {
            SCAT: {code: "417", description: "Hairdressing/Beauty Salons"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Information/Visitor Centres": {
            SCAT: {code: "418", description: "Information/Visitor Centres"},
            CPA: {code: "82.10", description: "Office administrative and support services"},
            ISIC: {code: "8210", description: "Office administrative and support activities"},
            NACE_level_4: {code: "82.10", description: "Office administrative and support activities"},
            NACE_level_3: {code: "82.2", description: "Activities of call centres"},
            NACE_level_1: {code: "O", description: "Administrative and support service activities"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Land Used for Display": {
            SCAT: {code: "419", description: "Land Used for Display"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Lifeboat Stations": {
            SCAT: {code: "420", description: "Lifeboat Stations"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Miniature Railways": {
            SCAT: {code: "421", description: "Miniature Railways"},
            CPA: {code: "93.29", description: "Other amusement and recreation services"},
            ISIC: {code: "9329", description: "Other amusement and recreation activities"},
            NACE_level_4: {code: "93.29", description: "Amusement and recreation activities n.e.c."},
            NACE_level_3: {code: "94.1", description: "Activities of business, employers and professional membership organisations"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
        },
        "Pack Houses": {
            SCAT: {code: "422", description: "Pack Houses"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Peat Fields": {
            SCAT: {code: "423", description: "Peat Fields"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Pet Grooming Parlours": {
            SCAT: {code: "424", description: "Pet Grooming Parlours"},
            CPA: {code: "96.99", description: "Other personal services n.e.c."},
            ISIC: {code: "9690", description: "Other personal service activities n.e.c."},
            NACE_level_4: {code: "96.99", description: "Other personal service activities n.e.c."},
            NACE_level_3: {code: "97.0", description: "Activities of households as employers of domestic personnel"},
            NACE_level_1: {code: "T", description: "Other services activities"},
            UK_SIC: {code: "96.09", description: "Other personal service activities n.e.c."},
        },
        "Pharmacies Within/Adjacent to Surgery/Health Centre": {
            SCAT: {code: "425", description: "Pharmacies Within/Adjacent to Surgery/Health Centre"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Pitch and Putt/Putting Greens": {
            SCAT: {code: "426", description: "Pitch and Putt/Putting Greens"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Pitches for Stalls, Sales or Promotions": {
            SCAT: {code: "427", description: "Pitches for Stalls, Sales or Promotions"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Police Training Colleges": {
            SCAT: {code: "428", description: "Police Training Colleges"},
            CPA: {code: "85.59", description: "Other education services n.e.c."},
            ISIC: {code: "8559", description: "Other education n.e.c."},
            NACE_level_4: {code: "85.59", description: "Other education n.e.c."},
            NACE_level_3: {code: "85.6", description: "Educational support activities"},
            NACE_level_1: {code: "Q", description: "Education"},
            UK_SIC: {code: "85.59", description: "Other education n.e.c."},
        },
        "Post Offices": {
            SCAT: {code: "429", description: "Post Offices"},
            CPA: {code: "53.10", description: "Postal services under universal service obligation"},
            ISIC: {code: "5310", description: "Postal activities"},
            NACE_level_4: {code: "53.10", description: "Postal activities under universal service obligation"},
            NACE_level_3: {code: "53.2", description: "Other postal and courier activities"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "53.10", description: "Postal activities under universal service obligation"},
        },
        "Pumping Mines": {
            SCAT: {code: "430", description: "Pumping Mines"},
            CPA: {code: "09.90", description: "Support services to other mining and quarrying"},
            ISIC: {code: "0990", description: "Support activities for other mining and quarrying"},
            NACE_level_4: {code: "09.90", description: "Support activities for other mining and quarrying"},
            NACE_level_3: {code: "10.1", description: "Processing and preserving of meat and production of meat products"},
            NACE_level_1: {code: "B", description: "Mining and quarrying"},
            UK_SIC: {code: "09.90", description: "Support activities for other mining and quarrying"},
        },
        "Religious Retreats/Study Centres (Residential)": {
            SCAT: {code: "431", description: "Religious Retreats/Study Centres (Residential)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Sales Offices": {
            SCAT: {code: "432", description: "Sales Offices"},
            CPA: {code: "82.10", description: "Office administrative and support services"},
            ISIC: {code: "8210", description: "Office administrative and support activities"},
            NACE_level_4: {code: "82.10", description: "Office administrative and support activities"},
            NACE_level_3: {code: "82.2", description: "Activities of call centres"},
            NACE_level_1: {code: "O", description: "Administrative and support service activities"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Statutory Docks and Harbours (Formula)": {
            SCAT: {code: "433", description: "Statutory Docks and Harbours (Formula)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Statutory Docks and Harbours (Non- Formula, Prescribed)": {
            SCAT: {code: "434", description: "Statutory Docks and Harbours (Non- Formula, Prescribed)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Statutory Docks and Harbours (Other)": {
            SCAT: {code: "435", description: "Statutory Docks and Harbours (Other)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Surgeries, Clinics, Health Centres (Contractors Valuation)": {
            SCAT: {code: "436", description: "Surgeries, Clinics, Health Centres (Contractors Valuation)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Surgeries, Clinics, Health Centres (Rental Valuation)": {
            SCAT: {code: "437", description: "Surgeries, Clinics, Health Centres (Rental Valuation)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Telescope Sites": {
            SCAT: {code: "438", description: "Telescope Sites"},
            CPA: {code: "72.10", description: "Research and development services on natural sciences, engineering and technology"},
            ISIC: {code: "7210", description: "Research and experimental development on natural sciences and engineering"},
            NACE_level_4: {code: "72.10", description: "Research and experimental development on natural sciences and engineering"},
            NACE_level_3: {code: "72.2", description: "Research and experimental development on social sciences and humanities"},
            NACE_level_1: {code: "N", description: "Professional, scientific and technical activities"},
            UK_SIC: {code: "72.19", description: "Other research and experimental development on natural sciences and engineering"},
        },
        "University - Ancillary Land or Buildings": {
            SCAT: {code: "439", description: "University - Ancillary Land or Buildings"},
            CPA: {code: "85.40", description: "Tertiary education services"},
            ISIC: {code: "8540", description: "Tertiary education"},
            NACE_level_4: {code: "85.40", description: "Tertiary education"},
            NACE_level_3: {code: "85.5", description: "Other education"},
            NACE_level_1: {code: "Q", description: "Education"},
            UK_SIC: {code: "85.42", description: "Tertiary education"},
        },
        "University Occupation Within Hospitals": {
            SCAT: {code: "440", description: "University Occupation Within Hospitals"},
            CPA: {code: "85.40", description: "Tertiary education services"},
            ISIC: {code: "8540", description: "Tertiary education"},
            NACE_level_4: {code: "85.40", description: "Tertiary education"},
            NACE_level_3: {code: "85.5", description: "Other education"},
            NACE_level_1: {code: "Q", description: "Education"},
            UK_SIC: {code: "85.42", description: "Tertiary education"},
        },
        "Weighbridges": {
            SCAT: {code: "441", description: "Weighbridges"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Takeaway Food Outlet (Predominantly Off Premises)": {
            SCAT: {code: "442", description: "Takeaway Food Outlet (Predominantly Off Premises)"},
            CPA: {code: "56.12", description: "Mobile food serving services"},
            ISIC: {code: "5610", description: "Restaurants and mobile food service activities"},
            NACE_level_4: {code: "56.12", description: "Mobile food service activities"},
            NACE_level_3: {code: "56.2", description: "Event catering, contract catering service activities and other food service activities"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "56.10", description: "Restaurants and mobile food service activities"},
        },
        "Cafes/Restaurants Within/Part of Specialist Property": {
            SCAT: {code: "500", description: "Cafes/Restaurants Within/Part of Specialist Property"},
            CPA: {code: "56.30", description: "Beverage serving services"},
            ISIC: {code: "5630", description: "Beverage serving activities"},
            NACE_level_4: {code: "56.30", description: "Beverage serving activities"},
            NACE_level_3: {code: "56.4", description: "Intermediation service activities for food and beverage services activities"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "56.30", description: "Beverage serving activities"},
        },
        "Car Parking Within/Part of Specialist Property": {
            SCAT: {code: "501", description: "Car Parking Within/Part of Specialist Property"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Garages Within/Part of Specialist Property": {
            SCAT: {code: "502", description: "Garages Within/Part of Specialist Property"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Gymnasia/Fitness Suites Within/Part of Specialist Property": {
            SCAT: {code: "503", description: "Gymnasia/Fitness Suites Within/Part of Specialist Property"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Kiosks Within/Part of Specialist Property": {
            SCAT: {code: "504", description: "Kiosks Within/Part of Specialist Property"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Nurseries/Creches Within/Part of Specialist Property": {
            SCAT: {code: "505", description: "Nurseries/Creches Within/Part of Specialist Property"},
            CPA: {code: "85.10", description: "Pre-primary education services"},
            ISIC: {code: "8510", description: "Pre-primary education"},
            NACE_level_4: {code: "85.10", description: "Pre-primary education"},
            NACE_level_3: {code: "85.2", description: "Primary education"},
            NACE_level_1: {code: "Q", description: "Education"},
            UK_SIC: {code: "85.10", description: "Pre-primary education"},
        },
        "Offices Within/Part of Specialist Property": {
            SCAT: {code: "506", description: "Offices Within/Part of Specialist Property"},
            CPA: {code: "82.10", description: "Office administrative and support services"},
            ISIC: {code: "8210", description: "Office administrative and support activities"},
            NACE_level_4: {code: "82.10", description: "Office administrative and support activities"},
            NACE_level_3: {code: "82.2", description: "Activities of call centres"},
            NACE_level_1: {code: "O", description: "Administrative and support service activities"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Salons/Clinics Within/Part of Specialist Property": {
            SCAT: {code: "507", description: "Salons/Clinics Within/Part of Specialist Property"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Shops Within/Part of Specialist Property": {
            SCAT: {code: "508", description: "Shops Within/Part of Specialist Property"},
            CPA: {code: "47.27", description: "Retail sale services of other food"},
            ISIC: {code: "4719", description: "Other non-specialized retail sale"},
            NACE_level_4: {code: "47.12", description: "Other non-specialised retail sale"},
            NACE_level_3: {code: "47.2", description: "Retail sale of food, beverages and tobacco"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Sports & Leisure Centres Within/Part of Specialist Property": {
            SCAT: {code: "509", description: "Sports & Leisure Centres Within/Part of Specialist Property"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Stores Within/Part of Specialist Property": {
            SCAT: {code: "510", description: "Stores Within/Part of Specialist Property"},
            CPA: {code: "47.27", description: "Retail sale services of other food"},
            ISIC: {code: "4719", description: "Other non-specialized retail sale"},
            NACE_level_4: {code: "47.12", description: "Other non-specialised retail sale"},
            NACE_level_3: {code: "47.2", description: "Retail sale of food, beverages and tobacco"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Warehouses Within/Part of Specialist Property": {
            SCAT: {code: "511", description: "Warehouses Within/Part of Specialist Property"},
            CPA: {code: "52.10", description: "Warehousing and storage services"},
            ISIC: {code: "5210", description: "Warehousing and storage"},
            NACE_level_4: {code: "52.10", description: "Warehousing and storage"},
            NACE_level_3: {code: "52.2", description: "Support activities for transportation"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "52.10", description: "Warehousing and storage"},
        },
        "Workshops Within/Part of Specialist Property": {
            SCAT: {code: "512", description: "Workshops Within/Part of Specialist Property"},
            CPA: {code: "25.63", description: "Tools"},
            ISIC: {code: "2593", description: "Manufacture of cutlery, hand tools and general hardware"},
            NACE_level_4: {code: "25.63", description: "Manufacture of tools"},
            NACE_level_3: {code: "25.9", description: "Manufacture of other fabricated metal products"},
            NACE_level_1: {code: "C", description: "Manufacturing"},
            UK_SIC: {code: "25.73", description: "Manufacture of tools"},
        },
        "Miscellaneous Within/Part of Specialist Property": {
            SCAT: {code: "513", description: "Miscellaneous Within/Part of Specialist Property"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Sponsored Roundabout Advertising Displays": {
            SCAT: {code: "700", description: "Sponsored Roundabout Advertising Displays"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Restaurant With Letting Accomodation": {
            SCAT: {code: "701", description: "Restaurant With Letting Accomodation"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Driving Standards Agency Centre": {
            SCAT: {code: "702", description: "Driving Standards Agency Centre"},
            CPA: {code: "74.99", description: "All other professional, scientific and technical services n.e.c."},
            ISIC: {code: "7499", description: "All other professional, scientific and technical activities n.e.c."},
            NACE_level_4: {code: "74.99", description: "All other professional, scientific and technical activities n.e.c."},
            NACE_level_3: {code: "75.0", description: "Veterinary activities"},
            NACE_level_1: {code: "N", description: "Professional, scientific and technical activities"},
            UK_SIC: {code: "74.90", description: "Other professional, scientific and technical activities n.e.c."},
        },
        "Residual Shopping Mall": {
            SCAT: {code: "703", description: "Residual Shopping Mall"},
            CPA: {code: "47.27", description: "Retail sale services of other food"},
            ISIC: {code: "4719", description: "Other non-specialized retail sale"},
            NACE_level_4: {code: "47.12", description: "Other non-specialised retail sale"},
            NACE_level_3: {code: "47.2", description: "Retail sale of food, beverages and tobacco"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Land Used For Seasonal Markets & Events": {
            SCAT: {code: "704", description: "Land Used For Seasonal Markets & Events"},
            CPA: {code: "47.27", description: "Retail sale services of other food"},
            ISIC: {code: "4719", description: "Other non-specialized retail sale"},
            NACE_level_4: {code: "47.12", description: "Other non-specialised retail sale"},
            NACE_level_3: {code: "47.2", description: "Retail sale of food, beverages and tobacco"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Market Stall (Not Pitch)": {
            SCAT: {code: "705", description: "Market Stall (Not Pitch)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Advertising Displays On Pavements & Bus Shelters": {
            SCAT: {code: "706", description: "Advertising Displays On Pavements & Bus Shelters"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Advertising Displays At Superstores": {
            SCAT: {code: "707", description: "Advertising Displays At Superstores"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Advertising Displays From Phone Booths": {
            SCAT: {code: "708", description: "Advertising Displays From Phone Booths"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Dark Retailing/Internet Sites": {
            SCAT: {code: "709", description: "Dark Retailing/Internet Sites"},
            CPA: {code: "47.27", description: "Retail sale services of other food"},
            ISIC: {code: "4719", description: "Other non-specialized retail sale"},
            NACE_level_4: {code: "47.12", description: "Other non-specialised retail sale"},
            NACE_level_3: {code: "47.2", description: "Retail sale of food, beverages and tobacco"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Residual Mall": {
            SCAT: {code: "710", description: "Residual Mall"},
            CPA: {code: "47.27", description: "Retail sale services of other food"},
            ISIC: {code: "4719", description: "Other non-specialized retail sale"},
            NACE_level_4: {code: "47.12", description: "Other non-specialised retail sale"},
            NACE_level_3: {code: "47.2", description: "Retail sale of food, beverages and tobacco"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Advertising Displays From Agricultural Land": {
            SCAT: {code: "711", description: "Advertising Displays From Agricultural Land"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Rail Freight Depots": {
            SCAT: {code: "712", description: "Rail Freight Depots"},
            CPA: {code: "49.20", description: "Freight rail transport services"},
            ISIC: {code: "4923", description: "Freight transport by road"},
            NACE_level_4: {code: "49.20", description: "Freight rail transport"},
            NACE_level_3: {code: "49.3", description: "Other passenger land transport"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "49.20", description: "Freight rail transport"},
        },
        "Bicycle Folding Box Site": {
            SCAT: {code: "713", description: "Bicycle Folding Box Site"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Rail Maintenance Depots": {
            SCAT: {code: "714", description: "Rail Maintenance Depots"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Football Training Grounds": {
            SCAT: {code: "715", description: "Football Training Grounds"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Cafe/Restaurants Within/Part of NonSpecialist Properties": {
            SCAT: {code: "716", description: "Cafe/Restaurants Within/Part of NonSpecialist Properties"},
            CPA: {code: "56.30", description: "Beverage serving services"},
            ISIC: {code: "5630", description: "Beverage serving activities"},
            NACE_level_4: {code: "56.30", description: "Beverage serving activities"},
            NACE_level_3: {code: "56.4", description: "Intermediation service activities for food and beverage services activities"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "56.30", description: "Beverage serving activities"},
        },
        "Delivery Box Site & Premises": {
            SCAT: {code: "717", description: "Delivery Box Site & Premises"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Electric Charge Stations": {
            SCAT: {code: "718", description: "Electric Charge Stations"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Car Washes (Stand Alone - Hand Car Wash)": {
            SCAT: {code: "719", description: "Car Washes (Stand Alone - Hand Car Wash)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "LPG Service Station": {
            SCAT: {code: "720", description: "LPG Service Station"},
            CPA: {code: "47.30", description: "Retail sale services of automotive fuel"},
            ISIC: {code: "4730", description: "Retail sale of automotive fuel"},
            NACE_level_4: {code: "47.30", description: "Retail sale of automotive fuel"},
            NACE_level_3: {code: "47.4", description: "Retail sale of information and communication equipment"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "47.30", description: "Retail sale of automotive fuel in specialised stores"},
        },
        "Self Storage Facility": {
            SCAT: {code: "721", description: "Self Storage Facility"},
            CPA: {code: "52.10", description: "Warehousing and storage services"},
            ISIC: {code: "5210", description: "Warehousing and storage"},
            NACE_level_4: {code: "52.10", description: "Warehousing and storage"},
            NACE_level_3: {code: "52.2", description: "Support activities for transportation"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "52.10", description: "Warehousing and storage"},
        },
        "Serviced Appartments": {
            SCAT: {code: "722", description: "Serviced Appartments"},
            CPA: {code: "55.20", description: "Holiday and other short-stay accommodation services"},
            ISIC: {code: "5520", description: "Other short term accommodation activities"},
            NACE_level_4: {code: "55.20", description: "Holiday and other short-stay accommodation"},
            NACE_level_3: {code: "55.3", description: "Camping grounds and recreational vehicle parks"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "55.20", description: "Holiday and other short-stay accommodation"},
        },
        "Serviced Offices": {
            SCAT: {code: "723", description: "Serviced Offices"},
            CPA: {code: "82.10", description: "Office administrative and support services"},
            ISIC: {code: "8210", description: "Office administrative and support activities"},
            NACE_level_4: {code: "82.10", description: "Office administrative and support activities"},
            NACE_level_3: {code: "82.2", description: "Activities of call centres"},
            NACE_level_1: {code: "O", description: "Administrative and support service activities"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Street Points (eg Cycle Docking Stations)": {
            SCAT: {code: "724", description: "Street Points (eg Cycle Docking Stations)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Park & Ride Car Parks": {
            SCAT: {code: "725", description: "Park & Ride Car Parks"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Telecommunications Large Broadcast Sites": {
            SCAT: {code: "726", description: "Telecommunications Large Broadcast Sites"},
            CPA: {code: "61.10", description: "Wired, wireless, and satellite telecommunication services"},
            ISIC: {code: "6110", description: "Wired, wireless, and satellite telecommunication activities"},
            NACE_level_4: {code: "61.10", description: "Wired, wireless, and satellite telecommunication activities"},
            NACE_level_3: {code: "61.2", description: "Telecommunication reselling activities and intermediation service activities for telecommunication"},
            NACE_level_1: {code: "K", description: "Telecommunication, computer programming, consulting, computing infrastructure and other information service activities"},
            UK_SIC: {code: "61.10", description: "Wired telecommunications activities"},
        },
        "Waste Anaerobic Digestion Plants": {
            SCAT: {code: "727", description: "Waste Anaerobic Digestion Plants"},
            CPA: {code: "38.23", description: "Other waste recovery services"},
            ISIC: {code: "3830", description: "Materials and other waste recovery"},
            NACE_level_4: {code: "38.23", description: "Other waste recovery"},
            NACE_level_3: {code: "38.3", description: "Waste disposal without recovery"},
            NACE_level_1: {code: "E", description: "Water supply; sewerage; waste managment and remediation activities"},
            UK_SIC: {code: "38.3", description: "Materials recovery"},
        },
        "Bagging Plant & Premises": {
            SCAT: {code: "728", description: "Bagging Plant & Premises"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Renewable Generators - Mixed Technologies": {
            SCAT: {code: "729", description: "Renewable Generators - Mixed Technologies"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Biomass Biological (Crop & Slurry Based Anaerobic Digestors, Incl Gas to Grid)": {
            SCAT: {code: "730", description: "Biomass Biological (Crop & Slurry Based Anaerobic Digestors, Incl Gas to Grid)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Biomass Thermal (Incl Combustion, Gasification and Pyrolysis)": {
            SCAT: {code: "731", description: "Biomass Thermal (Incl Combustion, Gasification and Pyrolysis)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Click & Collect Locker Site": {
            SCAT: {code: "732", description: "Click & Collect Locker Site"},
            CPA: {code: "53.10", description: "Postal services under universal service obligation"},
            ISIC: {code: "5310", description: "Postal activities"},
            NACE_level_4: {code: "53.10", description: "Postal activities under universal service obligation"},
            NACE_level_3: {code: "53.2", description: "Other postal and courier activities"},
            NACE_level_1: {code: "H", description: "Transportation and storage"},
            UK_SIC: {code: "53.10", description: "Postal activities under universal service obligation"},
        },
        "Battery Store": {
            SCAT: {code: "733", description: "Battery Store"},
            CPA: {code: "47.27", description: "Retail sale services of other food"},
            ISIC: {code: "4719", description: "Other non-specialized retail sale"},
            NACE_level_4: {code: "47.12", description: "Other non-specialised retail sale"},
            NACE_level_3: {code: "47.2", description: "Retail sale of food, beverages and tobacco"},
            NACE_level_1: {code: "G", description: "Wholesale and retail trade"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Wedding and Function Venue": {
            SCAT: {code: "734", description: "Wedding and Function Venue"},
            CPA: {code: "96.99", description: "Other personal services n.e.c."},
            ISIC: {code: "9690", description: "Other personal service activities n.e.c."},
            NACE_level_4: {code: "96.99", description: "Other personal service activities n.e.c."},
            NACE_level_3: {code: "97.0", description: "Activities of households as employers of domestic personnel"},
            NACE_level_1: {code: "T", description: "Other services activities"},
            UK_SIC: {code: "96.09", description: "Other personal service activities n.e.c."},
        },
        "Historic Property (National Trust/English Heritage)": {
            SCAT: {code: "735", description: "Historic Property (National Trust/English Heritage)"},
            CPA: {code: "91.22", description: "Historical site and monument services"},
            ISIC: {code: "9122", description: "Historical site and monument activities"},
            NACE_level_4: {code: "91.22", description: "Historical site and monument activities"},
            NACE_level_3: {code: "91.3", description: "Conservation, restoration and other support activities for cultural heritage"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "91.03", description: "Operation of historical sites and buildings and similar visitor attractions"},
        },
        "Holiday Home Self Catering (Complexs)": {
            SCAT: {code: "736", description: "Holiday Home Self Catering (Complexs)"},
            CPA: {code: "55.20", description: "Holiday and other short-stay accommodation services"},
            ISIC: {code: "5520", description: "Other short term accommodation activities"},
            NACE_level_4: {code: "55.20", description: "Holiday and other short-stay accommodation"},
            NACE_level_3: {code: "55.3", description: "Camping grounds and recreational vehicle parks"},
            NACE_level_1: {code: "I", description: "Accommodation and food service activities"},
            UK_SIC: {code: "55.20", description: "Holiday and other short-stay accommodation"},
        },
        "Ferry Terminal": {
            SCAT: {code: "737", description: "Ferry Terminal"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Builders Merchant": {
            SCAT: {code: "738", description: "Builders Merchant"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Soccer Centres": {
            SCAT: {code: "739", description: "Soccer Centres"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Secure Childrens Homes": {
            SCAT: {code: "740", description: "Secure Childrens Homes"},
            CPA: {code: "87.99", description: "Other residential care services n.e.c."},
            ISIC: {code: "8799", description: "Other residential care activities n.e.c."},
            NACE_level_4: {code: "87.99", description: "Other residential care activities n.e.c."},
            NACE_level_3: {code: "88.1", description: "Social work activities without accommodation for older persons or persons with disabilities"},
            NACE_level_1: {code: "R", description: "Human health and social work activities"},
            UK_SIC: {code: "87.90", description: "Other residential care activities"},
        },
        "Independent Gas Transport (IGT)": {
            SCAT: {code: "741", description: "Independent Gas Transport (IGT)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Independent Distribution Network Operators (IDNO)": {
            SCAT: {code: "742", description: "Independent Distribution Network Operators (IDNO)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Renewable Power Generators - Photovoltaic": {
            SCAT: {code: "743", description: "Renewable Power Generators - Photovoltaic"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Renewable Power Generators – Wind": {
            SCAT: {code: "744", description: "Renewable Power Generators – Wind"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Renewable Power Generators – Other": {
            SCAT: {code: "745", description: "Renewable Power Generators – Other"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Renewable Power Generators - Hydro": {
            SCAT: {code: "746", description: "Renewable Power Generators - Hydro"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Fossil Fuel Power Stations": {
            SCAT: {code: "747", description: "Fossil Fuel Power Stations"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Nuclear Power Stations": {
            SCAT: {code: "748", description: "Nuclear Power Stations"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Underground Gas Storage Facility": {
            SCAT: {code: "749", description: "Underground Gas Storage Facility"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "NHS Clinics & Health Centres (Contractors)": {
            SCAT: {code: "750", description: "NHS Clinics & Health Centres (Contractors)"},
            CPA: {code: "86.10", description: "Hospital services"},
            ISIC: {code: "8610", description: "Hospital activities"},
            NACE_level_4: {code: "86.10", description: "Hospital activities"},
            NACE_level_3: {code: "86.2", description: "Medical and dental practice activities"},
            NACE_level_1: {code: "R", description: "Human health and social work activities"},
            UK_SIC: {code: "86.10", description: "Hospital activities"},
        },
        "NHS Clinics & Health Centres (Rentals)": {
            SCAT: {code: "751", description: "NHS Clinics & Health Centres (Rentals)"},
            CPA: {code: "86.10", description: "Hospital services"},
            ISIC: {code: "8610", description: "Hospital activities"},
            NACE_level_4: {code: "86.10", description: "Hospital activities"},
            NACE_level_3: {code: "86.2", description: "Medical and dental practice activities"},
            NACE_level_1: {code: "R", description: "Human health and social work activities"},
            UK_SIC: {code: "86.10", description: "Hospital activities"},
        },
        "Surgeries (Other Than GP/NHS) (Contractors)": {
            SCAT: {code: "752", description: "Surgeries (Other Than GP/NHS) (Contractors)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Surgeries (Other Than GP/NHS) (Rentals)": {
            SCAT: {code: "753", description: "Surgeries (Other Than GP/NHS) (Rentals)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "GP Surgeries (Contractors)": {
            SCAT: {code: "754", description: "GP Surgeries (Contractors)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "GP Surgeries (Rentals)": {
            SCAT: {code: "755", description: "GP Surgeries (Rentals)"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Equestrian Hospitals": {
            SCAT: {code: "756", description: "Equestrian Hospitals"},
            CPA: {code: "75.00", description: "Veterinary services"},
            ISIC: {code: "7500", description: "Veterinary activities"},
            NACE_level_4: {code: "75.00", description: "Veterinary activities"},
            NACE_level_3: {code: "77.1", description: "Rental and leasing of motor vehicles"},
            NACE_level_1: {code: "N", description: "Professional, scientific and technical activities"},
            UK_SIC: {code: "75.00", description: "Veterinary activities"},
        },
        "Plant Nurseries": {
            SCAT: {code: "757", description: "Plant Nurseries"},
            CPA: {code: "01.30", description: "Planting material: live plants, bulbs, tubers and roots, cuttings and slips; mushroom spawn"},
            ISIC: {code: "0130", description: "Plant propagation"},
            NACE_level_4: {code: "01.30", description: "Plant propagation"},
            NACE_level_3: {code: "01.4", description: "Animal production"},
            NACE_level_1: {code: "A", description: "Agriculture, forestry and fishing"},
            UK_SIC: {code: "01.30", description: "Plant propagation"},
        },
        "Commercial Miscellaneous": {
            SCAT: {code: "992", description: "Commercial Miscellaneous"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Leisure Miscellaneous": {
            SCAT: {code: "993", description: "Leisure Miscellaneous"},
            CPA: {code: "93.29", description: "Other amusement and recreation services"},
            ISIC: {code: "9329", description: "Other amusement and recreation activities"},
            NACE_level_4: {code: "93.29", description: "Amusement and recreation activities n.e.c."},
            NACE_level_3: {code: "94.1", description: "Activities of business, employers and professional membership organisations"},
            NACE_level_1: {code: "S", description: "Arts, sports and recreation"},
            UK_SIC: {code: "93.29", description: "Other amusement and recreation activities"},
        },
        "Industrial Miscellaneous": {
            SCAT: {code: "994", description: "Industrial Miscellaneous"},
            CPA: {code: "32.99", description: "Other manufactured goods n.e.c."},
            ISIC: {code: "3290", description: "Other manufacturing n.e.c."},
            NACE_level_4: {code: "32.99", description: "Other manufacturing n.e.c."},
            NACE_level_3: {code: "33.1", description: "Repair and maintenance of fabricated metal products, machinery and equipment"},
            NACE_level_1: {code: "C", description: "Manufacturing"},
            UK_SIC: {code: "32.99", description: "Other manufacturing n.e.c."},
        },
        "Educational Miscellaneous": {
            SCAT: {code: "995", description: "Educational Miscellaneous"},
            CPA: {code: "85.59", description: "Other education services n.e.c."},
            ISIC: {code: "8559", description: "Other education n.e.c."},
            NACE_level_4: {code: "85.59", description: "Other education n.e.c."},
            NACE_level_3: {code: "85.6", description: "Educational support activities"},
            NACE_level_1: {code: "Q", description: "Education"},
            UK_SIC: {code: "85.59", description: "Other education n.e.c."},
        },
        "Formula Assessed Miscellaneous": {
            SCAT: {code: "996", description: "Formula Assessed Miscellaneous"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Minerals Miscellaneous": {
            SCAT: {code: "997", description: "Minerals Miscellaneous"},
            CPA: {code: "08.99", description: "Other mining and quarrying products n.e.c."},
            ISIC: {code: "0899", description: "Other mining and quarrying n.e.c."},
            NACE_level_4: {code: "08.99", description: "Other mining and quarrying n.e.c."},
            NACE_level_3: {code: "09.1", description: "Support activities for petroleum and natural gas extraction"},
            NACE_level_1: {code: "B", description: "Mining and quarrying"},
            UK_SIC: {code: "08.99", description: "Other mining and quarrying n.e.c."},
        },
        "Crown Miscellaneous": {
            SCAT: {code: "998", description: "Crown Miscellaneous"},
            CPA: {code: "", description: "missing entry in classification"},
            ISIC: {code: "", description: "missing entry in classification"},
            NACE_level_4: {code: "", description: "missing entry in classification"},
            NACE_level_3: {code: "", description: "missing entry in classification"},
            NACE_level_1: {code: "", description: "missing entry in classification"},
            UK_SIC: {code: "", description: "missing entry in classification"},
        },
        "Miscellaneous": {
            SCAT: {code: "999", description: "Miscellaneous"},
            CPA: {code: "96.99", description: "Other personal services n.e.c."},
            ISIC: {code: "9690", description: "Other personal service activities n.e.c."},
            NACE_level_4: {code: "96.99", description: "Other personal service activities n.e.c."},
            NACE_level_3: {code: "97.0", description: "Activities of households as employers of domestic personnel"},
            NACE_level_1: {code: "T", description: "Other services activities"},
            UK_SIC: {code: "96.09", description: "Other personal service activities n.e.c."},
        },
    }

    const queryParameters = new URLSearchParams(window.location.search);
    const subcat = queryParameters.get("sc");

    const { parcel, parcelSwitchOnClick, darkLightTheme } = useDisplayPreferences();
    
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
            <DataEntryGroup name="Current Land Use/s" collapsed={subcat==null || subcat!="1"}>
                <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                    <i>
                        In the UK over 90% of properties are residential. Please note that reference codes for residential buildings, and places of worship, are not included in land use classification systems shown below, except within UK Planning Use Classes.
                    </i>
                </div>
                {(props.mapColourScale != "landuse_scat") ? 
                    <button className={`map-switcher-inline disabled-state btn btn-outline btn-outline-dark key-button`} onClick={switchToLandUseMapStyle}>
                        {"Click to see specific land use."}
                    </button>
                    :
                    <></>
                }
                <MultiDataEntry
                    title={dataFields.current_landuse_group_scat.title}
                    slug="current_landuse_group_scat"
                    value={props.building.current_landuse_group_scat}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    confirmOnEnter={true}
                    tooltip={dataFields.current_landuse_group_scat.tooltip}
                    placeholder="Enter new land use group here"
                    copyable={true}
                    autofill={true}
                    showAllOptionsOnEmpty={true}
                />
                <Verification
                    slug="current_landuse_group_scat"
                    allow_verify={props.user !== undefined && props.building.current_landuse_group_scat !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("current_landuse_group_scat")}
                    user_verified_as={props.user_verified.current_landuse_group_scat && props.user_verified.current_landuse_group_scat.join(", ")}
                    verified_count={props.building.verified.current_landuse_group_scat}
                    />
                <hr />
                {props.building.current_landuse_group_scat != null ? <> {
                  props.building.current_landuse_group_scat.map((item, index) => (
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
                {landuseCodesData[item].NACE_level_4.description != "missing entry in classification" ? <>
                    <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                        <Tooltip text={ "[NACE: The Statistical Classification of Economic Activities in the European Community]( https://ec.europa.eu/eurostat/web/nace)" } />
                        <div className="label">NACE level 4:</div>
                        <div className="info-details">
                        <div className="code">{landuseCodesData[item].NACE_level_4.code}</div>
                        <div className="description">{landuseCodesData[item].NACE_level_4.description}</div>
                        </div>
                    </div>
                </>: <>
                    <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                        <Tooltip text={ "[NACE: The Statistical Classification of Economic Activities in the European Community]( https://ec.europa.eu/eurostat/web/nace)" } />
                        <div className="label">NACE level 3:</div>
                        <div className="info-details">
                        <div className="code">{landuseCodesData[item].NACE_level_3.code}</div>
                        <div className="description">{landuseCodesData[item].NACE_level_3.description}</div>
                        </div>
                    </div>
                </>}
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
                <SelectDataEntry
                    title={dataFields.current_landuse_scat_source.title}
                    slug="current_landuse_scat_source"
                    value={props.building.current_landuse_scat_source}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.current_landuse_scat_source.tooltip}
                    placeholder={dataFields.current_landuse_scat_source.example}
                    options={dataFields.current_landuse_scat_source.items}
                    />
                {(props.building.current_landuse_scat_source == commonSourceTypes[0] ||
                    props.building.current_landuse_scat_source == commonSourceTypes[1] ||
                    props.building.current_landuse_scat_source == null) ? <></> :
                    <><MultiDataEntry
                        title={dataFields.current_landuse_scat_link.title}
                        slug="current_landuse_scat_link"
                        value={props.building.current_landuse_scat_link}
                        mode={props.mode}
                        copy={props.copy}
                        onChange={props.onChange}
                        tooltip={dataFields.current_landuse_scat_link.tooltip}
                        placeholder="https://..."
                        editableEntries={true}
                        isUrl={true}
                        />
                    </>
                }
                <DataEntry
                    title={dataFields.current_landuse_order_scat.title}
                    tooltip={dataFields.current_landuse_order_scat.tooltip}
                    slug="current_landuse_order_scat"
                    value={props.building.current_landuse_order_scat}
                    mode={props.mode}
                    disabled={true}
                    copy={props.copy}
                    onChange={props.onChange}
                />
            </DataEntryGroup>
            {/*
            <DataEntryGroup name="Specific Land Use/s (old classification)" collapsed={subcat==null || subcat!="1"}>
                <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                    <i>
                        The vast majority of properties are residential (93% in the UK), so we have set 'residential' as the default value. Can you help us identify non-residential and mixed use buildings (and verify residential buildings too)?
                    </i>
                </div>
                {(props.mapColourScale != "landuse") ? 
                    <button className={`map-switcher-inline disabled-state btn btn-outline btn-outline-dark key-button`} onClick={switchToOldLandUseMapStyle}>
                        {"Click to see specific land use."}
                    </button>
                    :
                    <></>
                }
                <MultiDataEntry
                    title={dataFields.current_landuse_group.title}
                    slug="current_landuse_group"
                    value={props.building.current_landuse_group}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    confirmOnEnter={true}
                    tooltip={dataFields.current_landuse_group.tooltip}
                    placeholder="Enter new land use group here"
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
            </DataEntryGroup>
            */}
            { /* <DataEntryGroup name="General Land Use" collapsed={subcat==null || subcat!="2"}>
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
                    tooltip={dataFields.is_domestic.tooltip}
                />
                {/*
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
            </DataEntryGroup> */}
            <DataEntryGroup name="Land Ownership Type" collapsed={subcat==null || subcat!="3"}>
                    <InfoBox>
                        This section is designed to provide information on land parcels and their ownership type. Can you help us collect this information?
                    </InfoBox>
                    <SelectDataEntry
                        slug='community_public_ownership'
                        title={dataFields.community_public_ownership.title}
                        value={props.building.community_public_ownership}
                        options={dataFields.community_public_ownership.items}
                        tooltip={dataFields.community_public_ownership.tooltip}
                        onChange={props.onChange}
                        mode={props.mode}
                        copy={props.copy}
                    />
                    <Verification
                        slug="community_public_ownership"
                        allow_verify={props.user !== undefined && props.building.community_public_ownership !== null && !props.edited}
                        onVerify={props.onVerify}
                        user_verified={props.user_verified.hasOwnProperty("community_public_ownership")}
                        user_verified_as={props.user_verified.community_public_ownership}
                        verified_count={props.building.verified.community_public_ownership}
                    />
                    <SelectDataEntry
                        title={dataFields.community_public_ownership_source_type.title}
                        slug="community_public_ownership_source_type"
                        value={props.building.community_public_ownership_source_type}
                        mode={props.mode}
                        copy={props.copy}
                        onChange={props.onChange}
                        tooltip={dataFields.community_public_ownership_source_type.tooltip}
                        options={dataFields.community_public_ownership_source_type.items}
                        placeholder={dataFields.community_public_ownership_source_type.example}
                    />
                    {(props.building.community_public_ownership_source_type == dataFields.community_public_ownership_source_type.items[0] ||
                        props.building.community_public_ownership_source_type == dataFields.community_public_ownership_source_type.items[1] ||
                        props.building.community_public_ownership_source_type == null) ? <></> :
                        <>
                            <MultiDataEntry
                                slug='community_public_ownership_sources'
                                title={dataFields.community_public_ownership_sources.title}
                                tooltip={dataFields.community_public_ownership_sources.tooltip}
                                isUrl={true}
                                placeholder={'https://...'}
                                editableEntries={true}
                                value={props.building.community_public_ownership_sources}
                                onChange={props.onChange}
                                mode={props.mode}
                                copy={props.copy}
                            />
                        </>
                    }
                    <hr/>
                    <DataEntry
                        title={dataFields.size_parcel_geometry.title}
                        slug="size_parcel_geometry"
                        value={props.building.size_parcel_geometry}
                        mode={props.mode}
                        onChange={props.onChange}
                        tooltip={dataFields.size_parcel_geometry.tooltip}
                        placeholder="https://..."
                        isUrl={true}
                    />
                    <button className={`map-switcher-inline ${parcel}-state btn btn-outline btn-outline-dark ${darkLightTheme}`} onClick={parcelSwitchOnClick}>
                        {(parcel === 'enabled')? 'Click to hide sample land parcel data' : 'Click to show sample land parcel data'}
                    </button>
            </DataEntryGroup>
            <DataEntryGroup name="Original (Historical) Use" collapsed={subcat==null || subcat!="4"}>
                {(props.mapColourScale != "original_landuse") ? 
                    <button className={`map-switcher-inline disabled-state btn btn-outline btn-outline-dark key-button`} onClick={switchToOldLandUseMapStyle}>
                        {"Click here to see original land use."}
                    </button>
                :
                    <></>
                }
                <MultiDataEntry
                    title={dataFields.typology_original_use.title}
                    slug="typology_original_use"
                    value={props.building.typology_original_use}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    confirmOnEnter={true}
                    tooltip={dataFields.typology_original_use.tooltip}
                    placeholder="Type new land use group here"
                    copyable={true}
                    autofill={true}
                    showAllOptionsOnEmpty={true}
                />
                <Verification
                    slug="typology_original_use"
                    allow_verify={props.user !== undefined && props.building.typology_original_use !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("typology_original_use")}
                    user_verified_as={props.user_verified.typology_original_use}
                    verified_count={props.building.verified.typology_original_use}
                />
                <SelectDataEntry
                    title={dataFields.typology_original_use_source_type.title}
                    slug="typology_original_use_source_type"
                    value={props.building.typology_original_use_source_type}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.typology_original_use_source_type.tooltip}
                    placeholder={dataFields.typology_original_use_source_type.example}
                    options={dataFields.typology_original_use_source_type.items}
                    />
                {(props.building.typology_original_use_source_type == commonSourceTypes[0] ||
                    props.building.typology_original_use_source_type == commonSourceTypes[1] ||
                    props.building.typology_original_use_source_type == null) ? <></> :
                    <>
                        <MultiDataEntry
                            title={dataFields.typology_original_use_source_links.title}
                            slug="typology_original_use_source_links"
                            value={props.building.typology_original_use_source_links}
                            mode={props.mode}
                            copy={props.copy}
                            onChange={props.onChange}
                            tooltip={dataFields.typology_original_use_source_links.tooltip}
                            placeholder="https://..."
                            editableEntries={true}
                            isUrl={true}
                        />
                    </>
                }
                <hr/>
                {
                    props.mode != 'view' &&
                    <div>
                        <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                            <i>
                                Below is a more general classification for the original land use of this building, automatically derived from the information above.
                            </i>
                        </div>
                    </div>
                }
                <DataEntry
                    title={dataFields.typology_original_use_order.title}
                    tooltip={dataFields.typology_original_use_order.tooltip}
                    slug="typology_original_use_order"
                    value={props.building.typology_original_use_order}
                    mode={props.mode}
                    disabled={true}
                    copy={props.copy}
                    onChange={props.onChange}
                />
            </DataEntryGroup>
        </Fragment>
    );
};
const LandUseContainer = withCopyEdit(LandUseView);

export default LandUseContainer;
