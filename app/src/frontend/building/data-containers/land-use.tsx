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

    const landuseCodesData = {
"Growing of non-perennial crops": {
    CPA: {code: "01.1", description: "Non-perennial crops"},
    ISIC: {code: "011", description: "Growing of non-perennial crops"},
    NACE: {code: "01.1", description: "Growing of non-perennial crops"},
    UK_SIC: {code: "01.1", description: "Growing of non-perennial crops"},
},
"Growing of perennial crops": {
    CPA: {code: "01.2", description: "Perennial crops"},
    ISIC: {code: "012", description: "Growing of perennial crops"},
    NACE: {code: "01.2", description: "Growing of perennial crops"},
    UK_SIC: {code: "01.2", description: "Growing of perennial crops"},
},
"Plant propagation": {
    CPA: {code: "01.3", description: "Planting material: live plants, bulbs, tubers and roots, cuttings and slips; mushroom spawn"},
    ISIC: {code: "013", description: "Plant propagation"},
    NACE: {code: "01.3", description: "Plant propagation"},
    UK_SIC: {code: "01.3", description: "Plant propagation"},
},
"Animal production": {
    CPA: {code: "01.4", description: "Live animals and animal products"},
    ISIC: {code: "014", description: "Animal production"},
    NACE: {code: "01.4", description: "Animal production"},
    UK_SIC: {code: "01.4", description: "Animal production"},
},
"Mixed farming": {
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "015", description: "Mixed farming"},
    NACE: {code: "01.5", description: "Mixed farming"},
    UK_SIC: {code: "01.5", description: "Mixed farming"},
},
"Support activities to agriculture and post-harvest crop activities": {
    CPA: {code: "01.6", description: "Agricultural and animal husbandry services"},
    ISIC: {code: "016", description: "Support activities to agriculture and post-harvest crop activities"},
    NACE: {code: "01.6", description: "Support activities to agriculture and post-harvest crop activities"},
    UK_SIC: {code: "01.6", description: "Support activities to agriculture and post-harvest crop activities"},
},
"Hunting, trapping and related service activities": {
    CPA: {code: "01.7", description: "Hunting and trapping and related services"},
    ISIC: {code: "017", description: "Hunting, trapping and related service activities"},
    NACE: {code: "01.7", description: "Hunting, trapping and related service activities"},
    UK_SIC: {code: "01.7", description: "Hunting, trapping and related service activities"},
},
"Silviculture and other forestry activities": {
    CPA: {code: "02.1", description: "Forest trees and nursery services"},
    ISIC: {code: "021", description: "Silviculture and other forestry activities"},
    NACE: {code: "02.1", description: "Silviculture and other forestry activities"},
    UK_SIC: {code: "02.1", description: "Silviculture and other forestry activities"},
},
"Logging": {
    CPA: {code: "02.2", description: "Wood in the rough"},
    ISIC: {code: "022", description: "Logging"},
    NACE: {code: "02.2", description: "Logging"},
    UK_SIC: {code: "02.2", description: "Logging"},
},
"Gathering of wild growing non-wood products": {
    CPA: {code: "02.3", description: "Wild growing non-wood products"},
    ISIC: {code: "023", description: "Gathering of non-wood forest products"},
    NACE: {code: "02.3", description: "Gathering of wild growing non-wood products"},
    UK_SIC: {code: "02.3", description: "Gathering of wild growing non-wood products"},
},
"Support services to forestry": {
    CPA: {code: "02.4", description: "Support services to forestry"},
    ISIC: {code: "024", description: "Support services to forestry"},
    NACE: {code: "02.4", description: "Support services to forestry"},
    UK_SIC: {code: "02.4", description: "Support services to forestry"},
},
"Fishing": {
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "031", description: "Fishing"},
    NACE: {code: "03.1", description: "Fishing"},
    UK_SIC: {code: "03.1", description: "Fishing"},
},
"Aquaculture": {
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "032", description: "Aquaculture"},
    NACE: {code: "03.2", description: "Aquaculture"},
    UK_SIC: {code: "03.2", description: "Aquaculture"},
},
"Support activities for fishing and aquaculture": {
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "033", description: "Support activities for fishing and aquaculture"},
    NACE: {code: "03.3", description: "Support activities for fishing and aquaculture"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Mining of hard coal": {
    CPA: {code: "05.1", description: "Hard coal and other coal"},
    ISIC: {code: "051", description: "Mining of hard coal"},
    NACE: {code: "05.1", description: "Mining of hard coal"},
    UK_SIC: {code: "05.1", description: "Mining of hard coal"},
},
"Mining of lignite": {
    CPA: {code: "05.2", description: "Lignite"},
    ISIC: {code: "052", description: "Mining of lignite"},
    NACE: {code: "05.2", description: "Mining of lignite"},
    UK_SIC: {code: "05.2", description: "Mining of lignite"},
},
"Extraction of crude petroleum": {
    CPA: {code: "06.1", description: "Crude petroleum"},
    ISIC: {code: "061", description: "Extraction of crude petroleum"},
    NACE: {code: "06.1", description: "Extraction of crude petroleum"},
    UK_SIC: {code: "06.1", description: "Extraction of crude petroleum"},
},
"Extraction of natural gas": {
    CPA: {code: "06.2", description: "Natural gas, liquefied or in gaseous state"},
    ISIC: {code: "062", description: "Extraction of natural gas"},
    NACE: {code: "06.2", description: "Extraction of natural gas"},
    UK_SIC: {code: "06.2", description: "Extraction of natural gas"},
},
"Mining of iron ores": {
    CPA: {code: "07.1", description: "Iron ores"},
    ISIC: {code: "071", description: "Mining of iron ores"},
    NACE: {code: "07.1", description: "Mining of iron ores"},
    UK_SIC: {code: "07.1", description: "Mining of iron ores"},
},
"Mining of non-ferrous metal ores": {
    CPA: {code: "07.2", description: "Non-ferrous metal ores"},
    ISIC: {code: "072", description: "Mining of non-ferrous metal ores"},
    NACE: {code: "07.2", description: "Mining of non-ferrous metal ores"},
    UK_SIC: {code: "07.2", description: "Mining of non-ferrous metal ores"},
},
"Quarrying of stone, sand and clay": {
    CPA: {code: "08.1", description: "Stone, sand and clay"},
    ISIC: {code: "081", description: "Quarrying of stone, sand and clay"},
    NACE: {code: "08.1", description: "Quarrying of stone, sand and clay"},
    UK_SIC: {code: "08.1", description: "Quarrying of stone, sand and clay"},
},
"Mining and quarrying n.e.c.": {
    CPA: {code: "08.9", description: "Mining and quarrying products n.e.c."},
    ISIC: {code: "089", description: "Mining and quarrying n.e.c."},
    NACE: {code: "08.9", description: "Mining and quarrying n.e.c."},
    UK_SIC: {code: "08.9", description: "Mining and quarrying n.e.c."},
},
"Support activities for petroleum and natural gas extraction": {
    CPA: {code: "09.1", description: "Support services to petroleum and natural gas extraction"},
    ISIC: {code: "091", description: "Support activities for petroleum and natural gas extraction"},
    NACE: {code: "09.1", description: "Support activities for petroleum and natural gas extraction"},
    UK_SIC: {code: "09.1", description: "Support activities for petroleum and natural gas extraction"},
},
"Support activities for other mining and quarrying": {
    CPA: {code: "09.9", description: "Support services to other mining and quarrying"},
    ISIC: {code: "099", description: "Support activities for other mining and quarrying"},
    NACE: {code: "09.9", description: "Support activities for other mining and quarrying"},
    UK_SIC: {code: "09.9", description: "Support activities for other mining and quarrying"},
},
"Processing and preserving of meat and production of meat products": {
    CPA: {code: "10.1", description: "Preserved meat and meat products"},
    ISIC: {code: "101", description: "Processing and preserving of meat"},
    NACE: {code: "10.1", description: "Processing and preserving of meat and production of meat products"},
    UK_SIC: {code: "10.1", description: "Processing and preserving of meat and production of meat products"},
},
"Processing and preserving of fish, crustaceans and molluscs": {
    CPA: {code: "10.2", description: "Processed and preserved fish, crustaceans and molluscs"},
    ISIC: {code: "102", description: "Processing and preserving of fish, crustaceans and molluscs"},
    NACE: {code: "10.2", description: "Processing and preserving of fish, crustaceans and molluscs"},
    UK_SIC: {code: "10.2", description: "Processing and preserving of fish, crustaceans and molluscs"},
},
"Processing and preserving of fruit and vegetables": {
    CPA: {code: "10.3", description: "Processed and preserved fruit and vegetables"},
    ISIC: {code: "103", description: "Processing and preserving of fruit and vegetables"},
    NACE: {code: "10.3", description: "Processing and preserving of fruit and vegetables"},
    UK_SIC: {code: "10.3", description: "Processing and preserving of fruit and vegetables"},
},
"Manufacture of vegetable and animal oils and fats": {
    CPA: {code: "10.4", description: "Vegetable and animal oils and fats"},
    ISIC: {code: "104", description: "Manufacture of vegetable and animal oils and fats"},
    NACE: {code: "10.4", description: "Manufacture of vegetable and animal oils and fats"},
    UK_SIC: {code: "10.4", description: "Manufacture of vegetable and animal oils and fats"},
},
"Manufacture of dairy products and edible ice": {
    CPA: {code: "10.5", description: "Dairy products and edible ice"},
    ISIC: {code: "105", description: "Manufacture of dairy products"},
    NACE: {code: "10.5", description: "Manufacture of dairy products and edible ice"},
    UK_SIC: {code: "10.5", description: "Manufacture of dairy products"},
},
"Manufacture of grain mill products, starches and starch products": {
    CPA: {code: "10.6", description: "Grain mill products, starches and starch products"},
    ISIC: {code: "106", description: "Manufacture of grain mill products, starches and starch products"},
    NACE: {code: "10.6", description: "Manufacture of grain mill products, starches and starch products"},
    UK_SIC: {code: "10.6", description: "Manufacture of grain mill products, starches and starch products"},
},
"Manufacture of bakery and farinaceous products": {
    CPA: {code: "10.7", description: "Bakery and farinaceous products"},
    ISIC: {code: "107", description: "Manufacture of other food products"},
    NACE: {code: "10.7", description: "Manufacture of bakery and farinaceous products"},
    UK_SIC: {code: "10.7", description: "Manufacture of bakery and farinaceous products"},
},
"Manufacture of other food products": {
    CPA: {code: "10.8", description: "Other food products"},
    ISIC: {code: "108", description: "Manufacture of prepared animal feeds"},
    NACE: {code: "10.8", description: "Manufacture of other food products"},
    UK_SIC: {code: "10.8", description: "Manufacture of other food products"},
},
"Manufacture of prepared animal feeds": {
    CPA: {code: "10.9", description: "Prepared animal feeds"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "10.9", description: "Manufacture of prepared animal feeds"},
    UK_SIC: {code: "10.9", description: "Manufacture of prepared animal feeds"},
},
"Manufacture of beverages": {
    CPA: {code: "11.0", description: "Beverages"},
    ISIC: {code: "110", description: "Manufacture of beverages"},
    NACE: {code: "11.0", description: "Manufacture of beverages"},
    UK_SIC: {code: "11.0", description: "Manufacture of beverages"},
},
"Manufacture of tobacco products": {
    CPA: {code: "12.0", description: "Tobacco products"},
    ISIC: {code: "120", description: "Manufacture of tobacco products"},
    NACE: {code: "12.0", description: "Manufacture of tobacco products"},
    UK_SIC: {code: "12.0", description: "Manufacture of tobacco products"},
},
"Preparation and spinning of textile fibres": {
    CPA: {code: "13.1", description: "Textile yarn and thread"},
    ISIC: {code: "131", description: "Spinning, weaving and finishing of textiles"},
    NACE: {code: "13.1", description: "Preparation and spinning of textile fibres"},
    UK_SIC: {code: "13.1", description: "Preparation and spinning of textile fibres"},
},
"Weaving of textiles": {
    CPA: {code: "13.2", description: "Woven textiles"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "13.2", description: "Weaving of textiles"},
    UK_SIC: {code: "13.2", description: "Weaving of textiles"},
},
"Finishing of textiles": {
    CPA: {code: "13.3", description: "Textile finishing services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "13.3", description: "Finishing of textiles"},
    UK_SIC: {code: "13.3", description: "Finishing of textiles"},
},
"Manufacture of other textiles": {
    CPA: {code: "13.9", description: "Other textiles"},
    ISIC: {code: "139", description: "Manufacture of other textiles"},
    NACE: {code: "13.9", description: "Manufacture of other textiles"},
    UK_SIC: {code: "13.9", description: "Manufacture of other textiles"},
},
"Manufacture of knitted and crocheted apparel": {
    CPA: {code: "14.1", description: "Knitted and crocheted apparel"},
    ISIC: {code: "141", description: "Manufacture of wearing apparel, except fur apparel"},
    NACE: {code: "14.1", description: "Manufacture of knitted and crocheted apparel"},
    UK_SIC: {code: "14.1", description: "Manufacture of wearing apparel, except fur apparel"},
},
"Manufacture of other wearing apparel and accessories": {
    CPA: {code: "14.2", description: "Other wearing apparel and accessories"},
    ISIC: {code: "142", description: "Manufacture of articles of fur"},
    NACE: {code: "14.2", description: "Manufacture of other wearing apparel and accessories"},
    UK_SIC: {code: "14.2", description: "Manufacture of articles of fur"},
},
"Tanning, dyeing, dressing of leather and fur; manufacture of luggage, handbags, saddlery and harness": {
    CPA: {code: "15.1", description: "Tanned, dressed, dyed leather and fur; luggage, handbags, saddlery and harness"},
    ISIC: {code: "151", description: "Tanning, dyeing, dressing of leather and fur; manufacture of luggage, handbags, saddlery and harness"},
    NACE: {code: "15.1", description: "Tanning, dyeing, dressing of leather and fur; manufacture of luggage, handbags, saddlery and harness"},
    UK_SIC: {code: "15.1", description: "Tanning and dressing of leather; manufacture of luggage, handbags, saddlery and harness; dressing and dyeing of fur"},
},
"Manufacture of footwear": {
    CPA: {code: "15.2", description: "Footwear"},
    ISIC: {code: "152", description: "Manufacture of footwear"},
    NACE: {code: "15.2", description: "Manufacture of footwear"},
    UK_SIC: {code: "15.2", description: "Manufacture of footwear"},
},
"Sawmilling and planing of wood; processing and finishing of wood": {
    CPA: {code: "16.1", description: "Wood, sawn and planed; processing and finishing services of wood"},
    ISIC: {code: "161", description: "Sawmilling and planing of wood"},
    NACE: {code: "16.1", description: "Sawmilling and planing of wood; processing and finishing of wood"},
    UK_SIC: {code: "16.1", description: "Sawmilling and planing of wood"},
},
"Manufacture of products of wood, cork, straw and plaiting materials": {
    CPA: {code: "16.2", description: "Products of wood, cork, straw and plaiting materials"},
    ISIC: {code: "162", description: "Manufacture of products of wood, cork, straw and plaiting materials"},
    NACE: {code: "16.2", description: "Manufacture of products of wood, cork, straw and plaiting materials"},
    UK_SIC: {code: "16.2", description: "Manufacture of products of wood, cork, straw and plaiting materials"},
},
"Manufacture of pulp, paper and paperboard": {
    CPA: {code: "17.1", description: "Pulp, paper and paperboard"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "17.1", description: "Manufacture of pulp, paper and paperboard"},
    UK_SIC: {code: "17.1", description: "Manufacture of pulp, paper and paperboard"},
},
"Manufacture of articles of paper and paperboard": {
    CPA: {code: "17.2", description: "Articles of paper and paperboard"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "17.2", description: "Manufacture of articles of paper and paperboard"},
    UK_SIC: {code: "17.2", description: "Manufacture of articles of paper and paperboard"},
},
"Printing and service activities related to printing": {
    CPA: {code: "18.1", description: "Printing services and services related to printing"},
    ISIC: {code: "181", description: "Printing and service activities related to printing"},
    NACE: {code: "18.1", description: "Printing and service activities related to printing"},
    UK_SIC: {code: "18.1", description: "Printing and service activities related to printing"},
},
"Reproduction of recorded media": {
    CPA: {code: "18.2", description: "Reproduction services of recorded media"},
    ISIC: {code: "182", description: "Reproduction of recorded media"},
    NACE: {code: "18.2", description: "Reproduction of recorded media"},
    UK_SIC: {code: "18.2", description: "Reproduction of recorded media"},
},
"Manufacture of coke oven products": {
    CPA: {code: "19.1", description: "Coke oven products"},
    ISIC: {code: "191", description: "Manufacture of coke oven products"},
    NACE: {code: "19.1", description: "Manufacture of coke oven products"},
    UK_SIC: {code: "19.1", description: "Manufacture of coke oven products"},
},
"Manufacture of refined petroleum products and fossil fuel products": {
    CPA: {code: "19.2", description: "Refined petroleum products and fossil fuel products"},
    ISIC: {code: "192", description: "Manufacture of refined petroleum products; manufacture of fossil fuel products"},
    NACE: {code: "19.2", description: "Manufacture of refined petroleum products and fossil fuel products"},
    UK_SIC: {code: "19.2", description: "Manufacture of refined petroleum products"},
},
"Manufacture of basic chemicals, fertilisers and nitrogen compounds, plastics and synthetic rubber in primary forms": {
    CPA: {code: "20.1", description: "Basic chemicals, fertilisers and nitrogen compounds, plastics and synthetic rubber in primary forms"},
    ISIC: {code: "201", description: "Manufacture of basic chemicals, fertilizers and nitrogen compounds, plastics and synthetic rubber in primary forms"},
    NACE: {code: "20.1", description: "Manufacture of basic chemicals, fertilisers and nitrogen compounds, plastics and synthetic rubber in primary forms"},
    UK_SIC: {code: "20.1", description: "Manufacture of basic chemicals, fertilisers and nitrogen compounds, plastics and synthetic rubber in primary forms"},
},
"Manufacture of pesticides, disinfectants and other agrochemical products": {
    CPA: {code: "20.2", description: "Pesticides, disinfectants and other agrochemical products"},
    ISIC: {code: "202", description: "Manufacture of other chemical products"},
    NACE: {code: "20.2", description: "Manufacture of pesticides, disinfectants and other agrochemical products"},
    UK_SIC: {code: "20.2", description: "Manufacture of pesticides and other agrochemical products"},
},
"Manufacture of paints, varnishes and similar coatings, printing ink and mastics": {
    CPA: {code: "20.3", description: "Paints, varnishes and similar coatings, printing ink and mastics"},
    ISIC: {code: "203", description: "Manufacture of man-made fibres"},
    NACE: {code: "20.3", description: "Manufacture of paints, varnishes and similar coatings, printing ink and mastics"},
    UK_SIC: {code: "20.3", description: "Manufacture of paints, varnishes and similar coatings, printing ink and mastics"},
},
"Manufacture of washing, cleaning and polishing preparations": {
    CPA: {code: "20.4", description: "Soap and detergents, cleaning and polishing preparations, perfumes and toilet preparations"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "20.4", description: "Manufacture of washing, cleaning and polishing preparations"},
    UK_SIC: {code: "20.4", description: "Manufacture of soap and detergents, cleaning and polishing preparations, perfumes and toilet preparations"},
},
"Manufacture of other chemical products": {
    CPA: {code: "20.5", description: "Other chemical products"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "20.5", description: "Manufacture of other chemical products"},
    UK_SIC: {code: "20.5", description: "Manufacture of other chemical products"},
},
"Manufacture of man-made fibres": {
    CPA: {code: "20.6", description: "Man-made fibres"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "20.6", description: "Manufacture of man-made fibres"},
    UK_SIC: {code: "20.6", description: "Manufacture of man-made fibres"},
},
"Manufacture of basic pharmaceutical products": {
    CPA: {code: "21.1", description: "Basic pharmaceutical products"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "21.1", description: "Manufacture of basic pharmaceutical products"},
    UK_SIC: {code: "21.1", description: "Manufacture of basic pharmaceutical products"},
},
"Manufacture of pharmaceutical preparations": {
    CPA: {code: "21.2", description: "Pharmaceutical preparations"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "21.2", description: "Manufacture of pharmaceutical preparations"},
    UK_SIC: {code: "21.2", description: "Manufacture of pharmaceutical preparations"},
},
"Manufacture of rubber products": {
    CPA: {code: "22.1", description: "Rubber products"},
    ISIC: {code: "221", description: "Manufacture of rubber products"},
    NACE: {code: "22.1", description: "Manufacture of rubber products"},
    UK_SIC: {code: "22.1", description: "Manufacture of rubber products"},
},
"Manufacture of plastic products": {
    CPA: {code: "22.2", description: "Plastic products"},
    ISIC: {code: "222", description: "Manufacture of plastics products"},
    NACE: {code: "22.2", description: "Manufacture of plastic products"},
    UK_SIC: {code: "22.2", description: "Manufacture of plastics products"},
},
"Manufacture of glass and glass products": {
    CPA: {code: "23.1", description: "Glass and glass products"},
    ISIC: {code: "231", description: "Manufacture of glass and glass products"},
    NACE: {code: "23.1", description: "Manufacture of glass and glass products"},
    UK_SIC: {code: "23.1", description: "Manufacture of glass and glass products"},
},
"Manufacture of refractory products": {
    CPA: {code: "23.2", description: "Refractory products"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.2", description: "Manufacture of refractory products"},
    UK_SIC: {code: "23.2", description: "Manufacture of refractory products"},
},
"Manufacture of clay building materials": {
    CPA: {code: "23.3", description: "Clay building materials"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.3", description: "Manufacture of clay building materials"},
    UK_SIC: {code: "23.3", description: "Manufacture of clay building materials"},
},
"Manufacture of other porcelain and ceramic products": {
    CPA: {code: "23.4", description: "Other porcelain and ceramic products"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.4", description: "Manufacture of other porcelain and ceramic products"},
    UK_SIC: {code: "23.4", description: "Manufacture of other porcelain and ceramic products"},
},
"Manufacture of cement, lime and plaster": {
    CPA: {code: "23.5", description: "Cement, lime and plaster"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.5", description: "Manufacture of cement, lime and plaster"},
    UK_SIC: {code: "23.5", description: "Manufacture of cement, lime and plaster"},
},
"Manufacture of articles of concrete, cement and plaster": {
    CPA: {code: "23.6", description: "Articles of concrete, cement and plaster"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.6", description: "Manufacture of articles of concrete, cement and plaster"},
    UK_SIC: {code: "23.6", description: "Manufacture of articles of concrete, cement and plaster"},
},
"Cutting, shaping and finishing of stone": {
    CPA: {code: "23.7", description: "Cut, shaped and finished stone"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "23.7", description: "Cutting, shaping and finishing of stone"},
    UK_SIC: {code: "23.7", description: "Cutting, shaping and finishing of stone"},
},
"Manufacture of abrasive products and non-metallic mineral products n.e.c.": {
    CPA: {code: "23.9", description: "Abrasive products and non-metallic mineral products n.e.c."},
    ISIC: {code: "239", description: "Manufacture of non-metallic mineral products n.e.c."},
    NACE: {code: "23.9", description: "Manufacture of abrasive products and non-metallic mineral products n.e.c."},
    UK_SIC: {code: "23.9", description: "Manufacture of abrasive products and non-metallic mineral products n.e.c."},
},
"Manufacture of basic iron and steel and of ferro-alloys": {
    CPA: {code: "24.1", description: "Basic iron, steel and ferro-alloys"},
    ISIC: {code: "241", description: "Manufacture of basic iron and steel"},
    NACE: {code: "24.1", description: "Manufacture of basic iron and steel and of ferro-alloys"},
    UK_SIC: {code: "24.1", description: "Manufacture of basic iron and steel and of ferro-alloys"},
},
"Manufacture of tubes, pipes, hollow profiles and related fittings, of steel": {
    CPA: {code: "24.2", description: "Tubes, pipes, hollow profiles and related fittings, of iron or steel"},
    ISIC: {code: "242", description: "Manufacture of basic precious and other non-ferrous metals"},
    NACE: {code: "24.2", description: "Manufacture of tubes, pipes, hollow profiles and related fittings, of steel"},
    UK_SIC: {code: "24.2", description: "Manufacture of tubes, pipes, hollow profiles and related fittings, of steel"},
},
"Manufacture of other products of first processing of steel": {
    CPA: {code: "24.3", description: "Other products of first processing of iron or steel"},
    ISIC: {code: "243", description: "Casting of metals"},
    NACE: {code: "24.3", description: "Manufacture of other products of first processing of steel"},
    UK_SIC: {code: "24.3", description: "Manufacture of other products of first processing of steel"},
},
"Manufacture of basic precious and other non-ferrous metals": {
    CPA: {code: "24.4", description: "Basic precious and other non-ferrous metals"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "24.4", description: "Manufacture of basic precious and other non-ferrous metals"},
    UK_SIC: {code: "24.4", description: "Manufacture of basic precious and other non-ferrous metals"},
},
"Casting of metals": {
    CPA: {code: "24.5", description: "Casting services of metals"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "24.5", description: "Casting of metals"},
    UK_SIC: {code: "24.5", description: "Casting of metals"},
},
"Manufacture of structural metal products": {
    CPA: {code: "25.1", description: "Structural metal products"},
    ISIC: {code: "251", description: "Manufacture of structural metal products, tanks, reservoirs and steam generators"},
    NACE: {code: "25.1", description: "Manufacture of structural metal products"},
    UK_SIC: {code: "25.1", description: "Manufacture of structural metal products"},
},
"Manufacture of tanks, reservoirs and containers of metal": {
    CPA: {code: "25.2", description: "Tanks, reservoirs and containers of metal"},
    ISIC: {code: "252", description: "Manufacture of weapons and ammunition"},
    NACE: {code: "25.2", description: "Manufacture of tanks, reservoirs and containers of metal"},
    UK_SIC: {code: "25.2", description: "Manufacture of tanks, reservoirs and containers of metal"},
},
"Manufacture of weapons and ammunition": {
    CPA: {code: "25.3", description: "Weapons and ammunition"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "25.3", description: "Manufacture of weapons and ammunition"},
    UK_SIC: {code: "25.3", description: "Manufacture of steam generators, except central heating hot water boilers"},
},
"Forging and shaping metal and powder metallurgy": {
    CPA: {code: "25.4", description: "Forging and shaping services of metal; powder metallurgy"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "25.4", description: "Forging and shaping metal and powder metallurgy"},
    UK_SIC: {code: "25.4", description: "Manufacture of weapons and ammunition"},
},
"Treatment and coating of metals; machining": {
    CPA: {code: "25.5", description: "Treatment, coating and machining services of metals"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "25.5", description: "Treatment and coating of metals; machining"},
    UK_SIC: {code: "25.5", description: "Forging, pressing, stamping and roll-forming of metal; powder metallurgy"},
},
"Manufacture of cutlery, tools and general hardware": {
    CPA: {code: "25.6", description: "Cutlery, tools and general hardware"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "25.6", description: "Manufacture of cutlery, tools and general hardware"},
    UK_SIC: {code: "25.6", description: "Treatment and coating of metals; machining"},
},
"Manufacture of other fabricated metal products": {
    CPA: {code: "25.9", description: "Other fabricated metal products"},
    ISIC: {code: "259", description: "Manufacture of other fabricated metal products; metalworking service activities"},
    NACE: {code: "25.9", description: "Manufacture of other fabricated metal products"},
    UK_SIC: {code: "25.9", description: "Manufacture of other fabricated metal products"},
},
"Manufacture of electronic components and boards": {
    CPA: {code: "26.1", description: "Electronic components and boards"},
    ISIC: {code: "261", description: "Manufacture of electronic components and boards"},
    NACE: {code: "26.1", description: "Manufacture of electronic components and boards"},
    UK_SIC: {code: "26.1", description: "Manufacture of electronic components and boards"},
},
"Manufacture of computers and peripheral equipment": {
    CPA: {code: "26.2", description: "Computers and peripheral equipment"},
    ISIC: {code: "262", description: "Manufacture of computers and peripheral equipment"},
    NACE: {code: "26.2", description: "Manufacture of computers and peripheral equipment"},
    UK_SIC: {code: "26.2", description: "Manufacture of computers and peripheral equipment"},
},
"Manufacture of communication equipment": {
    CPA: {code: "26.3", description: "Communication equipment"},
    ISIC: {code: "263", description: "Manufacture of communication equipment"},
    NACE: {code: "26.3", description: "Manufacture of communication equipment"},
    UK_SIC: {code: "26.3", description: "Manufacture of communication equipment"},
},
"Manufacture of consumer electronics": {
    CPA: {code: "26.4", description: "Consumer electronics"},
    ISIC: {code: "264", description: "Manufacture of consumer electronics"},
    NACE: {code: "26.4", description: "Manufacture of consumer electronics"},
    UK_SIC: {code: "26.4", description: "Manufacture of consumer electronics"},
},
"Manufacture of measuring testing instruments, clocks and watches": {
    CPA: {code: "26.5", description: "Measuring, testing instruments, watches and clocks"},
    ISIC: {code: "265", description: "Manufacture of measuring, testing, navigating and control equipment; watches and clocks"},
    NACE: {code: "26.5", description: "Manufacture of measuring testing instruments, clocks and watches"},
    UK_SIC: {code: "26.5", description: "Manufacture of instruments and appliances for measuring, testing and navigation; watches and clocks"},
},
"Manufacture of irradiation, electromedical and electrotherapeutic equipment": {
    CPA: {code: "26.6", description: "Irradiation, electromedical and electrotherapeutic equipment"},
    ISIC: {code: "266", description: "Manufacture of irradiation, electromedical and electrotherapeutic equipment"},
    NACE: {code: "26.6", description: "Manufacture of irradiation, electromedical and electrotherapeutic equipment"},
    UK_SIC: {code: "26.6", description: "Manufacture of irradiation, electromedical and electrotherapeutic equipment"},
},
"Manufacture of optical instruments, magnetic and optical media and photographic equipment": {
    CPA: {code: "26.7", description: "Optical instruments, magnetic and optical media and photographic equipment"},
    ISIC: {code: "267", description: "Manufacture of optical instruments and photographic equipment"},
    NACE: {code: "26.7", description: "Manufacture of optical instruments, magnetic and optical media and photographic equipment"},
    UK_SIC: {code: "26.7", description: "Manufacture of optical instruments and photographic equipment"},
},
"Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus": {
    CPA: {code: "27.1", description: "Electric motors, generators, transformers and electricity distribution and control apparatus"},
    ISIC: {code: "271", description: "Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus"},
    NACE: {code: "27.1", description: "Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus"},
    UK_SIC: {code: "27.1", description: "Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus"},
},
"Manufacture of batteries and accumulators": {
    CPA: {code: "27.2", description: "Batteries and accumulators"},
    ISIC: {code: "272", description: "Manufacture of batteries and accumulators"},
    NACE: {code: "27.2", description: "Manufacture of batteries and accumulators"},
    UK_SIC: {code: "27.2", description: "Manufacture of batteries and accumulators"},
},
"Manufacture of wiring and wiring devices": {
    CPA: {code: "27.3", description: "Wiring and wiring devices"},
    ISIC: {code: "273", description: "Manufacture of wiring and wiring devices"},
    NACE: {code: "27.3", description: "Manufacture of wiring and wiring devices"},
    UK_SIC: {code: "27.3", description: "Manufacture of wiring and wiring devices"},
},
"Manufacture of lighting equipment": {
    CPA: {code: "27.4", description: "Lighting equipment"},
    ISIC: {code: "274", description: "Manufacture of lighting equipment"},
    NACE: {code: "27.4", description: "Manufacture of lighting equipment"},
    UK_SIC: {code: "27.4", description: "Manufacture of electric lighting equipment"},
},
"Manufacture of domestic appliances": {
    CPA: {code: "27.5", description: "Domestic appliances"},
    ISIC: {code: "275", description: "Manufacture of domestic appliances"},
    NACE: {code: "27.5", description: "Manufacture of domestic appliances"},
    UK_SIC: {code: "27.5", description: "Manufacture of domestic appliances"},
},
"Manufacture of other electrical equipment": {
    CPA: {code: "27.9", description: "Other electrical equipment"},
    ISIC: {code: "279", description: "Manufacture of other electrical equipment"},
    NACE: {code: "27.9", description: "Manufacture of other electrical equipment"},
    UK_SIC: {code: "27.9", description: "Manufacture of other electrical equipment"},
},
"Manufacture of general-purpose machinery": {
    CPA: {code: "28.1", description: "General-purpose machinery"},
    ISIC: {code: "281", description: "Manufacture of general-purpose machinery"},
    NACE: {code: "28.1", description: "Manufacture of general-purpose machinery"},
    UK_SIC: {code: "28.1", description: "Manufacture of general-purpose machinery"},
},
"Manufacture of other general-purpose machinery": {
    CPA: {code: "28.2", description: "Other general-purpose machinery"},
    ISIC: {code: "282", description: "Manufacture of special-purpose machinery"},
    NACE: {code: "28.2", description: "Manufacture of other general-purpose machinery"},
    UK_SIC: {code: "28.2", description: "Manufacture of other general-purpose machinery"},
},
"Manufacture of agricultural and forestry machinery": {
    CPA: {code: "28.3", description: "Agricultural and forestry machinery"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "28.3", description: "Manufacture of agricultural and forestry machinery"},
    UK_SIC: {code: "28.3", description: "Manufacture of agricultural and forestry machinery"},
},
"Manufacture of metal forming machinery and machine tools": {
    CPA: {code: "28.4", description: "Metal forming machinery and machine tools"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "28.4", description: "Manufacture of metal forming machinery and machine tools"},
    UK_SIC: {code: "28.4", description: "Manufacture of metal forming machinery and machine tools"},
},
"Manufacture of other special-purpose machinery": {
    CPA: {code: "28.9", description: "Other special-purpose machinery"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "28.9", description: "Manufacture of other special-purpose machinery"},
    UK_SIC: {code: "28.9", description: "Manufacture of other special-purpose machinery"},
},
"Manufacture of motor vehicles": {
    CPA: {code: "29.1", description: "Motor vehicles"},
    ISIC: {code: "291", description: "Manufacture of motor vehicles"},
    NACE: {code: "29.1", description: "Manufacture of motor vehicles"},
    UK_SIC: {code: "29.1", description: "Manufacture of motor vehicles"},
},
"Manufacture of bodies and coachwork for motor vehicles; manufacture of trailers and semi-trailers": {
    CPA: {code: "29.2", description: "Bodies and coachwork for motor vehicles; trailers and semi-trailers"},
    ISIC: {code: "292", description: "Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers"},
    NACE: {code: "29.2", description: "Manufacture of bodies and coachwork for motor vehicles; manufacture of trailers and semi-trailers"},
    UK_SIC: {code: "29.2", description: "Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers"},
},
"Manufacture of motor vehicle parts and accessories": {
    CPA: {code: "29.3", description: "Parts and accessories for motor vehicles"},
    ISIC: {code: "293", description: "Manufacture of parts and accessories for motor vehicles"},
    NACE: {code: "29.3", description: "Manufacture of motor vehicle parts and accessories"},
    UK_SIC: {code: "29.3", description: "Manufacture of parts and accessories for motor vehicles"},
},
"Building of ships and boats": {
    CPA: {code: "30.1", description: "Ships and boats"},
    ISIC: {code: "301", description: "Building of ships and boats"},
    NACE: {code: "30.1", description: "Building of ships and boats"},
    UK_SIC: {code: "30.1", description: "Building of ships and boats"},
},
"Manufacture of railway locomotives and rolling stock": {
    CPA: {code: "30.2", description: "Railway locomotives and rolling stock"},
    ISIC: {code: "302", description: "Manufacture of railway locomotives and rolling stock"},
    NACE: {code: "30.2", description: "Manufacture of railway locomotives and rolling stock"},
    UK_SIC: {code: "30.2", description: "Manufacture of railway locomotives and rolling stock"},
},
"Manufacture of air and spacecraft and related machinery": {
    CPA: {code: "30.3", description: "Air and spacecraft and related machinery"},
    ISIC: {code: "303", description: "Manufacture of air and spacecraft and related machinery"},
    NACE: {code: "30.3", description: "Manufacture of air and spacecraft and related machinery"},
    UK_SIC: {code: "30.3", description: "Manufacture of air and spacecraft and related machinery"},
},
"Manufacture of military fighting vehicles": {
    CPA: {code: "30.4", description: "Military fighting vehicles"},
    ISIC: {code: "304", description: "Manufacture of military fighting vehicles"},
    NACE: {code: "30.4", description: "Manufacture of military fighting vehicles"},
    UK_SIC: {code: "30.4", description: "Manufacture of military fighting vehicles"},
},
"Manufacture of transport equipment n.e.c.": {
    CPA: {code: "30.9", description: "Transport equipment n.e.c."},
    ISIC: {code: "309", description: "Manufacture of transport equipment n.e.c."},
    NACE: {code: "30.9", description: "Manufacture of transport equipment n.e.c."},
    UK_SIC: {code: "30.9", description: "Manufacture of transport equipment n.e.c."},
},
"Manufacture of furniture": {
    CPA: {code: "31.0", description: "Furniture"},
    ISIC: {code: "310", description: "Manufacture of furniture"},
    NACE: {code: "31.0", description: "Manufacture of furniture"},
    UK_SIC: {code: "31.0", description: "Manufacture of furniture"},
},
"Manufacture of jewellery, bijouterie and related articles": {
    CPA: {code: "32.1", description: "Jewellery, bijouterie and related articles"},
    ISIC: {code: "321", description: "Manufacture of jewellery, bijouterie and related articles"},
    NACE: {code: "32.1", description: "Manufacture of jewellery, bijouterie and related articles"},
    UK_SIC: {code: "32.1", description: "Manufacture of jewellery, bijouterie and related articles"},
},
"Manufacture of musical instruments": {
    CPA: {code: "32.2", description: "Musical instruments"},
    ISIC: {code: "322", description: "Manufacture of musical instruments"},
    NACE: {code: "32.2", description: "Manufacture of musical instruments"},
    UK_SIC: {code: "32.2", description: "Manufacture of musical instruments"},
},
"Manufacture of sports goods": {
    CPA: {code: "32.3", description: "Sports goods"},
    ISIC: {code: "323", description: "Manufacture of sports goods"},
    NACE: {code: "32.3", description: "Manufacture of sports goods"},
    UK_SIC: {code: "32.3", description: "Manufacture of sports goods"},
},
"Manufacture of games and toys": {
    CPA: {code: "32.4", description: "Games and toys"},
    ISIC: {code: "324", description: "Manufacture of games and toys"},
    NACE: {code: "32.4", description: "Manufacture of games and toys"},
    UK_SIC: {code: "32.4", description: "Manufacture of games and toys"},
},
"Manufacture of medical and dental instruments and supplies": {
    CPA: {code: "32.5", description: "Medical and dental instruments and supplies"},
    ISIC: {code: "325", description: "Manufacture of medical and dental instruments and supplies"},
    NACE: {code: "32.5", description: "Manufacture of medical and dental instruments and supplies"},
    UK_SIC: {code: "32.5", description: "Manufacture of medical and dental instruments and supplies"},
},
"Manufacturing n.e.c.": {
    CPA: {code: "32.9", description: "Manufactured goods n.e.c."},
    ISIC: {code: "329", description: "Other manufacturing n.e.c."},
    NACE: {code: "32.9", description: "Manufacturing n.e.c."},
    UK_SIC: {code: "32.9", description: "Other manufacturing n.e.c."},
},
"Repair and maintenance of fabricated metal products, machinery and equipment": {
    CPA: {code: "33.1", description: "Repair and maintenance services of fabricated metal products, machinery and equipment"},
    ISIC: {code: "331", description: "Repair and maintenance of fabricated metal products, machinery and equipment"},
    NACE: {code: "33.1", description: "Repair and maintenance of fabricated metal products, machinery and equipment"},
    UK_SIC: {code: "33.1", description: "Repair of fabricated metal products, machinery and equipment"},
},
"Installation of industrial machinery and equipment": {
    CPA: {code: "33.2", description: "Installation services of industrial machinery and equipment"},
    ISIC: {code: "332", description: "Installation of industrial machinery and equipment"},
    NACE: {code: "33.2", description: "Installation of industrial machinery and equipment"},
    UK_SIC: {code: "33.2", description: "Installation of industrial machinery and equipment"},
},
"Electric power generation, transmission and distribution": {
    CPA: {code: "35.1", description: "Electric power generation, transmission and distribution services"},
    ISIC: {code: "351", description: "Electric power generation, transmission and distribution activities"},
    NACE: {code: "35.1", description: "Electric power generation, transmission and distribution"},
    UK_SIC: {code: "35.1", description: "Electric power generation, transmission and distribution"},
},
"Manufacture of gas, and distribution of gaseous fuels through mains": {
    CPA: {code: "35.2", description: "Manufactured gas; distribution services of gaseous fuels through mains"},
    ISIC: {code: "352", description: "Manufacture of gas; distribution of gaseous fuels through mains"},
    NACE: {code: "35.2", description: "Manufacture of gas, and distribution of gaseous fuels through mains"},
    UK_SIC: {code: "35.2", description: "Manufacture of gas; distribution of gaseous fuels through mains"},
},
"Steam and air conditioning supply": {
    CPA: {code: "35.3", description: "Steam and air conditioning supply services"},
    ISIC: {code: "353", description: "Steam and air conditioning supply"},
    NACE: {code: "35.3", description: "Steam and air conditioning supply"},
    UK_SIC: {code: "35.3", description: "Steam and air conditioning supply"},
},
"Activities of brokers and agents for electric power and natural gas": {
    CPA: {code: "35.4", description: "Services of brokers and agents for electric power and natural gas"},
    ISIC: {code: "354", description: "Activities of brokers and agents for electric power and natural gas"},
    NACE: {code: "35.4", description: "Activities of brokers and agents for electric power and natural gas"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Water collection, treatment and supply": {
    CPA: {code: "36.0", description: "Natural water; water treatment and supply services"},
    ISIC: {code: "360", description: "Water collection, treatment and supply"},
    NACE: {code: "36.0", description: "Water collection, treatment and supply"},
    UK_SIC: {code: "36.0", description: "Water collection, treatment and supply"},
},
"Sewerage": {
    CPA: {code: "37.0", description: "Sewerage services; sewage sludge"},
    ISIC: {code: "370", description: "Sewerage"},
    NACE: {code: "37.0", description: "Sewerage"},
    UK_SIC: {code: "37.0", description: "Sewerage"},
},
"Waste collection": {
    CPA: {code: "38.1", description: "Waste collection services"},
    ISIC: {code: "381", description: "Waste collection activities"},
    NACE: {code: "38.1", description: "Waste collection"},
    UK_SIC: {code: "38.1", description: "Waste collection"},
},
"Waste recovery": {
    CPA: {code: "38.2", description: "Waste recovery services"},
    ISIC: {code: "382", description: "Waste treatment and disposal"},
    NACE: {code: "38.2", description: "Waste recovery"},
    UK_SIC: {code: "38.2", description: "Waste treatment and disposal"},
},
"Waste disposal without recovery": {
    CPA: {code: "38.3", description: "Waste disposal services without recovery"},
    ISIC: {code: "383", description: "Materials and other waste recovery"},
    NACE: {code: "38.3", description: "Waste disposal without recovery"},
    UK_SIC: {code: "38.3", description: "Materials recovery"},
},
"Remediation activities and other waste management service activities": {
    CPA: {code: "39.0", description: "Remediation services and other waste management services"},
    ISIC: {code: "390", description: "Remediation and other waste management service activities"},
    NACE: {code: "39.0", description: "Remediation activities and other waste management service activities"},
    UK_SIC: {code: "39.0", description: "Remediation activities and other waste management services"},
},
"Construction of residential and non-residential buildings": {
    CPA: {code: "41.0", description: "Residential and non-residential buildings, residential and non-residential buildings construction works"},
    ISIC: {code: "410", description: "Construction of residential and non-residential buildings"},
    NACE: {code: "41.0", description: "Construction of residential and non-residential buildings"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Construction of roads and railways": {
    CPA: {code: "42.1", description: "Roads and railways; construction works for roads and railways"},
    ISIC: {code: "421", description: "Construction of roads and railways"},
    NACE: {code: "42.1", description: "Construction of roads and railways"},
    UK_SIC: {code: "42.1", description: "Construction of roads and railways"},
},
"Construction of utility projects": {
    CPA: {code: "42.2", description: "Constructions and construction works for utility projects"},
    ISIC: {code: "422", description: "Construction of utility projects"},
    NACE: {code: "42.2", description: "Construction of utility projects"},
    UK_SIC: {code: "42.2", description: "Construction of utility projects"},
},
"Construction of other civil engineering projects": {
    CPA: {code: "42.9", description: "Constructions and construction works for other civil engineering projects"},
    ISIC: {code: "429", description: "Construction of other civil engineering projects"},
    NACE: {code: "42.9", description: "Construction of other civil engineering projects"},
    UK_SIC: {code: "42.9", description: "Construction of other civil engineering projects"},
},
"Demolition and site preparation": {
    CPA: {code: "43.1", description: "Demolition and site preparation works"},
    ISIC: {code: "431", description: "Demolition and site preparation"},
    NACE: {code: "43.1", description: "Demolition and site preparation"},
    UK_SIC: {code: "43.1", description: "Demolition and site preparation"},
},
"Electrical, plumbing and other construction installation activities": {
    CPA: {code: "43.2", description: "Electrical, plumbing and other construction installation works"},
    ISIC: {code: "432", description: "Electrical, plumbing and other construction installation activities"},
    NACE: {code: "43.2", description: "Electrical, plumbing and other construction installation activities"},
    UK_SIC: {code: "43.2", description: "Electrical, plumbing and other construction installation activities"},
},
"Building completion and finishing": {
    CPA: {code: "43.3", description: "Building completion and finishing works"},
    ISIC: {code: "433", description: "Building completion and finishing"},
    NACE: {code: "43.3", description: "Building completion and finishing"},
    UK_SIC: {code: "43.3", description: "Building completion and finishing"},
},
"Specialised construction activities in construction of buildings": {
    CPA: {code: "43.4", description: "Specialised construction works in construction of buildings"},
    ISIC: {code: "434", description: "Intermediation service activities for specialized construction services"},
    NACE: {code: "43.4", description: "Specialised construction activities in construction of buildings"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Specialised construction activities in civil engineering": {
    CPA: {code: "43.5", description: "Specialised construction works in civil engineering"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "43.5", description: "Specialised construction activities in civil engineering"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Intermediation service activities for specialised construction services": {
    CPA: {code: "43.6", description: "Intermediation services of specialised construction services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "43.6", description: "Intermediation service activities for specialised construction services"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Other specialised construction activities": {
    CPA: {code: "43.9", description: "Other specialised construction works"},
    ISIC: {code: "439", description: "Other specialized construction activities"},
    NACE: {code: "43.9", description: "Other specialised construction activities"},
    UK_SIC: {code: "43.9", description: "Other specialised construction activities"},
},
"Wholesale on a fee or contract basis": {
    CPA: {code: "46.1", description: "Wholesale trade services on a fee or contract basis"},
    ISIC: {code: "461", description: "Wholesale on a fee or contract basis"},
    NACE: {code: "46.1", description: "Wholesale on a fee or contract basis"},
    UK_SIC: {code: "46.1", description: "Wholesale on a fee or contract basis"},
},
"Wholesale of agricultural raw materials and live animals": {
    CPA: {code: "46.2", description: "Wholesale trade services of agricultural raw materials and live animals"},
    ISIC: {code: "462", description: "Wholesale of agricultural raw materials and live animals"},
    NACE: {code: "46.2", description: "Wholesale of agricultural raw materials and live animals"},
    UK_SIC: {code: "46.2", description: "Wholesale of agricultural raw materials and live animals"},
},
"Wholesale of food, beverages and tobacco": {
    CPA: {code: "46.3", description: "Wholesale trade services of food, beverages and tobacco"},
    ISIC: {code: "463", description: "Wholesale of food, beverages and tobacco"},
    NACE: {code: "46.3", description: "Wholesale of food, beverages and tobacco"},
    UK_SIC: {code: "46.3", description: "Wholesale of food, beverages and tobacco"},
},
"Wholesale of household goods": {
    CPA: {code: "46.4", description: "Wholesale trade services of household goods"},
    ISIC: {code: "464", description: "Wholesale of household goods"},
    NACE: {code: "46.4", description: "Wholesale of household goods"},
    UK_SIC: {code: "46.4", description: "Wholesale of household goods"},
},
"Wholesale of information and communication equipment": {
    CPA: {code: "46.5", description: "Wholesale trade services of information and communication equipment"},
    ISIC: {code: "465", description: "Wholesale of machinery, equipment and supplies"},
    NACE: {code: "46.5", description: "Wholesale of information and communication equipment"},
    UK_SIC: {code: "46.5", description: "Wholesale of information and communication equipment"},
},
"Wholesale of other machinery, equipment and supplies": {
    CPA: {code: "46.6", description: "Wholesale trade services of other machinery, equipment and supplies"},
    ISIC: {code: "466", description: "Wholesale of motor vehicles, motorcycles and related parts and accessories"},
    NACE: {code: "46.6", description: "Wholesale of other machinery, equipment and supplies"},
    UK_SIC: {code: "46.6", description: "Wholesale of other machinery, equipment and supplies"},
},
"Wholesale of motor vehicles, motorcycles and related parts and accessories": {
    CPA: {code: "46.7", description: "Wholesale trade services of motor vehicles, motorcycles and related parts and accessories"},
    ISIC: {code: "467", description: "Other specialized wholesale"},
    NACE: {code: "46.7", description: "Wholesale of motor vehicles, motorcycles and related parts and accessories"},
    UK_SIC: {code: "46.7", description: "Other specialised wholesale"},
},
"Other specialised wholesale": {
    CPA: {code: "46.8", description: "Other specialised wholesale trade services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "46.8", description: "Other specialised wholesale"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Non-specialised wholesale trade": {
    CPA: {code: "46.9", description: "Non-specialised wholesale trade services"},
    ISIC: {code: "469", description: "Non-specialized wholesale trade"},
    NACE: {code: "46.9", description: "Non-specialised wholesale trade"},
    UK_SIC: {code: "46.9", description: "Non-specialised wholesale trade"},
},
"Non-specialised retail sale": {
    CPA: {code: "", description: "missing entry in classification"},
    ISIC: {code: "471", description: "Non-specialized retail sale"},
    NACE: {code: "47.1", description: "Non-specialised retail sale"},
    UK_SIC: {code: "47.1", description: "Retail sale in non-specialised stores"},
},
"Retail sale of food, beverages and tobacco": {
    CPA: {code: "47.2", description: "Retail sale services of food, beverages and tobacco"},
    ISIC: {code: "472", description: "Retail sale of food, beverages and tobacco"},
    NACE: {code: "47.2", description: "Retail sale of food, beverages and tobacco"},
    UK_SIC: {code: "47.2", description: "Retail sale of food, beverages and tobacco in specialised stores"},
},
"Retail sale of automotive fuel": {
    CPA: {code: "47.3", description: "Retail sale services of automotive fuel"},
    ISIC: {code: "473", description: "Retail sale of automotive fuel"},
    NACE: {code: "47.3", description: "Retail sale of automotive fuel"},
    UK_SIC: {code: "47.3", description: "Retail sale of automotive fuel in specialised stores"},
},
"Retail sale of information and communication equipment": {
    CPA: {code: "47.4", description: "Retail sale services of information and communication equipment"},
    ISIC: {code: "474", description: "Retail sale of information and communication equipment"},
    NACE: {code: "47.4", description: "Retail sale of information and communication equipment"},
    UK_SIC: {code: "47.4", description: "Retail sale of information and communication equipment in specialised stores"},
},
"Retail sale of other household equipment": {
    CPA: {code: "47.5", description: "Retail sale services of other household equipment"},
    ISIC: {code: "475", description: "Retail sale of other household equipment"},
    NACE: {code: "47.5", description: "Retail sale of other household equipment"},
    UK_SIC: {code: "47.5", description: "Retail sale of other household equipment in specialised stores"},
},
"Retail sale of cultural and recreational goods": {
    CPA: {code: "47.6", description: "Retail sale services of cultural and recreational goods"},
    ISIC: {code: "476", description: "Retail sale of cultural and recreational goods"},
    NACE: {code: "47.6", description: "Retail sale of cultural and recreational goods"},
    UK_SIC: {code: "47.6", description: "Retail sale of cultural and recreation goods in specialised stores"},
},
"Retail sale of other goods, except motor vehicles and motorcycles": {
    CPA: {code: "47.7", description: "Retail sale services of other goods, except motor vehicles and motorcycles"},
    ISIC: {code: "477", description: "Retail sale of other goods, except motor vehicles and motorcycles"},
    NACE: {code: "47.7", description: "Retail sale of other goods, except motor vehicles and motorcycles"},
    UK_SIC: {code: "47.7", description: "Retail sale of other goods in specialised stores"},
},
"Retail sale of motor vehicles, motorcycles and related parts and accessories": {
    CPA: {code: "47.8", description: "Retail sale services of motor vehicles, motorcycles and related parts and accessories"},
    ISIC: {code: "478", description: "Retail sale of motor vehicles, motorcycles and related parts and accessories"},
    NACE: {code: "47.8", description: "Retail sale of motor vehicles, motorcycles and related parts and accessories"},
    UK_SIC: {code: "47.8", description: "Retail sale via stalls and markets"},
},
"Intermediation service activities for retail sale": {
    CPA: {code: "47.9", description: "Intermediation services of retail sale services"},
    ISIC: {code: "479", description: "Intermediation service activities for retail sale"},
    NACE: {code: "47.9", description: "Intermediation service activities for retail sale"},
    UK_SIC: {code: "47.9", description: "Retail trade not in stores, stalls or markets"},
},
"Passenger rail transport": {
    CPA: {code: "49.1", description: "Passenger rail transport services"},
    ISIC: {code: "491", description: "Transport via railways"},
    NACE: {code: "49.1", description: "Passenger rail transport"},
    UK_SIC: {code: "49.1", description: "Passenger rail transport, interurban"},
},
"Freight rail transport": {
    CPA: {code: "49.2", description: "Freight rail transport services"},
    ISIC: {code: "492", description: "Other land transport"},
    NACE: {code: "49.2", description: "Freight rail transport"},
    UK_SIC: {code: "49.2", description: "Freight rail transport"},
},
"Other passenger land transport": {
    CPA: {code: "49.3", description: "Other passenger land transport services"},
    ISIC: {code: "493", description: "Transport via pipeline"},
    NACE: {code: "49.3", description: "Other passenger land transport"},
    UK_SIC: {code: "49.3", description: "Other passenger land transport"},
},
"Freight transport by road and removal services": {
    CPA: {code: "49.4", description: "Freight transport services by road and removal services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "49.4", description: "Freight transport by road and removal services"},
    UK_SIC: {code: "49.4", description: "Freight transport by road and removal services"},
},
"Transport via pipeline": {
    CPA: {code: "49.5", description: "Transport services via pipeline"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "49.5", description: "Transport via pipeline"},
    UK_SIC: {code: "49.5", description: "Transport via pipeline"},
},
"Sea and coastal passenger water transport": {
    CPA: {code: "50.1", description: "Sea and coastal passenger water transport services"},
    ISIC: {code: "501", description: "Sea and coastal water transport"},
    NACE: {code: "50.1", description: "Sea and coastal passenger water transport"},
    UK_SIC: {code: "50.1", description: "Sea and coastal passenger water transport"},
},
"Sea and coastal freight water transport": {
    CPA: {code: "50.2", description: "Sea and coastal freight water transport services"},
    ISIC: {code: "502", description: "Inland water transport"},
    NACE: {code: "50.2", description: "Sea and coastal freight water transport"},
    UK_SIC: {code: "50.2", description: "Sea and coastal freight water transport"},
},
"Inland passenger water transport": {
    CPA: {code: "50.3", description: "Inland passenger water transport services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "50.3", description: "Inland passenger water transport"},
    UK_SIC: {code: "50.3", description: "Inland passenger water transport"},
},
"Inland freight water transport": {
    CPA: {code: "50.4", description: "Inland freight water transport services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "50.4", description: "Inland freight water transport"},
    UK_SIC: {code: "50.4", description: "Inland freight water transport"},
},
"Passenger air transport": {
    CPA: {code: "51.1", description: "Passenger air transport services"},
    ISIC: {code: "511", description: "Passenger air transport"},
    NACE: {code: "51.1", description: "Passenger air transport"},
    UK_SIC: {code: "51.1", description: "Passenger air transport"},
},
"Freight air transport and space transport": {
    CPA: {code: "51.2", description: "Freight air transport and space transport services"},
    ISIC: {code: "512", description: "Freight air transport"},
    NACE: {code: "51.2", description: "Freight air transport and space transport"},
    UK_SIC: {code: "51.2", description: "Freight air transport and space transport"},
},
"Warehousing and storage": {
    CPA: {code: "52.1", description: "Warehousing and storage services"},
    ISIC: {code: "521", description: "Warehousing and storage"},
    NACE: {code: "52.1", description: "Warehousing and storage"},
    UK_SIC: {code: "52.1", description: "Warehousing and storage"},
},
"Support activities for transportation": {
    CPA: {code: "52.2", description: "Support services of transportation"},
    ISIC: {code: "522", description: "Support activities for transportation"},
    NACE: {code: "52.2", description: "Support activities for transportation"},
    UK_SIC: {code: "52.2", description: "Support activities for transportation"},
},
"Intermediation service activities for transportation": {
    CPA: {code: "52.3", description: "Intermediation services of transportation"},
    ISIC: {code: "523", description: "Intermediation service activities for transportation"},
    NACE: {code: "52.3", description: "Intermediation service activities for transportation"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Postal activities under universal service obligation": {
    CPA: {code: "53.1", description: "Postal services under universal service obligation"},
    ISIC: {code: "531", description: "Postal activities"},
    NACE: {code: "53.1", description: "Postal activities under universal service obligation"},
    UK_SIC: {code: "53.1", description: "Postal activities under universal service obligation"},
},
"Other postal and courier activities": {
    CPA: {code: "53.2", description: "Other postal and courier services"},
    ISIC: {code: "532", description: "Courier activities"},
    NACE: {code: "53.2", description: "Other postal and courier activities"},
    UK_SIC: {code: "53.2", description: "Other postal and courier activities"},
},
"Intermediation service activities for postal and courier activities": {
    CPA: {code: "53.3", description: "Intermediation services of postal and courier services"},
    ISIC: {code: "533", description: "Intermediation service activities for postal and courier activities"},
    NACE: {code: "53.3", description: "Intermediation service activities for postal and courier activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Hotels and similar accommodation": {
    CPA: {code: "55.1", description: "Hotel and similar accommodation services"},
    ISIC: {code: "551", description: "Hotels and similar accommodation activities"},
    NACE: {code: "55.1", description: "Hotels and similar accommodation"},
    UK_SIC: {code: "55.1", description: "Hotels and similar accommodation"},
},
"Holiday and other short-stay accommodation": {
    CPA: {code: "55.2", description: "Holiday and other short-stay accommodation services"},
    ISIC: {code: "552", description: "Other short term accommodation activities"},
    NACE: {code: "55.2", description: "Holiday and other short-stay accommodation"},
    UK_SIC: {code: "55.2", description: "Holiday and other short-stay accommodation"},
},
"Camping grounds and recreational vehicle parks": {
    CPA: {code: "55.3", description: "Camping grounds and recreational vehicle parks services"},
    ISIC: {code: "553", description: "Camping grounds, recreational vehicle parks and trailer parks"},
    NACE: {code: "55.3", description: "Camping grounds and recreational vehicle parks"},
    UK_SIC: {code: "55.3", description: "Camping grounds, recreational vehicle parks and trailer parks"},
},
"Intermediation service activities for accommodation": {
    CPA: {code: "55.4", description: "Intermediation services of accommodation"},
    ISIC: {code: "554", description: "Intermediation service activities for accommodation"},
    NACE: {code: "55.4", description: "Intermediation service activities for accommodation"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Other accommodation": {
    CPA: {code: "55.9", description: "Other accommodation services"},
    ISIC: {code: "559", description: "Other accommodation n.e.c."},
    NACE: {code: "55.9", description: "Other accommodation"},
    UK_SIC: {code: "55.9", description: "Other accommodation"},
},
"Restaurants and mobile food service activities": {
    CPA: {code: "56.1", description: "Restaurant and mobile food serving services"},
    ISIC: {code: "561", description: "Restaurants and mobile food service activities"},
    NACE: {code: "56.1", description: "Restaurants and mobile food service activities"},
    UK_SIC: {code: "56.1", description: "Restaurants and mobile food service activities"},
},
"Event catering, contract catering service activities and other food service activities": {
    CPA: {code: "56.2", description: "Event catering, contract catering services and other food serving services"},
    ISIC: {code: "562", description: "Event catering and other food service activities"},
    NACE: {code: "56.2", description: "Event catering, contract catering service activities and other food service activities"},
    UK_SIC: {code: "56.2", description: "Event catering and other food service activities"},
},
"Beverage serving activities": {
    CPA: {code: "56.3", description: "Beverage serving services"},
    ISIC: {code: "563", description: "Beverage serving activities"},
    NACE: {code: "56.3", description: "Beverage serving activities"},
    UK_SIC: {code: "56.3", description: "Beverage serving activities"},
},
"Intermediation service activities for food and beverage services activities": {
    CPA: {code: "56.4", description: "Intermediation services of food and beverage serving services"},
    ISIC: {code: "564", description: "Intermediation service activities for food and beverage services activities"},
    NACE: {code: "56.4", description: "Intermediation service activities for food and beverage services activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Publishing of books, newspapers and other publishing activities, except software publishing": {
    CPA: {code: "58.1", description: "Publishing services of books, newspapers and other publishing services, except software publishing"},
    ISIC: {code: "581", description: "Publishing of books, newspapers, periodicals and other publishing activities"},
    NACE: {code: "58.1", description: "Publishing of books, newspapers and other publishing activities, except software publishing"},
    UK_SIC: {code: "58.1", description: "Publishing of books, periodicals and other publishing activities"},
},
"Software publishing": {
    CPA: {code: "58.2", description: "Software publishing services"},
    ISIC: {code: "582", description: "Software publishing"},
    NACE: {code: "58.2", description: "Software publishing"},
    UK_SIC: {code: "58.2", description: "Software publishing"},
},
"Motion picture, video and television programme activities": {
    CPA: {code: "59.1", description: "Motion picture, video and television programme services"},
    ISIC: {code: "591", description: "Motion picture, video and television programme activities"},
    NACE: {code: "59.1", description: "Motion picture, video and television programme activities"},
    UK_SIC: {code: "59.1", description: "Motion picture, video and television programme activities"},
},
"Sound recording and music publishing activities": {
    CPA: {code: "59.2", description: "Sound recording and music publishing services"},
    ISIC: {code: "592", description: "Sound recording and music publishing activities"},
    NACE: {code: "59.2", description: "Sound recording and music publishing activities"},
    UK_SIC: {code: "59.2", description: "Sound recording and music publishing activities"},
},
"Radio broadcasting and audio distribution activities": {
    CPA: {code: "60.1", description: "Radio broadcasting and audio distribution services"},
    ISIC: {code: "601", description: "Radio broadcasting and audio distribution activities"},
    NACE: {code: "60.1", description: "Radio broadcasting and audio distribution activities"},
    UK_SIC: {code: "60.1", description: "Radio broadcasting"},
},
"Television programming, broadcasting and video distribution activities": {
    CPA: {code: "60.2", description: "Television programming, broadcasting and video distribution services"},
    ISIC: {code: "602", description: "Television programming, broadcasting and video distribution activities"},
    NACE: {code: "60.2", description: "Television programming, broadcasting and video distribution activities"},
    UK_SIC: {code: "60.2", description: "Television programming and broadcasting activities"},
},
"News agency and other content distribution activities": {
    CPA: {code: "60.3", description: "News agency and other content distribution services"},
    ISIC: {code: "603", description: "News agency and other content distribution activities"},
    NACE: {code: "60.3", description: "News agency and other content distribution activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Wired, wireless, and satellite telecommunication activities": {
    CPA: {code: "61.1", description: "Wired, wireless, and satellite telecommunication services"},
    ISIC: {code: "611", description: "Wired, wireless, and satellite telecommunication activities"},
    NACE: {code: "61.1", description: "Wired, wireless, and satellite telecommunication activities"},
    UK_SIC: {code: "61.1", description: "Wired telecommunications activities"},
},
"Telecommunication reselling activities and intermediation service activities for telecommunication": {
    CPA: {code: "61.2", description: "Telecommunication reselling services and intermediation services of telecommunication services"},
    ISIC: {code: "612", description: "Telecommunication reselling activities and intermediation service activities for telecommunication"},
    NACE: {code: "61.2", description: "Telecommunication reselling activities and intermediation service activities for telecommunication"},
    UK_SIC: {code: "61.2", description: "Wireless telecommunications activities"},
},
"Other telecommunication activities": {
    CPA: {code: "61.9", description: "Other telecommunication services"},
    ISIC: {code: "619", description: "Other telecommunication activities"},
    NACE: {code: "61.9", description: "Other telecommunication activities"},
    UK_SIC: {code: "61.9", description: "Other telecommunications activities"},
},
"Computer programming activities": {
    CPA: {code: "62.1", description: "Computer programming services"},
    ISIC: {code: "621", description: "Computer programming activities"},
    NACE: {code: "62.1", description: "Computer programming activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Computer consultancy and computer facilities management activities": {
    CPA: {code: "62.2", description: "Computer consultancy and computer facilities management services"},
    ISIC: {code: "622", description: "Computer consultancy and computer facilities management activities"},
    NACE: {code: "62.2", description: "Computer consultancy and computer facilities management activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Other information technology and computer service activities": {
    CPA: {code: "62.9", description: "Other information technology and computer services"},
    ISIC: {code: "629", description: "Other information technology and computer service activities"},
    NACE: {code: "62.9", description: "Other information technology and computer service activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Computing infrastructure, data processing, hosting and related activities": {
    CPA: {code: "63.1", description: "Computing infrastructure, data processing, hosting and related services"},
    ISIC: {code: "631", description: "Computing infrastructure, data processing, hosting and related activities"},
    NACE: {code: "63.1", description: "Computing infrastructure, data processing, hosting and related activities"},
    UK_SIC: {code: "63.1", description: "Data processing, hosting and related activities; web portals"},
},
"Web search portal activities and other information service activities": {
    CPA: {code: "63.9", description: "Web search portal services and other information services"},
    ISIC: {code: "639", description: "Web search portals activities and other information service activities"},
    NACE: {code: "63.9", description: "Web search portal activities and other information service activities"},
    UK_SIC: {code: "63.9", description: "Other information service activities"},
},
"Monetary intermediation": {
    CPA: {code: "64.1", description: "Monetary intermediation services"},
    ISIC: {code: "641", description: "Monetary intermediation"},
    NACE: {code: "64.1", description: "Monetary intermediation"},
    UK_SIC: {code: "64.1", description: "Monetary intermediation"},
},
"Activities of holding companies and financing conduits": {
    CPA: {code: "64.2", description: "Services of holding companies and financing conduits"},
    ISIC: {code: "642", description: "Activities of holding companies and financing conduits"},
    NACE: {code: "64.2", description: "Activities of holding companies and financing conduits"},
    UK_SIC: {code: "64.2", description: "Activities of holding companies"},
},
"Activities of trusts, funds and similar financial entities": {
    CPA: {code: "64.3", description: "Services of trusts, funds and similar financial entities"},
    ISIC: {code: "643", description: "Activities of trusts, funds and similar financial entities"},
    NACE: {code: "64.3", description: "Activities of trusts, funds and similar financial entities"},
    UK_SIC: {code: "64.3", description: "Trusts, funds and similar financial entities"},
},
"Other financial service activities, except insurance and pension funding": {
    CPA: {code: "64.9", description: "Other financial services, except insurance and pension funding"},
    ISIC: {code: "649", description: "Other financial service activities, except insurance and pension funding activities"},
    NACE: {code: "64.9", description: "Other financial service activities, except insurance and pension funding"},
    UK_SIC: {code: "64.9", description: "Other financial service activities, except insurance and pension funding"},
},
"Insurance": {
    CPA: {code: "65.1", description: "Insurance services"},
    ISIC: {code: "651", description: "Insurance"},
    NACE: {code: "65.1", description: "Insurance"},
    UK_SIC: {code: "65.1", description: "Insurance"},
},
"Reinsurance": {
    CPA: {code: "65.2", description: "Reinsurance services"},
    ISIC: {code: "652", description: "Reinsurance"},
    NACE: {code: "65.2", description: "Reinsurance"},
    UK_SIC: {code: "65.2", description: "Reinsurance"},
},
"Pension funding": {
    CPA: {code: "65.3", description: "Pension funding services"},
    ISIC: {code: "653", description: "Pension funding"},
    NACE: {code: "65.3", description: "Pension funding"},
    UK_SIC: {code: "65.3", description: "Pension funding"},
},
"Activities auxiliary to financial services, except insurance and pension funding": {
    CPA: {code: "66.1", description: "Services auxiliary to financial services, except insurance and pension funding"},
    ISIC: {code: "661", description: "Activities auxiliary to financial services, except insurance and pension funding"},
    NACE: {code: "66.1", description: "Activities auxiliary to financial services, except insurance and pension funding"},
    UK_SIC: {code: "66.1", description: "Activities auxiliary to financial services, except insurance and pension funding"},
},
"Activities auxiliary to insurance and pension funding": {
    CPA: {code: "66.2", description: "Services auxiliary to insurance and pension funding"},
    ISIC: {code: "662", description: "Activities auxiliary to insurance and pension funding"},
    NACE: {code: "66.2", description: "Activities auxiliary to insurance and pension funding"},
    UK_SIC: {code: "66.2", description: "Activities auxiliary to insurance and pension funding"},
},
"Fund management activities": {
    CPA: {code: "66.3", description: "Fund management services"},
    ISIC: {code: "663", description: "Fund management activities"},
    NACE: {code: "66.3", description: "Fund management activities"},
    UK_SIC: {code: "66.3", description: "Fund management activities"},
},
"Real estate activities with own property and development of building projects": {
    CPA: {code: "68.1", description: "Real estate services with own property and development of building projects"},
    ISIC: {code: "681", description: "Real estate activities with own or leased property"},
    NACE: {code: "68.1", description: "Real estate activities with own property and development of building projects"},
    UK_SIC: {code: "68.1", description: "Buying and selling of own real estate"},
},
"Rental and operating of own or leased real estate": {
    CPA: {code: "68.2", description: "Rental and operating services of own or leased real estate"},
    ISIC: {code: "682", description: "Real estate activities on a fee or contract basis"},
    NACE: {code: "68.2", description: "Rental and operating of own or leased real estate"},
    UK_SIC: {code: "68.2", description: "Renting and operating of own or leased real estate"},
},
"Real estate activities on a fee or contract basis": {
    CPA: {code: "68.3", description: "Real estate services on a fee or contract basis"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "68.3", description: "Real estate activities on a fee or contract basis"},
    UK_SIC: {code: "68.3", description: "Real estate activities on a fee or contract basis"},
},
"Legal activities": {
    CPA: {code: "69.1", description: "Legal services"},
    ISIC: {code: "691", description: "Legal activities"},
    NACE: {code: "69.1", description: "Legal activities"},
    UK_SIC: {code: "69.1", description: "Legal activities"},
},
"Accounting, bookkeeping and auditing activities; tax consultancy": {
    CPA: {code: "69.2", description: "Accounting, bookkeeping and auditing services; tax consultancy services"},
    ISIC: {code: "692", description: "Accounting, bookkeeping and auditing activities; tax consultancy"},
    NACE: {code: "69.2", description: "Accounting, bookkeeping and auditing activities; tax consultancy"},
    UK_SIC: {code: "69.2", description: "Accounting, bookkeeping and auditing activities; tax consultancy"},
},
"Activities of head offices": {
    CPA: {code: "70.1", description: "Services of head offices"},
    ISIC: {code: "701", description: "Activities of head offices"},
    NACE: {code: "70.1", description: "Activities of head offices"},
    UK_SIC: {code: "70.1", description: "Activities of head offices"},
},
"Business and other management consultancy activities": {
    CPA: {code: "70.2", description: "Business and other management consultancy services"},
    ISIC: {code: "702", description: "Business and other management consultancy activities"},
    NACE: {code: "70.2", description: "Business and other management consultancy activities"},
    UK_SIC: {code: "70.2", description: "Management consultancy activities"},
},
"Architectural and engineering activities and related technical consultancy": {
    CPA: {code: "71.1", description: "Architectural and engineering services and related technical consultancy services"},
    ISIC: {code: "711", description: "Architectural and engineering, and related technical consultancy activities"},
    NACE: {code: "71.1", description: "Architectural and engineering activities and related technical consultancy"},
    UK_SIC: {code: "71.1", description: "Architectural and engineering activities and related technical consultancy"},
},
"Technical testing and analysis": {
    CPA: {code: "71.2", description: "Technical testing and analysis services"},
    ISIC: {code: "712", description: "Technical testing and analysis"},
    NACE: {code: "71.2", description: "Technical testing and analysis"},
    UK_SIC: {code: "71.2", description: "Technical testing and analysis"},
},
"Research and experimental development on natural sciences and engineering": {
    CPA: {code: "72.1", description: "Research and development services on natural sciences, engineering and technology"},
    ISIC: {code: "721", description: "Research and experimental development on natural sciences and engineering"},
    NACE: {code: "72.1", description: "Research and experimental development on natural sciences and engineering"},
    UK_SIC: {code: "72.1", description: "Research and experimental development on natural sciences and engineering"},
},
"Research and experimental development on social sciences and humanities": {
    CPA: {code: "72.2", description: "Research and development services on social sciences and humanities"},
    ISIC: {code: "722", description: "Research and experimental development on social sciences and humanities"},
    NACE: {code: "72.2", description: "Research and experimental development on social sciences and humanities"},
    UK_SIC: {code: "72.2", description: "Research and experimental development on social sciences and humanities"},
},
"Advertising": {
    CPA: {code: "73.1", description: "Advertising services"},
    ISIC: {code: "731", description: "Advertising activities"},
    NACE: {code: "73.1", description: "Advertising"},
    UK_SIC: {code: "73.1", description: "Advertising"},
},
"Market research and public opinion polling": {
    CPA: {code: "73.2", description: "Market research and public opinion polling services"},
    ISIC: {code: "732", description: "Market research and public opinion polling activities"},
    NACE: {code: "73.2", description: "Market research and public opinion polling"},
    UK_SIC: {code: "73.2", description: "Market research and public opinion polling"},
},
"Public relations and communication activities": {
    CPA: {code: "73.3", description: "Public relations and communication services"},
    ISIC: {code: "733", description: "Public relations activities"},
    NACE: {code: "73.3", description: "Public relations and communication activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Specialised design activities": {
    CPA: {code: "74.1", description: "Specialised design services"},
    ISIC: {code: "741", description: "Specialized design activities"},
    NACE: {code: "74.1", description: "Specialised design activities"},
    UK_SIC: {code: "74.1", description: "Specialised design activities"},
},
"Photographic activities": {
    CPA: {code: "74.2", description: "Photographic services"},
    ISIC: {code: "742", description: "Photographic activities"},
    NACE: {code: "74.2", description: "Photographic activities"},
    UK_SIC: {code: "74.2", description: "Photographic activities"},
},
"Translation and interpretation activities": {
    CPA: {code: "74.3", description: "Translation and interpretation services"},
    ISIC: {code: "743", description: "Translation and interpretation activities"},
    NACE: {code: "74.3", description: "Translation and interpretation activities"},
    UK_SIC: {code: "74.3", description: "Translation and interpretation activities"},
},
"Other professional, scientific and technical activities n.e.c.": {
    CPA: {code: "74.9", description: "Other professional, scientific and technical services n.e.c."},
    ISIC: {code: "749", description: "Other professional, scientific and technical activities n.e.c."},
    NACE: {code: "74.9", description: "Other professional, scientific and technical activities n.e.c."},
    UK_SIC: {code: "74.9", description: "Other professional, scientific and technical activities n.e.c."},
},
"Veterinary activities": {
    CPA: {code: "75.0", description: "Veterinary services"},
    ISIC: {code: "750", description: "Veterinary activities"},
    NACE: {code: "75.0", description: "Veterinary activities"},
    UK_SIC: {code: "75.0", description: "Veterinary activities"},
},
"Rental and leasing of motor vehicles": {
    CPA: {code: "77.1", description: "Rental and leasing services of motor vehicles"},
    ISIC: {code: "771", description: "Rental and leasing of motor vehicles"},
    NACE: {code: "77.1", description: "Rental and leasing of motor vehicles"},
    UK_SIC: {code: "77.1", description: "Renting and leasing of motor vehicles"},
},
"Rental and leasing of personal and household goods": {
    CPA: {code: "77.2", description: "Rental and leasing services of personal and household goods"},
    ISIC: {code: "772", description: "Rental and leasing of personal and household goods"},
    NACE: {code: "77.2", description: "Rental and leasing of personal and household goods"},
    UK_SIC: {code: "77.2", description: "Renting and leasing of personal and household goods"},
},
"Rental and leasing of other machinery, equipment and tangible goods": {
    CPA: {code: "77.3", description: "Rental and leasing services of other machinery, equipment and tangible goods"},
    ISIC: {code: "773", description: "Rental and leasing of other machinery, equipment and tangible goods"},
    NACE: {code: "77.3", description: "Rental and leasing of other machinery, equipment and tangible goods"},
    UK_SIC: {code: "77.3", description: "Renting and leasing of other machinery, equipment and tangible goods"},
},
"Leasing of intellectual property and similar products, except copyrighted works": {
    CPA: {code: "77.4", description: "Licensing services of intellectual property and similar products, except copyrighted works"},
    ISIC: {code: "774", description: "Leasing of intellectual property and similar products, except copyrighted works"},
    NACE: {code: "77.4", description: "Leasing of intellectual property and similar products, except copyrighted works"},
    UK_SIC: {code: "77.4", description: "Leasing of intellectual property and similar products, except copyrighted works"},
},
"Intermediation service activities for rental and leasing of tangible goods and non-financial intangible assets": {
    CPA: {code: "77.5", description: "Intermediation services of rental and leasing of tangible goods and non-financial intangible assets"},
    ISIC: {code: "775", description: "Intermediation service activities for rental and leasing of tangible goods and non-financial intangible assets"},
    NACE: {code: "77.5", description: "Intermediation service activities for rental and leasing of tangible goods and non-financial intangible assets"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Activities of employment placement agencies": {
    CPA: {code: "78.1", description: "Services provided by employment placement agencies"},
    ISIC: {code: "781", description: "Activities of employment placement agencies"},
    NACE: {code: "78.1", description: "Activities of employment placement agencies"},
    UK_SIC: {code: "78.1", description: "Activities of employment placement agencies"},
},
"Temporary employment agency activities and other human resource provisions": {
    CPA: {code: "78.2", description: "Temporary employment agency services and other human resource provisions"},
    ISIC: {code: "782", description: "Temporary employment agency activities and other human resource provisions"},
    NACE: {code: "78.2", description: "Temporary employment agency activities and other human resource provisions"},
    UK_SIC: {code: "78.2", description: "Temporary employment agency activities"},
},
"Travel agency and tour operator activities": {
    CPA: {code: "79.1", description: "Travel agency and tour operator services"},
    ISIC: {code: "791", description: "Travel agency and tour operator activities"},
    NACE: {code: "79.1", description: "Travel agency and tour operator activities"},
    UK_SIC: {code: "79.1", description: "Travel agency and tour operator activities"},
},
"Other reservation service and related activities": {
    CPA: {code: "79.9", description: "Other reservation services and related services"},
    ISIC: {code: "799", description: "Other travel related activities"},
    NACE: {code: "79.9", description: "Other reservation service and related activities"},
    UK_SIC: {code: "79.9", description: "Other reservation service and related activities"},
},
"Investigation and security activities": {
    CPA: {code: "80.0", description: "Investigation and security services"},
    ISIC: {code: "", description: "missing entry in classification"},
    NACE: {code: "80.0", description: "Investigation and security activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Combined facilities support activities": {
    CPA: {code: "81.1", description: "Combined facilities support services"},
    ISIC: {code: "811", description: "Combined facilities support activities"},
    NACE: {code: "81.1", description: "Combined facilities support activities"},
    UK_SIC: {code: "81.1", description: "Combined facilities support activities"},
},
"Cleaning activities": {
    CPA: {code: "81.2", description: "Cleaning services"},
    ISIC: {code: "812", description: "Cleaning activities"},
    NACE: {code: "81.2", description: "Cleaning activities"},
    UK_SIC: {code: "81.2", description: "Cleaning activities"},
},
"Landscape service activities": {
    CPA: {code: "81.3", description: "Landscape services"},
    ISIC: {code: "813", description: "Landscape service activities"},
    NACE: {code: "81.3", description: "Landscape service activities"},
    UK_SIC: {code: "81.3", description: "Landscape service activities"},
},
"Office administrative and support activities": {
    CPA: {code: "82.1", description: "Office administrative and support services"},
    ISIC: {code: "821", description: "Office administrative and support activities"},
    NACE: {code: "82.1", description: "Office administrative and support activities"},
    UK_SIC: {code: "82.1", description: "Office administrative and support activities"},
},
"Activities of call centres": {
    CPA: {code: "82.2", description: "Call centre services"},
    ISIC: {code: "822", description: "Activities of call centres"},
    NACE: {code: "82.2", description: "Activities of call centres"},
    UK_SIC: {code: "82.2", description: "Activities of call centres"},
},
"Organisation of conventions and trade shows": {
    CPA: {code: "82.3", description: "Organisation of conventions and trade shows services"},
    ISIC: {code: "823", description: "Organization of conventions and trade shows"},
    NACE: {code: "82.3", description: "Organisation of conventions and trade shows"},
    UK_SIC: {code: "82.3", description: "Organisation of conventions and trade shows"},
},
"Intermediation service activities for business support service activities n.e.c.": {
    CPA: {code: "82.4", description: "Intermediation services of business support services n.e.c."},
    ISIC: {code: "824", description: "Intermediation service activities for business support service activities n.e.c., except financial intermediation"},
    NACE: {code: "82.4", description: "Intermediation service activities for business support service activities n.e.c."},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Business support service activities n.e.c.": {
    CPA: {code: "82.9", description: "Business support services n.e.c."},
    ISIC: {code: "829", description: "Business support service activities n.e.c."},
    NACE: {code: "82.9", description: "Business support service activities n.e.c."},
    UK_SIC: {code: "82.9", description: "Business support service activities n.e.c."},
},
"Administration of the State and the economic, social and environmental policies of the community": {
    CPA: {code: "84.1", description: "Administration services of the State and the economic, social and environmental policies of the community"},
    ISIC: {code: "841", description: "Administration of the State and the economic, social and environmental policies of the community"},
    NACE: {code: "84.1", description: "Administration of the State and the economic, social and environmental policies of the community"},
    UK_SIC: {code: "84.1", description: "Administration of the State and the economic and social policy of the community"},
},
"Provision of services to the community as a whole": {
    CPA: {code: "84.2", description: "Services to the community"},
    ISIC: {code: "842", description: "Provision of services to the community as a whole"},
    NACE: {code: "84.2", description: "Provision of services to the community as a whole"},
    UK_SIC: {code: "84.2", description: "Provision of services to the community as a whole"},
},
"Compulsory social security activities": {
    CPA: {code: "84.3", description: "Compulsory social security services"},
    ISIC: {code: "843", description: "Compulsory social security activities"},
    NACE: {code: "84.3", description: "Compulsory social security activities"},
    UK_SIC: {code: "84.3", description: "Compulsory social security activities"},
},
"Pre-primary education": {
    CPA: {code: "85.1", description: "Pre-primary education services"},
    ISIC: {code: "851", description: "Pre-primary education"},
    NACE: {code: "85.1", description: "Pre-primary education"},
    UK_SIC: {code: "85.1", description: "Pre-primary education"},
},
"Primary education": {
    CPA: {code: "85.2", description: "Primary education services"},
    ISIC: {code: "852", description: "Primary education"},
    NACE: {code: "85.2", description: "Primary education"},
    UK_SIC: {code: "85.2", description: "Primary education"},
},
"Secondary and post-secondary non-tertiary education": {
    CPA: {code: "85.3", description: "Secondary and post-secondary non-tertiary education services"},
    ISIC: {code: "853", description: "Secondary and post-secondary non-tertiary education"},
    NACE: {code: "85.3", description: "Secondary and post-secondary non-tertiary education"},
    UK_SIC: {code: "85.3", description: "Secondary education"},
},
"Tertiary education": {
    CPA: {code: "85.4", description: "Tertiary education services"},
    ISIC: {code: "854", description: "Tertiary education"},
    NACE: {code: "85.4", description: "Tertiary education"},
    UK_SIC: {code: "85.4", description: "Higher education"},
},
"Other education": {
    CPA: {code: "85.5", description: "Other education services"},
    ISIC: {code: "855", description: "Other education"},
    NACE: {code: "85.5", description: "Other education"},
    UK_SIC: {code: "85.5", description: "Other education"},
},
"Educational support activities": {
    CPA: {code: "85.6", description: "Educational support services"},
    ISIC: {code: "856", description: "Educational support activities"},
    NACE: {code: "85.6", description: "Educational support activities"},
    UK_SIC: {code: "85.6", description: "Educational support activities"},
},
"Hospital activities": {
    CPA: {code: "86.1", description: "Hospital services"},
    ISIC: {code: "861", description: "Hospital activities"},
    NACE: {code: "86.1", description: "Hospital activities"},
    UK_SIC: {code: "86.1", description: "Hospital activities"},
},
"Medical and dental practice activities": {
    CPA: {code: "86.2", description: "Medical and dental practice services"},
    ISIC: {code: "862", description: "Medical and dental practice activities"},
    NACE: {code: "86.2", description: "Medical and dental practice activities"},
    UK_SIC: {code: "86.2", description: "Medical and dental practice activities"},
},
"Other human health activities": {
    CPA: {code: "86.9", description: "Other human health services"},
    ISIC: {code: "869", description: "Other human health activities"},
    NACE: {code: "86.9", description: "Other human health activities"},
    UK_SIC: {code: "86.9", description: "Other human health activities"},
},
"Residential nursing care activities": {
    CPA: {code: "87.1", description: "Residential nursing care services"},
    ISIC: {code: "871", description: "Residential nursing care activities"},
    NACE: {code: "87.1", description: "Residential nursing care activities"},
    UK_SIC: {code: "87.1", description: "Residential nursing care activities"},
},
"Residential care activities for persons living with or having a diagnosis of a mental illness or substance abuse": {
    CPA: {code: "87.2", description: "Residential care services of persons living with or having a diagnosis of a mental illness or substance abuse"},
    ISIC: {code: "872", description: "Residential care activities for persons living with or having a diagnosis of a mental illness or substance abuse"},
    NACE: {code: "87.2", description: "Residential care activities for persons living with or having a diagnosis of a mental illness or substance abuse"},
    UK_SIC: {code: "87.2", description: "Residential care activities for learning disabilities, mental health and substance abuse"},
},
"Residential care activities for older persons or persons with physical disabilities": {
    CPA: {code: "87.3", description: "Residential care services of older persons or persons with physical disabilities"},
    ISIC: {code: "873", description: "Residential care activities for older persons or persons with physical disabilities"},
    NACE: {code: "87.3", description: "Residential care activities for older persons or persons with physical disabilities"},
    UK_SIC: {code: "87.3", description: "Residential care activities for the elderly and disabled"},
},
"Other residential care activities": {
    CPA: {code: "87.9", description: "Other residential care services"},
    ISIC: {code: "879", description: "Other residential care activities"},
    NACE: {code: "87.9", description: "Other residential care activities"},
    UK_SIC: {code: "87.9", description: "Other residential care activities"},
},
"Social work activities without accommodation for older persons or persons with disabilities": {
    CPA: {code: "88.1", description: "Social work services without accommodation for older persons or persons with disabilities"},
    ISIC: {code: "881", description: "Social work activities without accommodation for older persons or persons with disabilities"},
    NACE: {code: "88.1", description: "Social work activities without accommodation for older persons or persons with disabilities"},
    UK_SIC: {code: "88.1", description: "Social work activities without accommodation for the elderly and disabled"},
},
"Other social work activities without accommodation": {
    CPA: {code: "88.9", description: "Other social work services without accommodation"},
    ISIC: {code: "889", description: "Other social work activities without accommodation"},
    NACE: {code: "88.9", description: "Other social work activities without accommodation"},
    UK_SIC: {code: "88.9", description: "Other social work activities without accommodation"},
},
"Arts creation activities": {
    CPA: {code: "90.1", description: "Arts creation services"},
    ISIC: {code: "901", description: "Arts creation activities"},
    NACE: {code: "90.1", description: "Arts creation activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Activities of performing arts": {
    CPA: {code: "90.2", description: "Services of performing arts"},
    ISIC: {code: "902", description: "Activities of performing arts"},
    NACE: {code: "90.2", description: "Activities of performing arts"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Support activities to arts creation and performing arts": {
    CPA: {code: "90.3", description: "Support services to arts creation and performing arts"},
    ISIC: {code: "903", description: "Support activities to arts creation and performing arts"},
    NACE: {code: "90.3", description: "Support activities to arts creation and performing arts"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Library and archive activities": {
    CPA: {code: "91.1", description: "Library and archive services"},
    ISIC: {code: "911", description: "Library and archives activities"},
    NACE: {code: "91.1", description: "Library and archive activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Museum, collection, historical site and monument activities": {
    CPA: {code: "91.2", description: "Museum, collection, historical site and monument services"},
    ISIC: {code: "912", description: "Museum, collection, historical site and monument activities"},
    NACE: {code: "91.2", description: "Museum, collection, historical site and monument activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Conservation, restoration and other support activities for cultural heritage": {
    CPA: {code: "91.3", description: "Conservation, restoration and other support services of cultural heritage"},
    ISIC: {code: "913", description: "Conservation, restoration and other support activities for cultural heritage"},
    NACE: {code: "91.3", description: "Conservation, restoration and other support activities for cultural heritage"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Botanical and zoological garden and nature reserve activities": {
    CPA: {code: "91.4", description: "Botanical and zoological garden and nature reserve services"},
    ISIC: {code: "914", description: "Botanical and zoological garden and nature reserve activities"},
    NACE: {code: "91.4", description: "Botanical and zoological garden and nature reserve activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Gambling and betting activities": {
    CPA: {code: "92.0", description: "Gambling and betting services"},
    ISIC: {code: "920", description: "Gambling and betting activities"},
    NACE: {code: "92.0", description: "Gambling and betting activities"},
    UK_SIC: {code: "92.0", description: "Gambling and betting activities"},
},
"Sports activities": {
    CPA: {code: "93.1", description: "Sporting services"},
    ISIC: {code: "931", description: "Sports activities"},
    NACE: {code: "93.1", description: "Sports activities"},
    UK_SIC: {code: "93.1", description: "Sports activities"},
},
"Amusement and recreation activities": {
    CPA: {code: "93.2", description: "Amusement and recreation services"},
    ISIC: {code: "932", description: "Amusement and recreation activities"},
    NACE: {code: "93.2", description: "Amusement and recreation activities"},
    UK_SIC: {code: "93.2", description: "Amusement and recreation activities"},
},
"Activities of business, employers and professional membership organisations": {
    CPA: {code: "94.1", description: "Services furnished by business, employers and professional membership organisations"},
    ISIC: {code: "941", description: "Activities of business, employers and professional membership organizations"},
    NACE: {code: "94.1", description: "Activities of business, employers and professional membership organisations"},
    UK_SIC: {code: "94.1", description: "Activities of business, employers and professional membership organisations"},
},
"Activities of trade unions": {
    CPA: {code: "94.2", description: "Services furnished by trade unions"},
    ISIC: {code: "942", description: "Activities of trade unions"},
    NACE: {code: "94.2", description: "Activities of trade unions"},
    UK_SIC: {code: "94.2", description: "Activities of trade unions"},
},
"Activities of other membership organisations": {
    CPA: {code: "94.9", description: "Services furnished by other membership organisations"},
    ISIC: {code: "949", description: "Activities of other membership organizations"},
    NACE: {code: "94.9", description: "Activities of other membership organisations"},
    UK_SIC: {code: "94.9", description: "Activities of other membership organisations"},
},
"Repair and maintenance of computers and communication equipment": {
    CPA: {code: "95.1", description: "Repair and maintenance services of computers and communication equipment"},
    ISIC: {code: "951", description: "Repair and maintenance of computers and communication equipment"},
    NACE: {code: "95.1", description: "Repair and maintenance of computers and communication equipment"},
    UK_SIC: {code: "95.1", description: "Repair of computers and communication equipment"},
},
"Repair and maintenance of personal and household goods": {
    CPA: {code: "95.2", description: "Repair and maintenance services of personal and household goods"},
    ISIC: {code: "952", description: "Repair and maintenance of personal and household goods"},
    NACE: {code: "95.2", description: "Repair and maintenance of personal and household goods"},
    UK_SIC: {code: "95.2", description: "Repair of personal and household goods"},
},
"Repair and maintenance of motor vehicles and motorcycles": {
    CPA: {code: "95.3", description: "Repair and maintenance services of motor vehicles and motorcycles"},
    ISIC: {code: "953", description: "Repair and maintenance of motor vehicles and motorcycles"},
    NACE: {code: "95.3", description: "Repair and maintenance of motor vehicles and motorcycles"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Intermediation service activities for repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles": {
    CPA: {code: "95.4", description: "Intermediation services of repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles"},
    ISIC: {code: "954", description: "Intermediation service activities for repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles"},
    NACE: {code: "95.4", description: "Intermediation service activities for repair and maintenance of computers, personal and household goods, and motor vehicles and motorcycles"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Washing and cleaning of textile and fur products": {
    CPA: {code: "96.1", description: "Washing and cleaning services of textile and fur products"},
    ISIC: {code: "961", description: "Washing and cleaning of textile and fur products"},
    NACE: {code: "96.1", description: "Washing and cleaning of textile and fur products"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Hairdressing, beauty treatment, day spa and similar activities": {
    CPA: {code: "96.2", description: "Hairdressing, beauty treatment, day spa and similar services"},
    ISIC: {code: "962", description: "Hairdressing, beauty treatment, day spa and similar activities"},
    NACE: {code: "96.2", description: "Hairdressing, beauty treatment, day spa and similar activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Funeral and related activities": {
    CPA: {code: "96.3", description: "Funeral and related services"},
    ISIC: {code: "963", description: "Funeral and related activities"},
    NACE: {code: "96.3", description: "Funeral and related activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Intermediation service activities for personal services": {
    CPA: {code: "96.4", description: "Intermediation services of personal services"},
    ISIC: {code: "964", description: "Intermediation service activities for personal services"},
    NACE: {code: "96.4", description: "Intermediation service activities for personal services"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Other personal service activities": {
    CPA: {code: "96.9", description: "Other personal services"},
    ISIC: {code: "969", description: "Other personal service activities n.e.c."},
    NACE: {code: "96.9", description: "Other personal service activities"},
    UK_SIC: {code: "", description: "missing entry in classification"},
},
"Activities of households as employers of domestic personnel": {
    CPA: {code: "97.0", description: "Services of households as employers of domestic personnel"},
    ISIC: {code: "970", description: "Activities of households as employers of domestic personnel"},
    NACE: {code: "97.0", description: "Activities of households as employers of domestic personnel"},
    UK_SIC: {code: "97.0", description: "Activities of households as employers of domestic personnel"},
},
"Undifferentiated goods-producing activities of private households for own use": {
    CPA: {code: "98.1", description: "Undifferentiated goods produced by private households for own use"},
    ISIC: {code: "981", description: "Undifferentiated goods-producing activities of private households for own use"},
    NACE: {code: "98.1", description: "Undifferentiated goods-producing activities of private households for own use"},
    UK_SIC: {code: "98.1", description: "Undifferentiated goods-producing activities of private households for own use"},
},
"Undifferentiated service-producing activities of private households for own use": {
    CPA: {code: "98.2", description: "Undifferentiated services produced by private households for own use"},
    ISIC: {code: "982", description: "Undifferentiated service-producing activities of private households for own use"},
    NACE: {code: "98.2", description: "Undifferentiated service-producing activities of private households for own use"},
    UK_SIC: {code: "98.2", description: "Undifferentiated service-producing activities of private households for own use"},
},
"Activities of extraterritorial organisations and bodies": {
    CPA: {code: "99.0", description: "Services provided by extraterritorial organisations and bodies"},
    ISIC: {code: "990", description: "Activities of extraterritorial organizations and bodies"},
    NACE: {code: "99.0", description: "Activities of extraterritorial organisations and bodies"},
    UK_SIC: {code: "99.0", description: "Activities of extraterritorial organisations and bodies"},
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
                <hr />
                {props.building.current_landuse_group.map((item, index) => (
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
                    <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                <Tooltip text={ "tooltip" } />
                    <div className="label">UK NNDA (VOA SCAT)::</div>
                    <div className="info-details">
                    <div className="code">?</div>
                    <div className="description">?????</div>
                    </div>
                </div>
                <div className={`alert alert-dark`} role="alert" style={{ fontSize: 13, backgroundColor: "#f6f8f9" }}>
                    <Tooltip text={ "[UK SIC: The UK Standard Industrial Classification of economic activities](https://www.ons.gov.uk/methodology/classificationsandstandards/ukstandardindustrialclassificationofeconomicactivities)" } />
                    <div className="label">UK SIC:</div>
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
