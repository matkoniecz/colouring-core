import { Category } from './categories-config';
import { BuildingMapTileset } from './tileserver-config';

export type LegendElement = {
    color: string;
    border?: string;
    text: string;
} | {
    subtitle: string;
};

export interface LegendConfig {
    title: string;
    description?: string;
    disclaimer?: string;
    elements: LegendElement[];
}

export interface CategoryMapDefinition {
    mapStyle: BuildingMapTileset;
    legend: LegendConfig;
}

export const defaultMapCategory = Category.AgeHistory;

export const ageLegend = [
    { color: '#fff9b8', text: '>2020' },
    { color: '#fae269', text: '2000-2019' },
    { color: '#fbaf27', text: '1980-1999' },
    { color: '#e6711d', text: '1960-1979' },
    { color: '#cc1212', text: '1940-1959' },
    { color: '#8f0303', text: '1920-1939' },
    { color: '#8f5385', text: '1900-1919' },
    { color: '#c3e1eb', text: '1880-1899' },
    { color: '#6a9dba', text: '1860-1879' },
    { color: '#3b74a3', text: '1840-1859' },
    { color: '#95ded8', text: '1820-1839' },
    { color: '#68aba5', text: '1800-1819' },
    { color: '#acc98f', text: '1750-1799' },
    { color: '#6d8a51', text: '1700-1749' },
    { color: '#d0c291', text: '<1700' },
]

