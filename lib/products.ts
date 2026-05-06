export interface Category {
    id: string;
    title: string;
    description: string;
    image?: string;
    section: 'packaging' | 'labware';
}

export interface Product {
    id: string;
    name: string;
    category: string;
    image: string | null;
    images?: string[];
    description: string;
    size: string;
    packSize: string;
    material?: string;
    capacity?: string;
    features?: string[];
}

export interface LifeSciencesCategory {
    id: string;
    title: string;
    description: string;
    listingTitle?: string;
    listingDescription?: string;
    href: string;
    image: string | null;
}

export interface LifeSciencesProduct {
    id: string;
    slug: string;
    name: string;
    category: string;
    image: string | null;
    images?: string[];
    description: string;
    size: string;
    packSize: string;
    itemCode?: string;
    material?: string;
    sterility?: string;
    temperature?: string;
    compliance?: string;
    sizeChart?: {
        codeNo: string;
        description: string;
        packSize: string;
        bulkPackSize: string;
    }[];
}



export const categories: Category[] = [
    // Packaging Solutions for Diagnostics
    {
        id: 'reagent-bottles',
        title: 'Reagent Bottles',
        description: 'Designed for chemical compatibility and low extractables, our reagent bottles ensure safe storage and accurate dispensing across a wide range of diagnostic applications.',
        image: '/assets/products/Image 1.png',
        section: 'packaging'
    },
    {
        id: 'biochemistry-bottles',
        title: 'System Packed Bottles for Biochemistry Analyser',
        description: 'Precision-manufactured bottles optimized for compatibility with automated biochemistry analysers, ensuring consistent performance and seamless integration.',
        image: '/assets/products/Image 2.png',
        section: 'packaging'
    },
    {
        id: 'haematology-bottles',
        title: 'System Packed Bottles for Haematology',
        description: 'Specially designed bottles for haematology systems, manufactured to meet dimensional accuracy and functional reliability requirements.',
        image: '/assets/products/Image 7.png',
        section: 'packaging'
    },
    // Plastic Labware Consumables
    {
        id: 'bottles-carboys',
        title: 'Bottles & Carboys',
        description: 'Durable, high-capacity containers designed for safe storage and transfer of laboratory liquids and chemicals.',
        image: '/assets/products/Carboys.webp',
        section: 'labware'
    },
    {
        id: 'centrifuge-tubes',
        title: 'Centrifuge Tubes & Microcentrifuge Tubes',
        description: 'High-clarity, leak-resistant tubes engineered for secure sample handling and centrifugation applications.',
        image: '/assets/products/Image 6.png',
        section: 'labware'
    },
    {
        id: 'liquid-handling',
        title: 'Liquid Handling Solutions (Microtips & Pasteur Pipettes)',
        description: 'Precision-moulded liquid handling consumables designed for accurate aspiration and dispensing in routine and automated workflows.',
        image: '/assets/products/Image 5.png',
        section: 'labware'
    },
    {
        id: 'reusables',
        title: 'Reusables',
        description: 'Robust, reusable labware solutions designed for long-term use without compromising performance or reliability.',
        image: '/assets/products/Image 11-2.png',
        section: 'labware'
    }
];

const generateProducts = (categoryId: string, categoryImage: string, count: number): Product[] => {
    return Array.from({ length: count }).map((_, i) => {
        const getImg = (idx: number) => `/assets/products/product${(idx % 13) + 1}.jpeg`;
        return {
            id: `${categoryId}-${i + 1}`,
            name: `${categoryId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} ${i + 1}`,
            category: categoryId,
            image: categoryImage,
            images: [
                categoryImage,
                getImg(i + 1),
                getImg(i + 2),
                getImg(i + 3)
            ],
            description: 'Premium quality labware designed for precision and durability. Manufactured from high-grade USP Class VI materials under controlled environments.',
            size: `${(i + 1) * 10}ml`,
            packSize: 'Pack of 100',
            material: i % 2 === 0 ? 'Polypropylene (PP)' : 'Polyethylene (HDPE)',
            capacity: `${(i + 1) * 10}ml`,
            features: [
                'Autoclavable at 121°C',
                'Leak-proof closure',
                'Chemical resistant',
                'BPA Free'
            ]
        };
    });
};

export const products: Product[] = [
    ...generateProducts('reagent-bottles', '/assets/products/Image 1.png', 18),
    ...generateProducts('biochemistry-bottles', '/assets/products/Image 2.png', 12),
    ...generateProducts('haematology-bottles', '/assets/products/Image 7.png', 12),
    ...generateProducts('bottles-carboys', '/assets/products/Image 12.png', 10),
    ...generateProducts('centrifuge-tubes', '/assets/products/Image 6.png', 16),
    ...generateProducts('liquid-handling', '/assets/products/Image 5.png', 14),
    ...generateProducts('reusables', '/assets/products/Image 11-2.png', 10),
];

export const lifeSciencesCategories: LifeSciencesCategory[] = [
    {
        id: 'bottles-and-carboys',
        title: 'Bottles & Carboys',
        description: 'High-quality plastic bottles, carboys, wash bottles, and desiccators designed for safe storage and transfer of laboratory reagents and chemicals.',
        listingTitle: 'Bottles & Carboys',
        listingDescription: 'PlastX offers a comprehensive range of laboratory bottles and carboys manufactured from medical grade plastics conforming to USP Class VI. Including reagent bottles, wash bottles, dropping bottles, carboys and desiccators — available in a full range of materials and sizes.',
        href: '/products/life-sciences/bottles-and-carboys',
        image: '/assets/products/Carboys.webp',
    },
    {
        id: 'centrifuge-tubes',
        title: 'Microcentrifuge Tube & Centrifuge Tube',
        description: 'Precision-engineered AceX series microcentrifuge and centrifuge tubes for reliable sample handling, centrifugation, and storage. Manufactured from USP Class VI polypropylene, certified DNase/RNase Free.',
        href: '/products/life-sciences/centrifuge-tubes',
        image: '/assets/products/Image 6.png',
    },
    {
        id: 'microtips',
        title: 'Microtips',
        description: 'PreciX series precision microtips in bulk, rack, filter, low-retention, reload, and sterile formats for accurate liquid handling across all pipetting applications.',
        listingTitle: 'Microtips — PreciX Tips',
        listingDescription: 'PlastX PreciX microtips are produced in a fully automatic, human-touch-free facility using FDA approved medical grade virgin polypropylene. Certified DNase, RNase, Human DNA and Pyrogen-free. Compatible with all major pipette brands.',
        href: '/products/life-sciences/microtips',
        image: '/assets/products/Image 5.png',
    },
    {
        id: 'general-labware',
        title: 'General Labware',
        description: 'Essential laboratory consumables including pipette aids, microtip boxes, inoculation loops, and spreaders for everyday lab use.',
        listingTitle: 'General Labware',
        listingDescription: 'Essential PlastX general labware for everyday laboratory use — including pipette aids, microtip storage boxes, inoculation loops and cell spreaders. Manufactured to the highest quality standards for reliable lab workflows.',
        href: '/products/life-sciences/general-labware',
        image: '/assets/products/Image 11-2.png',
    },
];

