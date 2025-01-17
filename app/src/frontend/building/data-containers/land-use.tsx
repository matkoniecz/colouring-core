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

    const landuseCodesData = {
"Growing of non-perennial crops": {
    CPA: "01.1 Non-perennial crops",
    ISIC: "011 Growing of non-perennial crops",
    NACE: "01.1 Growing of non-perennial crops",
    UK_SIC: "01.1 Growing of non-perennial crops",
},
"Growing of perennial crops": {
    CPA: "01.2 Perennial crops",
    ISIC: "012 Growing of perennial crops",
    NACE: "01.2 Growing of perennial crops",
    UK_SIC: "01.2 Growing of perennial crops",
},
"Plant propagation": {
    CPA: "01.3 Planting material: live plants, bulbs, tubers and roots, cuttings and slips; mushroom spawn",
    ISIC: "013 Plant propagation",
    NACE: "01.3 Plant propagation",
    UK_SIC: "01.3 Plant propagation",
},
"Animal production": {
    CPA: "01.4 Live animals and animal products",
    ISIC: "014 Animal production",
    NACE: "01.4 Animal production",
    UK_SIC: "01.4 Animal production",
},
"Mixed farming": {
    CPA: "01.5 ",
    ISIC: "015 Mixed farming",
    NACE: "01.5 Mixed farming",
    UK_SIC: "01.5 Mixed farming",
},
"Support activities to agriculture and post-harvest crop activities": {
    CPA: "01.6 Agricultural and animal husbandry services",
    ISIC: "016 Support activities to agriculture and post-harvest crop activities",
    NACE: "01.6 Support activities to agriculture and post-harvest crop activities",
    UK_SIC: "01.6 Support activities to agriculture and post-harvest crop activities",
},
"Hunting, trapping and related service activities": {
    CPA: "01.7 Hunting and trapping and related services",
    ISIC: "017 Hunting, trapping and related service activities",
    NACE: "01.7 Hunting, trapping and related service activities",
    UK_SIC: "01.7 Hunting, trapping and related service activities",
},
"Silviculture and other forestry activities": {
    CPA: "02.1 Forest trees and nursery services",
    ISIC: "021 Silviculture and other forestry activities",
    NACE: "02.1 Silviculture and other forestry activities",
    UK_SIC: "02.1 Silviculture and other forestry activities",
},
"Logging": {
    CPA: "02.2 Wood in the rough",
    ISIC: "022 Logging",
    NACE: "02.2 Logging",
    UK_SIC: "02.2 Logging",
},
"Gathering of wild growing non-wood products": {
    CPA: "02.3 Wild growing non-wood products",
    ISIC: "023 Gathering of non-wood forest products",
    NACE: "02.3 Gathering of wild growing non-wood products",
    UK_SIC: "02.3 Gathering of wild growing non-wood products",
},
"Support services to forestry": {
    CPA: "02.4 Support services to forestry",
    ISIC: "024 Support services to forestry",
    NACE: "02.4 Support services to forestry",
    UK_SIC: "02.4 Support services to forestry",
},
"Fishing": {
    CPA: "03.1 ",
    ISIC: "031 Fishing",
    NACE: "03.1 Fishing",
    UK_SIC: "03.1 Fishing",
},
"Aquaculture": {
    CPA: "03.2 ",
    ISIC: "032 Aquaculture",
    NACE: "03.2 Aquaculture",
    UK_SIC: "03.2 Aquaculture",
},
"Support activities for fishing and aquaculture": {
    CPA: "03.3 ",
    ISIC: "033 Support activities for fishing and aquaculture",
    NACE: "03.3 Support activities for fishing and aquaculture",
    UK_SIC: "03.3 ",
},
"Mining of hard coal": {
    CPA: "05.1 Hard coal and other coal",
    ISIC: "051 Mining of hard coal",
    NACE: "05.1 Mining of hard coal",
    UK_SIC: "05.1 Mining of hard coal",
},
"Mining of lignite": {
    CPA: "05.2 Lignite",
    ISIC: "052 Mining of lignite",
    NACE: "05.2 Mining of lignite",
    UK_SIC: "05.2 Mining of lignite",
},
"Extraction of crude petroleum": {
    CPA: "06.1 Crude petroleum",
    ISIC: "061 Extraction of crude petroleum",
    NACE: "06.1 Extraction of crude petroleum",
    UK_SIC: "06.1 Extraction of crude petroleum",
},
"Extraction of natural gas": {
    CPA: "06.2 Natural gas, liquefied or in gaseous state",
    ISIC: "062 Extraction of natural gas",
    NACE: "06.2 Extraction of natural gas",
    UK_SIC: "06.2 Extraction of natural gas",
},
"Mining of iron ores": {
    CPA: "07.1 Iron ores",
    ISIC: "071 Mining of iron ores",
    NACE: "07.1 Mining of iron ores",
    UK_SIC: "07.1 Mining of iron ores",
},
"Mining of non-ferrous metal ores": {
    CPA: "07.2 Non-ferrous metal ores",
    ISIC: "072 Mining of non-ferrous metal ores",
    NACE: "07.2 Mining of non-ferrous metal ores",
    UK_SIC: "07.2 Mining of non-ferrous metal ores",
},
"Quarrying of stone, sand and clay": {
    CPA: "08.1 Stone, sand and clay",
    ISIC: "081 Quarrying of stone, sand and clay",
    NACE: "08.1 Quarrying of stone, sand and clay",
    UK_SIC: "08.1 Quarrying of stone, sand and clay",
},
"Mining and quarrying n.e.c.": {
    CPA: "08.9 Mining and quarrying products n.e.c.",
    ISIC: "089 Mining and quarrying n.e.c.",
    NACE: "08.9 Mining and quarrying n.e.c.",
    UK_SIC: "08.9 Mining and quarrying n.e.c.",
},
"Support activities for petroleum and natural gas extraction": {
    CPA: "09.1 Support services to petroleum and natural gas extraction",
    ISIC: "091 Support activities for petroleum and natural gas extraction",
    NACE: "09.1 Support activities for petroleum and natural gas extraction",
    UK_SIC: "09.1 Support activities for petroleum and natural gas extraction",
},
"Support activities for other mining and quarrying": {
    CPA: "09.9 Support services to other mining and quarrying",
    ISIC: "099 Support activities for other mining and quarrying",
    NACE: "09.9 Support activities for other mining and quarrying",
    UK_SIC: "09.9 Support activities for other mining and quarrying",
},
"Processing and preserving of meat and production of meat products": {
    CPA: "10.1 Preserved meat and meat products",
    ISIC: "101 Processing and preserving of meat",
    NACE: "10.1 Processing and preserving of meat and production of meat products",
    UK_SIC: "10.1 Processing and preserving of meat and production of meat products",
},
"Processing and preserving of fish, crustaceans and molluscs": {
    CPA: "10.2 Processed and preserved fish, crustaceans and molluscs",
    ISIC: "102 Processing and preserving of fish, crustaceans and molluscs",
    NACE: "10.2 Processing and preserving of fish, crustaceans and molluscs",
    UK_SIC: "10.2 Processing and preserving of fish, crustaceans and molluscs",
},
"Processing and preserving of fruit and vegetables": {
    CPA: "10.3 Processed and preserved fruit and vegetables",
    ISIC: "103 Processing and preserving of fruit and vegetables",
    NACE: "10.3 Processing and preserving of fruit and vegetables",
    UK_SIC: "10.3 Processing and preserving of fruit and vegetables",
},
"Manufacture of vegetable and animal oils and fats": {
    CPA: "10.4 Vegetable and animal oils and fats",
    ISIC: "104 Manufacture of vegetable and animal oils and fats",
    NACE: "10.4 Manufacture of vegetable and animal oils and fats",
    UK_SIC: "10.4 Manufacture of vegetable and animal oils and fats",
},
"Manufacture of dairy products and edible ice": {
    CPA: "10.5 Dairy products and edible ice",
    ISIC: "105 Manufacture of dairy products",
    NACE: "10.5 Manufacture of dairy products and edible ice",
    UK_SIC: "10.5 Manufacture of dairy products",
},
"Manufacture of grain mill products, starches and starch products": {
    CPA: "10.6 Grain mill products, starches and starch products",
    ISIC: "106 Manufacture of grain mill products, starches and starch products",
    NACE: "10.6 Manufacture of grain mill products, starches and starch products",
    UK_SIC: "10.6 Manufacture of grain mill products, starches and starch products",
},
"Manufacture of bakery and farinaceous products": {
    CPA: "10.7 Bakery and farinaceous products",
    ISIC: "107 Manufacture of other food products",
    NACE: "10.7 Manufacture of bakery and farinaceous products",
    UK_SIC: "10.7 Manufacture of bakery and farinaceous products",
},
"Manufacture of other food products": {
    CPA: "10.8 Other food products",
    ISIC: "108 Manufacture of prepared animal feeds",
    NACE: "10.8 Manufacture of other food products",
    UK_SIC: "10.8 Manufacture of other food products",
},
"Manufacture of prepared animal feeds": {
    CPA: "10.9 Prepared animal feeds",
    ISIC: "109 ",
    NACE: "10.9 Manufacture of prepared animal feeds",
    UK_SIC: "10.9 Manufacture of prepared animal feeds",
},
"Manufacture of beverages": {
    CPA: "11.0 Beverages",
    ISIC: "110 Manufacture of beverages",
    NACE: "11.0 Manufacture of beverages",
    UK_SIC: "11.0 Manufacture of beverages",
},
"Manufacture of tobacco products": {
    CPA: "12.0 Tobacco products",
    ISIC: "120 Manufacture of tobacco products",
    NACE: "12.0 Manufacture of tobacco products",
    UK_SIC: "12.0 Manufacture of tobacco products",
},
"Preparation and spinning of textile fibres": {
    CPA: "13.1 Textile yarn and thread",
    ISIC: "131 Spinning, weaving and finishing of textiles",
    NACE: "13.1 Preparation and spinning of textile fibres",
    UK_SIC: "13.1 Preparation and spinning of textile fibres",
},
"Weaving of textiles": {
    CPA: "13.2 Woven textiles",
    ISIC: "132 ",
    NACE: "13.2 Weaving of textiles",
    UK_SIC: "13.2 Weaving of textiles",
},
"Finishing of textiles": {
    CPA: "13.3 Textile finishing services",
    ISIC: "133 ",
    NACE: "13.3 Finishing of textiles",
    UK_SIC: "13.3 Finishing of textiles",
},
"Manufacture of other textiles": {
    CPA: "13.9 Other textiles",
    ISIC: "139 Manufacture of other textiles",
    NACE: "13.9 Manufacture of other textiles",
    UK_SIC: "13.9 Manufacture of other textiles",
},
"Manufacture of knitted and crocheted apparel": {
    CPA: "14.1 Knitted and crocheted apparel",
    ISIC: "141 Manufacture of wearing apparel, except fur apparel",
    NACE: "14.1 Manufacture of knitted and crocheted apparel",
    UK_SIC: "14.1 Manufacture of wearing apparel, except fur apparel",
},
"Manufacture of other wearing apparel and accessories": {
    CPA: "14.2 Other wearing apparel and accessories",
    ISIC: "142 Manufacture of articles of fur",
    NACE: "14.2 Manufacture of other wearing apparel and accessories",
    UK_SIC: "14.2 Manufacture of articles of fur",
},
"Tanning, dyeing, dressing of leather and fur; manufacture of luggage, handbags, saddlery and harness": {
    CPA: "15.1 Tanned, dressed, dyed leather and fur; luggage, handbags, saddlery and harness",
    ISIC: "151 Tanning, dyeing, dressing of leather and fur; manufacture of luggage, handbags, saddlery and harness",
    NACE: "15.1 Tanning, dyeing, dressing of leather and fur; manufacture of luggage, handbags, saddlery and harness",
    UK_SIC: "15.1 Tanning and dressing of leather; manufacture of luggage, handbags, saddlery and harness; dressing and dyeing of fur",
},
"Manufacture of footwear": {
    CPA: "15.2 Footwear",
    ISIC: "152 Manufacture of footwear",
    NACE: "15.2 Manufacture of footwear",
    UK_SIC: "15.2 Manufacture of footwear",
},
"Sawmilling and planing of wood; processing and finishing of wood": {
    CPA: "16.1 Wood, sawn and planed; processing and finishing services of wood",
    ISIC: "161 Sawmilling and planing of wood",
    NACE: "16.1 Sawmilling and planing of wood; processing and finishing of wood",
    UK_SIC: "16.1 Sawmilling and planing of wood",
},
"Manufacture of products of wood, cork, straw and plaiting materials": {
    CPA: "16.2 Products of wood, cork, straw and plaiting materials",
    ISIC: "162 Manufacture of products of wood, cork, straw and plaiting materials",
    NACE: "16.2 Manufacture of products of wood, cork, straw and plaiting materials",
    UK_SIC: "16.2 Manufacture of products of wood, cork, straw and plaiting materials",
},
"Manufacture of pulp, paper and paperboard": {
    CPA: "17.1 Pulp, paper and paperboard",
    ISIC: "171 ",
    NACE: "17.1 Manufacture of pulp, paper and paperboard",
    UK_SIC: "17.1 Manufacture of pulp, paper and paperboard",
},
"Manufacture of articles of paper and paperboard": {
    CPA: "17.2 Articles of paper and paperboard",
    ISIC: "172 ",
    NACE: "17.2 Manufacture of articles of paper and paperboard",
    UK_SIC: "17.2 Manufacture of articles of paper and paperboard",
},
"Printing and service activities related to printing": {
    CPA: "18.1 Printing services and services related to printing",
    ISIC: "181 Printing and service activities related to printing",
    NACE: "18.1 Printing and service activities related to printing",
    UK_SIC: "18.1 Printing and service activities related to printing",
},
"Reproduction of recorded media": {
    CPA: "18.2 Reproduction services of recorded media",
    ISIC: "182 Reproduction of recorded media",
    NACE: "18.2 Reproduction of recorded media",
    UK_SIC: "18.2 Reproduction of recorded media",
},
"Manufacture of coke oven products": {
    CPA: "19.1 Coke oven products",
    ISIC: "191 Manufacture of coke oven products",
    NACE: "19.1 Manufacture of coke oven products",
    UK_SIC: "19.1 Manufacture of coke oven products",
},
"Manufacture of refined petroleum products and fossil fuel products": {
    CPA: "19.2 Refined petroleum products and fossil fuel products",
    ISIC: "192 Manufacture of refined petroleum products; manufacture of fossil fuel products",
    NACE: "19.2 Manufacture of refined petroleum products and fossil fuel products",
    UK_SIC: "19.2 Manufacture of refined petroleum products",
},
"Manufacture of basic chemicals, fertilisers and nitrogen compounds, plastics and synthetic rubber in primary forms": {
    CPA: "20.1 Basic chemicals, fertilisers and nitrogen compounds, plastics and synthetic rubber in primary forms",
    ISIC: "201 Manufacture of basic chemicals, fertilizers and nitrogen compounds, plastics and synthetic rubber in primary forms",
    NACE: "20.1 Manufacture of basic chemicals, fertilisers and nitrogen compounds, plastics and synthetic rubber in primary forms",
    UK_SIC: "20.1 Manufacture of basic chemicals, fertilisers and nitrogen compounds, plastics and synthetic rubber in primary forms",
},
"Manufacture of pesticides, disinfectants and other agrochemical products": {
    CPA: "20.2 Pesticides, disinfectants and other agrochemical products",
    ISIC: "202 Manufacture of other chemical products",
    NACE: "20.2 Manufacture of pesticides, disinfectants and other agrochemical products",
    UK_SIC: "20.2 Manufacture of pesticides and other agrochemical products",
},
"Manufacture of paints, varnishes and similar coatings, printing ink and mastics": {
    CPA: "20.3 Paints, varnishes and similar coatings, printing ink and mastics",
    ISIC: "203 Manufacture of man-made fibres",
    NACE: "20.3 Manufacture of paints, varnishes and similar coatings, printing ink and mastics",
    UK_SIC: "20.3 Manufacture of paints, varnishes and similar coatings, printing ink and mastics",
},
"Manufacture of washing, cleaning and polishing preparations": {
    CPA: "20.4 Soap and detergents, cleaning and polishing preparations, perfumes and toilet preparations",
    ISIC: "204 ",
    NACE: "20.4 Manufacture of washing, cleaning and polishing preparations",
    UK_SIC: "20.4 Manufacture of soap and detergents, cleaning and polishing preparations, perfumes and toilet preparations",
},
"Manufacture of other chemical products": {
    CPA: "20.5 Other chemical products",
    ISIC: "205 ",
    NACE: "20.5 Manufacture of other chemical products",
    UK_SIC: "20.5 Manufacture of other chemical products",
},
"Manufacture of man-made fibres": {
    CPA: "20.6 Man-made fibres",
    ISIC: "206 ",
    NACE: "20.6 Manufacture of man-made fibres",
    UK_SIC: "20.6 Manufacture of man-made fibres",
},
"Manufacture of basic pharmaceutical products": {
    CPA: "21.1 Basic pharmaceutical products",
    ISIC: "211 ",
    NACE: "21.1 Manufacture of basic pharmaceutical products",
    UK_SIC: "21.1 Manufacture of basic pharmaceutical products",
},
"Manufacture of pharmaceutical preparations": {
    CPA: "21.2 Pharmaceutical preparations",
    ISIC: "212 ",
    NACE: "21.2 Manufacture of pharmaceutical preparations",
    UK_SIC: "21.2 Manufacture of pharmaceutical preparations",
},
"Manufacture of rubber products": {
    CPA: "22.1 Rubber products",
    ISIC: "221 Manufacture of rubber products",
    NACE: "22.1 Manufacture of rubber products",
    UK_SIC: "22.1 Manufacture of rubber products",
},
"Manufacture of plastic products": {
    CPA: "22.2 Plastic products",
    ISIC: "222 Manufacture of plastics products",
    NACE: "22.2 Manufacture of plastic products",
    UK_SIC: "22.2 Manufacture of plastics products",
},
"Manufacture of glass and glass products": {
    CPA: "23.1 Glass and glass products",
    ISIC: "231 Manufacture of glass and glass products",
    NACE: "23.1 Manufacture of glass and glass products",
    UK_SIC: "23.1 Manufacture of glass and glass products",
},
"Manufacture of refractory products": {
    CPA: "23.2 Refractory products",
    ISIC: "232 ",
    NACE: "23.2 Manufacture of refractory products",
    UK_SIC: "23.2 Manufacture of refractory products",
},
"Manufacture of clay building materials": {
    CPA: "23.3 Clay building materials",
    ISIC: "233 ",
    NACE: "23.3 Manufacture of clay building materials",
    UK_SIC: "23.3 Manufacture of clay building materials",
},
"Manufacture of other porcelain and ceramic products": {
    CPA: "23.4 Other porcelain and ceramic products",
    ISIC: "234 ",
    NACE: "23.4 Manufacture of other porcelain and ceramic products",
    UK_SIC: "23.4 Manufacture of other porcelain and ceramic products",
},
"Manufacture of cement, lime and plaster": {
    CPA: "23.5 Cement, lime and plaster",
    ISIC: "235 ",
    NACE: "23.5 Manufacture of cement, lime and plaster",
    UK_SIC: "23.5 Manufacture of cement, lime and plaster",
},
"Manufacture of articles of concrete, cement and plaster": {
    CPA: "23.6 Articles of concrete, cement and plaster",
    ISIC: "236 ",
    NACE: "23.6 Manufacture of articles of concrete, cement and plaster",
    UK_SIC: "23.6 Manufacture of articles of concrete, cement and plaster",
},
"Cutting, shaping and finishing of stone": {
    CPA: "23.7 Cut, shaped and finished stone",
    ISIC: "237 ",
    NACE: "23.7 Cutting, shaping and finishing of stone",
    UK_SIC: "23.7 Cutting, shaping and finishing of stone",
},
"Manufacture of abrasive products and non-metallic mineral products n.e.c.": {
    CPA: "23.9 Abrasive products and non-metallic mineral products n.e.c.",
    ISIC: "239 Manufacture of non-metallic mineral products n.e.c.",
    NACE: "23.9 Manufacture of abrasive products and non-metallic mineral products n.e.c.",
    UK_SIC: "23.9 Manufacture of abrasive products and non-metallic mineral products n.e.c.",
},
"Manufacture of basic iron and steel and of ferro-alloys": {
    CPA: "24.1 Basic iron, steel and ferro-alloys",
    ISIC: "241 Manufacture of basic iron and steel",
    NACE: "24.1 Manufacture of basic iron and steel and of ferro-alloys",
    UK_SIC: "24.1 Manufacture of basic iron and steel and of ferro-alloys",
},
"Manufacture of tubes, pipes, hollow profiles and related fittings, of steel": {
    CPA: "24.2 Tubes, pipes, hollow profiles and related fittings, of iron or steel",
    ISIC: "242 Manufacture of basic precious and other non-ferrous metals",
    NACE: "24.2 Manufacture of tubes, pipes, hollow profiles and related fittings, of steel",
    UK_SIC: "24.2 Manufacture of tubes, pipes, hollow profiles and related fittings, of steel",
},
"Manufacture of other products of first processing of steel": {
    CPA: "24.3 Other products of first processing of iron or steel",
    ISIC: "243 Casting of metals",
    NACE: "24.3 Manufacture of other products of first processing of steel",
    UK_SIC: "24.3 Manufacture of other products of first processing of steel",
},
"Manufacture of basic precious and other non-ferrous metals": {
    CPA: "24.4 Basic precious and other non-ferrous metals",
    ISIC: "244 ",
    NACE: "24.4 Manufacture of basic precious and other non-ferrous metals",
    UK_SIC: "24.4 Manufacture of basic precious and other non-ferrous metals",
},
"Casting of metals": {
    CPA: "24.5 Casting services of metals",
    ISIC: "245 ",
    NACE: "24.5 Casting of metals",
    UK_SIC: "24.5 Casting of metals",
},
"Manufacture of structural metal products": {
    CPA: "25.1 Structural metal products",
    ISIC: "251 Manufacture of structural metal products, tanks, reservoirs and steam generators",
    NACE: "25.1 Manufacture of structural metal products",
    UK_SIC: "25.1 Manufacture of structural metal products",
},
"Manufacture of tanks, reservoirs and containers of metal": {
    CPA: "25.2 Tanks, reservoirs and containers of metal",
    ISIC: "252 Manufacture of weapons and ammunition",
    NACE: "25.2 Manufacture of tanks, reservoirs and containers of metal",
    UK_SIC: "25.2 Manufacture of tanks, reservoirs and containers of metal",
},
"Manufacture of weapons and ammunition": {
    CPA: "25.3 Weapons and ammunition",
    ISIC: "253 ",
    NACE: "25.3 Manufacture of weapons and ammunition",
    UK_SIC: "25.3 Manufacture of steam generators, except central heating hot water boilers",
},
"Forging and shaping metal and powder metallurgy": {
    CPA: "25.4 Forging and shaping services of metal; powder metallurgy",
    ISIC: "254 ",
    NACE: "25.4 Forging and shaping metal and powder metallurgy",
    UK_SIC: "25.4 Manufacture of weapons and ammunition",
},
"Treatment and coating of metals; machining": {
    CPA: "25.5 Treatment, coating and machining services of metals",
    ISIC: "255 ",
    NACE: "25.5 Treatment and coating of metals; machining",
    UK_SIC: "25.5 Forging, pressing, stamping and roll-forming of metal; powder metallurgy",
},
"Manufacture of cutlery, tools and general hardware": {
    CPA: "25.6 Cutlery, tools and general hardware",
    ISIC: "256 ",
    NACE: "25.6 Manufacture of cutlery, tools and general hardware",
    UK_SIC: "25.6 Treatment and coating of metals; machining",
},
"Manufacture of other fabricated metal products": {
    CPA: "25.9 Other fabricated metal products",
    ISIC: "259 Manufacture of other fabricated metal products; metalworking service activities",
    NACE: "25.9 Manufacture of other fabricated metal products",
    UK_SIC: "25.9 Manufacture of other fabricated metal products",
},
"Manufacture of electronic components and boards": {
    CPA: "26.1 Electronic components and boards",
    ISIC: "261 Manufacture of electronic components and boards",
    NACE: "26.1 Manufacture of electronic components and boards",
    UK_SIC: "26.1 Manufacture of electronic components and boards",
},
"Manufacture of computers and peripheral equipment": {
    CPA: "26.2 Computers and peripheral equipment",
    ISIC: "262 Manufacture of computers and peripheral equipment",
    NACE: "26.2 Manufacture of computers and peripheral equipment",
    UK_SIC: "26.2 Manufacture of computers and peripheral equipment",
},
"Manufacture of communication equipment": {
    CPA: "26.3 Communication equipment",
    ISIC: "263 Manufacture of communication equipment",
    NACE: "26.3 Manufacture of communication equipment",
    UK_SIC: "26.3 Manufacture of communication equipment",
},
"Manufacture of consumer electronics": {
    CPA: "26.4 Consumer electronics",
    ISIC: "264 Manufacture of consumer electronics",
    NACE: "26.4 Manufacture of consumer electronics",
    UK_SIC: "26.4 Manufacture of consumer electronics",
},
"Manufacture of measuring testing instruments, clocks and watches": {
    CPA: "26.5 Measuring, testing instruments, watches and clocks",
    ISIC: "265 Manufacture of measuring, testing, navigating and control equipment; watches and clocks",
    NACE: "26.5 Manufacture of measuring testing instruments, clocks and watches",
    UK_SIC: "26.5 Manufacture of instruments and appliances for measuring, testing and navigation; watches and clocks",
},
"Manufacture of irradiation, electromedical and electrotherapeutic equipment": {
    CPA: "26.6 Irradiation, electromedical and electrotherapeutic equipment",
    ISIC: "266 Manufacture of irradiation, electromedical and electrotherapeutic equipment",
    NACE: "26.6 Manufacture of irradiation, electromedical and electrotherapeutic equipment",
    UK_SIC: "26.6 Manufacture of irradiation, electromedical and electrotherapeutic equipment",
},
"Manufacture of optical instruments, magnetic and optical media and photographic equipment": {
    CPA: "26.7 Optical instruments, magnetic and optical media and photographic equipment",
    ISIC: "267 Manufacture of optical instruments and photographic equipment",
    NACE: "26.7 Manufacture of optical instruments, magnetic and optical media and photographic equipment",
    UK_SIC: "26.7 Manufacture of optical instruments and photographic equipment",
},
"Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus": {
    CPA: "27.1 Electric motors, generators, transformers and electricity distribution and control apparatus",
    ISIC: "271 Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus",
    NACE: "27.1 Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus",
    UK_SIC: "27.1 Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus",
},
"Manufacture of batteries and accumulators": {
    CPA: "27.2 Batteries and accumulators",
    ISIC: "272 Manufacture of batteries and accumulators",
    NACE: "27.2 Manufacture of batteries and accumulators",
    UK_SIC: "27.2 Manufacture of batteries and accumulators",
},
"Manufacture of wiring and wiring devices": {
    CPA: "27.3 Wiring and wiring devices",
    ISIC: "273 Manufacture of wiring and wiring devices",
    NACE: "27.3 Manufacture of wiring and wiring devices",
    UK_SIC: "27.3 Manufacture of wiring and wiring devices",
},
"Manufacture of lighting equipment": {
    CPA: "27.4 Lighting equipment",
    ISIC: "274 Manufacture of lighting equipment",
    NACE: "27.4 Manufacture of lighting equipment",
    UK_SIC: "27.4 Manufacture of electric lighting equipment",
},
"Manufacture of domestic appliances": {
    CPA: "27.5 Domestic appliances",
    ISIC: "275 Manufacture of domestic appliances",
    NACE: "27.5 Manufacture of domestic appliances",
    UK_SIC: "27.5 Manufacture of domestic appliances",
},
"Manufacture of other electrical equipment": {
    CPA: "27.9 Other electrical equipment",
    ISIC: "279 Manufacture of other electrical equipment",
    NACE: "27.9 Manufacture of other electrical equipment",
    UK_SIC: "27.9 Manufacture of other electrical equipment",
},
"Manufacture of general-purpose machinery": {
    CPA: "28.1 General-purpose machinery",
    ISIC: "281 Manufacture of general-purpose machinery",
    NACE: "28.1 Manufacture of general-purpose machinery",
    UK_SIC: "28.1 Manufacture of general-purpose machinery",
},
"Manufacture of other general-purpose machinery": {
    CPA: "28.2 Other general-purpose machinery",
    ISIC: "282 Manufacture of special-purpose machinery",
    NACE: "28.2 Manufacture of other general-purpose machinery",
    UK_SIC: "28.2 Manufacture of other general-purpose machinery",
},
"Manufacture of agricultural and forestry machinery": {
    CPA: "28.3 Agricultural and forestry machinery",
    ISIC: "283 ",
    NACE: "28.3 Manufacture of agricultural and forestry machinery",
    UK_SIC: "28.3 Manufacture of agricultural and forestry machinery",
},
"Manufacture of metal forming machinery and machine tools": {
    CPA: "28.4 Metal forming machinery and machine tools",
    ISIC: "284 ",
    NACE: "28.4 Manufacture of metal forming machinery and machine tools",
    UK_SIC: "28.4 Manufacture of metal forming machinery and machine tools",
},
"Manufacture of other special-purpose machinery": {
    CPA: "28.9 Other special-purpose machinery",
    ISIC: "289 ",
    NACE: "28.9 Manufacture of other special-purpose machinery",
    UK_SIC: "28.9 Manufacture of other special-purpose machinery",
},
"Manufacture of motor vehicles": {
    CPA: "29.1 Motor vehicles",
    ISIC: "291 Manufacture of motor vehicles",
    NACE: "29.1 Manufacture of motor vehicles",
    UK_SIC: "29.1 Manufacture of motor vehicles",
},
"Manufacture of bodies and coachwork for motor vehicles; manufacture of trailers and semi-trailers": {
    CPA: "29.2 Bodies and coachwork for motor vehicles; trailers and semi-trailers",
    ISIC: "292 Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers",
    NACE: "29.2 Manufacture of bodies and coachwork for motor vehicles; manufacture of trailers and semi-trailers",
    UK_SIC: "29.2 Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers",
},
"Manufacture of motor vehicle parts and accessories": {
    CPA: "29.3 Parts and accessories for motor vehicles",
    ISIC: "293 Manufacture of parts and accessories for motor vehicles",
    NACE: "29.3 Manufacture of motor vehicle parts and accessories",
    UK_SIC: "29.3 Manufacture of parts and accessories for motor vehicles",
},
"Building of ships and boats": {
    CPA: "30.1 Ships and boats",
    ISIC: "301 Building of ships and boats",
    NACE: "30.1 Building of ships and boats",
    UK_SIC: "30.1 Building of ships and boats",
},
"Manufacture of railway locomotives and rolling stock": {
    CPA: "30.2 Railway locomotives and rolling stock",
    ISIC: "302 Manufacture of railway locomotives and rolling stock",
    NACE: "30.2 Manufacture of railway locomotives and rolling stock",
    UK_SIC: "30.2 Manufacture of railway locomotives and rolling stock",
},
"Manufacture of air and spacecraft and related machinery": {
    CPA: "30.3 Air and spacecraft and related machinery",
    ISIC: "303 Manufacture of air and spacecraft and related machinery",
    NACE: "30.3 Manufacture of air and spacecraft and related machinery",
    UK_SIC: "30.3 Manufacture of air and spacecraft and related machinery",
},
"Manufacture of military fighting vehicles": {
    CPA: "30.4 Military fighting vehicles",
    ISIC: "304 Manufacture of military fighting vehicles",
    NACE: "30.4 Manufacture of military fighting vehicles",
    UK_SIC: "30.4 Manufacture of military fighting vehicles",
},
"Manufacture of transport equipment n.e.c.": {
    CPA: "30.9 Transport equipment n.e.c.",
    ISIC: "309 Manufacture of transport equipment n.e.c.",
    NACE: "30.9 Manufacture of transport equipment n.e.c.",
    UK_SIC: "30.9 Manufacture of transport equipment n.e.c.",
},
"Manufacture of furniture": {
    CPA: "31.0 Furniture",
    ISIC: "310 Manufacture of furniture",
    NACE: "31.0 Manufacture of furniture",
    UK_SIC: "31.0 Manufacture of furniture",
},
"Manufacture of jewellery, bijouterie and related articles": {
    CPA: "32.1 Jewellery, bijouterie and related articles",
    ISIC: "321 Manufacture of jewellery, bijouterie and related articles",
    NACE: "32.1 Manufacture of jewellery, bijouterie and related articles",
    UK_SIC: "32.1 Manufacture of jewellery, bijouterie and related articles",
},
"Manufacture of musical instruments": {
    CPA: "32.2 Musical instruments",
    ISIC: "322 Manufacture of musical instruments",
    NACE: "32.2 Manufacture of musical instruments",
    UK_SIC: "32.2 Manufacture of musical instruments",
},
"Manufacture of sports goods": {
    CPA: "32.3 Sports goods",
    ISIC: "323 Manufacture of sports goods",
    NACE: "32.3 Manufacture of sports goods",
    UK_SIC: "32.3 Manufacture of sports goods",
},
"Manufacture of games and toys": {
    CPA: "32.4 Games and toys",
    ISIC: "324 Manufacture of games and toys",
    NACE: "32.4 Manufacture of games and toys",
    UK_SIC: "32.4 Manufacture of games and toys",
},
"Manufacture of medical and dental instruments and supplies": {
    CPA: "32.5 Medical and dental instruments and supplies",
    ISIC: "325 Manufacture of medical and dental instruments and supplies",
    NACE: "32.5 Manufacture of medical and dental instruments and supplies",
    UK_SIC: "32.5 Manufacture of medical and dental instruments and supplies",
},
"Manufacturing n.e.c.": {
    CPA: "32.9 Manufactured goods n.e.c.",
    ISIC: "329 Other manufacturing n.e.c.",
    NACE: "32.9 Manufacturing n.e.c.",
    UK_SIC: "32.9 Other manufacturing n.e.c.",
},
"Repair and maintenance of fabricated metal products, machinery and equipment": {
    CPA: "33.1 Repair and maintenance services of fabricated metal products, machinery and equipment",
    ISIC: "331 Repair and maintenance of fabricated metal products, machinery and equipment",
    NACE: "33.1 Repair and maintenance of fabricated metal products, machinery and equipment",
    UK_SIC: "33.1 Repair of fabricated metal products, machinery and equipment",
},
"Installation of industrial machinery and equipment": {
    CPA: "33.2 Installation services of industrial machinery and equipment",
    ISIC: "332 Installation of industrial machinery and equipment",
    NACE: "33.2 Installation of industrial machinery and equipment",
    UK_SIC: "33.2 Installation of industrial machinery and equipment",
},
"Electric power generation, transmission and distribution": {
    CPA: "35.1 Electric power generation, transmission and distribution services",
    ISIC: "351 Electric power generation, transmission and distribution activities",
    NACE: "35.1 Electric power generation, transmission and distribution",
    UK_SIC: "35.1 Electric power generation, transmission and distribution",
},
"Manufacture of gas, and distribution of gaseous fuels through mains": {
    CPA: "35.2 Manufactured gas; distribution services of gaseous fuels through mains",
    ISIC: "352 Manufacture of gas; distribution of gaseous fuels through mains",
    NACE: "35.2 Manufacture of gas, and distribution of gaseous fuels through mains",
    UK_SIC: "35.2 Manufacture of gas; distribution of gaseous fuels through mains",
},
"Steam and air conditioning supply": {
    CPA: "35.3 Steam and air conditioning supply services",
    ISIC: "353 Steam and air conditioning supply",
    NACE: "35.3 Steam and air conditioning supply",
    UK_SIC: "35.3 Steam and air conditioning supply",
},
"Activities of brokers and agents for electric power and natural gas": {
    CPA: "35.4 Services of brokers and agents for electric power and natural gas",
    ISIC: "354 Activities of brokers and agents for electric power and natural gas",
    NACE: "35.4 Activities of brokers and agents for electric power and natural gas",
    UK_SIC: "35.4 ",
},
"Water collection, treatment and supply": {
    CPA: "36.0 Natural water; water treatment and supply services",
    ISIC: "360 Water collection, treatment and supply",
    NACE: "36.0 Water collection, treatment and supply",
    UK_SIC: "36.0 Water collection, treatment and supply",
},
"Sewerage": {
    CPA: "37.0 Sewerage services; sewage sludge",
    ISIC: "370 Sewerage",
    NACE: "37.0 Sewerage",
    UK_SIC: "37.0 Sewerage",
},
"Waste collection": {
    CPA: "38.1 Waste collection services",
    ISIC: "381 Waste collection activities",
    NACE: "38.1 Waste collection",
    UK_SIC: "38.1 Waste collection",
},
"Waste recovery": {
    CPA: "38.2 Waste recovery services",
    ISIC: "382 Waste treatment and disposal",
    NACE: "38.2 Waste recovery",
    UK_SIC: "38.2 Waste treatment and disposal",
},
"Waste disposal without recovery": {
    CPA: "38.3 Waste disposal services without recovery",
    ISIC: "383 Materials and other waste recovery",
    NACE: "38.3 Waste disposal without recovery",
    UK_SIC: "38.3 Materials recovery",
},
"Remediation activities and other waste management service activities": {
    CPA: "39.0 Remediation services and other waste management services",
    ISIC: "390 Remediation and other waste management service activities",
    NACE: "39.0 Remediation activities and other waste management service activities",
    UK_SIC: "39.0 Remediation activities and other waste management services",
},
"Construction of residential and non-residential buildings": {
    CPA: "41.0 Residential and non-residential buildings, residential and non-residential buildings construction works",
    ISIC: "410 Construction of residential and non-residential buildings",
    NACE: "41.0 Construction of residential and non-residential buildings",
    UK_SIC: "41.0 ",
},
"Construction of roads and railways": {
    CPA: "42.1 Roads and railways; construction works for roads and railways",
    ISIC: "421 Construction of roads and railways",
    NACE: "42.1 Construction of roads and railways",
    UK_SIC: "42.1 Construction of roads and railways",
},
"Construction of utility projects": {
    CPA: "42.2 Constructions and construction works for utility projects",
    ISIC: "422 Construction of utility projects",
    NACE: "42.2 Construction of utility projects",
    UK_SIC: "42.2 Construction of utility projects",
},
"Construction of other civil engineering projects": {
    CPA: "42.9 Constructions and construction works for other civil engineering projects",
    ISIC: "429 Construction of other civil engineering projects",
    NACE: "42.9 Construction of other civil engineering projects",
    UK_SIC: "42.9 Construction of other civil engineering projects",
},
"Demolition and site preparation": {
    CPA: "43.1 Demolition and site preparation works",
    ISIC: "431 Demolition and site preparation",
    NACE: "43.1 Demolition and site preparation",
    UK_SIC: "43.1 Demolition and site preparation",
},
"Electrical, plumbing and other construction installation activities": {
    CPA: "43.2 Electrical, plumbing and other construction installation works",
    ISIC: "432 Electrical, plumbing and other construction installation activities",
    NACE: "43.2 Electrical, plumbing and other construction installation activities",
    UK_SIC: "43.2 Electrical, plumbing and other construction installation activities",
},
"Building completion and finishing": {
    CPA: "43.3 Building completion and finishing works",
    ISIC: "433 Building completion and finishing",
    NACE: "43.3 Building completion and finishing",
    UK_SIC: "43.3 Building completion and finishing",
},
"Specialised construction activities in construction of buildings": {
    CPA: "43.4 Specialised construction works in construction of buildings",
    ISIC: "434 Intermediation service activities for specialized construction services",
    NACE: "43.4 Specialised construction activities in construction of buildings",
    UK_SIC: "43.4 ",
},
"Specialised construction activities in civil engineering": {
    CPA: "43.5 Specialised construction works in civil engineering",
    ISIC: "435 ",
    NACE: "43.5 Specialised construction activities in civil engineering",
    UK_SIC: "43.5 ",
},
"Intermediation service activities for specialised construction services": {
    CPA: "43.6 Intermediation services of specialised construction services",
    ISIC: "436 ",
    NACE: "43.6 Intermediation service activities for specialised construction services",
    UK_SIC: "43.6 ",
},
"Other specialised construction activities": {
    CPA: "43.9 Other specialised construction works",
    ISIC: "439 Other specialized construction activities",
    NACE: "43.9 Other specialised construction activities",
    UK_SIC: "43.9 Other specialised construction activities",
},
"Wholesale on a fee or contract basis": {
    CPA: "46.1 Wholesale trade services on a fee or contract basis",
    ISIC: "461 Wholesale on a fee or contract basis",
    NACE: "46.1 Wholesale on a fee or contract basis",
    UK_SIC: "46.1 Wholesale on a fee or contract basis",
},
"Wholesale of agricultural raw materials and live animals": {
    CPA: "46.2 Wholesale trade services of agricultural raw materials and live animals",
    ISIC: "462 Wholesale of agricultural raw materials and live animals",
    NACE: "46.2 Wholesale of agricultural raw materials and live animals",
    UK_SIC: "46.2 Wholesale of agricultural raw materials and live animals",
},
"Wholesale of food, beverages and tobacco": {
    CPA: "46.3 Wholesale trade services of food, beverages and tobacco",
    ISIC: "463 Wholesale of food, beverages and tobacco",
    NACE: "46.3 Wholesale of food, beverages and tobacco",
    UK_SIC: "46.3 Wholesale of food, beverages and tobacco",
},
"Wholesale of household goods": {
    CPA: "46.4 Wholesale trade services of household goods",
    ISIC: "464 Wholesale of household goods",
    NACE: "46.4 Wholesale of household goods",
    UK_SIC: "46.4 Wholesale of household goods",
},
"Wholesale of information and communication equipment": {
    CPA: "46.5 Wholesale trade services of information and communication equipment",
    ISIC: "465 Wholesale of machinery, equipment and supplies",
    NACE: "46.5 Wholesale of information and communication equipment",
    UK_SIC: "46.5 Wholesale of information and communication equipment",
},
"Wholesale of other machinery, equipment and supplies": {
    CPA: "46.6 Wholesale trade services of other machinery, equipment and supplies",
    ISIC: "466 Wholesale of motor vehicles, motorcycles and related parts and accessories",
    NACE: "46.6 Wholesale of other machinery, equipment and supplies",
    UK_SIC: "46.6 Wholesale of other machinery, equipment and supplies",
},
"Wholesale of motor vehicles, motorcycles and related parts and accessories": {
    CPA: "46.7 Wholesale trade services of motor vehicles, motorcycles and related parts and accessories",
    ISIC: "467 Other specialized wholesale",
    NACE: "46.7 Wholesale of motor vehicles, motorcycles and related parts and accessories",
    UK_SIC: "46.7 Other specialised wholesale",
},
"Other specialised wholesale": {
    CPA: "46.8 Other specialised wholesale trade services",
    ISIC: "468 ",
    NACE: "46.8 Other specialised wholesale",
    UK_SIC: "46.8 ",
},
"Non-specialised wholesale trade": {
    CPA: "46.9 Non-specialised wholesale trade services",
    ISIC: "469 Non-specialized wholesale trade",
    NACE: "46.9 Non-specialised wholesale trade",
    UK_SIC: "46.9 Non-specialised wholesale trade",
},
"Non-specialised retail sale": {
    CPA: "47.1 ",
    ISIC: "471 Non-specialized retail sale",
    NACE: "47.1 Non-specialised retail sale",
    UK_SIC: "47.1 Retail sale in non-specialised stores",
},
"Retail sale of food, beverages and tobacco": {
    CPA: "47.2 Retail sale services of food, beverages and tobacco",
    ISIC: "472 Retail sale of food, beverages and tobacco",
    NACE: "47.2 Retail sale of food, beverages and tobacco",
    UK_SIC: "47.2 Retail sale of food, beverages and tobacco in specialised stores",
},
"Retail sale of automotive fuel": {
    CPA: "47.3 Retail sale services of automotive fuel",
    ISIC: "473 Retail sale of automotive fuel",
    NACE: "47.3 Retail sale of automotive fuel",
    UK_SIC: "47.3 Retail sale of automotive fuel in specialised stores",
},
"Retail sale of information and communication equipment": {
    CPA: "47.4 Retail sale services of information and communication equipment",
    ISIC: "474 Retail sale of information and communication equipment",
    NACE: "47.4 Retail sale of information and communication equipment",
    UK_SIC: "47.4 Retail sale of information and communication equipment in specialised stores",
},
"Retail sale of other household equipment": {
    CPA: "47.5 Retail sale services of other household equipment",
    ISIC: "475 Retail sale of other household equipment",
    NACE: "47.5 Retail sale of other household equipment",
    UK_SIC: "47.5 Retail sale of other household equipment in specialised stores",
},
"Retail sale of cultural and recreational goods": {
    CPA: "47.6 Retail sale services of cultural and recreational goods",
    ISIC: "476 Retail sale of cultural and recreational goods",
    NACE: "47.6 Retail sale of cultural and recreational goods",
    UK_SIC: "47.6 Retail sale of cultural and recreation goods in specialised stores",
},
"Retail sale of other goods, except motor vehicles and motorcycles": {
    CPA: "47.7 Retail sale services of other goods, except motor vehicles and motorcycles",
    ISIC: "477 Retail sale of other goods, except motor vehicles and motorcycles",
    NACE: "47.7 Retail sale of other goods, except motor vehicles and motorcycles",
    UK_SIC: "47.7 Retail sale of other goods in specialised stores",
},
"Retail sale of motor vehicles, motorcycles and related parts and accessories": {
    CPA: "47.8 Retail sale services of motor vehicles, motorcycles and related parts and accessories",
    ISIC: "478 Retail sale of motor vehicles, motorcycles and related parts and accessories",
    NACE: "47.8 Retail sale of motor vehicles, motorcycles and related parts and accessories",
    UK_SIC: "47.8 Retail sale via stalls and markets",
},
"Intermediation service activities for retail sale": {
    CPA: "47.9 Intermediation services of retail sale services",
    ISIC: "479 Intermediation service activities for retail sale",
    NACE: "47.9 Intermediation service activities for retail sale",
    UK_SIC: "47.9 Retail trade not in stores, stalls or markets",
},
"Passenger rail transport": {
    CPA: "49.1 Passenger rail transport services",
    ISIC: "491 Transport via railways",
    NACE: "49.1 Passenger rail transport",
    UK_SIC: "49.1 Passenger rail transport, interurban",
},
"Freight rail transport": {
    CPA: "49.2 Freight rail transport services",
    ISIC: "492 Other land transport",
    NACE: "49.2 Freight rail transport",
    UK_SIC: "49.2 Freight rail transport",
},
"Other passenger land transport": {
    CPA: "49.3 Other passenger land transport services",
    ISIC: "493 Transport via pipeline",
    NACE: "49.3 Other passenger land transport",
    UK_SIC: "49.3 Other passenger land transport",
},
"Freight transport by road and removal services": {
    CPA: "49.4 Freight transport services by road and removal services",
    ISIC: "494 ",
    NACE: "49.4 Freight transport by road and removal services",
    UK_SIC: "49.4 Freight transport by road and removal services",
},
"Transport via pipeline": {
    CPA: "49.5 Transport services via pipeline",
    ISIC: "495 ",
    NACE: "49.5 Transport via pipeline",
    UK_SIC: "49.5 Transport via pipeline",
},
"Sea and coastal passenger water transport": {
    CPA: "50.1 Sea and coastal passenger water transport services",
    ISIC: "501 Sea and coastal water transport",
    NACE: "50.1 Sea and coastal passenger water transport",
    UK_SIC: "50.1 Sea and coastal passenger water transport",
},
"Sea and coastal freight water transport": {
    CPA: "50.2 Sea and coastal freight water transport services",
    ISIC: "502 Inland water transport",
    NACE: "50.2 Sea and coastal freight water transport",
    UK_SIC: "50.2 Sea and coastal freight water transport",
},
"Inland passenger water transport": {
    CPA: "50.3 Inland passenger water transport services",
    ISIC: "503 ",
    NACE: "50.3 Inland passenger water transport",
    UK_SIC: "50.3 Inland passenger water transport",
},
"Inland freight water transport": {
    CPA: "50.4 Inland freight water transport services",
    ISIC: "504 ",
    NACE: "50.4 Inland freight water transport",
    UK_SIC: "50.4 Inland freight water transport",
},
"Passenger air transport": {
    CPA: "51.1 Passenger air transport services",
    ISIC: "511 Passenger air transport",
    NACE: "51.1 Passenger air transport",
    UK_SIC: "51.1 Passenger air transport",
},
"Freight air transport and space transport": {
    CPA: "51.2 Freight air transport and space transport services",
    ISIC: "512 Freight air transport",
    NACE: "51.2 Freight air transport and space transport",
    UK_SIC: "51.2 Freight air transport and space transport",
},
"Warehousing and storage": {
    CPA: "52.1 Warehousing and storage services",
    ISIC: "521 Warehousing and storage",
    NACE: "52.1 Warehousing and storage",
    UK_SIC: "52.1 Warehousing and storage",
},
"Support activities for transportation": {
    CPA: "52.2 Support services of transportation",
    ISIC: "522 Support activities for transportation",
    NACE: "52.2 Support activities for transportation",
    UK_SIC: "52.2 Support activities for transportation",
},
"Intermediation service activities for transportation": {
    CPA: "52.3 Intermediation services of transportation",
    ISIC: "523 Intermediation service activities for transportation",
    NACE: "52.3 Intermediation service activities for transportation",
    UK_SIC: "52.3 ",
},
"Postal activities under universal service obligation": {
    CPA: "53.1 Postal services under universal service obligation",
    ISIC: "531 Postal activities",
    NACE: "53.1 Postal activities under universal service obligation",
    UK_SIC: "53.1 Postal activities under universal service obligation",
},
"Other postal and courier activities": {
    CPA: "53.2 Other postal and courier services",
    ISIC: "532 Courier activities",
    NACE: "53.2 Other postal and courier activities",
    UK_SIC: "53.2 Other postal and courier activities",
},
"Intermediation service activities for postal and courier activities": {
    CPA: "53.3 Intermediation services of postal and courier services",
    ISIC: "533 Intermediation service activities for postal and courier activities",
    NACE: "53.3 Intermediation service activities for postal and courier activities",
    UK_SIC: "53.3 ",
},
"Hotels and similar accommodation": {
    CPA: "55.1 Hotel and similar accommodation services",
    ISIC: "551 Hotels and similar accommodation activities",
    NACE: "55.1 Hotels and similar accommodation",
    UK_SIC: "55.1 Hotels and similar accommodation",
},
"Holiday and other short-stay accommodation": {
    CPA: "55.2 Holiday and other short-stay accommodation services",
    ISIC: "552 Other short term accommodation activities",
    NACE: "55.2 Holiday and other short-stay accommodation",
    UK_SIC: "55.2 Holiday and other short-stay accommodation",
},
"Camping grounds and recreational vehicle parks": {
    CPA: "55.3 Camping grounds and recreational vehicle parks services",
    ISIC: "553 Camping grounds, recreational vehicle parks and trailer parks",
    NACE: "55.3 Camping grounds and recreational vehicle parks",
    UK_SIC: "55.3 Camping grounds, recreational vehicle parks and trailer parks",
},
"Intermediation service activities for accommodation": {
    CPA: "55.4 Intermediation services of accommodation",
    ISIC: "554 Intermediation service activities for accommodation",
    NACE: "55.4 Intermediation service activities for accommodation",
    UK_SIC: "55.4 ",
},
"Other accommodation": {
    CPA: "55.9 Other accommodation services",
    ISIC: "559 Other accommodation n.e.c.",
    NACE: "55.9 Other accommodation",
    UK_SIC: "55.9 Other accommodation",
},
"Restaurants and mobile food service activities": {
    CPA: "56.1 Restaurant and mobile food serving services",
    ISIC: "561 Restaurants and mobile food service activities",
    NACE: "56.1 Restaurants and mobile food service activities",
    UK_SIC: "56.1 Restaurants and mobile food service activities",
},
"Event catering, contract catering service activities and other food service activities": {
    CPA: "56.2 Event catering, contract catering services and other food serving services",
    ISIC: "562 Event catering and other food service activities",
    NACE: "56.2 Event catering, contract catering service activities and other food service activities",
    UK_SIC: "56.2 Event catering and other food service activities",
},
"Beverage serving activities": {
    CPA: "56.3 Beverage serving services",
    ISIC: "563 Beverage serving activities",
    NACE: "56.3 Beverage serving activities",
    UK_SIC: "56.3 Beverage serving activities",
},
"Intermediation service activities for food and beverage services activities": {
    CPA: "56.4 Intermediation services of food and beverage serving services",
    ISIC: "564 Intermediation service activities for food and beverage services activities",
    NACE: "56.4 Intermediation service activities for food and beverage services activities",
    UK_SIC: "56.4 ",
},
"Publishing of books, newspapers and other publishing activities, except software publishing": {
    CPA: "58.1 Publishing services of books, newspapers and other publishing services, except software publishing",
    ISIC: "581 Publishing of books, newspapers, periodicals and other publishing activities",
    NACE: "58.1 Publishing of books, newspapers and other publishing activities, except software publishing",
    UK_SIC: "58.1 Publishing of books, periodicals and other publishing activities",
},
"Software publishing": {
    CPA: "58.2 Software publishing services",
    ISIC: "582 Software publishing",
    NACE: "58.2 Software publishing",
    UK_SIC: "58.2 Software publishing",
},
"Motion picture, video and television programme activities": {
    CPA: "59.1 Motion picture, video and television programme services",
    ISIC: "591 Motion picture, video and television programme activities",
    NACE: "59.1 Motion picture, video and television programme activities",
    UK_SIC: "59.1 Motion picture, video and television programme activities",
},
"Sound recording and music publishing activities": {
    CPA: "59.2 Sound recording and music publishing services",
    ISIC: "592 Sound recording and music publishing activities",
    NACE: "59.2 Sound recording and music publishing activities",
    UK_SIC: "59.2 Sound recording and music publishing activities",
},
"Radio broadcasting and audio distribution activities": {
    CPA: "60.1 Radio broadcasting and audio distribution services",
    ISIC: "601 Radio broadcasting and audio distribution activities",
    NACE: "60.1 Radio broadcasting and audio distribution activities",
    UK_SIC: "60.1 Radio broadcasting",
},
"Television programming, broadcasting and video distribution activities": {
    CPA: "60.2 Television programming, broadcasting and video distribution services",
    ISIC: "602 Television programming, broadcasting and video distribution activities",
    NACE: "60.2 Television programming, broadcasting and video distribution activities",
    UK_SIC: "60.2 Television programming and broadcasting activities",
},
"News agency and other content distribution activities": {
    CPA: "60.3 News agency and other content distribution services",
    ISIC: "603 News agency and other content distribution activities",
    NACE: "60.3 News agency and other content distribution activities",
    UK_SIC: "60.3 ",
},
"Wired, wireless, and satellite telecommunication activities": {
    CPA: "61.1 Wired, wireless, and satellite telecommunication services",
    ISIC: "611 Wired, wireless, and satellite telecommunication activities",
    NACE: "61.1 Wired, wireless, and satellite telecommunication activities",
    UK_SIC: "61.1 Wired telecommunications activities",
},
"Telecommunication reselling activities and intermediation service activities for telecommunication": {
    CPA: "61.2 Telecommunication reselling services and intermediation services of telecommunication services",
    ISIC: "612 Telecommunication reselling activities and intermediation service activities for telecommunication",
    NACE: "61.2 Telecommunication reselling activities and intermediation service activities for telecommunication",
    UK_SIC: "61.2 Wireless telecommunications activities",
},
"Other telecommunication activities": {
    CPA: "61.9 Other telecommunication services",
    ISIC: "619 Other telecommunication activities",
    NACE: "61.9 Other telecommunication activities",
    UK_SIC: "61.9 Other telecommunications activities",
},
"Computer programming activities": {
    CPA: "62.1 Computer programming services",
    ISIC: "621 Computer programming activities",
    NACE: "62.1 Computer programming activities",
    UK_SIC: "62.1 ",
},
"Computer consultancy and computer facilities management activities": {
    CPA: "62.2 Computer consultancy and computer facilities management services",
    ISIC: "622 Computer consultancy and computer facilities management activities",
    NACE: "62.2 Computer consultancy and computer facilities management activities",
    UK_SIC: "62.2 ",
},
"Other information technology and computer service activities": {
    CPA: "62.9 Other information technology and computer services",
    ISIC: "629 Other information technology and computer service activities",
    NACE: "62.9 Other information technology and computer service activities",
    UK_SIC: "62.9 ",
},
"Computing infrastructure, data processing, hosting and related activities": {
    CPA: "63.1 Computing infrastructure, data processing, hosting and related services",
    ISIC: "631 Computing infrastructure, data processing, hosting and related activities",
    NACE: "63.1 Computing infrastructure, data processing, hosting and related activities",
    UK_SIC: "63.1 Data processing, hosting and related activities; web portals",
},
"Web search portal activities and other information service activities": {
    CPA: "63.9 Web search portal services and other information services",
    ISIC: "639 Web search portals activities and other information service activities",
    NACE: "63.9 Web search portal activities and other information service activities",
    UK_SIC: "63.9 Other information service activities",
},
"Monetary intermediation": {
    CPA: "64.1 Monetary intermediation services",
    ISIC: "641 Monetary intermediation",
    NACE: "64.1 Monetary intermediation",
    UK_SIC: "64.1 Monetary intermediation",
},
"Activities of holding companies and financing conduits": {
    CPA: "64.2 Services of holding companies and financing conduits",
    ISIC: "642 Activities of holding companies and financing conduits",
    NACE: "64.2 Activities of holding companies and financing conduits",
    UK_SIC: "64.2 Activities of holding companies",
},
"Activities of trusts, funds and similar financial entities": {
    CPA: "64.3 Services of trusts, funds and similar financial entities",
    ISIC: "643 Activities of trusts, funds and similar financial entities",
    NACE: "64.3 Activities of trusts, funds and similar financial entities",
    UK_SIC: "64.3 Trusts, funds and similar financial entities",
},
"Other financial service activities, except insurance and pension funding": {
    CPA: "64.9 Other financial services, except insurance and pension funding",
    ISIC: "649 Other financial service activities, except insurance and pension funding activities",
    NACE: "64.9 Other financial service activities, except insurance and pension funding",
    UK_SIC: "64.9 Other financial service activities, except insurance and pension funding",
},
"Insurance": {
    CPA: "65.1 Insurance services",
    ISIC: "651 Insurance",
    NACE: "65.1 Insurance",
    UK_SIC: "65.1 Insurance",
},
"Reinsurance": {
    CPA: "65.2 Reinsurance services",
    ISIC: "652 Reinsurance",
    NACE: "65.2 Reinsurance",
    UK_SIC: "65.2 Reinsurance",
},
"Pension funding": {
    CPA: "65.3 Pension funding services",
    ISIC: "653 Pension funding",
    NACE: "65.3 Pension funding",
    UK_SIC: "65.3 Pension funding",
},
"Activities auxiliary to financial services, except insurance and pension funding": {
    CPA: "66.1 Services auxiliary to financial services, except insurance and pension funding",
    ISIC: "661 Activities auxiliary to financial services, except insurance and pension funding",
    NACE: "66.1 Activities auxiliary to financial services, except insurance and pension funding",
    UK_SIC: "66.1 Activities auxiliary to financial services, except insurance and pension funding",
},
"Activities auxiliary to insurance and pension funding": {
    CPA: "66.2 Services auxiliary to insurance and pension funding",
    ISIC: "662 Activities auxiliary to insurance and pension funding",
    NACE: "66.2 Activities auxiliary to insurance and pension funding",
    UK_SIC: "66.2 Activities auxiliary to insurance and pension funding",
},
"Fund management activities": {
    CPA: "66.3 Fund management services",
    ISIC: "663 Fund management activities",
    NACE: "66.3 Fund management activities",
    UK_SIC: "66.3 Fund management activities",
},
"Real estate activities with own property and development of building projects": {
    CPA: "68.1 Real estate services with own property and development of building projects",
    ISIC: "681 Real estate activities with own or leased property",
    NACE: "68.1 Real estate activities with own property and development of building projects",
    UK_SIC: "68.1 Buying and selling of own real estate",
},
"Rental and operating of own or leased real estate": {
    CPA: "68.2 Rental and operating services of own or leased real estate",
    ISIC: "682 Real estate activities on a fee or contract basis",
    NACE: "68.2 Rental and operating of own or leased real estate",
    UK_SIC: "68.2 Renting and operating of own or leased real estate",
},
"Real estate activities on a fee or contract basis": {
    CPA: "68.3 Real estate services on a fee or contract basis",
    ISIC: "683 ",
    NACE: "68.3 Real estate activities on a fee or contract basis",
    UK_SIC: "68.3 Real estate activities on a fee or contract basis",
},
"Legal activities": {
    CPA: "69.1 Legal services",
    ISIC: "691 Legal activities",
    NACE: "69.1 Legal activities",
    UK_SIC: "69.1 Legal activities",
},
"Accounting, bookkeeping and auditing activities; tax consultancy": {
    CPA: "69.2 Accounting, bookkeeping and auditing services; tax consultancy services",
    ISIC: "692 Accounting, bookkeeping and auditing activities; tax consultancy",
    NACE: "69.2 Accounting, bookkeeping and auditing activities; tax consultancy",
    UK_SIC: "69.2 Accounting, bookkeeping and auditing activities; tax consultancy",
},
"Activities of head offices": {
    CPA: "70.1 Services of head offices",
    ISIC: "701 Activities of head offices",
    NACE: "70.1 Activities of head offices",
    UK_SIC: "70.1 Activities of head offices",
},
"Business and other management consultancy activities": {
    CPA: "70.2 Business and other management consultancy services",
    ISIC: "702 Business and other management consultancy activities",
    NACE: "70.2 Business and other management consultancy activities",
    UK_SIC: "70.2 Management consultancy activities",
},
"Architectural and engineering activities and related technical consultancy": {
    CPA: "71.1 Architectural and engineering services and related technical consultancy services",
    ISIC: "711 Architectural and engineering, and related technical consultancy activities",
    NACE: "71.1 Architectural and engineering activities and related technical consultancy",
    UK_SIC: "71.1 Architectural and engineering activities and related technical consultancy",
},
"Technical testing and analysis": {
    CPA: "71.2 Technical testing and analysis services",
    ISIC: "712 Technical testing and analysis",
    NACE: "71.2 Technical testing and analysis",
    UK_SIC: "71.2 Technical testing and analysis",
},
"Research and experimental development on natural sciences and engineering": {
    CPA: "72.1 Research and development services on natural sciences, engineering and technology",
    ISIC: "721 Research and experimental development on natural sciences and engineering",
    NACE: "72.1 Research and experimental development on natural sciences and engineering",
    UK_SIC: "72.1 Research and experimental development on natural sciences and engineering",
},
"Research and experimental development on social sciences and humanities": {
    CPA: "72.2 Research and development services on social sciences and humanities",
    ISIC: "722 Research and experimental development on social sciences and humanities",
    NACE: "72.2 Research and experimental development on social sciences and humanities",
    UK_SIC: "72.2 Research and experimental development on social sciences and humanities",
},
"Advertising": {
    CPA: "73.1 Advertising services",
    ISIC: "731 Advertising activities",
    NACE: "73.1 Advertising",
    UK_SIC: "73.1 Advertising",
},
"Market research and public opinion polling": {
    CPA: "73.2 Market research and public opinion polling services",
    ISIC: "732 Market research and public opinion polling activities",
    NACE: "73.2 Market research and public opinion polling",
    UK_SIC: "73.2 Market research and public opinion polling",
},
"Public relations and communication activities": {
    CPA: "73.3 Public relations and communication services",
    ISIC: "733 Public relations activities",
    NACE: "73.3 Public relations and communication activities",
    UK_SIC: "73.3 ",
},
"Specialised design activities": {
    CPA: "74.1 Specialised design services",
    ISIC: "741 Specialized design activities",
    NACE: "74.1 Specialised design activities",
    UK_SIC: "74.1 Specialised design activities",
},
"Photographic activities": {
    CPA: "74.2 Photographic services",
    ISIC: "742 Photographic activities",
    NACE: "74.2 Photographic activities",
    UK_SIC: "74.2 Photographic activities",
},
"Translation and interpretation activities": {
    CPA: "74.3 Translation and interpretation services",
    ISIC: "743 Translation and interpretation activities",
    NACE: "74.3 Translation and interpretation activities",
    UK_SIC: "74.3 Translation and interpretation activities",
},
"Other professional, scientific and technical activities n.e.c.": {
    CPA: "74.9 Other professional, scientific and technical services n.e.c.",
    ISIC: "749 Other professional, scientific and technical activities n.e.c.",
    NACE: "74.9 Other professional, scientific and technical activities n.e.c.",
    UK_SIC: "74.9 Other professional, scientific and technical activities n.e.c.",
},
"Veterinary activities": {
    CPA: "75.0 Veterinary services",
    ISIC: "750 Veterinary activities",
    NACE: "75.0 Veterinary activities",
    UK_SIC: "75.0 Veterinary activities",
},
"Rental and leasing of motor vehicles": {
    CPA: "77.1 Rental and leasing services of motor vehicles",
    ISIC: "771 Rental and leasing of motor vehicles",
    NACE: "77.1 Rental and leasing of motor vehicles",
    UK_SIC: "77.1 Renting and leasing of motor vehicles",
},
"Rental and leasing of personal and household goods": {
    CPA: "77.2 Rental and leasing services of personal and household goods",
    ISIC: "772 Rental and leasing of personal and household goods",
    NACE: "77.2 Rental and leasing of personal and household goods",
    UK_SIC: "77.2 Renting and leasing of personal and household goods",
},
"Rental and leasing of other machinery, equipment and tangible goods": {
    CPA: "77.3 Rental and leasing services of other machinery, equipment and tangible goods",
    ISIC: "773 Rental and leasing of other machinery, equipment and tangible goods",
    NACE: "77.3 Rental and leasing of other machinery, equipment and tangible goods",
    UK_SIC: "77.3 Renting and leasing of other machinery, equipment and tangible goods",
},
"Leasing of intellectual property and similar products, except copyrighted works": {
    CPA: "77.4 Licensing services of intellectual property and similar products, except copyrighted works",
    ISIC: "774 Leasing of intellectual property and similar products, except copyrighted works",
    NACE: "77.4 Leasing of intellectual property and similar products, except copyrighted works",
    UK_SIC: "77.4 Leasing of intellectual property and similar products, except copyrighted works",
},
"Intermediation service activities for rental and leasing of tangible goods and non-financial intangible assets": {
    CPA: "77.5 Intermediation services of rental and leasing of tangible goods and non-financial intangible assets",
    ISIC: "775 Intermediation service activities for rental and leasing of tangible goods and non-financial intangible assets",
    NACE: "77.5 Intermediation service activities for rental and leasing of tangible goods and non-financial intangible assets",
    UK_SIC: "77.5 ",
},
"Activities of employment placement agencies": {
    CPA: "78.1 Services provided by employment placement agencies",
    ISIC: "781 Activities of employment placement agencies",
    NACE: "78.1 Activities of employment placement agencies",
    UK_SIC: "78.1 Activities of employment placement agencies",
},
"Temporary employment agency activities and other human resource provisions": {
    CPA: "78.2 Temporary employment agency services and other human resource provisions",
    ISIC: "782 Temporary employment agency activities and other human resource provisions",
    NACE: "78.2 Temporary employment agency activities and other human resource provisions",
    UK_SIC: "78.2 Temporary employment agency activities",
},
"Travel agency and tour operator activities": {
    CPA: "79.1 Travel agency and tour operator services",
    ISIC: "791 Travel agency and tour operator activities",
    NACE: "79.1 Travel agency and tour operator activities",
    UK_SIC: "79.1 Travel agency and tour operator activities",
},
"Other reservation service and related activities": {
    CPA: "79.9 Other reservation services and related services",
    ISIC: "799 Other travel related activities",
    NACE: "79.9 Other reservation service and related activities",
    UK_SIC: "79.9 Other reservation service and related activities",
},
"Investigation and security activities": {
    CPA: "80.0 Investigation and security services",
    ISIC: "800 ",
    NACE: "80.0 Investigation and security activities",
    UK_SIC: "80.0 ",
},
"Combined facilities support activities": {
    CPA: "81.1 Combined facilities support services",
    ISIC: "811 Combined facilities support activities",
    NACE: "81.1 Combined facilities support activities",
    UK_SIC: "81.1 Combined facilities support activities",
},
"Cleaning activities": {
    CPA: "81.2 Cleaning services",
    ISIC: "812 Cleaning activities",
    NACE: "81.2 Cleaning activities",
    UK_SIC: "81.2 Cleaning activities",
},
"Landscape service activities": {
    CPA: "81.3 Landscape services",
    ISIC: "813 Landscape service activities",
    NACE: "81.3 Landscape service activities",
    UK_SIC: "81.3 Landscape service activities",
},
"Office administrative and support activities": {
    CPA: "82.1 Office administrative and support services",
    ISIC: "821 Office administrative and support activities",
    NACE: "82.1 Office administrative and support activities",
    UK_SIC: "82.1 Office administrative and support activities",
},
"Activities of call centres": {
    CPA: "82.2 Call centre services",
    ISIC: "822 Activities of call centres",
    NACE: "82.2 Activities of call centres",
    UK_SIC: "82.2 Activities of call centres",
},
"Organisation of conventions and trade shows": {
    CPA: "82.3 Organisation of conventions and trade shows services",
    ISIC: "823 Organization of conventions and trade shows",
    NACE: "82.3 Organisation of conventions and trade shows",
    UK_SIC: "82.3 Organisation of conventions and trade shows",
},
"Intermediation service activities for business support service activities n.e.c.": {
    CPA: "82.4 Intermediation services of business support services n.e.c.",
    ISIC: "824 Intermediation service activities for business support service activities n.e.c., except financial intermediation",
    NACE: "82.4 Intermediation service activities for business support service activities n.e.c.",
    UK_SIC: "82.4 ",
},
"Business support service activities n.e.c.": {
    CPA: "82.9 Business support services n.e.c.",
    ISIC: "829 Business support service activities n.e.c.",
    NACE: "82.9 Business support service activities n.e.c.",
    UK_SIC: "82.9 Business support service activities n.e.c.",
},
"Administration of the State and the economic, social and environmental policies of the community": {
    CPA: "84.1 Administration services of the State and the economic, social and environmental policies of the community",
    ISIC: "841 Administration of the State and the economic, social and environmental policies of the community",
    NACE: "84.1 Administration of the State and the economic, social and environmental policies of the community",
    UK_SIC: "84.1 Administration of the State and the economic and social policy of the community",
},
"Provision of services to the community as a whole": {
    CPA: "84.2 Services to the community",
    ISIC: "842 Provision of services to the community as a whole",
    NACE: "84.2 Provision of services to the community as a whole",
    UK_SIC: "84.2 Provision of services to the community as a whole",
},
"Compulsory social security activities": {
    CPA: "84.3 Compulsory social security services",
    ISIC: "843 Compulsory social security activities",
    NACE: "84.3 Compulsory social security activities",
    UK_SIC: "84.3 Compulsory social security activities",
},
"Pre-primary education": {
    CPA: "85.1 Pre-primary education services",
    ISIC: "851 Pre-primary education",
    NACE: "85.1 Pre-primary education",
    UK_SIC: "85.1 Pre-primary education",
},
"Primary education": {
    CPA: "85.2 Primary education services",
    ISIC: "852 Primary education",
    NACE: "85.2 Primary education",
    UK_SIC: "85.2 Primary education",
},
"Secondary and post-secondary non-tertiary education": {
    CPA: "85.3 Secondary and post-secondary non-tertiary education services",
    ISIC: "853 Secondary and post-secondary non-tertiary education",
    NACE: "85.3 Secondary and post-secondary non-tertiary education",
    UK_SIC: "85.3 Secondary education",
},
"Tertiary education": {
    CPA: "85.4 Tertiary education services",
    ISIC: "854 Tertiary education",
    NACE: "85.4 Tertiary education",
    UK_SIC: "85.4 Higher education",
},
"Other education": {
    CPA: "85.5 Other education services",
    ISIC: "855 Other education",
    NACE: "85.5 Other education",
    UK_SIC: "85.5 Other education",
},
"Educational support activities": {
    CPA: "85.6 Educational support services",
    ISIC: "856 Educational support activities",
    NACE: "85.6 Educational support activities",
    UK_SIC: "85.6 Educational support activities",
},
"Hospital activities": {
    CPA: "86.1 Hospital services",
    ISIC: "861 Hospital activities",
    NACE: "86.1 Hospital activities",
    UK_SIC: "86.1 Hospital activities",
},
"Medical and dental practice activities": {
    CPA: "86.2 Medical and dental practice services",
    ISIC: "862 Medical and dental practice activities",
    NACE: "86.2 Medical and dental practice activities",
    UK_SIC: "86.2 Medical and dental practice activities",
},
"Other human health activities": {
    CPA: "86.9 Other human health services",
    ISIC: "869 Other human health activities",
    NACE: "86.9 Other human health activities",
    UK_SIC: "86.9 Other human health activities",
},
"Residential nursing care activities": {
    CPA: "87.1 Residential nursing care services",
    ISIC: "871 Residential nursing care activities",
    NACE: "87.1 Residential nursing care activities",
    UK_SIC: "87.1 Residential nursing care activities",
},
"Residential care activities for persons living with or having a diagnosis of a mental illness or substance abuse": {
    CPA: "87.2 Residential care services of persons living with or having a diagnosis of a mental illness or substance abuse",
    ISIC: "872 Residential care activities for persons living with or having a diagnosis of a mental illness or substance abuse",
    NACE: "87.2 Residential care activities for persons living with or having a diagnosis of a mental illness or substance abuse",
    UK_SIC: "87.2 Residential care activities for learning disabilities, mental health and substance abuse",
},
"Residential care activities for older persons or persons with physical disabilities": {
    CPA: "87.3 Residential care services of older persons or persons with physical disabilities",
    ISIC: "873 Residential care activities for older persons or persons with physical disabilities",
    NACE: "87.3 Residential care activities for older persons or persons with physical disabilities",
    UK_SIC: "87.3 Residential care activities for the elderly and disabled",
},
"Other residential care activities": {
    CPA: "87.9 Other residential care services",
    ISIC: "879 Other residential care activities",
    NACE: "87.9 Other residential care activities",
    UK_SIC: "87.9 Other residential care activities",
},
"Social work activities without accommodation for older persons or persons with disabilities": {
    CPA: "88.1 Social work services without accommodation for older persons or persons with disabilities",
    ISIC: "881 Social work activities without accommodation for older persons or persons with disabilities",
    NACE: "88.1 Social work activities without accommodation for older persons or persons with disabilities",
    UK_SIC: "88.1 Social work activities without accommodation for the elderly and disabled",
},
"Other social work activities without accommodation": {
    CPA: "88.9 Other social work services without accommodation",
    ISIC: "889 Other social work activities without accommodation",
    NACE: "88.9 Other social work activities without accommodation",
    UK_SIC: "88.9 Other social work activities without accommodation",
},
"Arts creation activities": {
    CPA: "90.1 Arts creation services",
    ISIC: "901 Arts creation activities",
    NACE: "90.1 Arts creation activities",
    UK_SIC: "90.1 ",
},
"Activities of performing arts": {
    CPA: "90.2 Services of performing arts",
    ISIC: "902 Activities of performing arts",
    NACE: "90.2 Activities of performing arts",
    UK_SIC: "90.2 ",
},
"Support activities to arts creation and performing arts": {
    CPA: "90.3 Support services to arts creation and performing arts",
    ISIC: "903 Support activities to arts creation and performing arts",
    NACE: "90.3 Support activities to arts creation and performing arts",
    UK_SIC: "90.3 ",
},
"Library and archive activities": {
    CPA: "91.1 Library and archive services",
    ISIC: "911 Library and archives activities",
    NACE: "91.1 Library and archive activities",
    UK_SIC: "91.1 ",
},
"Museum, collection, historical site and monument activities": {
    CPA: "91.2 Museum, collection, historical site and monument services",
    ISIC: "912 Museum, collection, historical site and monument activities",
    NACE: "91.2 Museum, collection, historical site and monument activities",
    UK_SIC: "91.2 ",
},
"Conservation, restoration and other support activities for cultural heritage": {
    CPA: "91.3 Conservation, restoration and other support services of cultural heritage",
    ISIC: "913 Conservation, restoration and other support activities for cultural heritage",
    NACE: "91.3 Conservation, restoration and other support activities for cultural heritage",
    UK_SIC: "91.3 ",
},
"Botanical and zoological garden and nature reserve activities": {
    CPA: "91.4 Botanical and zoological garden and nature reserve services",
    ISIC: "914 Botanical and zoological garden and nature reserve activities",
    NACE: "91.4 Botanical and zoological garden and nature reserve activities",
    UK_SIC: "91.4 ",
},
"Gambling and betting activities": {
    CPA: "92.0 Gambling and betting services",
    ISIC: "920 Gambling and betting activities",
    NACE: "92.0 Gambling and betting activities",
    UK_SIC: "92.0 Gambling and betting activities",
},
"Sports activities": {
    CPA: "93.1 Sporting services",
    ISIC: "931 Sports activities",
    NACE: "93.1 Sports activities",
    UK_SIC: "93.1 Sports activities",
},
"Amusement and recreation activities": {
    CPA: "93.2 Amusement and recreation services",
    ISIC: "932 Amusement and recreation activities",
    NACE: "93.2 Amusement and recreation activities",
    UK_SIC: "93.2 Amusement and recreation activities",
},
"Activities of business, employers and professional membership organisations": {
    CPA: "94.1 Services furnished by business, employers and professional membership organisations",
    ISIC: "941 Activities of business, employers and professional membership organizations",
    NACE: "94.1 Activities of business, employers and professional membership organisations",
    UK_SIC: "94.1 Activities of business, employers and professional membership organisations",
},
"Activities of trade unions": {
    CPA: "94.2 Services furnished by trade unions",
    ISIC: "942 Activities of trade unions",
    NACE: "94.2 Activities of trade unions",
    UK_SIC: "94.2 Activities of trade unions",
},
"Activities of other membership organisations": {
    CPA: "94.9 Services furnished by other membership organisations",
    ISIC: "949 Activities of other membership organizations",
    NACE: "94.9 Activities of other membership organisations",
    UK_SIC: "94.9 Activities of other membership organisations",
},
"Repair and maintenance of computers and communication equipment": {
    CPA: "95.1 Repair and maintenance services of computers and communication equipment",
    ISIC: "951 Repair and maintenance of computers and communication equipment",
    NACE: "95.1 Repair and maintenance of computers and communication equipment",
    UK_SIC: "95.1 Repair of computers and communication equipment",
},
"Repair and maintenance of personal and household goods": {
    CPA: "95.2 Repair and maintenance services of personal and household goods",
    ISIC: "952 Repair and maintenance of personal and household goods",
    NACE: "95.2 Repair and maintenance of personal and household goods",
    UK_SIC: "95.2 Repair of personal and household goods",
},
"Repair and maintenance of motor vehicles and motorcycles": {
    CPA: "95.3 Repair and maintenance services of motor vehicles and motorcycles",
    ISIC: "953 Repair and maintenance of motor vehicles and motorcycles",
    NACE: "95.3 Repair and maintenance of motor vehicles and motorcycles",
    UK_SIC: "95.3 ",
},
"Intermediation service activities for repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles": {
    CPA: "95.4 Intermediation services of repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles",
    ISIC: "954 Intermediation service activities for repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles",
    NACE: "95.4 Intermediation service activities for repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles",
    UK_SIC: "95.4 ",
},
"Washing and cleaning of textile and fur products": {
    CPA: "96.1 Washing and cleaning services of textile and fur products",
    ISIC: "961 Washing and cleaning of textile and fur products",
    NACE: "96.1 Washing and cleaning of textile and fur products",
    UK_SIC: "96.1 ",
},
"Hairdressing, beauty treatment, day spa and similar activities": {
    CPA: "96.2 Hairdressing, beauty treatment, day spa and similar services",
    ISIC: "962 Hairdressing, beauty treatment, day spa and similar activities",
    NACE: "96.2 Hairdressing, beauty treatment, day spa and similar activities",
    UK_SIC: "96.2 ",
},
"Funeral and related activities": {
    CPA: "96.3 Funeral and related services",
    ISIC: "963 Funeral and related activities",
    NACE: "96.3 Funeral and related activities",
    UK_SIC: "96.3 ",
},
"Intermediation service activities for personal services": {
    CPA: "96.4 Intermediation services of personal services",
    ISIC: "964 Intermediation service activities for personal services",
    NACE: "96.4 Intermediation service activities for personal services",
    UK_SIC: "96.4 ",
},
"Other personal service activities": {
    CPA: "96.9 Other personal services",
    ISIC: "969 Other personal service activities n.e.c.",
    NACE: "96.9 Other personal service activities",
    UK_SIC: "96.9 ",
},
"Activities of households as employers of domestic personnel": {
    CPA: "97.0 Services of households as employers of domestic personnel",
    ISIC: "970 Activities of households as employers of domestic personnel",
    NACE: "97.0 Activities of households as employers of domestic personnel",
    UK_SIC: "97.0 Activities of households as employers of domestic personnel",
},
"Undifferentiated goods-producing activities of private households for own use": {
    CPA: "98.1 Undifferentiated goods produced by private households for own use",
    ISIC: "981 Undifferentiated goods-producing activities of private households for own use",
    NACE: "98.1 Undifferentiated goods-producing activities of private households for own use",
    UK_SIC: "98.1 Undifferentiated goods-producing activities of private households for own use",
},
"Undifferentiated service-producing activities of private households for own use": {
    CPA: "98.2 Undifferentiated services produced by private households for own use",
    ISIC: "982 Undifferentiated service-producing activities of private households for own use",
    NACE: "98.2 Undifferentiated service-producing activities of private households for own use",
    UK_SIC: "98.2 Undifferentiated service-producing activities of private households for own use",
},
"Activities of extraterritorial organisations and bodies": {
    CPA: "99.0 Services provided by extraterritorial organisations and bodies",
    ISIC: "990 Activities of extraterritorial organizations and bodies",
    NACE: "99.0 Activities of extraterritorial organisations and bodies",
    UK_SIC: "99.0 Activities of extraterritorial organisations and bodies",
},
       }

    const queryParameters = new URLSearchParams(window.location.search);
    const subcat = queryParameters.get("sc");

    return (
        <Fragment>
            <DataEntryGroup name="Specific Land Use/s" collapsed={subcat==null || subcat!="1"}>
                <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                    <i>
                        The vast majority of properties are residential (93% in the UK), so we have set 'residential' as the default value. Can you help us identify non-residential and mixed use buildings (and verify residential buildings too)?
                    </i>
                </div>
                {(props.mapColourScale != "landuse") ? 
                    <button className={`map-switcher-inline disabled-state btn btn-outline btn-outline-dark key-button`} onClick={switchToLandUseMapStyle}>
                        {"Click to see specific land use."}
                    </button>
                    :
                    <></>
                }
                <MultiDataEntry
                    title={"Current land use(s) (NACE level 3 classification)"}
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
                <hr />
                {props.building.current_landuse_group.map((item, index) => (
                    item in landuseCodesData ?                  
                    <>
                <DataTitleCopyable
                    slug={"props.slug"}
                    slugModifier={"props.slugModifier"}
                    title={"Relevant UK landuse codes"}
                    tooltip={"props.tooltip"}
                    disabled={false}
                /> 
                    <InfoBox type='success'>
                    NNDA/VOI SCAT code {landuseCodesData[item].SCAT}
                    </InfoBox>
                    <InfoBox type='success'>
                    UK SIC: {landuseCodesData[item].UK_SIC}
                    </InfoBox>
                <DataTitleCopyable
                    slug={"props.slug"}
                    slugModifier={"props.slugModifier"}
                    title={"Relevant international landuse codes"}
                    tooltip={"props.tooltip"}
                    disabled={false}
                /> 

                    <InfoBox type='success'>
                    NACE: {landuseCodesData[item].NACE}
                    </InfoBox>
                    <InfoBox type='success'>
                    ISIC: {landuseCodesData[item].ISIC}
                    </InfoBox>
                    <InfoBox type='success'>
                    CPA: {landuseCodesData[item].CPA}
                    </InfoBox>
                    </>
                   : ""
                                     
                 ))
                 }
            </DataEntryGroup>
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
                */}
            </DataEntryGroup>
        </Fragment>
    );
};
const LandUseContainer = withCopyEdit(LandUseView);

export default LandUseContainer;
