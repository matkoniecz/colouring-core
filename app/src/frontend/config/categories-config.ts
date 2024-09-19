/**
 * An enumeration of all categories in the system.
 * The string value is also the category URL slug.
 */
export enum Category {
    Age = 'age',
    Community = 'community',
    Construction = 'construction',
    EnergyPerformance = 'energy-performance',
    LandUse = 'land-use',
    Location = 'location',
    Planning = 'planning',
    Resilience = 'resilience',
    Size = 'size',
    StreetContext = 'street-context',
    Team = 'team',
    Typology = 'typology',
}

/**
 * This is the sole configuration variable that defines the order of the categories
 * in the category grid. The order in the enum definition or the other configs does
 * not affect the order of the grid.
 */
export const categoriesOrder: Category[] = [
    Category.Location,
    Category.LandUse,
    Category.Typology,
    Category.Size,
    Category.Age,
    Category.Construction,
    Category.StreetContext,
    Category.Team,
    Category.Planning,
    Category.EnergyPerformance,
    Category.Resilience,
    Category.Community,
];

interface CategoryDefinition {
    inactive?: boolean;
    slug: string;
    name: string;
    aboutUrl: string;
    intro: string;
}

export const categoriesConfig: {[key in Category]: CategoryDefinition} = {
    [Category.Age]: {
        slug: 'age',
        name: 'Age & History',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#4-age-and-history',
        intro: 'This section provides open data on the age of buildings and the history of buildings and sites.',
    },
    [Category.Community]: {
        slug: 'community',
        name: 'Community',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#12-community',
        intro: 'This section collects data on community views on buildings and streetscapes, and on the the location of buildings available for community use. Can you help colour the map to inform the design of our towns and cites in future?',
    },
    [Category.Construction]: {
        slug: 'construction',
        name: 'Planning & Conservation',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#5-construction',
        intro: 'This section provides open planning and conservation data about the building.',
    },
    [Category.EnergyPerformance]: {
        slug: 'energy-performance',
        name: 'Water/Green Infrastructure Context',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#10-energy-performance',
        intro: "This section provides open data on the building's water supply and any green infrastructure.",
    },
    [Category.LandUse]: {
        slug: 'land-use',
        name: 'Land Use',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#2-land-use',
        intro: 'How are buildings used, and how does use change over time?',
    },
    [Category.Location]: {
        slug: 'location',
        name: 'Location',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#1-location',
        intro: 'This section provides open data on building locations and building IDs.',
    },
    [Category.Planning]: {
        slug: 'planning',
        name: 'Urban Infrastructure Context',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#9-planning',
        intro: 'This section provides open data on the surroundings of the building.',
    },
    [Category.Resilience]: {
        slug: 'resilience',
        name: 'Disaster Management',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#11-resilience',
        intro: 'This section provides a tool that allows for live collection of data in disaster situations and collates data relating to building resilience.'
    },
    [Category.Size]: {
        slug: 'size',
        name: 'Construction & Design',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#6-size',
        intro: 'This section provides open data on the design and construction of the building.',
    },
    [Category.StreetContext]: {
        slug: 'street-context',
        name: 'Retrofit & Condition',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#7-street-context',
        intro: "This section provides open data on the condition of the building and its retrofit history.",
    },
    [Category.Team]: {
        slug: 'team',
        name: 'Energy Performance & Systems',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#8-team',
        intro: 'This section provides open data on the energy performance of the building.',
    },
    [Category.Typology]: {
        slug: 'typology',
        name: 'Typology & Size',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#3-typology',
        intro: 'This section provides open data on the typology and dimensions of the building.',
    },
};