export const categoryMapsConfig: {[key in Category]: CategoryMapDefinition[]} = {
    [Category.AgeHistory]: [
        {
            mapStyle: 'age_amalgamated',
            legend: {
                disclaimer: 'Diese Karte zeigt vorrangig das von Nutzern erfasste Baujahr. Lücken werden in dieser Reihenfolge gefüllt: Baujahr (Denkmaldaten), Expertenbasiertes Baujahr, Baualtersmodell Baujahr.',
                title: 'Baujahr (kombiniert)',
                elements: ageLegend,
            },
        },
        {
            mapStyle: 'date_year',
            legend: {
                title: 'Baujahr',
                elements: [
                    { color: '#fff9b8', text: '>2020' },
                    { color: '#fae269', text: '2000-2019' },
                    { color: '#fbaf27', text: '1980-1999' },
                    { color: '#e6711d', text: '1960-1979' },
                    { color: '#cc1212', text: '1940-1959' },
                    { color: '#8f0303', text: '1920-1939' },
                    { color: '#8f5385', text: '1900-1919' },
                    { color: '#c3e1eb', text: '1880-1899' },
                    { color: '#6a9dba', text: '1860-1879' },
                    { color: '#3b74a3', text: '1840-1859' },
                    { color: '#95ded8', text: '1820-1839' },
                    { color: '#68aba5', text: '1800-1819' },
                    { color: '#acc98f', text: '1750-1799' },
                    { color: '#6d8a51', text: '1700-1749' },
                    { color: '#d0c291', text: '<1700' },
                ]
            },
        },
        {
            mapStyle: 'heritage_age_data',
            legend: {
                disclaimer: 'Diese Karte zeigt das Baujahr laut Denkmaldaten.',
                title: 'Baujahr (Denkmaldaten)',
                elements: ageLegend,
            },
        },
        {
            mapStyle: 'expert_age_data',
            legend: {
                disclaimer: 'Diese Karte zeigt das von Experten geschätzte Baujahr.',
                title: 'Expertenbasiertes Baujahr',
                elements: ageLegend,
            },
        },
        {
            mapStyle: 'digital_twin_model_age_data',
            legend: {
                disclaimer: 'Diese Karte zeigt das Baujahr laut Baualtersmodell des digitalen Zwillings.',
                title: 'Baualtersmodell Baujahr',
                elements: ageLegend,
            },
        },
        {
            mapStyle: 'architectural_style',
            legend: {
                title: 'Baustil & äuß. Erscheinungsbild',
                elements: [
                    { color: '#fff9b8', text: 'Nachkriegsmoderne: vorgefertigter Plattenbau' },
                    { color: '#fae269', text: 'Nachkriegsmoderne: handwerklich-konventionell gefertigt' },
                    { color: '#fbaf27', text: 'Nationale Tradition' },
                    { color: '#e6711d', text: 'Weiße Moderne' },
                    { color: '#cc1212', text: 'Neue Sachlichkeit' },
                    { color: '#8f0303', text: 'Expressionismus' },
                    { color: '#8f5385', text: 'Jugendstil' },
                    { color: '#c3e1eb', text: 'Reformarchitektur' },
                    { color: '#6a9dba', text: 'Historismus' },
                    { color: '#3b74a3', text: 'Klassizismus' },
                    { color: '#95ded8', text: 'Barock' },
                    { color: '#68aba5', text: 'Renaissance' },
                    { color: '#acc98f', text: 'Gotik' },
                    { color: '#6d8a51', text: 'Romanik' },
                    { color: '#d0c291', text: 'Antike' },
                ]
            },
        },
        {
            mapStyle: 'facade_year',
            legend: {
                title: 'Baujahr der Fassade',
                elements: [
                    { color: '#fff9b8', text: '>2020' },
                    { color: '#fae269', text: '2000-2019' },
                    { color: '#fbaf27', text: '1980-1999' },
                    { color: '#e6711d', text: '1960-1979' },
                    { color: '#cc1212', text: '1940-1959' },
                    { color: '#8f0303', text: '1920-1939' },
                    { color: '#8f5385', text: '1900-1919' },
                    { color: '#c3e1eb', text: '1880-1899' },
                    { color: '#6a9dba', text: '1860-1879' },
                    { color: '#3b74a3', text: '1840-1859' },
                    { color: '#95ded8', text: '1820-1839' },
                    { color: '#68aba5', text: '1800-1819' },
                    { color: '#acc98f', text: '1750-1799' },
                    { color: '#6d8a51', text: '1700-1749' },
                    { color: '#d0c291', text: '<1700' },
                ]
            },
        },
        {
            mapStyle: 'age_inferred',
            legend: {
                disclaimer: 'This map shows age data that has been automatically inferred from other kinds of data. For example, for London, historical street networks data are used.',
                title: 'Age (Automatically inferred)',
                elements: ageLegend,
            },
        },
        {
            mapStyle: 'typology_style_period',
            legend: {
                disclaimer: 'This shows data automatically derived from our "Age (Amalgamated methods)" map, and grouped into historical periods. Contributors can also directly choose an historical period to represent the age of a given building if the exact date is not known.',
                title: 'Historical Period',
                elements: [
                    { color: '#fae269', text: '2000-2025 (Early C21)' },
                    { color: '#fbaf27', text: '1980-1999 (Late C20)' },
                    { color: '#cc1212', text: '1946-1979 (Post war)' },
                    { color: '#8f5385', text: '1914-1945 (WWI-WWII)' },
                    { color: '#c3e1eb', text: '1901-1914 (Edwardian)' },
                    { color: '#6a9dba', text: '1837-1901 (Victorian)' },
                    { color: '#acc98f', text: '1714-1837 (Georgian)' },
                    { color: '#6d8a51', text: '1603-1714 (Stuart)' },
                    { color: '#d0c291', text: '1485-1603 (Tudor)' },
                    { color: '#a9a695', text: '410-1485 (Medieval)' },
                    { color: '#dadada', text: '43AD-410 (Roman)' },
                ]
            }
        },
        {
            mapStyle: 'cladding_year',
            legend: {
                title: 'Cladding Date',
                elements: ageLegend,
            },
        },
        {
            mapStyle: 'extension_year',
            legend: {
                title: 'Extension Date',
                elements: ageLegend,
            },
        },
        {
            mapStyle: 'retrofit_year',
            legend: {
                title: 'Retrofit Date',
                elements: ageLegend,
            },
        },
        {
            mapStyle: 'survival_status',
            legend: {
                title: 'Survival status',
                elements: [
                    { color: '#6ded45', text: 'Same as Historical Map (Unchanged)' },
                    { color: '#f7c725', text: 'Similar to Historical Map (Some Changes)' },
                    { color: '#ff2121', text: 'Historical Building(s) Demolished' },
                    { color: '#CF26DF', text: 'Current Building on Previous Green Space' },
                ]
            }
        },
    ],
    [Category.ConstructionDesign]: [
        {
            mapStyle: 'construction_system_type',
            legend: {
                title: 'Hauptkonstruktion',
                elements: [
                    { color: '#d6c9bd', text: 'Massivbauweise: Mauerwerk' },
                    { color: '#e8af94', text: 'Massivbauweise: Ortbeton/monolithische Bauweise' },
                    { color: '#dccca5', text: 'Massivbauweise: Plattenbau' },
                    { color: '#f1e2d2', text: 'Skelettbauweise: Stahlkonstruktion' },
                    { color: '#d5b2b2', text: 'Skelettbauweise: Stahlbetonkonstruktion' },
                    { color: '#bca2aa', text: 'Holzkonstruktion: Fachwerk' },
                    { color: '#cae5c3', text: 'Holzkonstruktion: Holzrahmen' },
                    { color: '#fffef5', text: 'Holzkonstruktion: Blockbau' },
                    { color: '#f0cff5', text: 'Holzkonstruktion: Holzfertigteilbau' },
                    { color: '#c6858d', text: 'Gemischte Bauweisen' },

                ]
            }
        },
        {
            mapStyle: 'construction_core_material',
            legend: {
                title: 'Primärer Baustoff',
                elements: [
                    { color: "#f5d96b", text: "Ziegel" },
                    { color: "#96613b", text: "andere Mauersteine: Kalksandstein" },
                    { color: "#cae5c3", text: "andere Mauersteine: Porenbeton" },
                    { color: "#f0cff5", text: "andere Mauersteine: Bruchstein" },
                    { color: "#fca89d", text: "Stahlbeton" },
                    { color: "#beffe8", text: "Stahl" },
                    { color: "#b5a859", text: "Holz" },
                    { color: "#5c8970", text: "anderes Baumaterial" }

                ]
            },
        },
        {
            mapStyle: 'building_status',
            legend: {
                title: 'Aktueller Gebäudezustand',
                elements: [
                    { color: '#cccccc', text: 'Ruine' },
                    { color: '#ffffff', text: 'Investruine' },
                    { color: '#f5f58f', text: 'unsaniert' },
                    { color: '#fa667d', text: 'teil-/ vollsaniert' },
                    { color: '#e5050d', text: 'Neubau (nach 1990)' },
                    { color: '#252aa6', text: 'aktuell in Sanierung' },
                    { color: '#7025a6', text: 'aktuell im Aufbau' },
                    { color: '#45cce3', text: 'aktuell im Abriss' },
                    { color: '#898944', text: 'bereits abgerissen' },

                ]
            }
        },
        {
            mapStyle: 'last_renovation',
            legend: {
                title: 'Jahr der letzten Sanierung',
                elements: [
                    { color: '#fff9b8', text: '>2020' },
                    { color: '#fae269', text: '2000-2019' },
                    { color: '#fbaf27', text: '1980-1999' },
                    { color: '#e6711d', text: '1960-1979' },
                    { color: '#cc1212', text: '1940-1959' },
                    { color: '#8f0303', text: '1920-1939' },
                    { color: '#8f5385', text: '1900-1919' },
                    { color: '#c3e1eb', text: '1880-1899' },
                    { color: '#6a9dba', text: '1860-1879' },
                    { color: '#3b74a3', text: '1840-1859' },
                    { color: '#95ded8', text: '1820-1839' },
                    { color: '#68aba5', text: '1800-1819' },
                    { color: '#acc98f', text: '1750-1799' },
                    { color: '#6d8a51', text: '1700-1749' },
                    { color: '#d0c291', text: '<1700' },
                ]
            },
        },
        {
            mapStyle: 'construction_structural_system',
            legend: {
                title: 'Structural system',
                elements: [
                    { color: '#b5a859', text: 'Solid masonry walls supporting the roof' },
                    { color: '#ffffe3', text: 'A lateral load resisting structure (e.g. concrete or wooden frame)' },
                    { color: '#f5d96b', text: 'Other' },
                ]
            },
        },
        {
            mapStyle: 'construction_foundation',
            legend: {
                title: 'Foundations',
                elements: [
                    { color: '#b5a859', text: 'Shallow foundations with no lateral support' },
                    { color: '#ffffe3', text: 'Shallow foundations with lateral support' },
                    { color: '#f5d96b', text: 'Deep foundations with no lateral support' },
                    { color: '#beffe8', text: 'Deep Foundations with lateral support' },
                    { color: '#fca89d', text: 'Other' },
                ]
            },
        },
        {
            mapStyle: 'construction_roof_shape',
            legend: {
                title: 'Roof shape',
                elements: [
                    { color: '#b5a859', text: 'Flat' },
                    { color: '#ffffe3', text: 'Pitched with gable ends' },
                    { color: '#f5d96b', text: 'Pitched and hipped' },
                    { color: '#beffe8', text: 'Pitched with dormers' },
                    { color: '#fca89d', text: 'Monopitch' },
                    { color: '#5c8970', text: 'Sawtooth' },
                    { color: '#96613b', text: 'Curved' },
                    { color: '#c48a85', text: 'Complex regular' },
                    { color: '#7bccc4', text: 'Complex irregular' },
                    { color: '#bae4bc', text: 'Other' }
                ]
            },
        },
        {
            mapStyle: 'construction_roof_covering',
            legend: {
                title: 'Dachbedeckung',
                elements: [
                    { color: '#b5a859', text: 'Schiefer' },
                    { color: '#ffffe3', text: 'Lehmziegel' },
                    { color: '#f5d96b', text: 'Holz' },
                    { color: '#beffe8', text: 'Asphalt' },
                    { color: '#fca89d', text: 'Eisen oder Stahl' },
                    { color: '#8fc3a0', text: 'anderes Metall' },
                    { color: '#96613b', text: 'anderes natürliches Material' },
                    { color: '#c48a85', text: 'anderes künstliches Material' }
                ]
            },
        },
        {
            mapStyle: 'construction_material_window_frame',
            legend: {
                title: 'Window frame material',
                elements: [
                    { color: '#b5a859', text: 'Wood' },
                    { color: '#8fc3a0', text: 'Metal' },
                    { color: '#ff3939', text: 'Plastic' },
                    { color: '#8080ff', text: 'Other' },
                    { color: '#ffffff', text: 'No windows' }
                ]
            },
        },
        {
            mapStyle: 'team',
            legend: {
                title: 'Team',
                description: '% data collected',
                elements: [
                    { color: '#994d00', text: '≥80%' },
                    { color: '#e67300', text: '60–80%' },
                    { color: '#ff9933', text: '40–60%' },
                    { color: '#ffbf80', text: '20–40%' },
                    { color: '#ffe6cc', text: '<20%' }
                ]
            },
        },
        {
            mapStyle: 'designer_awards',
            legend: {
                title: 'Awards',
                description: 'Has the building won any awards?',
                elements: [
                    {color: '#f7ec25', text: 'Yes'},
                ]
            },
        },
        {
            mapStyle: 'team_known_designer',
            legend: {
                title: 'Known designer',
                description: 'Buildings with a known architect/designer',
                elements: [
                    {color: '#6bb1e3', text: 'Yes'},
                ]
            },
        },
    ],
    [Category.EnergyPerformance]: [
        {
            mapStyle: 'sust_aggregate_estimate_epc',
            legend: {
                title: 'Energy rating (residential)',
                description: 'Residential energy rating (EPC Rating)',
                disclaimer: 'This map shows official 2025 EPC data, required for new, sold and rented buildings. Please note EPC ratings may be out-of-date, as retrofit may have occurred since certification.',
                elements: [
                    { color: '#007f3d', text: 'A' },
                    { color: '#2c9f29', text: 'B' },
                    { color: '#9dcb3c', text: 'C' },
                    { color: '#fff200', text: 'D' },
                    { color: '#f7af1d', text: 'E' },
                    { color: '#ed6823', text: 'F' },
                    { color: '#e31d23', text: 'G' },
                    { color: '#909090', text: 'No EPC identified or non-residential.' },
                ]
            },
        },
        {
            mapStyle: 'sust_dec',
            legend: {
                title: 'Energy rating (non-residential)',
                description: 'Non-residential energy rating (DEC Rating)',
                elements: [
                    { color: '#007f3d', text: 'A' },
                    { color: '#2c9f29', text: 'B' },
                    { color: '#9dcb3c', text: 'C' },
                    { color: '#fff200', text: 'D' },
                    { color: '#f7af1d', text: 'E' },
                    { color: '#ed6823', text: 'F' },
                    { color: '#e31d23', text: 'G' },
                ]
            },
        },
        {
            mapStyle: 'energy_solar',
            legend: {
                title: 'Solar panels',
                description: 'Does the building have Solar Panels?',
                elements: [
                    {color: '#6bb1e3', text: 'Yes'},
                ]
            },
        },
    ],
    [Category.PlanningConservation]: [
        {
            // this database commad allows to see statistics about decision dates per year
            // SELECT COUNT(*), date_part('year', decision_date) as year from planning_data WHERE decision_date IS NOT NULL GROUP BY year ORDER BY year ASC;
            // SELECT COUNT(*), date_part('year', registered_with_local_authority_date) as year from planning_data WHERE decision_date IS NOT NULL GROUP BY year ORDER BY year ASC;
            mapStyle: 'planning_applications_status_all',
            legend: {
                title: 'All planning applications available from GLA (official data)',
                disclaimer: 'This map shows official data available from the GLA Planning London Datahub. What you are looking at is mainly applications from 2019 onwards.',
                elements: [
                    { color: '#a040a0', text: 'Submitted, awaiting decision' },
                    { color: '#fff200', text: 'Appeal In Progress' },
                    { color: '#16cf15', text: 'Approved' },
                    { color: '#e31d23', text: 'Rejected' },
                    { color: '#7a84a0', text: 'Withdrawn' },
                    { color: '#eacad0', text: 'Other' },
                ]
            }
        },
        {
            mapStyle: 'planning_applications_status_recent',
            legend: {
                title: 'The last 12 months - planning applications submissions/decisions (official data)',
                disclaimer: 'This map shows applications where the submission or decision data falls within the last 12 months.',
                elements: [
                    { color: '#a040a0', text: 'Submitted, awaiting decision' },
                    { color: '#fff200', text: 'Appeal In Progress' },
                    { color: '#16cf15', text: 'Approved' },
                    { color: '#e31d23', text: 'Rejected' },
                    { color: '#7a84a0', text: 'Withdrawn' },
                    { color: '#eacad0', text: 'Other' },
                ]
            }
        },
        {
            mapStyle: 'planning_applications_status_very_recent',
            legend: {
                title: 'Last 30 days - planning applications submissions/decisions (official data)',
                disclaimer: 'This map shows applications where the submission or decision data falls within last 30 days.',
                elements: [
                    { color: '#a040a0', text: 'Submitted, awaiting decision' },
                    { color: '#fff200', text: 'Appeal In Progress' },
                    { color: '#16cf15', text: 'Approved' },
                    { color: '#e31d23', text: 'Rejected' },
                    { color: '#7a84a0', text: 'Withdrawn' },
                    { color: '#eacad0', text: 'Other' },
                ]
            }
        },
        {
            mapStyle: 'community_expected_planning_application_total',
            legend: {
                title: 'Expected planning applications (crowdsourced data)',
                disclaimer: 'Sites identified by users as likely to be subject to planning application over the next six months',
                elements: [
                    { color: '#bd0026', text: '100+' },
                    { color: '#e31a1c', text: '50–99' },
                    { color: '#fc4e2a', text: '20–49' },
                    { color: '#fd8d3c', text: '10–19' },
                    { color: '#feb24c', text: '3–9' },
                    { color: '#fed976', text: '2' },
                    { color: '#ffe8a9', text: '1'}
                ]
            }
        },
        {
            mapStyle: 'planning_combined',
            legend: {
                title: 'Designation/protection (official and crowdsourced data)',
                disclaimer: 'All data relating to designated buildings should be checked against the National Heritage List for England and local authority websites. Designation data is currently incomplete.',
                elements: [
                    { color: '#95beba', text: 'In Conservation Area'},
                    { color: '#c72e08', text: 'Grade I Listed'},
                    { color: '#e75b42', text: 'Grade II* Listed'},
                    { color: '#ffbea1', text: 'Grade II Listed'},
                    { color: '#85ffd4', text: 'Heritage at Risk'},
                    { color: '#858ed4', text: 'Locally Listed'},
                    { color: '#0bbf12', text: 'In World Heritage Site'},
                    { color: '#8500d4', text: 'In Archaeological Priority Area'},
                ]
            },
        },
        {
            mapStyle: 'planning_world_heritage_buildings',
            legend: {
                title: 'Buildings in World Heritage Sites (official and crowdsourced data)',
                disclaimer: 'All data relating to designated buildings should be checked against the National Heritage List for England and local authority websites. Designation data is currently incomplete.',
                elements: [
                    { color: '#0bbf12', text: 'In World Heritage Site'},
                ]
            },
        },
        {
            mapStyle: 'community_local_significance_total',
            legend: {
                title: 'Local Interest',
                description: 'People who think the building is of a local interest',
                elements: [
                    { color: '#bd0026', text: '100+' },
                    { color: '#e31a1c', text: '50–99' },
                    { color: '#fc4e2a', text: '20–49' },
                    { color: '#fd8d3c', text: '10–19' },
                    { color: '#feb24c', text: '3–9' },
                    { color: '#fed976', text: '2' },
                    { color: '#ffe8a9', text: '1'}
                ]
            }
        },
    ],
    [Category.Location]: [
        {
            mapStyle: 'number_mapped_building_features',
            legend: {
                title: 'Stand der Erfassung',
                description: 'Anzahl erfasster Gebäudemerkmale pro Gebäude',
                elements: [
                    { color: '#FF0000', text: '>= 30' },
                    { color: '#FF1717', text: '23-29' },
                    { color: '#FF2E2E', text: '20-22' },
                    { color: '#FF4545', text: '17-19' },
                    { color: '#FF5C5C', text: '14-16' },
                    { color: '#FF7373', text: '11-13' },
                    { color: '#FF8B8B', text: '8-10' },
                    { color: '#FFA2A2', text: '5-7' },
                    { color: '#FFB9B9', text: '3-4' },
                    { color: '#FFD0D0', text: '2' },
                    { color: '#FFE7E7', text: '1' },
                    { color: '#FFFFFF', text: '0' }
                        ]
                    },
            },
        {
        mapStyle: 'location',
        legend: {
            title: 'Standort',
            description: '% der Daten erfasst',
            elements: [
                { color: '#084081', text: '≥80%' },
                { color: '#0868ac', text: '60–80%' },
                { color: '#43a2ca', text: '40–60%' },
                { color: '#7bccc4', text: '20–40%' },
                { color: '#bae4bc', text: '<20%' }
                    ]
                },
        },
    ],
    [Category.Community]: [
        {
            mapStyle: 'count_crowdsourced',
            legend: {
                title: 'Community help',
                description: 'crowdsourced entries',
                elements: [
                    { color: '#ff006e', text: '9+' },
                    { color: '#fb5607', text: '8' },
                    { color: '#ff9500', text: '7' },
                    { color: '#ffbe0b', text: '6' },
                    { color: '#ffe566', text: '5' },
                    { color: '#caffbf', text: '4' },
                    { color: '#9bf6ff', text: '3' },
                    { color: '#74b9ff', text: '2' },
                    { color: '#a29bfe', text: '1' },
                ]
            },
        },
        {
            mapStyle: 'community_building_hominess_avg',
            legend: {
                title: 'Building hominess',
                description: 'The average of all scores for the building',
                elements: [
                    { color: '#e1fce5', text: '1' },
                    { color: '#a8fab5', text: '2' },
                    { color: '#7dfa92', text: '3' },
                    { color: '#3efa5e', text: '4' },
                    { color: '#00d924', text: '5' },
                ]
            }
        },
        {
            mapStyle: 'community_building_coherence_avg',
            legend: {
                title: 'Building coherence',
                description: 'The average of all scores for the building',
                elements: [
                    { color: '#e1ebfc', text: '1' },
                    { color: '#bbd3fa', text: '2' },
                    { color: '#7dabfa', text: '3' },
                    { color: '#3e86fa', text: '4' },
                    { color: '#005efa', text: '5' },
                ]
            }
        },
        {
            mapStyle: 'community_building_fascination_avg',
            legend: {
                title: 'Building fascination',
                description: 'The average of all scores for the building',
                elements: [
                    { color: '#f1e1f7', text: '1' },
                    { color: '#e8bbfa', text: '2' },
                    { color: '#d97dfa', text: '3' },
                    { color: '#c33efa', text: '4' },
                    { color: '#b300fa', text: '5' },
                ]
            }
        },
        {
            mapStyle: 'community_streetscape_hominess_avg',
            legend: {
                title: 'Streetscape hominess',
                description: 'The average of all scores for the building',
                elements: [
                    { color: '#f0fcde', text: '1' },
                    { color: '#d8faa8', text: '2' },
                    { color: '#c6fa7d', text: '3' },
                    { color: '#acfa3e', text: '4' },
                    { color: '#7fd900', text: '5' },
                ]
            }
        },
        {
            mapStyle: 'community_streetscape_coherence_avg',
            legend: {
                title: 'Streetscape coherence',
                description: 'The average of all scores for the building',
                elements: [
                    { color: '#e3fafc', text: '1' },
                    { color: '#bbf5fa', text: '2' },
                    { color: '#7df0fa', text: '3' },
                    { color: '#3eeafa', text: '4' },
                    { color: '#00e5fa', text: '5' },
                ]
            }
        },
        {
            mapStyle: 'community_streetscape_fascination_avg',
            legend: {
                title: 'Streetscape fascination',
                description: 'The average of all scores for the building',
                elements: [
                    { color: '#fce8f0', text: '1' },
                    { color: '#fabbd3', text: '2' },
                    { color: '#fa7dad', text: '3' },
                    { color: '#fa3e86', text: '4' },
                    { color: '#fa0060', text: '5' },
                ]
            }
        },
        {
            mapStyle: 'typology_likes',
            legend: {
                title: 'Liked non-residential buildings',
                elements: [
                    { color: '#bd0026', text: '👍👍👍👍 100+' },
                    { color: '#e31a1c', text: '👍👍👍 50–99' },
                    { color: '#fc4e2a', text: '👍👍 20–49' },
                    { color: '#fd8d3c', text: '👍👍 10–19' },
                    { color: '#feb24c', text: '👍 3–9' },
                    { color: '#fed976', text: '👍 2' },
                    { color: '#ffe8a9', text: '👍 1'}
                ]
            }
        },
        {
            mapStyle: 'community_expected_planning_application_total',
            legend: {
                title: 'Expected planning applications',
                disclaimer: 'Sites identified by users as likely to be subject to planning application over the next six months',
                elements: [
                    { color: '#bd0026', text: '100+' },
                    { color: '#e31a1c', text: '50–99' },
                    { color: '#fc4e2a', text: '20–49' },
                    { color: '#fd8d3c', text: '10–19' },
                    { color: '#feb24c', text: '3–9' },
                    { color: '#fed976', text: '2' },
                    { color: '#ffe8a9', text: '1'}
                ]
            }
        },
        {
            mapStyle: 'community_in_public_ownership',
            legend: {
                title: 'Public Ownership',
                description: 'Is the building in some form of public/community ownership',
                elements: [
                    {color: '#1166ff', text: 'Yes'},
                    {color: '#ffaaa0', text: 'No'}
                ]
            }
        },
    ],
    [Category.UrbanInfrastructure]: [
        {
            mapStyle: 'context_walkability_index',
            legend: {
                title: 'Walkability Index',
                elements: []
            },
        },
        {
            mapStyle: 'context_street_width',
            legend: {
                title: 'Street width',
                elements: []
            },
        },
    ],
    [Category.WaterGreenInfrastructure]: [
        {
            mapStyle: 'context_back_garden',
            legend: {
                title: 'Back gardens',
                description: 'Does the building have a back garden?',
                elements: [
                    {color: '#7cbf39', text: 'Yes'},
                ]
            },
        },
        {
            mapStyle: 'energy_green_roof',
            legend: {
                title: 'Green roof',
                description: 'Does the building have a Green Roof?',
                elements: [
                    {color: '#7cbf39', text: 'Yes'},
                ]
            },
        },
    ],
    [Category.TypologySize]: [
        {
            mapStyle: 'size_storeys_core',
            legend: {
                title: 'Anzahl Hauptgeschosse',
                elements: [
                    { color: '#bd0026', text: '10+'},
                    { color: '#e31a1c', text: '5-9'},
                    { color: '#fc4e2a', text: '4'},
                    { color: '#fd8d3c', text: '3'},
                    { color: '#feb24c', text: '2'},
                    { color: '#fed976', text: '1'},
                    { color: '#ffe8a9', text: '0'}
                ]
            },
        },
        {
            mapStyle: 'size_storeys_attic',
            legend: {
                title: 'Anzahl Dachgeschosse',
                elements: [
                    { color: '#bd0026', text: '4+'},
                    { color: '#fc4e2a', text: '3'},
                    { color: '#feb24c', text: '2'},
                    { color: '#fed976', text: '1'},
                    { color: '#ffe8a9', text: '0'}
                ]
            },
        },
        {
            mapStyle: 'size_storeys_basement',
            legend: {
                title: 'Anzahl Kellergeschosse',
                elements: [
                    { color: '#bd0026', text: '4+'},
                    { color: '#fc4e2a', text: '3'},
                    { color: '#feb24c', text: '2'},
                    { color: '#fed976', text: '1'},
                    { color: '#ffe8a9', text: '0'}
                ]
            },
        },
        {
            mapStyle: 'size_height',
            legend: {
                title: 'Firsthöhe (in Metern)',
                elements: [
                    { color: '#f7f4f9', text: '0-5.55'},
                    { color: '#e7e1ef', text: '5.55-7.73'},
                    { color: '#d4b9da', text: '7.73-11.38'},
                    { color: '#c994c7', text: '11.38-18.45'},
                    { color: '#df65b0', text: '18.45-35.05'},
                    { color: '#e7298a', text: '35.05-89.30'},
                    { color: '#ce1256', text: '89.30-152'},
                    { color: '#980043', text: '≥152'}
                ]
            },
        },
        {
            mapStyle: 'size_floor_area_ground',
            legend: {
                title: 'Grundfläche (in Quadratmetern)',
                elements: [
                    { color: '#bd0026', text: '500+'},
                    { color: '#fc4e2a', text: '250-499'},
                    { color: '#feb24c', text: '100-249'},
                    { color: '#fed976', text: '50-99'},
                    { color: '#ffe8a9', text: '0-49'}
                ]
            },
        },
        {
            mapStyle: 'building_attachment_form',
            legend: {
                title: 'Morphologischer Bautyp/ Nachbarschaft',
                elements: [
                    { color: "#f2a2b9", text: "freistehend" },
                    { color: "#ab8fb0", text: "Doppelhaushälfte" },
                    { color: "#3891d1", text: "Häuserreihe (Ende)" },
                    { color: "#043b63", text: "Häuserreihe (innerhalb)" }
                ]
            },
        },
        {
            mapStyle: 'size_roof_shape',
            legend: {
                title: 'Dachform',
                elements: [
                    { color: '#252aa6', text: 'Flachdach' },
                    { color: '#ae4d2a', text: 'Pultdach' },
                    { color: '#6c6f8e', text: 'Satteldach' },
                    { color: '#46555b', text: 'Mansarddach' },
                    { color: '#cd7e26', text: 'Walmdach' },
                    { color: '#ffadfc', text: 'Krüppelwalmdach' },
                    { color: '#dbbb9b', text: 'Gewölbte Dächer (Tonnen-, Halbtonnen-, Segmentbogendächer)' },
                    { color: '#898944', text: 'Zeltdach' },
                    { color: '#133bfc', text: 'Graben- bzw. Schmetterlingsdach' },
                    { color: '#b3de69', text: 'Sheddach' },
                    { color: '#dfeefc', text: 'Schalen- und Membrandächer' },

                ]
            }
        },
        {
            mapStyle: 'building_owner',
            legend: {
                title: 'Eigentumsform des Gebäudes',
                elements: [
                    { color: '#252aa6', text: 'öffentl. Eigentümer - Bund' },
                    { color: '#ae4d2a', text: 'öffentl. Eigentümer - BIMA (Bundesanstalt für Immobilienaufgaben)' },
                    { color: '#6c6f8e', text: 'öffentl. Eigentümer - Bundesland' },
                    { color: '#46555b', text: 'öffentl. Eigentümer - Kommune/ Stadt' },
                    { color: '#cd7e26', text: 'öffentl. Eigentümer - kommunale Wohnungsgesellschaft' },
                    { color: '#ffadfc', text: 'öffentl. Eigentümer - städtische(r) Betrieb/ Gesellschaften' },
                    { color: '#dbbb9b', text: 'Wohnungsgenossenschaften' },
                    { color: '#898944', text: 'private Wohnungsunternehmen' },
                    { color: '#133bfc', text: 'sonstige private Unternehmen (ohne Wohnungsunternehmen)' },
                    { color: '#b3de69', text: 'Deutsche Bahn AG' },
                    { color: '#dfeefc', text: 'Kirchliches Eigentum, Stiftungen, gemeinwohlorientierte Eigentümer' },

                ]
            }
        },
        {
            mapStyle: 'typology_classification',
            legend: {
                title: 'Block/Density Classification',
                elements: [
                    { color: '#0311AB', text: '1-3 storeys: Detached' },
                    { color: '#3845D4', text: '1-3 storeys: Tightly grouped' },
                    { color: '#6D79FD', text: '1-3 storeys: Loosely grouped' },
                    { color: '#FF5D00', text: '4-7 storeys: Detached' },
                    { color: '#FF8000', text: '4-7 storeys: Tightly grouped' },
                    { color: '#FFA200', text: '4-7 storeys: Loosely grouped' },
                    { color: '#AB1303', text: '8+ storeys: Detached' },
                    { color: '#D43A29', text: '8+ storeys: Tightly grouped' },
                    { color: '#FC604F', text: '8+ storeys: Loosely grouped' },
                ]
            }
        },
        {
            mapStyle: 'typology_dynamic_classification',
            legend: {
                title: 'Dynamic classification',
                elements: [
                    { color: '#FF7F11', text: 'Small, often repetitive plots, mainly residential' },
                    { color: '#FF1B1C', text: 'Linear non-domestic, i.e. high streets' },
                    { color: '#40E0D0', text: 'Large plots with internal roads' },
                ]
            }
        },
        {
            mapStyle: 'original_landuse',
            legend: {
                title: 'Original Land Use',
                elements: [
                    { color: '#e5050d', text: 'Mixed Use' },
                    { subtitle: 'Single use:'},
                    { color: '#252aa6', text: 'Residential (unverified)' },
                    { color: '#7025a6', text: 'Residential (verified)' },
                    { color: '#ff8c00', text: 'Retail' },
                    { color: '#f5f58f', text: 'Industry & Business' },
                    { color: '#fa667d', text: 'Community Services' },
                    { color: '#ffbfbf', text: 'Recreation & Leisure' },
                    { color: '#b3de69', text: 'Transport' },
                    { color: '#cccccc', text: 'Utilities & Infrastructure' },
                    { color: '#898944', text: 'Defence' },
                    { color: '#73ccd1', text: 'Agriculture' },
                    { color: '#45cce3', text: 'Minerals' },
                    { color: '#ffffff', text: 'Vacant & Derelict' },
                    { color: '#6c6f8e', text: 'Unclassified, presumed non-residential' }
                ]
            },
        },
        {
            mapStyle: 'size_total_floors',
            legend: {
                title: 'Total number of floors',
                elements: [
                    { color: '#f7f4f9', text: '1'},
                    { color: '#e7e1ef', text: '2'},
                    { color: '#d4b9da', text: '3 - 4'},
                    { color: '#c994c7', text: '5'},
                    { color: '#df65b0', text: '6 - 10'},
                    { color: '#e7298a', text: '11 - 20'},
                    { color: '#ce1256', text: '21 - 34'},
                    { color: '#980043', text: '35 +'}
                ]
            },
        },
    ],
    [Category.LandUse]: [
        {
            mapStyle: 'is_domestic',
            legend: {
                title: 'Wohngebäude?',
                elements: [
                    { color: '#f7ec25', text: 'Wohngebäude' },
                    { color: '#fc9b2a', text: 'gemischte Nutzung' },
                    { color: '#ff2121', text: 'Nichtwohngebäude' },
                ]
            }
        },
        {
            mapStyle: 'use_building_origin',
            legend: {
                title: 'Originale Gebäudehauptnutzung',
                elements: [
                    { color: '#252aa6', text: 'Ein- und Zweifamilienhäuser' },
                    { color: '#7025a6', text: 'Mehrfamilienhäuser' },
                    { color: '#ff8c00', text: 'Wohnheime' },
                    { color: '#fa667d', text: 'Kindergärten und -tagesstätten' },
                    { color: '#ffbfbf', text: 'Lehrgebäude (Schulen, Hörsalgebäude, VHS etc.)' },
                    { color: '#6c6f8e', text: 'Heime (Pflege-, Kranken-, Genesungs-, Erholungsheime etc.)' },
                    { color: '#898944', text: 'Bereitschafts- und Kasernengebäude, JVA' },
                    { color: '#f5f58f', text: 'Kranken-, Ärztehäuser, Kliniken' },
                    { color: '#46555b', text: 'Handelsgebäude' },
                    { color: '#ffadfc', text: 'Hotel, Gastronomie, Pension, Gasthaus' },
                    { color: '#b3de69', text: 'Landwirtschaftliche Betriebsgebäude' },
                    { color: '#133bfc', text: 'Produktionsstätten, Fabrik- und Werkstattgebäude' },
                    { color: '#dbbb9b', text: 'Lagergebäude' },
                    { color: '#95a984', text: 'Verkehrsgebäude' },
                    { color: '#cd7e26', text: 'Kultur-, Veranstaltungsbauten' },
                    { color: '#45cce3', text: 'Religiöse Versammlungsstätten' },
                    { color: '#dfeefc', text: 'Sporteinrichtungen' },
                    { color: '#ae4d2a', text: 'Büro- und Verwaltungsgebäude' },
                    { color: '#5ce1e6', text: 'Ver- und Entsorgungsbauwerke' },
                    { color: '#008000', text: 'Kleingartenanlage' },
                    { color: '#cccccc', text: 'Sonstige Nichtwohngebäude' },
                ]
            }
        },
        {
            mapStyle: 'use_building_current',
            legend: {
                title: 'Aktuelle Gebäudehauptnutzung',
                elements: [
                    { color: '#252aa6', text: 'Ein- und Zweifamilienhäuser' },
                    { color: '#7025a6', text: 'Mehrfamilienhäuser' },
                    { color: '#ff8c00', text: 'Wohnheime' },
                    { color: '#fa667d', text: 'Kindergärten und -tagesstätten' },
                    { color: '#ffbfbf', text: 'Lehrgebäude (Schulen, Hörsalgebäude, VHS etc.)' },
                    { color: '#6c6f8e', text: 'Heime (Pflege-, Kranken-, Genesungs-, Erholungsheime etc.)' },
                    { color: '#898944', text: 'Bereitschafts- und Kasernengebäude, JVA' },
                    { color: '#f5f58f', text: 'Kranken-, Ärztehäuser, Kliniken' },
                    { color: '#46555b', text: 'Handelsgebäude' },
                    { color: '#ffadfc', text: 'Hotel, Gastronomie, Pension, Gasthaus' },
                    { color: '#b3de69', text: 'Landwirtschaftliche Betriebsgebäude' },
                    { color: '#133bfc', text: 'Produktionsstätten, Fabrik- und Werkstattgebäude' },
                    { color: '#dbbb9b', text: 'Lagergebäude' },
                    { color: '#95a984', text: 'Verkehrsgebäude' },
                    { color: '#cd7e26', text: 'Kultur-, Veranstaltungsbauten' },
                    { color: '#45cce3', text: 'Religiöse Versammlungsstätten' },
                    { color: '#dfeefc', text: 'Sporteinrichtungen' },
                    { color: '#ae4d2a', text: 'Büro- und Verwaltungsgebäude' },
                    { color: '#5ce1e6', text: 'Ver- und Entsorgungsbauwerke' },
                    { color: '#cccccc', text: 'Sonstige Nichtwohngebäude' },
                    { color: '#008000', text: 'Kleingartenanlage' },
                    { color: '#ffffff', text: 'Leerstand' },
                ]
            }
        },
        {
            mapStyle: 'basement_type',
            legend: {
                title: 'Art der Unterkellerung',
                elements: [
                    { color: '#f5f58f', text: 'nicht unterkellert' },
                    { color: '#fa667d', text: 'teilunterkellert' },
                    { color: '#e5050d', text: 'vollunterkellert' },
                    { color: '#7025a6', text: 'vollunterkellert + Tiefgarage' },
                ]
            }
        },
        {
            mapStyle: 'basement_percentage',
            legend: {
                title: 'Anteil Unterkellerung (in %)',
                disclaimer: 'bezogen auf die Grundfläche des Gebäudes',
                elements: [
                    { color: '#bd0026', text: '100+' },
                    { color: '#e31a1c', text: '75-99' },
                    { color: '#fc4e2a', text: '50-74' },
                    { color: '#fd8d3c', text: '25-49' },
                    { color: '#feb24c', text: '1-24' },
                    { color: '#fed976', text: '0' },
                ]
            }
        },
        {
            mapStyle: 'basement_use',
            legend: {
                title: 'Aktuelle Nutzung des Kellers',
                elements: [
                    { color: '#f5f58f', text: 'übliche Kellernutzung' },
                    { color: '#e5050d', text: 'Wohnen, Arbeit, Freizeit' },
                    { color: '#7025a6', text: 'Garage' },
                    { color: '#cccccc', text: 'sonstige Nutzung' },
                    { color: '#ffffff', text: 'Leerstand' },
                ]
            }
        },
        {
            mapStyle: 'ground_storey_use',
            legend: {
                title: 'Aktuelle Nutzung des Erdgeschosses',
                elements: [
                    { color: '#252aa6', text: 'Wohnen' },
                    { color: '#ae4d2a', text: 'Büro und Verwaltung' },
                    { color: '#6c6f8e', text: 'Praxis' },
                    { color: '#46555b', text: 'Laden, Handel' },
                    { color: '#cd7e26', text: 'Kultur' },
                    { color: '#ffadfc', text: 'Gastgewerbe (Gaststätte, Pension, Hotel, Imbiss)' },
                    { color: '#dbbb9b', text: 'Lager' },
                    { color: '#898944', text: 'Werkstatt' },
                    { color: '#133bfc', text: 'Produzierendes Gewerbe' },
                    { color: '#b3de69', text: 'Landwirtschaftliche Nutzung' },
                    { color: '#dfeefc', text: 'Sporteinrichtung (Fitness etc.)' },
                    { color: '#45cce3', text: 'Religiöse Nutzung' },
                    { color: '#5ce1e6', text: 'Garage' },
                    { color: '#f5f58f', text: 'Gesundheit (Ärztehaus, Klinik, Apotheke)' },
                    { color: '#95a984', text: 'Verkehr' },
                    { color: '#008000', text: 'Kleingartenanlage' },
                    { color: '#cccccc', text: 'Sonstiges' },
                    { color: '#ffffff', text: 'Leerstand' },
                ]
            }
        },
        {
            mapStyle: 'upper_storeys_use',
            legend: {
                title: 'Aktuelle Nutzung 1. Etage und höher',
                elements: [
                    { color: '#252aa6', text: 'Wohnen' },
                    { color: '#ae4d2a', text: 'Büro und Verwaltung' },
                    { color: '#6c6f8e', text: 'Praxis' },
                    { color: '#46555b', text: 'Laden, Handel' },
                    { color: '#cd7e26', text: 'Kultur' },
                    { color: '#ffadfc', text: 'Gastgewerbe (Gaststätte, Pension, Hotel, Imbiss)' },
                    { color: '#dbbb9b', text: 'Lager' },
                    { color: '#898944', text: 'Werkstatt' },
                    { color: '#133bfc', text: 'Produzierendes Gewerbe' },
                    { color: '#b3de69', text: 'Landwirtschaftliche Nutzung' },
                    { color: '#dfeefc', text: 'Sporteinrichtung (Fitness etc.)' },
                    { color: '#45cce3', text: 'Religiöse Nutzung' },
                    { color: '#5ce1e6', text: 'Garage' },
                    { color: '#f5f58f', text: 'Gesundheit (Ärztehaus, Klinik, Apotheke)' },
                    { color: '#95a984', text: 'Verkehr' },
                    { color: '#cccccc', text: 'Sonstiges' },
                    { color: '#ffffff', text: 'Leerstand' },
                ]
            }
        },
        {
            mapStyle: 'use_number_residential_units',
            legend: {
                title: 'Anzahl Wohneinheiten im Gebäude',
                elements: [
                    { color: '#7025a6', text: '50+' },
                    { color: '#bd0026', text: '20-49' },
                    { color: '#e31a1c', text: '10-19' },
                    { color: '#fc4e2a', text: '5-9' },
                    { color: '#fd8d3c', text: '3-4' },
                    { color: '#feb24c', text: '2' },
                    { color: '#fed976', text: '1' },
                    { color: '#ffe8a9', text: '0' },

                ]
            }
        },
        {
            mapStyle: 'use_number_businesses',
            legend: {
                title: 'Anzahl Gewerbe im Gebäude',
                elements: [
                    { color: '#bd0026', text: '20+' },
                    { color: '#e31a1c', text: '10-19' },
                    { color: '#fc4e2a', text: '5-9' },
                    { color: '#fd8d3c', text: '3-4' },
                    { color: '#feb24c', text: '2' },
                    { color: '#fed976', text: '1' },
                    { color: '#ffe8a9', text: '0' },
                ]
            }
        },
        {
            mapStyle: 'landuse',
            legend: {
                title: 'Land Use',
                elements: [
                    { color: '#e5050d', text: 'Mixed Use' },
                    { subtitle: 'Single use:'},
                    { color: '#252aa6', text: 'Residential (unverified)' },
                    { color: '#7025a6', text: 'Residential (verified)' },
                    { color: '#ff8c00', text: 'Retail' },
                    { color: '#f5f58f', text: 'Industry & Business' },
                    { color: '#fa667d', text: 'Community Services' },
                    { color: '#ffbfbf', text: 'Recreation & Leisure' },
                    { color: '#b3de69', text: 'Transport' },
                    { color: '#cccccc', text: 'Utilities & Infrastructure' },
                    { color: '#898944', text: 'Defence' },
                    { color: '#73ccd1', text: 'Agriculture' },
                    { color: '#45cce3', text: 'Minerals' },
                    { color: '#ffffff', text: 'Vacant & Derelict' },
                    { color: '#6c6f8e', text: 'Unclassified, presumed non-residential' }
                ]
            },
        },
    ],
    [Category.RetrofitCondition]: [
    ],
    [Category.DisasterManagement]: [
        {
            mapStyle: 'facade_window_percentage',
            legend: {
                title: 'Anteil Fenster an Fasade',
                /* description: 'Demolished buildings on the same site', */
                elements: [
                    { color: '#e31a1c', text: '80-100%' },
                    { color: '#fc4e2a', text: '60-80%' },
                    { color: '#fd8d3c', text: '40-60%' },
                    { color: '#feb24c', text: '20-40%' },
                    { color: '#fed976', text: '0-20%' },
                ]
            }
        },
        {
            mapStyle: 'roof_colour',
            legend: {
                title: 'Dachfarbe',
                /* description: 'Demolished buildings on the same site', */
                elements: [
                    { color: '#000000', text: 'schwarz' },
                    { color: '#808080', text: 'dunkelgrau' },
                    { color: '#cccccc', text: 'hellgrau' },
                    { color: '#805500', text: 'dunkelbraun' },
                    { color: '#e69900', text: 'hellbraun' },
                    { color: '#009933', text: 'grün' },
                    { color: '#00cc99', text: 'türkis' },
                    { color: '#0000ff', text: 'blau' },
                    { color: '#ff0000', text: 'rot' },
                    { color: '#ffff00', text: 'gelb' },
                    { color: '#ffe6cc', text: 'beige' },
                    { color: '#ffffff', text: 'weiß' },
                    { color: '#ff00ff', text: 'andere Farbe' },
                    { color: '#33cccc', text: 'Solaranlage' },
                    { color: '#99ddff', text: 'Vollverglasung' },
                    { color: '#b3ffcc', text: 'Dachbegrünung: extensiv' },
                    { color: '#4dff88', text: 'Dachbegrünung: intensiv' },
                ]
            }
        },
        {
            mapStyle: 'facade_colour',
            legend: {
                title: 'Fassadenfarbe',
                /* description: 'Demolished buildings on the same site', */
                elements: [
                    { color: '#000000', text: 'schwarz' },
                    { color: '#808080', text: 'dunkelgrau' },
                    { color: '#cccccc', text: 'hellgrau' },
                    { color: '#805500', text: 'dunkelbraun' },
                    { color: '#e69900', text: 'hellbraun' },
                    { color: '#009933', text: 'grün' },
                    { color: '#00cc99', text: 'türkis' },
                    { color: '#0000ff', text: 'blau' },
                    { color: '#9933ff', text: 'lila' },
                    { color: '#ff0000', text: 'rot' },
                    { color: '#ff9933', text: 'orange' },
                    { color: '#ffff00', text: 'gelb' },
                    { color: '#ffe6cc', text: 'beige' },
                    { color: '#ffffff', text: 'weiß' },
                    { color: '#ff00ff', text: 'andere Farbe' },
                    { color: '#33cccc', text: 'Solaranlage' },
                    { color: '#99ddff', text: 'Vollverglasung' },
                    { color: '#b3ffcc', text: 'Fassadenbegrünung' },
                ]
            }
        },
        {
            mapStyle: 'thermal_stress_objective_count',
            legend: {
                title: 'Obj. Temperatur (Anzahl)',
                description: 'Anzahl erfasster Messungen', 
                elements: [
                    {
                        text: '7+',
                        color: '#bd0026',
                    }, {
                        text: '6',
                        color: '#e31a1c',
                    }, {
                        text: '5',
                        color: '#fc4e2a',
                    }, {
                        text: '4',
                        color: '#fd8d3c',
                    }, {
                        text: '3',
                        color: '#feb24c',
                    }, {
                        text: '2',
                        color: '#fed976',
                    }, {
                        text: '1',
                        color: '#ffe8a9',
                    }, {
                        text: '0',
                        color: '#0C7BDC'
                    }
                ]
            }
        },
        {
            mapStyle: 'thermal_stress_subjective_count',
            legend: {
                title: 'Subj. Temperatur (Anzahl)',
                description: 'Anzahl erfasster Messungen', 
                elements: [
                    {
                        text: '7+',
                        color: '#bd0026',
                    }, {
                        text: '6',
                        color: '#e31a1c',
                    }, {
                        text: '5',
                        color: '#fc4e2a',
                    }, {
                        text: '4',
                        color: '#fd8d3c',
                    }, {
                        text: '3',
                        color: '#feb24c',
                    }, {
                        text: '2',
                        color: '#fed976',
                    }, {
                        text: '1',
                        color: '#ffe8a9',
                    }, {
                        text: '0',
                        color: '#0C7BDC'
                    }
                ]
            }
        },
        {
            mapStyle: 'terrain_connection_yesno',
            legend: {
                title: 'Geländeanbindung',
                description: 'Ist der Boden des Erdgeschosses höher als das umliegende Gelände?',
                elements: [
                    { color: '#f5f58f', text: 'höher' },
                    { color: '#e5050d', text: 'gleich' },
                    { color: '#7025a6', text: 'niedriger' },
                ]
            }
        },
        {
            mapStyle: 'rain_flood_historic_incidents_count',
            legend: {
                title: 'Historische Ereignisse (Anzahl)',
                /* description: 'Demolished buildings on the same site', */
                elements: [
                    {
                        text: '7+',
                        color: '#bd0026',
                    }, {
                        text: '6',
                        color: '#e31a1c',
                    }, {
                        text: '5',
                        color: '#fc4e2a',
                    }, {
                        text: '4',
                        color: '#fd8d3c',
                    }, {
                        text: '3',
                        color: '#feb24c',
                    }, {
                        text: '2',
                        color: '#fed976',
                    }, {
                        text: '1',
                        color: '#ffe8a9',
                    }, {
                        text: '0',
                        color: '#0C7BDC'
                    }
                ]
            }
        },
        {
            mapStyle: 'disaster_severity',
            legend: {
                title: 'Damage severity',
                description: 'Severity of damage to building',
                elements: [
                    {
                        text: 'Building destroyed',
                        color: '#bd0026',
                    }, {
                        text: 'Very severe',
                        color: '#e31a1c',
                    }, {
                        text: 'Severe',
                        color: '#fc4e2a',
                    }, {
                        text: 'Moderate',
                        color: '#fd8d3c',
                    }, {
                        text: 'Minimal ',
                        color: '#feb24c',
                    }, {
                        text: 'No damage visible',
                        color: '#fed976',
                    },
                ],
            },
        },
        {
            mapStyle: 'dynamics_demolished_count',
            legend: {
                title: 'Resilience',
                description: 'Demolished buildings on the same site',
                elements: [
                    {
                        text: '7+',
                        color: '#bd0026',
                    }, {
                        text: '6',
                        color: '#e31a1c',
                    }, {
                        text: '5',
                        color: '#fc4e2a',
                    }, {
                        text: '4',
                        color: '#fd8d3c',
                    }, {
                        text: '3',
                        color: '#feb24c',
                    }, {
                        text: '2',
                        color: '#fed976',
                    }, {
                        text: '1',
                        color: '#ffe8a9',
                    }, {
                        text: 'None',
                        color: '#0C7BDC'
                    }
                ],
            },
        },
    ],
};
