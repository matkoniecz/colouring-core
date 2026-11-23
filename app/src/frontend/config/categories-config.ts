/**
 * An enumeration of all categories in the system.
 * The string value is also the category URL slug.
 */
export enum Category {
    AgeHistory = 'age-history',
    Community = 'community',
    PlanningConservation = 'planning-conservation',
    WaterGreenInfrastructure = 'water-green-infrastructure',
    LandUse = 'land-use',
    Location = 'location',
    UrbanInfrastructure = 'urban-infrastructure',
    DisasterManagement = 'disaster-management',
    ConstructionDesign = 'construction-design',
    RetrofitCondition = 'retrofit-condition',
    EnergyPerformance = 'energy-performance',
    TypologySize = 'typology-size',
}

/**
 * This is the sole configuration variable that defines the order of the categories
 * in the category grid. The order in the enum definition or the other configs does
 * not affect the order of the grid.
 */
export const categoriesOrder: Category[] = [
    Category.Location,
    Category.LandUse,
    Category.TypologySize,
    Category.ConstructionDesign,
    Category.AgeHistory,
    Category.PlanningConservation,
    Category.RetrofitCondition,
    Category.EnergyPerformance,
    Category.WaterGreenInfrastructure,
    Category.UrbanInfrastructure,
    Category.DisasterManagement,
    Category.Community,
];

interface CategoryDefinition {
    slug: string;
    name: string;
    aboutUrl: string;
    intro: string;
}

export const categoriesConfig: {[key in Category]: CategoryDefinition} = {
    [Category.AgeHistory]: {
        slug: 'age-history',
        name: 'Alter & Geschichte',
        aboutUrl: 'https://colouring.dresden.ioer.info/kacheln#c773',
        intro: 'Daten zum Gebäudealter können vielfältige Analysen unterstützen und helfen, langfristige Veränderungen vorherzusagen.',
    },
    [Category.Community]: {
        slug: 'community',
        name: 'Community',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#12-community',
        intro: 'Wie funktionieren Gebäude für die lokale Bevölkerung?',
    },
    [Category.PlanningConservation]: {
        slug: 'planning-conservation',
        name: 'Planung & Denkmalschutz',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#5-construction',
        intro: 'Planung bezüglich dem Schutz und der Wiedernutzung von Gebäuden.',
    },
    [Category.WaterGreenInfrastructure]: {
        slug: 'water-green-infrastructure',
        name: 'Grün- & Wasser- infrastruktur',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#10-energy-performance',
        intro: 'Daten zur Wasserversorgung und zur grünen Infrastruktur des Gebäudes.',
    },
    [Category.LandUse]: {
        slug: 'land-use',
        name: 'Nutzung & Eigentum',
        aboutUrl: 'https://colouring.dresden.ioer.info/kacheln#c748',
        intro: 'Wie werden Gebäude genutzt? Wie änderte sich dies über die Zeit?',
    },
    [Category.Location]: {
        slug: 'location',
        name: 'Standort',
        aboutUrl: 'https://colouring.dresden.ioer.info/kacheln#c745',
        intro: 'Wo befinden sich die Gebäude? Adresse, Standort und Verweise auf externe Datensätze.',
    },
    [Category.UrbanInfrastructure]: {
        slug: 'urban-infrastructure',
        name: 'Städtische Infrastruktur',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#9-planning',
        intro: 'Daten zur Umgebung des Gebäudes und zum Straßenraum.',
    },
    [Category.DisasterManagement]: {
        slug: 'disaster-management',
        name: 'Resilienz',
        aboutUrl: 'https://colouring.dresden.ioer.info/kacheln#c776',
        intro: 'Wie gut sind Gebäude auf Extremwetterereignisse angepasst?'
    },
    [Category.ConstructionDesign]: {
        slug: 'construction-design',
        name: 'Konstruktion & Gestaltung',
        aboutUrl: 'https://colouring.dresden.ioer.info/kacheln#c770',
        intro: 'Wie sind die Gebäude gebaut? Wer hat sie entworfen und erbaut?',
    },
    [Category.RetrofitCondition]: {
        slug: 'retrofit-condition',
        name: 'Sanierung & Zustand',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#7-street-context',
        intro: 'Daten zum Zustand des Gebäudes und zu seiner Sanierungsgeschichte.',
    },
    [Category.EnergyPerformance]: {
        slug: 'energy-performance',
        name: 'Energie',
        aboutUrl: 'https://github.com/colouring-cities/manual/wiki/E1.--DATA#8-team',
        intro: 'Sind Gebäude energieeffizient?',
    },
    [Category.TypologySize]: {
        slug: 'typology-size',
        name: 'Typologie & Größe',
        aboutUrl: 'https://colouring.dresden.ioer.info/kacheln#c751',
        intro: 'Wie lassen sich Gebäude Typologien zuordnen? Wie groß sind Gebäude, wie sind sie geformt?',
    },
};