const slugifyLifeSciencesProduct = (name: string) => name
    .toLowerCase()
    .replace(/polypropylene/g, 'pp')
    .replace(/&/g, ' and ')
    .replace(/\+/g, ' plus ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const getLifeSciencesCategoryImage = (category: string) =>
    lifeSciencesCategories.find((item) => item.id === category)?.image || null;

const makeLifeSciencesProducts = (category: string, names: string[]): LifeSciencesProduct[] =>
    names.map((name) => ({
        id: slugifyLifeSciencesProduct(name),
        slug: slugifyLifeSciencesProduct(name),
        name,
        category,
        image: getLifeSciencesCategoryImage(category),
        images: getLifeSciencesCategoryImage(category) ? [getLifeSciencesCategoryImage(category)!] : [],
        description: `${name} from PlastX Life Sciences portfolio.`,
        size: 'Multiple variants',
        packSize: 'Variant options',
    }));

const makeChartRows = (rows: [string, string, string, string][]) =>
    rows.map(([codeNo, description, packSize, bulkPackSize]) => ({
        codeNo,
        description,
        packSize,
        bulkPackSize,
    }));

const productImage = (filename: string) => `/assets/products/${filename}`;

const bottlesAndCarboysProductImages: Record<string, string> = {
    'Reagent Bottle Narrow Mouth, Polypropylene': productImage('Reagent Bottle Narrow Mouth, Polypropylene.webp'),
    'Reagent Bottle Narrow Mouth, LDPE': productImage('Reagent Bottle Narrow Mouth, LDPE.webp'),
    'Reagent Bottle Narrow Mouth, HDPE': productImage('Reagent Bottle Narrow Mouth, HDPE.webp'),
    'Reagent Bottle Narrow Mouth, HDPE Amber': productImage('Reagent Bottle Narrow Mouth, HDPE Amber.webp'),
    'Reagent Bottle Wide Mouth, Polypropylene': productImage('Reagent Bottle Wide Mouth, Polypropylene.webp'),
    'Reagent Bottle Wide Mouth, LDPE': productImage('Reagent Bottle Wide Mouth, LDPE.webp'),
    'Reagent Bottle Wide Mouth, HDPE': productImage('Reagent Bottle Wide Mouth, HDPE.webp'),
    'Reagent Bottle Wide Mouth, HDPE Amber': productImage('Reagent Bottle Wide Mouth, HDPE Amber.webp'),
    'Reagent Bottle Wide Mouth, HDPE Sterile': productImage('Reagent Bottle Wide Mouth, HDPE Sterile.webp'),
    'Reagent Bottle Wide Mouth, HDPE Amber Sterile': productImage('Reagent Bottle Wide Mouth, HDPE Amber Sterile.webp'),
    'Reagent Bottle Wide Mouth, HDPE Sterile Pyrogen Free': productImage('Reagent Bottle Wide Mouth, HDPE Sterile Pyrogen Free.webp'),
    'Reagent Bottle Wide Mouth, HDPE Amber Sterile Pyrogen Free': productImage('Reagent Bottle Wide Mouth, HDPE Amber Sterile Pyrogen Free.webp'),
    'Reagent Bottle Narrow Mouth, Polypropylene (Large)': productImage('Reagent Bottle Narrow Mouth, Polypropylene (Large).webp'),
    'Narrow Mouth 2 & 4 L': productImage('Narrow Mouth 2 & 4 L.webp'),
    'Heavy Duty Vacuum Bottle': productImage('Heavy Duty Vacuum Bottle.webp'),
    'Aspirator Bottle': productImage('Aspirator Bottle.webp'),
    'Carboys': productImage('Carboys.webp'),
    'Carboys With Stop Cork': productImage('Carboys With Stop Cork.webp'),
    'Carboys Wide Mouth': productImage('Carboys Wide Mouth.webp'),
    'Wash Bottle (Old Type)': productImage('Wash Bottle (Old Type).webp'),
    'Wash Bottle (New Type)': productImage('Wash Bottle (New Type).webp'),
    'Narrow Mouth Wash Bottle': productImage('Narrow Mouth Wash Bottle.webp'),
    'Wide Mouth Wash Bottle': productImage('Wide Mouth Wash Bottle.webp'),
    'Wide Mouth Autoclavable Wash Bottle': productImage('Wide Mouth Autoclavable Wash Bottle.webp'),
    'Self-Venting Labeled Wash Bottle': productImage('Self-Venting Labeled Wash Bottle.webp'),
    'Dropping Bottle (Old Type)': productImage('Dropping Bottle (Old Type).webp'),
    'Dropping Bottle (Euro Design)': productImage('Dropping Bottle (New Type).webp'),
    'Desiccator Plain': productImage('Desiccator Plain.webp'),
    'Desiccator Vacuum': productImage('Desiccator Vacuum.webp'),
    'Desiccator All Clear': productImage('Desiccator All Clear.webp'),
    'Desiccator Stop Cork': productImage('Desiccator Stop Cork.webp'),
    'Desiccator Silicon Ring': productImage('Desiccator Silicon Ring.webp'),
};

const getBottlesAndCarboysProductImage = (name: string) =>
    bottlesAndCarboysProductImages[name] || getLifeSciencesCategoryImage('bottles-and-carboys');

const centrifugeProductImages = {
    acexMct: productImage('AceX MCT 1200x1200.webp'),
    acexMctLowRetention: productImage('AceX MCT Low Retention 1200x1200.webp'),
    acexMctAmberColour: productImage('AceX MCT Amber Colour 1200x1200.webp'),
    acexCt: productImage('AceX CT 1200x1200.webp'),
    acexCtAlt: productImage('AceX CT 2 1200x1200.webp'),
    acexCtAmber: productImage('AceX CT Amber 1200x1200.webp'),
    acexCtHeavyMetalFree: productImage('AceX CT Heavy Metal Free 1200x1200.webp'),
    acexCtSelfStanding: productImage('AceX CT Self Standing 1200x1200.webp'),
    acexCtIndividual: productImage('AceX CT Individual 1200x1200.webp'),
    multifunctionCtRack: productImage('Multifuction CT Rack 1200x1200.webp'),
    mctRack: productImage('MCT Rack 1200x1200.webp'),
};

const centrifugeTubeProducts: LifeSciencesProduct[] = [
    {
        id: 'acex-mct',
        slug: 'acex-mct',
        name: 'AceX MCT',
        category: 'centrifuge-tubes',
        image: centrifugeProductImages.acexMct,
        images: [centrifugeProductImages.acexMct],
        itemCode: 'PLX-ACEX-MCT',
        description: 'Manufactured from FDA approved resin, AceX MCT microcentrifuge tubes can be centrifuged at up to 20,000 RCF and withstand temperatures from -80°C to +121°C. Supplied in double safety self-standing bulk bags and compatible with all standard and high capacity centrifuge rotors.',
        material: 'Polypropylene (PP) — USP Class VI',
        sterility: 'Non-Sterile',
        temperature: '-80°C to +121°C',
        compliance: 'USP Class VI / ISO 13485',
        size: '0.5ML, 1.5ML, 2.0ML',
        packSize: 'Pack of 500 / 1000',
        sizeChart: makeChartRows([
            ['181001', '0.5ML Non Sterile', '1000', '96 Pkt'],
            ['181002', '1.5ML Non Sterile', '500', '96 Pkt'],
            ['181003', '2.0ML Non Sterile', '500', '96 Pkt'],
        ]),
    },
    {
        id: 'acex-mct-low-retention',
        slug: 'acex-mct-low-retention',
        name: 'AceX MCT Low Retention',
        category: 'centrifuge-tubes',
        image: centrifugeProductImages.acexMctLowRetention,
        images: [centrifugeProductImages.acexMctLowRetention],
        itemCode: 'PLX-ACEX-MCT-LR',
        description: 'Low Retention Resin Technology ensures minimal sample retention and maximum sample integrity. ClickSeal High-Capacity Microcentrifuge tubes fit all popular microcentrifuge rotors. Writing surface on flat cap and side wall enables quick sample ID. Withstands temperatures from +121°C to -80°C and RCF of 27,000xg with proper rotor support.',
        material: 'Polypropylene (PP) — USP Class VI',
        sterility: 'Non-Sterile',
        temperature: '-80°C to +121°C',
        compliance: 'USP Class VI / ISO 13485',
        size: '0.5ML, 1.5ML, 2.0ML',
        packSize: 'Pack of 500 / 1000',
        sizeChart: makeChartRows([
            ['181101', '0.5ML Non Sterile', '1000', '24 Pkt'],
            ['181102', '1.5ML Non Sterile', '500', '24 Pkt'],
            ['181103', '2.0ML Non Sterile', '500', '24 Pkt'],
        ]),
    },
    {
        id: 'acex-mct-amber-colour',
        slug: 'acex-mct-amber-colour',
        name: 'AceX MCT Amber Colour',
        category: 'centrifuge-tubes',
        image: centrifugeProductImages.acexMctAmberColour,
        images: [centrifugeProductImages.acexMctAmberColour],
        itemCode: 'PLX-ACEX-MCT-AMBER',
        description: 'AceX MCT Amber Colour microcentrifuge tubes are manufactured from amber polypropylene conforming to USP Class VI, providing light protection for photosensitive samples. Ideal for storage and processing of light-sensitive biological and chemical specimens in routine laboratory workflows.',
        material: 'Polypropylene (PP) — Amber, USP Class VI',
        sterility: 'Non-Sterile',
        temperature: '-80°C to +121°C',
        compliance: 'USP Class VI / ISO 13485',
        size: '0.5ML, 1.5ML, 2.0ML',
        packSize: 'Pack of 500 / 1000',
        sizeChart: makeChartRows([
            ['181201', '0.5ML Non Sterile', '1000', '24 Pkt'],
            ['181202', '1.5ML Non Sterile', '500', '24 Pkt'],
            ['181203', '2.0ML Non Sterile', '500', '24 Pkt'],
        ]),
    },
    {
        id: 'acex-ct',
        slug: 'acex-ct',
        name: 'AceX CT',
        category: 'centrifuge-tubes',
        image: centrifugeProductImages.acexCt,
        images: [centrifugeProductImages.acexCt, centrifugeProductImages.acexCtAlt],
        itemCode: 'PLX-ACEX-CT',
        description: 'AceX CT centrifuge tubes are manufactured from virgin polypropylene conforming to USP Class VI. Certified DNase/RNase free and Pyrogen Safe. Optically clear for specimen visibility with easy-to-read permanent graduations and a large labelling patch. Leak proof and autoclavable. Available in 15ML and 50ML in bulk pack, rack pack, and sterile variants. 50ML withstands 19,000 RCF; 15ML withstands 16,000 RCF.',
        material: 'Polypropylene (PP) — USP Class VI',
        sterility: 'Sterile & Non-Sterile options available',
        temperature: 'Autoclavable to +121°C',
        compliance: 'USP Class VI / ISO 13485',
        size: '15ML, 50ML',
        packSize: 'Bulk / Rack',
        sizeChart: makeChartRows([
            ['180101', '15ML Bulk', '500', '10 Pkt'],
            ['180102', '50ML Bulk', '500', '10 Pkt'],
            ['180103', '15ML Bulk Sterile', '500', '10 Pkt'],
            ['180104', '50ML Bulk Sterile', '500', '10 Pkt'],
            ['180105', '15ML Rack', '500', '10 Pkt'],
            ['180106', '50ML Rack', '300', '10 Pkt'],
            ['180107', '15ML Rack Sterile', '500', '10 Pkt'],
            ['180108', '50ML Rack Sterile', '300', '10 Pkt'],
        ]),
    },
    {
        id: 'acex-ct-amber',
        slug: 'acex-ct-amber',
        name: 'AceX CT Amber',
        category: 'centrifuge-tubes',
        image: centrifugeProductImages.acexCtAmber,
        images: [centrifugeProductImages.acexCtAmber],
        itemCode: 'PLX-ACEX-CT-AMBER',
        description: 'AceX CT Amber centrifuge tubes offer the same premium quality as AceX CT with the added benefit of amber polypropylene construction for light-sensitive sample protection. Certified DNase/RNase Free and Pyrogen Safe, conforming to USP Class VI. Available in 15ML and 50ML in bulk and rack configurations, sterile and non-sterile.',
        material: 'Polypropylene (PP) — Amber, USP Class VI',
        sterility: 'Sterile & Non-Sterile options available',
        temperature: 'Autoclavable to +121°C',
        compliance: 'USP Class VI / ISO 13485',
        size: '15ML, 50ML',
        packSize: 'Bulk / Rack',
        sizeChart: makeChartRows([
            ['180201', '15ML Bulk', '500', '6 Pkt'],
            ['180202', '50ML Bulk', '500', '6 Pkt'],
            ['180203', '15ML Bulk Sterile', '500', '6 Pkt'],
            ['180204', '50ML Bulk Sterile', '500', '6 Pkt'],
            ['180205', '15ML Rack', '500', '6 Pkt'],
            ['180206', '50ML Rack', '300', '6 Pkt'],
            ['180207', '15ML Rack Sterile', '500', '6 Pkt'],
            ['180208', '50ML Rack Sterile', '300', '6 Pkt'],
        ]),
    },
    {
        id: 'acex-ct-heavy-metal-free',
        slug: 'acex-ct-heavy-metal-free',
        name: 'AceX CT Heavy Metal Free',
        category: 'centrifuge-tubes',
        image: centrifugeProductImages.acexCtHeavyMetalFree,
        images: [centrifugeProductImages.acexCtHeavyMetalFree],
        itemCode: 'PLX-ACEX-CT-HMF',
        description: 'AceX CT Heavy Metal Free centrifuge tubes are manufactured from polypropylene conforming to USP Class VI, certified DNase/RNase Free and Pyrogen Safe, with additional heavy metal-free certification — ideal for trace metal analysis, atomic absorption spectroscopy, and applications where metal contamination must be eliminated. Available in 15ML and 50ML.',
        material: 'Polypropylene (PP) — Heavy Metal Free, USP Class VI',
        sterility: 'Sterile & Non-Sterile options available',
        temperature: 'Autoclavable to +121°C',
        compliance: 'USP Class VI / ISO 13485',
        size: '15ML, 50ML',
        packSize: 'Bulk / Rack Sterile',
        sizeChart: makeChartRows([
            ['180301', '15ML Bulk', '500', '6 Pkt'],
            ['180302', '50ML Bulk', '500', '6 Pkt'],
            ['180303', '15ML Rack Sterile', '500', '6 Pkt'],
            ['180304', '50ML Rack Sterile', '300', '6 Pkt'],
        ]),
    },
    {
        id: 'acex-ct-self-standing',
        slug: 'acex-ct-self-standing',
        name: 'AceX CT Self Standing',
        category: 'centrifuge-tubes',
        image: centrifugeProductImages.acexCtSelfStanding,
        images: [centrifugeProductImages.acexCtSelfStanding],
        itemCode: 'PLX-ACEX-CT-SS',
        description: 'AceX CT Self Standing centrifuge tubes feature a unique flat base design that allows the tube to stand upright without a rack — ideal for benchtop use and workflow efficiency. Manufactured from polypropylene conforming to USP Class VI, certified DNase/RNase Free and Pyrogen Safe. Available in 50ML in standard and amber variants, sterile and non-sterile.',
        material: 'Polypropylene (PP) — USP Class VI',
        sterility: 'Sterile & Non-Sterile options available',
        temperature: 'Autoclavable to +121°C',
        compliance: 'USP Class VI / ISO 13485',
        size: '50ML',
        packSize: 'Bulk',
        sizeChart: makeChartRows([
            ['180401', '50ML Bulk', '500', '6 Pkt'],
            ['180402', '50ML Bulk Sterile', '500', '6 Pkt'],
            ['180403', '50ML Bulk Amber', '500', '6 Pkt'],
            ['180404', '50ML Bulk Sterile Amber', '500', '6 Pkt'],
        ]),
    },
    {
        id: 'acex-ct-individual',
        slug: 'acex-ct-individual',
        name: 'AceX CT Individual',
        category: 'centrifuge-tubes',
        image: centrifugeProductImages.acexCtIndividual,
        images: [centrifugeProductImages.acexCtIndividual],
        itemCode: 'PLX-ACEX-CT-IND',
        description: 'AceX CT Individual centrifuge tubes are individually packed for maximum sterility assurance and sample traceability. Manufactured from polypropylene conforming to USP Class VI, certified DNase/RNase Free and Pyrogen Safe. Suitable for high-sensitivity applications requiring per-tube sterility verification. Available in 15ML and 50ML.',
        material: 'Polypropylene (PP) — USP Class VI',
        sterility: 'Individually Packed Sterile',
        temperature: 'Autoclavable to +121°C',
        compliance: 'USP Class VI / ISO 13485',
        size: '15ML, 50ML',
        packSize: 'Individual',
        sizeChart: makeChartRows([
            ['180501', '15ML Individual', '500', '10 Pkt'],
            ['180502', '50ML Individual', '300', '10 Pkt'],
            ['180503', '50ML SS Individual', '400', '10 Pkt'],
        ]),
    },
    {
        id: 'multifunction-centrifuge-tube-rack',
        slug: 'multifunction-centrifuge-tube-rack',
        name: 'Multifunction Centrifuge Tube Rack',
        category: 'centrifuge-tubes',
        image: centrifugeProductImages.multifunctionCtRack,
        images: [centrifugeProductImages.multifunctionCtRack],
        itemCode: 'PLX-MCT-RACK-MULTI',
        description: 'A versatile orange polypropylene centrifuge tube rack designed for both 15ML and 50ML centrifuge tubes. Ships flat and is simple to assemble. Holds twenty 50ML and thirty 15ML centrifuge tubes simultaneously, making it ideal for high-throughput workflows.',
        material: 'Polypropylene (PP) — Orange Colour',
        sterility: 'Non-Sterile',
        temperature: 'Chemical resistant PP construction',
        compliance: 'USP Class VI / ISO 13485',
        size: '15ML / 50ML tubes',
        packSize: 'Pack of 4',
        sizeChart: makeChartRows([
            ['150903', 'Multifunction Centrifuge Tube Rack', '4', '6 Pkt'],
        ]),
    },
    {
        id: 'mct-rack',
        slug: 'mct-rack',
        name: 'MCT Rack',
        category: 'centrifuge-tubes',
        image: centrifugeProductImages.mctRack,
        images: [centrifugeProductImages.mctRack],
        itemCode: 'PLX-MCT-RACK',
        description: 'A compact, double-sided green polypropylene rack designed for benchtop use or freezer storage. Accommodates 1.5ML to 2.0ML microcentrifuge tubes. Suitable for freezer storage down to -80°C (-112°F) and autoclavable at 121°C (250°F). Available in 96-place and 60-place formats.',
        material: 'Polypropylene (PP) — Green Colour',
        sterility: 'Non-Sterile',
        temperature: '-80°C to +121°C (Autoclavable)',
        compliance: 'USP Class VI / ISO 13485',
        size: '96-place / 60-place',
        packSize: 'Pack of 4 / 6',
        sizeChart: makeChartRows([
            ['150901', '96 Places', '4', '12 Pkt'],
            ['150902', '60 Places', '6', '12 Pkt'],
        ]),
    },
];

const microtipsProducts: LifeSciencesProduct[] = [
    {
        id: 'precix-tips-bulk-pack',
        slug: 'precix-tips-bulk-pack',
        name: 'PreciX Tips Bulk Pack',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-TIPS-BULK',
        description: 'PreciX Tips are produced in a fully automatic, human-touch-free production facility using FDA approved special medical grade virgin polypropylene with high transparency. Free from DNase, RNase, Human DNA, Pyrogen and PCR inhibitors. Graduation marks on all tips act as visual checks to minimise errors during sample aspiration. Compatible with Biohit, Eppendorf, Finnipipet, Gilson, Nishiriyo, Rainin and PlastX pipettes. Available in 10 µl, 10XL/20 µl, 200 µl Natural, 200 µl Yellow, 300 µl Natural, 1000 µl Natural, 1000 µl Blue, 1250 µl, 5ML and 10ML.',
        material: 'Polypropylene (PP) — USP Class VI',
        sterility: 'Non-Sterile',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '10 µl to 10ML',
        packSize: 'Bulk Pack',
        sizeChart: makeChartRows([
            ['170101', '10 µl Bulk', '1000', '96 Pkt'],
            ['170102', '10 XL/20 µl Bulk', '1000', '96 Pkt'],
            ['170103', '200 µl Natural Bulk', '1000', '96 Pkt'],
            ['170104', '200 µl Yellow Bulk', '1000', '96 Pkt'],
            ['170105', '300 µl Natural Bulk', '1000', '96 Pkt'],
            ['170106', '1000 µl Natural Bulk', '500', '96 Pkt'],
            ['170107', '1000 µl Blue Bulk', '500', '96 Pkt'],
            ['170108', '1250 µl Bulk', '500', '96 Pkt'],
            ['170109', '5 ML Bulk', '100', '24 Pkt'],
            ['170110', '10 ML Bulk', '100', '24 Pkt'],
        ]),
    },
    {
        id: 'precix-tips-rack-pack',
        slug: 'precix-tips-rack-pack',
        name: 'PreciX Tips Rack Pack',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-TIPS-RACK',
        description: 'PreciX Tips Rack Pack offers the same precision-engineered tips in a convenient racked format for easy access and workflow efficiency. Produced from FDA approved medical grade virgin polypropylene. Free from DNase, RNase, Human DNA, Pyrogen and PCR inhibitors. Compatible with Biohit, Eppendorf, Finnipipet, Gilson, Nishiriyo, Rainin and PlastX pipettes. Available in 10 µl through 1250 µl in natural and blue colour options. Each rack contains 96 tips (10 racks per pack).',
        material: 'Polypropylene (PP) — USP Class VI',
        sterility: 'Non-Sterile',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '10 µl to 1250 µl',
        packSize: 'Rack Pack',
        sizeChart: makeChartRows([
            ['170201', '10 µl Rack', '960 (10 Racks)', '10 Pkt'],
            ['170202', '10 µl XL/20 µl Rack', '960 (10 Racks)', '10 Pkt'],
            ['170203', '200 µl Rack Natural', '960 (10 Racks)', '10 Pkt'],
            ['170204', '300 µl Rack Natural', '960 (10 Racks)', '10 Pkt'],
            ['170205', '1000 µl Rack Natural', '960 (10 Racks)', '10 Pkt'],
            ['170207', '1000 µl Rack Blue', '960 (10 Racks)', '10 Pkt'],
            ['170206', '1250 µl Rack', '960 (10 Racks)', '10 Pkt'],
        ]),
    },
    {
        id: 'precix-tips-rack-pack-sterile',
        slug: 'precix-tips-rack-pack-sterile',
        name: 'PreciX Tips Rack Pack Sterile',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-TIPS-RACK-ST',
        description: 'PreciX Tips Rack Pack Sterile provides gamma-sterilised tips in a racked format, validated to SAL 10-6 sterility assurance level. Manufactured from FDA approved medical grade virgin polypropylene. Certified DNase, RNase, Human DNA, Pyrogen and PCR inhibitor-free. Compatible with Biohit, Eppendorf, Finnipipet, Gilson, Nishiriyo, Rainin and PlastX pipettes. Available in 10 µl through 1250 µl.',
        material: 'Polypropylene (PP) — USP Class VI',
        sterility: 'Sterile (Gamma Irradiated, SAL 10-6)',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '10 µl to 1250 µl',
        packSize: 'Sterile Rack Pack',
        sizeChart: makeChartRows([
            ['170301', '10 µl Rack', '960 (10 Racks)', '10 Pkt'],
            ['170302', '10 µl XL/20 µl Rack', '960 (10 Racks)', '10 Pkt'],
            ['170303', '200 µl Rack Natural', '960 (10 Racks)', '10 Pkt'],
            ['170304', '300 µl Rack Natural', '960 (10 Racks)', '10 Pkt'],
            ['170305', '1000 µl Rack Natural', '960 (10 Racks)', '10 Pkt'],
            ['170307', '1000 µl Rack Blue', '960 (10 Racks)', '10 Pkt'],
            ['170306', '1250 µl Rack', '960 (10 Racks)', '10 Pkt'],
        ]),
    },
    {
        id: 'precix-low-retention-tips-bulk-pack',
        slug: 'precix-low-retention-tips-bulk-pack',
        name: 'PreciX Low Retention Tips Bulk Pack',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-LR-TIPS-BULK',
        description: 'PreciX LR (Low Retention) Tips are designed and formulated to prevent sample wastage and maximise recovery of flowing liquid by providing the lowest possible surface retention along with excellent chemical resistance. Ideal for sensitive PCR and real-time PCR reactions. Manufactured from FDA approved medical grade virgin polypropylene. Certified DNase, RNase, Human DNA, Pyrogen and PCR inhibitor-free. Compatible with Biohit, Eppendorf, Finnipipet, Gilson, Nishiriyo, Rainin and PlastX pipettes. Available in 10 µl through 1250 µl.',
        material: 'Polypropylene (PP) — Low Retention, USP Class VI',
        sterility: 'Non-Sterile',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '10 µl to 1250 µl',
        packSize: 'Bulk Pack',
        sizeChart: makeChartRows([
            ['170401', '10 µl LR Bulk', '1000', '24 Pkt'],
            ['170402', '10 µl xl/20 µl LR Bulk', '1000', '24 Pkt'],
            ['170403', '200 µl LR Bulk', '1000', '24 Pkt'],
            ['170404', '300 µl LR Bulk', '1000', '24 Pkt'],
            ['170405', '1000 µl LR Bulk', '500', '24 Pkt'],
            ['170406', '1250 µl LR Bulk', '500', '24 Pkt'],
        ]),
    },
    {
        id: 'precix-low-retention-tips-rack-pack',
        slug: 'precix-low-retention-tips-rack-pack',
        name: 'PreciX Low Retention Tips Rack Pack',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-LR-TIPS-RACK',
        description: 'PreciX Low Retention Tips Rack Pack delivers maximum sample recovery in a convenient racked format. Low surface retention technology minimises sample wastage, ideal for sensitive and high-value reagent workflows. Certified DNase, RNase, Human DNA, Pyrogen and PCR inhibitor-free. Compatible with Biohit, Eppendorf, Finnipipet, Gilson, Nishiriyo, Rainin and PlastX pipettes. Available in 10 µl through 1250 µl (96 tips per rack, 10 racks per pack).',
        material: 'Polypropylene (PP) — Low Retention, USP Class VI',
        sterility: 'Non-Sterile',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '10 µl to 1250 µl',
        packSize: 'Rack Pack',
        sizeChart: makeChartRows([
            ['170501', '10 µl LR Rack', '960 (10 Racks)', '10 Pkt'],
            ['170502', '10 µl xl/20 µl LR Rack', '960 (10 Racks)', '10 Pkt'],
            ['170503', '200 µl LR Rack', '960 (10 Racks)', '10 Pkt'],
            ['170504', '300 µl LR Rack', '960 (10 Racks)', '10 Pkt'],
            ['170505', '1000 µl LR Rack', '960 (10 Racks)', '10 Pkt'],
            ['170506', '1250 µl LR Rack', '960 (10 Racks)', '10 Pkt'],
        ]),
    },
    {
        id: 'precix-low-retention-tips-rack-pack-sterile',
        slug: 'precix-low-retention-tips-rack-pack-sterile',
        name: 'PreciX Low Retention Tips Rack Pack Sterile',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-LR-TIPS-RACK-ST',
        description: 'PreciX Low Retention Tips Rack Pack Sterile combines maximum sample recovery with sterility assurance. Gamma irradiated to SAL 10-6. Certified DNase, RNase, Human DNA, Pyrogen and PCR inhibitor-free. Manufactured from FDA approved medical grade virgin polypropylene. Compatible with Biohit, Eppendorf, Finnipipet, Gilson, Nishiriyo, Rainin and PlastX pipettes. Available in 10 µl through 1250 µl.',
        material: 'Polypropylene (PP) — Low Retention, USP Class VI',
        sterility: 'Sterile (Gamma Irradiated, SAL 10-6)',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '10 µl to 1250 µl',
        packSize: 'Sterile Rack Pack',
        sizeChart: makeChartRows([
            ['170601', '10 µl LR Rack', '960 (10 Racks)', '10 Pkt'],
            ['170602', '10 µl xl/20 µl LR Rack', '960 (10 Racks)', '10 Pkt'],
            ['170603', '200 µl LR Rack', '960 (10 Racks)', '10 Pkt'],
            ['170604', '300 µl LR Rack', '960 (10 Racks)', '10 Pkt'],
            ['170605', '1000 µl LR Rack', '960 (10 Racks)', '10 Pkt'],
            ['170606', '1250 µl LR Rack', '960 (10 Racks)', '10 Pkt'],
        ]),
    },
    {
        id: 'precix-filter-tips-bulk-pack',
        slug: 'precix-filter-tips-bulk-pack',
        name: 'PreciX Filter Tips Bulk Pack',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-FT-BULK',
        description: 'PreciX Filter Tips feature an aerosol barrier filter made from best quality medical grade high density polyethylene, protecting samples and pipettes from cross-contamination. Manufactured in a complete automation process to preserve sample integrity. Ideal for molecular biology, cell culture and radioactive applications. Certified DNase, RNase, Human DNA, Pyrogen and PCR inhibitor-free. Available in 10 µl through 1250 µl.',
        material: 'Polypropylene (PP) with HDPE Aerosol Filter — USP Class VI',
        sterility: 'Non-Sterile',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '10 µl to 1250 µl',
        packSize: 'Bulk Pack',
        sizeChart: makeChartRows([
            ['170701', '10 µl Bulk', '1000', '24 Pkt'],
            ['170702', '20 µl Bulk', '1000', '24 Pkt'],
            ['170703', '50 µl Bulk', '1000', '24 Pkt'],
            ['170704', '100 µl Bulk', '1000', '24 Pkt'],
            ['170705', '200 µl Bulk', '1000', '24 Pkt'],
            ['170706', '1000 µl Bulk', '500', '24 Pkt'],
            ['170707', '1250 µl Bulk', '500', '24 Pkt'],
        ]),
    },
    {
        id: 'precix-filter-tips-rack-pack-sterile',
        slug: 'precix-filter-tips-rack-pack-sterile',
        name: 'PreciX Filter Tips Rack Pack Sterile',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-FT-RACK-ST',
        description: 'PreciX Filter Tips Rack Pack Sterile provides gamma-sterilised aerosol barrier tips in a racked format. HDPE filter prevents aerosol contamination of samples and pipettes. Certified DNase, RNase, Human DNA, Pyrogen and PCR inhibitor-free. Validated to SAL 10-6 sterility assurance. Available in 10 µl through 1250 µl (96 tips per rack, 10 racks per pack).',
        material: 'Polypropylene (PP) with HDPE Aerosol Filter — USP Class VI',
        sterility: 'Sterile (Gamma Irradiated, SAL 10-6)',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '10 µl to 1250 µl',
        packSize: 'Sterile Rack Pack',
        sizeChart: makeChartRows([
            ['170801', '10 µl Rack', '960 (10 Racks)', '10 Pkt'],
            ['170802', '20 µl Rack', '960 (10 Racks)', '10 Pkt'],
            ['170803', '50 µl Rack', '960 (10 Racks)', '10 Pkt'],
            ['170804', '100 µl Rack', '960 (10 Racks)', '10 Pkt'],
            ['170805', '200 µl Rack', '960 (10 Racks)', '10 Pkt'],
            ['170806', '1000 µl Rack', '960 (10 Racks)', '10 Pkt'],
            ['170807', '1250 µl Rack', '960 (10 Racks)', '10 Pkt'],
        ]),
    },
    {
        id: 'precix-low-retention-filter-tips-bulk-pack',
        slug: 'precix-low-retention-filter-tips-bulk-pack',
        name: 'PreciX Low Retention Filter Tips Bulk Pack',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-LRFT-BULK',
        description: 'PreciX Low Retention Filter Tips combine aerosol barrier protection with low surface retention technology for maximum sample recovery and contamination prevention. Ideal for sensitive molecular biology workflows involving precious or hazardous samples. Certified DNase, RNase, Human DNA, Pyrogen and PCR inhibitor-free. Available in 10 µl through 1250 µl.',
        material: 'Polypropylene (PP) — Low Retention, HDPE Filter, USP Class VI',
        sterility: 'Non-Sterile',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '10 µl to 1250 µl',
        packSize: 'Bulk Pack',
        sizeChart: makeChartRows([
            ['170901', '10 µl Bulk', '1000', '24 Pkt'],
            ['170902', '20 µl Bulk', '1000', '24 Pkt'],
            ['170903', '50 µl Bulk', '1000', '24 Pkt'],
            ['170904', '100 µl Bulk', '1000', '24 Pkt'],
            ['170905', '200 µl Bulk', '1000', '24 Pkt'],
            ['170906', '1000 µl Bulk', '500', '24 Pkt'],
            ['170907', '1250 µl Bulk', '500', '24 Pkt'],
        ]),
    },
    {
        id: 'precix-low-retention-filter-tips-sterile',
        slug: 'precix-low-retention-filter-tips-sterile',
        name: 'PreciX Low Retention Filter Tips Sterile',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-LRFT-ST',
        description: 'PreciX Low Retention Filter Tips Sterile deliver the ultimate combination of aerosol barrier protection, low surface retention and sterility assurance in a racked format. Gamma irradiated to SAL 10-6. Certified DNase, RNase, Human DNA, Pyrogen and PCR inhibitor-free. Available in 10 µl through 1250 µl (96 tips per rack, 10 racks per pack).',
        material: 'Polypropylene (PP) — Low Retention, HDPE Filter, USP Class VI',
        sterility: 'Sterile (Gamma Irradiated, SAL 10-6)',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '10 µl to 1250 µl',
        packSize: 'Sterile Rack Pack',
        sizeChart: makeChartRows([
            ['171001', '10 µl Rack', '960 (10 Racks)', '10 Pkt'],
            ['171002', '20 µl Rack', '960 (10 Racks)', '10 Pkt'],
            ['171003', '50 µl Rack', '960 (10 Racks)', '10 Pkt'],
            ['171004', '100 µl Rack', '960 (10 Racks)', '10 Pkt'],
            ['171005', '200 µl Rack', '960 (10 Racks)', '10 Pkt'],
            ['171006', '1000 µl Rack', '960 (10 Racks)', '10 Pkt'],
            ['171007', '1250 µl Rack', '960 (10 Racks)', '10 Pkt'],
        ]),
    },
    {
        id: 'precix-tips-reload',
        slug: 'precix-tips-reload',
        name: 'PreciX Tips Reload',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-TIPS-RELOAD',
        description: 'PreciX Tips Reload inserts allow refilling of existing tip boxes, reducing plastic waste while maintaining precision and quality. Manufactured from FDA approved medical grade virgin polypropylene. Certified DNase, RNase, Human DNA, Pyrogen and PCR inhibitor-free. Available in 10 µl, 200 µl, 300 µl and 1000 µl (96 tips per reload tray, 10 reloads per pack).',
        material: 'Polypropylene (PP) — USP Class VI',
        sterility: 'Non-Sterile',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '10 µl to 1000 µl',
        packSize: 'Reload Pack',
        sizeChart: makeChartRows([
            ['171101', '10 µl Reload', '960 (10 Racks)', '10 Pkt'],
            ['171103', '200 µl Reload', '960 (10 Racks)', '10 Pkt'],
            ['171104', '300 µl Reload', '960 (10 Racks)', '10 Pkt'],
            ['171105', '1000 µl Reload', '960 (10 Racks)', '10 Pkt'],
        ]),
    },
    {
        id: 'precix-low-retention-tips-reload',
        slug: 'precix-low-retention-tips-reload',
        name: 'PreciX Low Retention Tips Reload',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-LR-TIPS-RELOAD',
        description: 'PreciX Low Retention Tips Reload inserts combine sustainable tip reloading with low surface retention technology for maximum sample recovery. Manufactured from FDA approved medical grade virgin polypropylene. Certified DNase, RNase, Human DNA, Pyrogen and PCR inhibitor-free. Available in 10 µl, 200 µl, 300 µl and 1000 µl (96 tips per reload tray, 10 reloads per pack).',
        material: 'Polypropylene (PP) — Low Retention, USP Class VI',
        sterility: 'Non-Sterile',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '10 µl to 1000 µl',
        packSize: 'Reload Pack',
        sizeChart: makeChartRows([
            ['171201', '10 µl Reload', '960 (10 Racks)', '10 Pkt'],
            ['171203', '200 µl Reload', '960 (10 Racks)', '10 Pkt'],
            ['171204', '300 µl Reload', '960 (10 Racks)', '10 Pkt'],
            ['171205', '1000 µl Reload', '960 (10 Racks)', '10 Pkt'],
        ]),
    },
    {
        id: 'precix-filter-tips-reload',
        slug: 'precix-filter-tips-reload',
        name: 'PreciX Filter Tips Reload',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-FT-RELOAD',
        description: 'PreciX Filter Tips Reload inserts enable eco-friendly refilling of filter tip boxes while maintaining full aerosol barrier protection. HDPE filter prevents cross-contamination. Certified DNase, RNase, Human DNA, Pyrogen and PCR inhibitor-free. Available in 10 µl through 300 µl and 1000 µl (96 tips per reload tray, 10 reloads per pack).',
        material: 'Polypropylene (PP) with HDPE Aerosol Filter — USP Class VI',
        sterility: 'Non-Sterile',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '10 µl to 1000 µl',
        packSize: 'Reload Pack',
        sizeChart: makeChartRows([
            ['171301', '10 µl Filter Reload', '960 (10 Racks)', '10 Pkt'],
            ['171302', '20 µl Filter Reload', '960 (10 Racks)', '10 Pkt'],
            ['171303', '50 µl Filter Reload', '960 (10 Racks)', '10 Pkt'],
            ['171304', '100 µl Filter Reload', '960 (10 Racks)', '10 Pkt'],
            ['171305', '200 µl Filter Reload', '960 (10 Racks)', '10 Pkt'],
            ['171307', '300 µl Filter Reload', '960 (10 Racks)', '10 Pkt'],
            ['171306', '1000 µl Filter Reload', '960 (10 Racks)', '10 Pkt'],
        ]),
    },
    {
        id: 'precix-low-retention-filter-tips-reload',
        slug: 'precix-low-retention-filter-tips-reload',
        name: 'PreciX Low Retention Filter Tips Reload',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-LRFT-RELOAD',
        description: 'PreciX Low Retention Filter Tips Reload inserts combine aerosol barrier protection, low surface retention and sustainable reload packaging. Maximum sample recovery with contamination prevention for high-sensitivity molecular biology workflows. Certified DNase, RNase, Human DNA, Pyrogen and PCR inhibitor-free. Available in 10 µl through 1000 µl.',
        material: 'Polypropylene (PP) — Low Retention, HDPE Filter, USP Class VI',
        sterility: 'Non-Sterile',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '10 µl to 1000 µl',
        packSize: 'Reload Pack',
        sizeChart: makeChartRows([
            ['171401', '10 µl LR Filter Reload', '960 (10 Racks)', '10 Pkt'],
            ['171402', '20 µl LR Filter Reload', '960 (10 Racks)', '10 Pkt'],
            ['171403', '50 µl LR Filter Reload', '960 (10 Racks)', '10 Pkt'],
            ['171404', '100 µl LR Filter Reload', '960 (10 Racks)', '10 Pkt'],
            ['171405', '200 µl LR Filter Reload', '960 (10 Racks)', '10 Pkt'],
            ['171407', '300 µl LR Filter Reload', '960 (10 Racks)', '10 Pkt'],
            ['171406', '1000 µl LR Filter Reload', '960 (10 Racks)', '10 Pkt'],
        ]),
    },
    {
        id: 'precix-tips-individual-pack-sterile',
        slug: 'precix-tips-individual-pack-sterile',
        name: 'PreciX Tips Individual Pack, Sterile',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-TIPS-IND-ST',
        description: 'PreciX Tips Individual Pack Sterile provides individually wrapped sterile tips for maximum sterility assurance and traceability in high-sensitivity applications. Manufactured from FDA approved medical grade virgin polypropylene. Certified DNase, RNase, Human DNA, Pyrogen and PCR inhibitor-free. Available in 110 µl, 200 µl, 1000 µl, 5ML and 10ML (400 tips per pack, except 5ML and 10ML at 100 per pack).',
        material: 'Polypropylene (PP) — USP Class VI',
        sterility: 'Individually Packed Sterile',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '110 µl to 10ML',
        packSize: 'Individual Pack',
        sizeChart: makeChartRows([
            ['171501', '110 µl Individual', '400', '24 Pkt'],
            ['171503', '200 µl Individual', '400', '24 Pkt'],
            ['171505', '1000 µl Individual', '400', '24 Pkt'],
            ['171506', '5ML Individual', '100', '24 Pkt'],
            ['171507', '10ML Individual', '100', '24 Pkt'],
        ]),
    },
    {
        id: 'precix-low-retention-tips-individual-pack-sterile',
        slug: 'precix-low-retention-tips-individual-pack-sterile',
        name: 'PreciX Low Retention Tips Individual Pack, Sterile',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-LR-TIPS-IND-ST',
        description: 'PreciX Low Retention Tips Individual Pack Sterile combines individual sterile packaging with low surface retention technology, ensuring maximum sample recovery with highest sterility assurance. Certified DNase, RNase, Human DNA, Pyrogen and PCR inhibitor-free. Available in 10 µl, 200 µl and 1000 µl (400 tips per pack).',
        material: 'Polypropylene (PP) — Low Retention, USP Class VI',
        sterility: 'Individually Packed Sterile',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '10 µl to 1000 µl',
        packSize: 'Individual Pack',
        sizeChart: makeChartRows([
            ['171601', '10 µl LR Individual', '400', '24 Pkt'],
            ['171603', '200 µl LR Individual', '400', '24 Pkt'],
            ['171605', '1000 µl LR Individual', '400', '24 Pkt'],
        ]),
    },
    {
        id: 'precix-filter-tips-individual-pack-sterile',
        slug: 'precix-filter-tips-individual-pack-sterile',
        name: 'PreciX Filter Tips Individual Pack, Sterile',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-FT-IND-ST',
        description: 'PreciX Filter Tips Individual Pack Sterile provides individually wrapped sterile aerosol barrier tips for the highest level of sample protection. HDPE filter prevents cross-contamination. Certified DNase, RNase, Human DNA, Pyrogen and PCR inhibitor-free. Available in 10 µl through 1000 µl (400 tips per pack).',
        material: 'Polypropylene (PP) with HDPE Aerosol Filter — USP Class VI',
        sterility: 'Individually Packed Sterile',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '10 µl to 1000 µl',
        packSize: 'Individual Pack',
        sizeChart: makeChartRows([
            ['171701', '10 µl Filter Individual', '400', '24 Pkt'],
            ['171702', '20 µl Filter Individual', '400', '24 Pkt'],
            ['171703', '50 µl Filter Individual', '400', '24 Pkt'],
            ['171704', '100 µl Filter Individual', '400', '24 Pkt'],
            ['171705', '200 µl Filter Individual', '400', '24 Pkt'],
            ['171706', '1000 µl Filter Individual', '400', '24 Pkt'],
        ]),
    },
    {
        id: 'precix-filter-low-retention-tips-individual-pack-sterile',
        slug: 'precix-filter-low-retention-tips-individual-pack-sterile',
        name: 'PreciX Filter Low Retention Tips Individual Pack, Sterile',
        category: 'microtips',
        image: getLifeSciencesCategoryImage('microtips'),
        images: Array(4).fill(getLifeSciencesCategoryImage('microtips')),
        itemCode: 'PLX-PRECIX-LRFT-IND-ST',
        description: 'PreciX Filter Low Retention Tips Individual Pack Sterile represents the highest tier of tip performance — combining aerosol barrier filtration, low surface retention, individual sterile packaging and SAL 10-6 sterilisation. Ideal for the most sensitive molecular biology applications. Certified DNase, RNase, Human DNA, Pyrogen and PCR inhibitor-free. Available in 10 µl through 1000 µl (400 tips per pack).',
        material: 'Polypropylene (PP) — Low Retention, HDPE Filter, USP Class VI',
        sterility: 'Individually Packed Sterile',
        temperature: 'Compatible with standard autoclave protocols',
        compliance: 'USP Class VI / ISO 13485',
        size: '10 µl to 1000 µl',
        packSize: 'Individual Pack',
        sizeChart: makeChartRows([
            ['171801', '10 µl LR Filter Individual', '400', '24 Pkt'],
            ['171802', '20 µl LR Filter Individual', '400', '24 Pkt'],
            ['171803', '50 µl LR Filter Individual', '400', '24 Pkt'],
            ['171804', '100 µl LR Filter Individual', '400', '24 Pkt'],
            ['171805', '200 µl LR Filter Individual', '400', '24 Pkt'],
            ['171806', '1000 µl LR Filter Individual', '400', '24 Pkt'],
        ]),
    },
];

const generalLabwareProducts: LifeSciencesProduct[] = [
    {
        id: 'pipette-aid',
        slug: 'pipette-aid',
        name: 'Pipette Aid',
        category: 'general-labware',
        image: getLifeSciencesCategoryImage('general-labware'),
        images: Array(4).fill(getLifeSciencesCategoryImage('general-labware')),
        itemCode: 'PLX-PIPETTE-AID',
        description: 'PlastX Pipette Aid provides safe, accurate and trouble-free pipetting using an easy-to-use one-handed operation. Compatible with all standard sizes of serological pipettes. Suitable for routine liquid transfer in laboratory workflows. Available in 2ML, 10ML and 25ML sizes.',
        material: 'Assorted Materials',
        sterility: 'Non-Sterile',
        temperature: 'Standard laboratory conditions',
        compliance: 'USP Class VI / ISO 13485',
        size: '2ML, 10ML, 25ML',
        packSize: 'Pack of 12',
        sizeChart: makeChartRows([
            ['140801', '2ML', '12', '6 Pkt'],
            ['140802', '10ML', '12', '6 Pkt'],
            ['140803', '25ML', '12', '6 Pkt'],
        ]),
    },
    {
        id: 'microtip-box',
        slug: 'microtip-box',
        name: 'Microtip Box',
        category: 'general-labware',
        image: getLifeSciencesCategoryImage('general-labware'),
        images: Array(4).fill(getLifeSciencesCategoryImage('general-labware')),
        itemCode: 'PLX-MICROTIP-BOX',
        description: 'PlastX Microtip Boxes are sturdy, stackable and reusable polypropylene boxes designed to store and handle microtips with ease. A transparent cover provides a clear view of the microtips inside. Available in four tip size formats — 0.2-10 µl, 2-200 µl, 200-1000 µl and 200-1250 µl — each with 96 places.',
        material: 'Polypropylene (PP) — 96 Places',
        sterility: 'Non-Sterile',
        temperature: 'Standard laboratory conditions',
        compliance: 'USP Class VI / ISO 13485',
        size: '96 Places',
        packSize: 'Pack of 10',
        sizeChart: makeChartRows([
            ['150401', '0.2-10 µl', '10', '24 Pkt'],
            ['150402', '2-200 µl', '10', '24 Pkt'],
            ['150403', '200-1000 µl', '10', '24 Pkt'],
            ['150404', '200-1250 µl', '10', '24 Pkt'],
        ]),
    },
    {
        id: 'inoculation-loop',
        slug: 'inoculation-loop',
        name: 'Inoculation Loop',
        category: 'general-labware',
        image: getLifeSciencesCategoryImage('general-labware'),
        images: Array(4).fill(getLifeSciencesCategoryImage('general-labware')),
        itemCode: 'PLX-INOCULATION-LOOP',
        description: 'PlastX Inoculation Loops feature a smooth surface for uniform and gentle streaking without damaging the gel surface. Available in pack of 10 and individual packs. Sterile loops are validated according to EN ISO 11137-2:2012 for SAL 10-6. Available in 1 µl Sterile (pouch of 10), 1 µl Sterile (individual pouch), 10 µl Sterile (pouch of 10), 10 µl Sterile (individual pouch) and Needle (pouch of 10). Material: Polystyrene.',
        material: 'Polystyrene',
        sterility: 'Sterile (SAL 10-6, EN ISO 11137-2:2012)',
        temperature: 'Standard laboratory conditions',
        compliance: 'USP Class VI / ISO 13485',
        size: '1 µl, 10 µl, Needle',
        packSize: 'Pack of 100',
        sizeChart: makeChartRows([
            ['190010', '1 µl Sterile (Pouch of 10)', '100', '-'],
            ['190011', '1 µl Sterile (Individual Pouch)', '100', '-'],
            ['190020', '10 µl Sterile (Pouch of 10)', '100', '-'],
            ['190021', '10 µl Sterile (Individual Pouch)', '100', '-'],
            ['190030', 'Needle (Pouch of 10)', '100', '-'],
        ]),
    },
    {
        id: 'l-shape-spreader',
        slug: 'l-shape-spreader',
        name: 'L-Shape Spreader',
        category: 'general-labware',
        image: getLifeSciencesCategoryImage('general-labware'),
        images: Array(4).fill(getLifeSciencesCategoryImage('general-labware')),
        itemCode: 'PLX-L-SHAPE-SPREADER',
        description: 'PlastX L-Shape Spreaders are designed to spread and disperse liquid onto the surface of an agar plate without gouging or cutting the medium. Available in L-Shape configuration. Sterile cell spreaders are validated according to EN ISO 11137-2:2012 for SAL 10-6. Material: Polystyrene.',
        material: 'Polystyrene',
        sterility: 'Sterile (SAL 10-6, EN ISO 11137-2:2012)',
        temperature: 'Standard laboratory conditions',
        compliance: 'USP Class VI / ISO 13485',
        size: 'L-Shape',
        packSize: 'Pack of 100',
        sizeChart: makeChartRows([
            ['190901', 'L-Shape Spreader', '100', '-'],
        ]),
    },
];

const bottlesAndCarboysProduct = (
    slug: string,
    name: string,
    itemCode: string,
    description: string,
    material: string,
    sterility: string,
    temperature: string,
    size: string,
    packSize: string,
    sizeChart: [string, string, string, string][],
): LifeSciencesProduct => {
    const image = getBottlesAndCarboysProductImage(name);

    return {
        id: slug,
        slug,
        name,
        category: 'bottles-and-carboys',
        image,
        images: image ? [image] : [],
        itemCode,
        description,
        material,
        sterility,
        temperature,
        compliance: 'USP Class VI / ISO 13485',
        size,
        packSize,
        sizeChart: makeChartRows(sizeChart),
    };
};

const bottlesAndCarboysProducts: LifeSciencesProduct[] = [
    bottlesAndCarboysProduct('reagent-bottle-narrow-mouth-polypropylene', 'Reagent Bottle Narrow Mouth, Polypropylene', 'PLX-RB-NM-PP', 'PlastX Reagent Bottles Narrow Mouth in Medical Grade Polypropylene conforming to USP Class VI. Manufactured to the highest quality standards with excellent chemical resistance and clarity. Ideal for storage and dispensing of laboratory reagents. Available from 4ML to 1000ML.', 'Polypropylene (PP) — USP Class VI', 'Non-Sterile', 'Autoclavable at 121°C', '4ML to 1000ML', 'Pack of 24 / 48 / 72', [
        ['100101', '4ML', '72', '6 Pkt'], ['100102', '8ML', '72', '6 Pkt'], ['100103', '15ML', '72', '6 Pkt'], ['100104', '30ML', '72', '6 Pkt'], ['100105', '60ML', '72', '6 Pkt'], ['100106', '125ML', '72', '6 Pkt'], ['100107', '250ML', '72', '6 Pkt'], ['100108', '500ML', '48', '6 Pkt'], ['100109', '1000ML', '24', '6 Pkt'],
    ]),
    bottlesAndCarboysProduct('reagent-bottle-narrow-mouth-ldpe', 'Reagent Bottle Narrow Mouth, LDPE', 'PLX-RB-NM-LDPE', 'PlastX Reagent Bottles Narrow Mouth in Medical Grade Low Density Polyethylene (LDPE) conforming to USP Class VI. Flexible and lightweight with excellent chemical resistance. Ideal for storage and dispensing of laboratory reagents. Available from 8ML to 1000ML.', 'Low Density Polyethylene (LDPE) — USP Class VI', 'Non-Sterile', 'Not recommended for autoclaving', '8ML to 1000ML', 'Pack of 24 / 48 / 72', [
        ['100701', '8ML', '72', '6 Pkt'], ['100702', '15ML', '72', '6 Pkt'], ['100703', '30ML', '72', '6 Pkt'], ['100704', '60ML', '72', '6 Pkt'], ['100705', '125ML', '72', '6 Pkt'], ['100706', '250ML', '72', '6 Pkt'], ['100707', '500ML', '48', '6 Pkt'], ['100708', '1000ML', '24', '6 Pkt'],
    ]),
    bottlesAndCarboysProduct('reagent-bottle-narrow-mouth-hdpe', 'Reagent Bottle Narrow Mouth, HDPE', 'PLX-RB-NM-HDPE', 'PlastX Reagent Bottles Narrow Mouth in Medical Grade High Density Polyethylene (HDPE) conforming to USP Class VI. Superior rigidity and chemical resistance for demanding laboratory applications. Available from 4ML to 1000ML.', 'High Density Polyethylene (HDPE) — USP Class VI', 'Non-Sterile', 'Not recommended for autoclaving', '4ML to 1000ML', 'Pack of 24 / 48 / 72', [
        ['100301', '4ML', '72', '6 Pkt'], ['100302', '8ML', '72', '6 Pkt'], ['100303', '15ML', '72', '6 Pkt'], ['100304', '30ML', '72', '6 Pkt'], ['100305', '60ML', '72', '6 Pkt'], ['100306', '125ML', '72', '6 Pkt'], ['100307', '250ML', '72', '6 Pkt'], ['100308', '500ML', '48', '6 Pkt'], ['100309', '1000ML', '24', '6 Pkt'],
    ]),
    bottlesAndCarboysProduct('reagent-bottle-narrow-mouth-hdpe-amber', 'Reagent Bottle Narrow Mouth, HDPE Amber', 'PLX-RB-NM-HDPE-AMB', 'PlastX Reagent Bottles Narrow Mouth in Medical Grade Amber HDPE conforming to USP Class VI. Amber colour provides superior UV and light protection for photosensitive reagents and samples. Available from 4ML to 1000ML.', 'HDPE Amber — USP Class VI', 'Non-Sterile', 'Not recommended for autoclaving', '4ML to 1000ML', 'Pack of 24 / 48 / 72', [
        ['100501', '4ML', '72', '6 Pkt'], ['100502', '8ML', '72', '6 Pkt'], ['100503', '15ML', '72', '6 Pkt'], ['100504', '30ML', '72', '6 Pkt'], ['100505', '60ML', '72', '6 Pkt'], ['100506', '125ML', '72', '6 Pkt'], ['100507', '250ML', '72', '6 Pkt'], ['100508', '500ML', '48', '6 Pkt'], ['100509', '1000ML', '24', '6 Pkt'],
    ]),
    bottlesAndCarboysProduct('reagent-bottle-wide-mouth-polypropylene', 'Reagent Bottle Wide Mouth, Polypropylene', 'PLX-RB-WM-PP', 'PlastX Reagent Bottles Wide Mouth in Medical Grade Polypropylene conforming to USP Class VI. Wide mouth design allows easy filling, emptying and cleaning. Excellent chemical resistance and clarity. Available from 30ML to 1000ML.', 'Polypropylene (PP) — USP Class VI', 'Non-Sterile', 'Autoclavable at 121°C', '30ML to 1000ML', 'Pack of 24 / 48 / 72', [
        ['100201', '30ML', '72', '6 Pkt'], ['100202', '60ML', '72', '6 Pkt'], ['100203', '125ML', '72', '6 Pkt'], ['100204', '250ML', '72', '6 Pkt'], ['100205', '500ML', '48', '6 Pkt'], ['100206', '1000ML', '24', '6 Pkt'],
    ]),
    bottlesAndCarboysProduct('reagent-bottle-wide-mouth-ldpe', 'Reagent Bottle Wide Mouth, LDPE', 'PLX-RB-WM-LDPE', 'PlastX Reagent Bottles Wide Mouth in Medical Grade LDPE conforming to USP Class VI. Wide mouth design with flexible LDPE construction for easy dispensing. Ideal for viscous reagents and powders. Available from 30ML to 1000ML.', 'Low Density Polyethylene (LDPE) — USP Class VI', 'Non-Sterile', 'Not recommended for autoclaving', '30ML to 1000ML', 'Pack of 24 / 48 / 72', [
        ['100801', '30ML', '72', '6 Pkt'], ['100802', '60ML', '72', '6 Pkt'], ['100803', '125ML', '72', '6 Pkt'], ['100804', '250ML', '72', '6 Pkt'], ['100805', '500ML', '48', '6 Pkt'], ['100806', '1000ML', '24', '6 Pkt'],
    ]),
    bottlesAndCarboysProduct('reagent-bottle-wide-mouth-hdpe', 'Reagent Bottle Wide Mouth, HDPE', 'PLX-RB-WM-HDPE', 'PlastX Reagent Bottles Wide Mouth in Medical Grade HDPE conforming to USP Class VI. Rigid construction with wide mouth opening for convenient access. Superior chemical resistance for demanding reagents. Available from 30ML to 1000ML.', 'High Density Polyethylene (HDPE) — USP Class VI', 'Non-Sterile', 'Not recommended for autoclaving', '30ML to 1000ML', 'Pack of 24 / 48 / 72', [
        ['100401', '30ML', '72', '6 Pkt'], ['100402', '60ML', '72', '6 Pkt'], ['100403', '125ML', '72', '6 Pkt'], ['100404', '250ML', '72', '6 Pkt'], ['100405', '500ML', '48', '6 Pkt'], ['100406', '1000ML', '24', '6 Pkt'],
    ]),
    bottlesAndCarboysProduct('reagent-bottle-wide-mouth-hdpe-amber', 'Reagent Bottle Wide Mouth, HDPE Amber', 'PLX-RB-WM-HDPE-AMB', 'PlastX Reagent Bottles Wide Mouth in Medical Grade Amber HDPE conforming to USP Class VI. Wide mouth access combined with amber UV-protective colouring for light-sensitive reagent storage. Available from 30ML to 1000ML.', 'HDPE Amber — USP Class VI', 'Non-Sterile', 'Not recommended for autoclaving', '30ML to 1000ML', 'Pack of 24 / 48 / 72', [
        ['100601', '30ML', '72', '6 Pkt'], ['100602', '60ML', '72', '6 Pkt'], ['100603', '125ML', '72', '6 Pkt'], ['100604', '250ML', '72', '6 Pkt'], ['100605', '500ML', '48', '6 Pkt'], ['100606', '1000ML', '24', '6 Pkt'],
    ]),
    bottlesAndCarboysProduct('reagent-bottle-wide-mouth-hdpe-sterile', 'Reagent Bottle Wide Mouth, HDPE Sterile', 'PLX-RB-WM-HDPE-ST', 'PlastX Reagent Bottles Wide Mouth in Medical Grade HDPE conforming to USP Class VI. Individually wrapped and gamma sterilised for applications requiring guaranteed sterility. Wide mouth design for easy filling and access. Available from 30ML to 1000ML.', 'High Density Polyethylene (HDPE) — USP Class VI', 'Sterile (Individually Wrapped)', 'Not recommended for autoclaving', '30ML to 1000ML', 'Individually Wrapped', [
        ['100411', '30ML', '500', '—'], ['100412', '60ML', '250', '—'], ['100413', '125ML', '125', '—'], ['100414', '250ML', '60', '—'], ['100415', '500ML', '30', '—'], ['100416', '1000ML', '24', '—'],
    ]),
    bottlesAndCarboysProduct('reagent-bottle-wide-mouth-hdpe-amber-sterile', 'Reagent Bottle Wide Mouth, HDPE Amber Sterile', 'PLX-RB-WM-HDPE-AMB-ST', 'PlastX Reagent Bottles Wide Mouth in Medical Grade Amber HDPE conforming to USP Class VI. Individually wrapped and sterile, with amber UV-protective colouring for light-sensitive sterile applications. Available from 30ML to 1000ML.', 'HDPE Amber — USP Class VI', 'Sterile (Individually Wrapped)', 'Not recommended for autoclaving', '30ML to 1000ML', 'Individually Wrapped', [
        ['100611', '30ML', '500', '—'], ['100612', '60ML', '250', '—'], ['100613', '125ML', '125', '—'], ['100614', '250ML', '60', '—'], ['100615', '500ML', '30', '—'], ['100616', '1000ML', '24', '—'],
    ]),
    bottlesAndCarboysProduct('reagent-bottle-wide-mouth-hdpe-sterile-pyrogen-free', 'Reagent Bottle Wide Mouth, HDPE Sterile Pyrogen Free', 'PLX-RB-WM-HDPE-ST-PF', 'PlastX Reagent Bottles Wide Mouth in Medical Grade HDPE conforming to USP Class VI. Individually wrapped, sterile and certified pyrogen-free for the most demanding pharmaceutical and clinical applications. Available from 30ML to 1000ML.', 'High Density Polyethylene (HDPE) — USP Class VI', 'Sterile, Pyrogen Free (Individually Wrapped)', 'Not recommended for autoclaving', '30ML to 1000ML', 'Individually Wrapped', [
        ['100421', '30ML', '500', '—'], ['100422', '60ML', '250', '—'], ['100423', '125ML', '125', '—'], ['100424', '250ML', '60', '—'], ['100425', '500ML', '30', '—'], ['100426', '1000ML', '24', '—'],
    ]),
    bottlesAndCarboysProduct('reagent-bottle-wide-mouth-hdpe-amber-sterile-pyrogen-free', 'Reagent Bottle Wide Mouth, HDPE Amber Sterile Pyrogen Free', 'PLX-RB-WM-HDPE-AMB-ST-PF', 'PlastX Reagent Bottles Wide Mouth in Medical Grade Amber HDPE conforming to USP Class VI. Individually wrapped, sterile, pyrogen-free and UV-protective for the most stringent light-sensitive pharmaceutical and clinical workflows. Available from 30ML to 1000ML.', 'HDPE Amber — USP Class VI', 'Sterile, Pyrogen Free (Individually Wrapped)', 'Not recommended for autoclaving', '30ML to 1000ML', 'Individually Wrapped', [
        ['100621', '30ML', '500', '—'], ['100622', '60ML', '250', '—'], ['100623', '125ML', '125', '—'], ['100624', '250ML', '60', '—'], ['100625', '500ML', '30', '—'], ['100626', '1000ML', '24', '—'],
    ]),
    bottlesAndCarboysProduct('reagent-bottle-narrow-mouth-polypropylene-large', 'Reagent Bottle Narrow Mouth, Polypropylene (Large)', 'PLX-RB-NM-PP-LG', 'PlastX Large Format Reagent Bottles Narrow Mouth in Medical Grade Polypropylene conforming to USP Class VI. Designed for bulk reagent storage and handling in high-volume laboratory environments. Available in 2L, 4L and 8L capacities.', 'Polypropylene (PP) — USP Class VI', 'Non-Sterile', 'Autoclavable at 121°C', '2L, 4L, 8L', 'Pack of 4 / 6', [
        ['101401', '2L', '6', '—'], ['101402', '4L', '6', '—'], ['101403', '8L', '4', '—'],
    ]),
    bottlesAndCarboysProduct('narrow-mouth-2-and-4-l', 'Narrow Mouth 2 & 4 L', 'PLX-RB-NM-2-4L', 'PlastX Narrow Mouth large-capacity bottles in medical grade plastic for bulk reagent storage and transfer in laboratory environments. Designed for safe handling of 2L and 4L volumes with a narrow mouth profile for controlled pouring.', 'Polypropylene (PP) — USP Class VI', 'Non-Sterile', 'Autoclavable at 121°C', '2L, 4L', 'Pack of 6', [
        ['101401', '2L', '6', '—'], ['101402', '4L', '6', '—'],
    ]),
    bottlesAndCarboysProduct('heavy-duty-vacuum-bottle', 'Heavy Duty Vacuum Bottle', 'PLX-HD-VAC-BOTTLE', 'PlastX Heavy Duty Vacuum Bottle in Medical Grade Polypropylene conforming to USP Class VI. Engineered for use with vacuum systems in laboratory and clinical applications. Robust construction withstands pressure differentials. Available in 4L.', 'Polypropylene (PP) — USP Class VI', 'Non-Sterile', 'Autoclavable at 121°C', '4L', 'Pack of 6', [
        ['101702', '4L', '6', '—'],
    ]),
    bottlesAndCarboysProduct('aspirator-bottle', 'Aspirator Bottle', 'PLX-ASPIRATOR-BOTTLE', 'PlastX Aspirator Bottles in Medical Grade Polypropylene conforming to USP Class VI. Designed for liquid dispensing and aspiration tasks in laboratory environments. Includes stop cork. Available in 5L, 10L and 20L, plus Stop Cork accessory.', 'Polypropylene (PP) — USP Class VI', 'Non-Sterile', 'Autoclavable at 121°C', '5L, 10L, 20L', 'Pack of 1', [
        ['101801', '5L', '1', '12 Pkt'], ['101802', '10L', '1', '12 Pkt'], ['101803', '20L', '1', '12 Pkt'], ['101804', 'Stop Cork', '1', '12 Pkt'],
    ]),
    bottlesAndCarboysProduct('carboys', 'Carboys', 'PLX-CARBOYS', 'PlastX Carboys in Medical Grade Polypropylene conforming to USP Class VI. Heavy-duty large-volume containers for bulk liquid storage and transport in laboratory and industrial settings. Available in 10L and 20L.', 'Polypropylene (PP) — USP Class VI', 'Non-Sterile', 'Autoclavable at 121°C', '10L, 20L', 'Pack of 1', [
        ['101901', '10L', '1', '12 Pkt'], ['101902', '20L', '1', '12 Pkt'],
    ]),
    bottlesAndCarboysProduct('carboys-with-stop-cork', 'Carboys With Stop Cork', 'PLX-CARBOYS-SC', 'PlastX Carboys with Stop Cork in Medical Grade Polypropylene conforming to USP Class VI. Bulk liquid storage and dispensing containers fitted with an integrated stop cork for controlled flow. Available in 10L and 20L.', 'Polypropylene (PP) — USP Class VI', 'Non-Sterile', 'Autoclavable at 121°C', '10L, 20L', 'Pack of 1', [
        ['102001', '10L', '1', '12 Pkt'], ['102002', '20L', '1', '12 Pkt'],
    ]),
    bottlesAndCarboysProduct('carboys-wide-mouth', 'Carboys Wide Mouth', 'PLX-CARBOYS-WM', 'PlastX Carboys Wide Mouth in Medical Grade Polypropylene conforming to USP Class VI. Wide mouth opening allows easy filling, cleaning and access for bulk liquid storage applications. Available in 10L and 20L.', 'Polypropylene (PP) — USP Class VI', 'Non-Sterile', 'Autoclavable at 121°C', '10L, 20L', 'Pack of 1', [
        ['102101', '10L', '1', '12 Pkt'], ['102102', '20L', '1', '12 Pkt'],
    ]),
    bottlesAndCarboysProduct('wash-bottle-old-type', 'Wash Bottle (Old Type)', 'PLX-WASH-BOTTLE-OLD', 'PlastX Wash Bottles (Old Type) in LDPE conforming to US FDA 21 CFR. Classic squeeze-and-spray design for gentle, controlled dispensing of solvents and wash solutions. Available from 125ML to 1000ML.', 'Low Density Polyethylene (LDPE) — FDA 21 CFR', 'Non-Sterile', 'Not recommended for autoclaving', '125ML to 1000ML', 'Pack of 6 / 12', [
        ['100901', '125ML', '12', '24 Pkt'], ['100902', '250ML', '12', '24 Pkt'], ['100903', '500ML', '6', '24 Pkt'], ['100904', '1000ML', '6', '24 Pkt'],
    ]),
    bottlesAndCarboysProduct('wash-bottle-new-type', 'Wash Bottle (New Type)', 'PLX-WASH-BOTTLE-NEW', 'PlastX Wash Bottles (New Type) in LDPE conforming to US FDA 21 CFR. Updated ergonomic design for improved grip and controlled dispensing of laboratory wash solutions and solvents. Available in 250ML and 500ML.', 'Low Density Polyethylene (LDPE) — FDA 21 CFR', 'Non-Sterile', 'Not recommended for autoclaving', '250ML, 500ML', 'Pack of 6 / 12', [
        ['101001', '250ML', '12', '24 Pkt'], ['101002', '500ML', '6', '24 Pkt'],
    ]),
    bottlesAndCarboysProduct('narrow-mouth-wash-bottle', 'Narrow Mouth Wash Bottle', 'PLX-WASH-BOTTLE-NM', 'PlastX Narrow Mouth Wash Bottles in LDPE conforming to US FDA 21 CFR. Narrow mouth nozzle provides precise directional dispensing for targeted washing of equipment and glassware. Available from 125ML to 1000ML.', 'Low Density Polyethylene (LDPE) — FDA 21 CFR', 'Non-Sterile', 'Not recommended for autoclaving', '125ML to 1000ML', 'Pack of 6 / 12', [
        ['101601', '125ML', '12', '24 Pkt'], ['101602', '250ML', '12', '24 Pkt'], ['101603', '500ML', '6', '24 Pkt'], ['101604', '1000ML', '6', '24 Pkt'],
    ]),
    bottlesAndCarboysProduct('wide-mouth-wash-bottle', 'Wide Mouth Wash Bottle', 'PLX-WASH-BOTTLE-WM', 'PlastX Wide Mouth Wash Bottles in LDPE conforming to US FDA 21 CFR. Wide mouth design allows easy filling and refilling while providing controlled dispensing of wash solutions. Available in 250ML, 500ML and 1000ML.', 'Low Density Polyethylene (LDPE) — FDA 21 CFR', 'Non-Sterile', 'Not recommended for autoclaving', '250ML to 1000ML', 'Pack of 6 / 12', [
        ['102201', '250ML', '12', '24 Pkt'], ['102202', '500ML', '6', '24 Pkt'], ['102203', '1000ML', '6', '24 Pkt'],
    ]),
    bottlesAndCarboysProduct('wide-mouth-autoclavable-wash-bottle', 'Wide Mouth Autoclavable Wash Bottle', 'PLX-WASH-BOTTLE-WM-AC', 'PlastX Wide Mouth Autoclavable Wash Bottles in Polypropylene conforming to US FDA 21 CFR. Fully autoclavable construction for sterile washing applications. Wide mouth for easy filling and cleaning. Available in 500ML and 1000ML.', 'Polypropylene (PP) — FDA 21 CFR', 'Non-Sterile (Autoclavable)', 'Autoclavable at 121°C', '500ML, 1000ML', 'Pack of 6', [
        ['102301', '500ML', '6', '24 Pkt'], ['102302', '1000ML', '6', '24 Pkt'],
    ]),
    bottlesAndCarboysProduct('self-venting-labeled-wash-bottle', 'Self-Venting Labeled Wash Bottle', 'PLX-WASH-BOTTLE-SV', 'PlastX Self-Venting Labeled Wash Bottles in LDPE conforming to US FDA 21 CFR. Pre-printed GHS-compliant hazard labels for common laboratory solvents. Self-venting design prevents vacuum lock during dispensing. Available in 500ML and 1000ML with solvent-specific labelling including Acetone, Distilled Water, Isopropanol, Ethanol, Methanol, Sodium Hypochlorite and Assorted.', 'Low Density Polyethylene (LDPE) — FDA 21 CFR', 'Non-Sterile', 'Not recommended for autoclaving', '500ML, 1000ML', 'Pack of 6', [
        ['102401', '500ML, Acetone', '6', '12 Pkt'], ['102402', '500ML, Distilled Water', '6', '12 Pkt'], ['102403', '500ML, Isopropanol', '6', '12 Pkt'], ['102404', '500ML, Ethanol', '6', '12 Pkt'], ['102405', '500ML, Methanol', '6', '12 Pkt'], ['102406', '500ML, Sodium Hypochlorite', '6', '12 Pkt'], ['102407', '500ML, Assorted', '6', '12 Pkt'], ['102408', '1000ML, Acetone', '6', '12 Pkt'], ['102409', '1000ML, Distilled Water', '6', '12 Pkt'], ['102410', '1000ML, Isopropanol', '6', '12 Pkt'], ['102411', '1000ML, Ethanol', '6', '12 Pkt'], ['102412', '1000ML, Methanol', '6', '12 Pkt'], ['102413', '1000ML, Sodium Hypochlorite', '6', '12 Pkt'], ['102414', '1000ML, Assorted', '6', '12 Pkt'],
    ]),
    bottlesAndCarboysProduct('dropping-bottle-old-type', 'Dropping Bottle (Old Type)', 'PLX-DROP-BOTTLE-OLD', 'PlastX Dropping Bottles (Old Type) in LDPE conforming to US FDA 21 CFR. Classic dropper bottle design for precise dispensing of reagents and solutions drop-by-drop. Available in 60ML and 125ML.', 'Low Density Polyethylene (LDPE) — FDA 21 CFR', 'Non-Sterile', 'Not recommended for autoclaving', '60ML, 125ML', 'Pack of 6 / 12', [
        ['101101', '60ML', '12', '24 Pkt'], ['101102', '125ML', '6', '24 Pkt'],
    ]),
    bottlesAndCarboysProduct('dropping-bottle-euro-design', 'Dropping Bottle (Euro Design)', 'PLX-DROP-BOTTLE-EURO', 'PlastX Dropping Bottles (Euro Design) in LDPE conforming to US FDA 21 CFR. Contemporary European-style dropper bottle with ergonomic profile for precise drop-by-drop dispensing of reagents and solutions. Available from 15ML to 250ML.', 'Low Density Polyethylene (LDPE) — FDA 21 CFR', 'Non-Sterile', 'Not recommended for autoclaving', '15ML to 250ML', 'Pack of 12', [
        ['101201', '15ML', '12', '24 Pkt'], ['101202', '30ML', '12', '24 Pkt'], ['101203', '60ML', '12', '24 Pkt'], ['101204', '125ML', '12', '24 Pkt'], ['101205', '250ML', '12', '24 Pkt'],
    ]),
    bottlesAndCarboysProduct('desiccator-plain', 'Desiccator Plain', 'PLX-DESICCATOR-PLAIN', 'PlastX Desiccator Plain with white Polypropylene base and clear Polycarbonate top. Comes with white perforated plate inside and flat flange. Ideal for storage or drying of moisture-sensitive substances. Available from 150MM to 300MM diameter.', 'Polypropylene Base / Polycarbonate Top (PP/PC)', 'Non-Sterile', 'Not recommended for autoclaving', '150MM to 300MM', 'Pack of 1', [
        ['110101', '150MM', '1', '6 Pkt'], ['110102', '200MM', '1', '6 Pkt'], ['110103', '250MM', '1', '6 Pkt'], ['110104', '300MM', '1', '6 Pkt'],
    ]),
    bottlesAndCarboysProduct('desiccator-vacuum', 'Desiccator Vacuum', 'PLX-DESICCATOR-VAC', 'PlastX Desiccator Vacuum with white Polypropylene base and clear Polycarbonate top. Greaseless airtight vacuum seal using high quality silicon gasket. Holds vacuum up to 740mm Hg for 24 hours. Removable three-way Teflon stopcock for consistent vacuum draw, release or shut off. Available from 150MM to 300MM diameter.', 'Polypropylene Base / Polycarbonate Top (PP/PC)', 'Non-Sterile', 'Not recommended for autoclaving', '150MM to 300MM', 'Pack of 1', [
        ['110201', '150MM', '1', '6 Pkt'], ['110202', '200MM', '1', '6 Pkt'], ['110203', '250MM', '1', '6 Pkt'], ['110204', '300MM', '1', '6 Pkt'],
    ]),
    bottlesAndCarboysProduct('desiccator-all-clear', 'Desiccator All Clear', 'PLX-DESICCATOR-CLEAR', 'PlastX Desiccator All Clear with both base and top made from clear Polycarbonate for full visibility of contents. With white perforated plate inside. Removable 3-way Teflon Stopcork and silicon rubber O-ring for perfect sealing. Available from 150MM to 300MM diameter.', 'Polycarbonate (PC/PC) — All Clear', 'Non-Sterile', 'Not recommended for autoclaving', '150MM to 300MM', 'Pack of 1', [
        ['110301', '150MM', '1', '6 Pkt'], ['110302', '200MM', '1', '6 Pkt'], ['110303', '250MM', '1', '6 Pkt'], ['110304', '300MM', '1', '6 Pkt'],
    ]),
    bottlesAndCarboysProduct('desiccator-stop-cork', 'Desiccator Stop Cork', 'PLX-DESICCATOR-CORK', 'PlastX Desiccator Stop Cork accessory for use with PlastX desiccators. Replacement or spare stop cork for maintaining airtight seal on desiccator units.', 'Polypropylene (PP)', 'Non-Sterile', 'Not recommended for autoclaving', 'Accessory', 'Pack of 1', [
        ['110401', 'Desiccator Stop Cork', '1', '—'],
    ]),
    bottlesAndCarboysProduct('desiccator-silicon-ring', 'Desiccator Silicon Ring', 'PLX-DESICCATOR-RING', 'PlastX Desiccator Silicon Ring accessories in Silicon Rubber for use with PlastX desiccators. Replacement silicon sealing rings to maintain airtight performance of desiccator units. Available in 150MM, 200MM, 250MM and 300MM sizes.', 'Silicon Rubber', 'Non-Sterile', 'Not recommended for autoclaving', '150MM to 300MM', 'Pack of 1', [
        ['110501', '150MM', '1', '6 Pkt'], ['110502', '200MM', '1', '6 Pkt'], ['110503', '250MM', '1', '6 Pkt'], ['110504', '300MM', '1', '6 Pkt'],
    ]),
];

export const lifeSciencesProducts: LifeSciencesProduct[] = [
    ...bottlesAndCarboysProducts,
    ...centrifugeTubeProducts,
    ...microtipsProducts,
    ...generalLabwareProducts,
];

export const getCategoryBySlug = (slug: string) => categories.find(c => c.id === slug);

export const getProductsByCategory = (categorySlug: string) => products.filter(p => p.category === categorySlug);

export const getProductById = (id: string) => products.find(p => p.id === id);

const normalizeLifeSciencesCategorySlug = (slug: string) =>
    slug === 'bottles-carboys' ? 'bottles-and-carboys' : slug;

export const getLifeSciencesCategoryBySlug = (slug: string) =>
    lifeSciencesCategories.find(c => c.id === normalizeLifeSciencesCategorySlug(slug));

export const getLifeSciencesProductsByCategory = (categorySlug: string) =>
    lifeSciencesProducts.filter(p => p.category === normalizeLifeSciencesCategorySlug(categorySlug));

export const getLifeSciencesProductBySlug = (categorySlug: string, productSlug: string) =>
    lifeSciencesProducts.find(p => p.category === normalizeLifeSciencesCategorySlug(categorySlug) && p.slug === productSlug);
