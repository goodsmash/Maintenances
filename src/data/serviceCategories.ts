export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: Service[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  estimatedDuration: string;
  priceRange: {
    min: number;
    max: number;
  };
  urgencyLevels: UrgencyLevel[];
  requiredQualifications: string[];
  commonIssues: string[];
}

export interface UrgencyLevel {
  id: string;
  name: string;
  description: string;
  responseTime: string;
  priceMultiplier: number;
}

export const urgencyLevels: UrgencyLevel[] = [
  {
    id: 'routine',
    name: 'Routine',
    description: 'Regular maintenance or non-urgent repairs',
    responseTime: '3-5 business days',
    priceMultiplier: 1,
  },
  {
    id: 'priority',
    name: 'Priority',
    description: 'Issues requiring attention but not emergency',
    responseTime: '24-48 hours',
    priceMultiplier: 1.25,
  },
  {
    id: 'urgent',
    name: 'Urgent',
    description: 'Serious issues requiring quick response',
    responseTime: '4-8 hours',
    priceMultiplier: 1.5,
  },
  {
    id: 'emergency',
    name: 'Emergency',
    description: 'Critical issues requiring immediate attention',
    responseTime: '1-2 hours',
    priceMultiplier: 2,
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'plumbing',
    name: 'Plumbing',
    description: 'Water supply, drainage, and plumbing fixture services',
    icon: 'Droplet',
    services: [
      {
        id: 'leak_repair',
        name: 'Leak Detection & Repair',
        description: 'Identify and fix water leaks in pipes, fixtures, or appliances',
        estimatedDuration: '1-3 hours',
        priceRange: { min: 100, max: 500 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Licensed Plumber', 'Leak Detection Certification'],
        commonIssues: [
          'Dripping faucets',
          'Pipe leaks',
          'Water meter leaks',
          'Toilet leaks',
          'Hidden leaks in walls or floors',
          'Slab leaks',
          'Water pressure issues',
        ],
      },
      {
        id: 'drain_cleaning',
        name: 'Drain Cleaning',
        description: 'Clear clogged drains and prevent future blockages',
        estimatedDuration: '1-2 hours',
        priceRange: { min: 75, max: 300 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Licensed Plumber', 'Drain Cleaning Equipment Certification'],
        commonIssues: [
          'Slow drains',
          'Complete blockages',
          'Recurring clogs',
          'Bad odors',
          'Tree root intrusion',
          'Grease buildup',
          'Foreign object removal',
        ],
      },
      {
        id: 'fixture_installation',
        name: 'Fixture Installation & Replacement',
        description: 'Install or replace plumbing fixtures including faucets, toilets, and sinks',
        estimatedDuration: '2-4 hours',
        priceRange: { min: 150, max: 800 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Licensed Plumber', 'Fixture Installation Certification'],
        commonIssues: [
          'Outdated fixtures',
          'Broken fixtures',
          'Water efficiency upgrades',
          'Style updates',
          'ADA compliance',
        ],
      },
      {
        id: 'pipe_repair',
        name: 'Pipe Repair & Replacement',
        description: 'Repair or replace damaged pipes, including repiping services',
        estimatedDuration: '4-8 hours',
        priceRange: { min: 500, max: 5000 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Master Plumber', 'Pipe Fitting Certification'],
        commonIssues: [
          'Corroded pipes',
          'Frozen pipes',
          'Burst pipes',
          'Low water pressure',
          'Whole house repiping',
        ],
      },
      {
        id: 'water_heater',
        name: 'Water Heater Services',
        description: 'Installation, repair, and maintenance of water heaters',
        estimatedDuration: '2-6 hours',
        priceRange: { min: 250, max: 3000 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Licensed Plumber', 'Water Heater Certification'],
        commonIssues: [
          'No hot water',
          'Insufficient hot water',
          'Strange noises',
          'Leaking tank',
          'Pilot light issues',
          'Thermostat problems',
        ],
      },
      {
        id: 'sewer_line',
        name: 'Sewer Line Services',
        description: 'Inspection, repair, and replacement of sewer lines',
        estimatedDuration: '4-12 hours',
        priceRange: { min: 500, max: 10000 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Master Plumber', 'Sewer Line Certification', 'Video Inspection Certification'],
        commonIssues: [
          'Backed up sewer',
          'Tree root invasion',
          'Collapsed lines',
          'Offset pipes',
          'Corroded lines',
        ],
      },
    ],
  },
  {
    id: 'hvac',
    name: 'HVAC',
    description: 'Heating, ventilation, and air conditioning services',
    icon: 'Thermometer',
    services: [
      {
        id: 'ac_repair',
        name: 'Air Conditioning Repair',
        description: 'Diagnose and fix AC system issues',
        estimatedDuration: '1-4 hours',
        priceRange: { min: 100, max: 800 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['HVAC License', 'EPA Certification'],
        commonIssues: [
          'Not cooling properly',
          'Strange noises',
          'Water leaks',
          'Frozen coils',
          'Electrical issues',
          'Thermostat problems',
        ],
      },
      {
        id: 'heating_repair',
        name: 'Heating System Repair',
        description: 'Repair and maintenance of heating systems',
        estimatedDuration: '1-4 hours',
        priceRange: { min: 100, max: 1000 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['HVAC License', 'Gas Fitting License'],
        commonIssues: [
          'No heat',
          'Uneven heating',
          'Pilot light issues',
          'Strange odors',
          'Carbon monoxide concerns',
        ],
      },
      {
        id: 'system_maintenance',
        name: 'Preventive Maintenance',
        description: 'Regular maintenance to ensure optimal system performance',
        estimatedDuration: '2-3 hours',
        priceRange: { min: 150, max: 400 },
        urgencyLevels: urgencyLevels.filter(level => ['routine', 'priority'].includes(level.id)),
        requiredQualifications: ['HVAC License', 'Preventive Maintenance Certification'],
        commonIssues: [
          'Annual tune-ups',
          'Filter changes',
          'System cleaning',
          'Performance optimization',
          'Energy efficiency checks',
        ],
      },
      {
        id: 'duct_services',
        name: 'Ductwork Services',
        description: 'Inspection, cleaning, and repair of ductwork',
        estimatedDuration: '3-6 hours',
        priceRange: { min: 300, max: 1500 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['HVAC License', 'Duct Cleaning Certification'],
        commonIssues: [
          'Poor airflow',
          'Dust and debris',
          'Leaking ducts',
          'Mold growth',
          'Indoor air quality',
        ],
      },
      {
        id: 'system_installation',
        name: 'System Installation',
        description: 'Installation of new HVAC systems',
        estimatedDuration: '8-12 hours',
        priceRange: { min: 3000, max: 15000 },
        urgencyLevels: urgencyLevels.filter(level => ['routine', 'priority'].includes(level.id)),
        requiredQualifications: ['HVAC License', 'Installation Certification', 'EPA Certification'],
        commonIssues: [
          'System upgrades',
          'Energy efficiency improvements',
          'Zone control installation',
          'Smart thermostat integration',
        ],
      },
    ],
  },
  {
    id: 'electrical',
    name: 'Electrical',
    description: 'Electrical system installation, repair, and maintenance',
    icon: 'Zap',
    services: [
      {
        id: 'electrical_repair',
        name: 'General Electrical Repair',
        description: 'Diagnose and fix electrical issues',
        estimatedDuration: '1-4 hours',
        priceRange: { min: 100, max: 600 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Licensed Electrician', 'Electrical Safety Certification'],
        commonIssues: [
          'Circuit breaker problems',
          'Outlet issues',
          'Flickering lights',
          'Dead circuits',
          'Electrical surges',
        ],
      },
      {
        id: 'panel_services',
        name: 'Electrical Panel Services',
        description: 'Upgrade or repair electrical panels',
        estimatedDuration: '4-8 hours',
        priceRange: { min: 500, max: 3000 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Master Electrician', 'Panel Installation Certification'],
        commonIssues: [
          'Outdated panels',
          'Insufficient power',
          'Panel upgrades',
          'Circuit additions',
          'Safety concerns',
        ],
      },
      {
        id: 'lighting_installation',
        name: 'Lighting Installation',
        description: 'Install or upgrade lighting fixtures',
        estimatedDuration: '1-3 hours',
        priceRange: { min: 100, max: 500 },
        urgencyLevels: urgencyLevels.filter(level => ['routine', 'priority'].includes(level.id)),
        requiredQualifications: ['Licensed Electrician'],
        commonIssues: [
          'New fixture installation',
          'LED upgrades',
          'Dimmer installation',
          'Security lighting',
          'Smart lighting systems',
        ],
      },
      {
        id: 'wiring_services',
        name: 'Wiring Services',
        description: 'Install, repair, or upgrade electrical wiring',
        estimatedDuration: '4-8 hours',
        priceRange: { min: 500, max: 5000 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Master Electrician', 'Wiring Certification'],
        commonIssues: [
          'Old wiring',
          'Code violations',
          'New circuit installation',
          'Aluminum wiring replacement',
          'Rewiring projects',
        ],
      },
    ],
  },
  {
    id: 'appliance',
    name: 'Appliance Repair',
    description: 'Repair and maintenance of household appliances',
    icon: 'Settings',
    services: [
      {
        id: 'refrigerator_repair',
        name: 'Refrigerator Repair',
        description: 'Repair and maintenance of refrigerators and freezers',
        estimatedDuration: '1-3 hours',
        priceRange: { min: 100, max: 700 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Appliance Repair License', 'EPA 608 Certification'],
        commonIssues: [
          'Not cooling properly',
          'Ice maker problems',
          'Water dispenser issues',
          'Strange noises',
          'Door seal problems',
        ],
      },
      {
        id: 'washer_dryer_repair',
        name: 'Washer & Dryer Repair',
        description: 'Repair of washing machines and dryers',
        estimatedDuration: '1-3 hours',
        priceRange: { min: 100, max: 600 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Appliance Repair License'],
        commonIssues: [
          'Not starting',
          'Leaking',
          'Not spinning',
          'Not heating',
          'Strange noises',
          'Vibration problems',
        ],
      },
      {
        id: 'dishwasher_repair',
        name: 'Dishwasher Repair',
        description: 'Repair and maintenance of dishwashers',
        estimatedDuration: '1-3 hours',
        priceRange: { min: 100, max: 500 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Appliance Repair License'],
        commonIssues: [
          'Not cleaning properly',
          'Leaking',
          'Drainage issues',
          'Not starting',
          'Strange noises',
        ],
      },
      {
        id: 'oven_repair',
        name: 'Oven & Range Repair',
        description: 'Repair of ovens, stoves, and ranges',
        estimatedDuration: '1-3 hours',
        priceRange: { min: 100, max: 600 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Appliance Repair License', 'Gas Appliance Certification'],
        commonIssues: [
          'Not heating properly',
          'Temperature issues',
          'Burner problems',
          'Door problems',
          'Control panel issues',
        ],
      },
    ],
  },
  {
    id: 'landscaping',
    name: 'Landscaping & Grounds',
    description: 'Outdoor maintenance and landscaping services',
    icon: 'Tree',
    services: [
      {
        id: 'lawn_maintenance',
        name: 'Lawn Maintenance',
        description: 'Regular lawn care and maintenance services',
        estimatedDuration: '1-4 hours',
        priceRange: { min: 50, max: 200 },
        urgencyLevels: urgencyLevels.filter(level => ['routine', 'priority'].includes(level.id)),
        requiredQualifications: ['Landscaping License'],
        commonIssues: [
          'Mowing',
          'Edging',
          'Fertilization',
          'Weed control',
          'Pest management',
        ],
      },
      {
        id: 'tree_service',
        name: 'Tree Service',
        description: 'Tree trimming, removal, and maintenance',
        estimatedDuration: '2-8 hours',
        priceRange: { min: 200, max: 2000 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Arborist Certification', 'Tree Service License'],
        commonIssues: [
          'Dead branches',
          'Tree removal',
          'Storm damage',
          'Disease treatment',
          'Root problems',
        ],
      },
      {
        id: 'irrigation',
        name: 'Irrigation Systems',
        description: 'Installation and repair of irrigation systems',
        estimatedDuration: '2-6 hours',
        priceRange: { min: 200, max: 3000 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Irrigation License', 'Backflow Certification'],
        commonIssues: [
          'Broken sprinklers',
          'Leaking pipes',
          'Controller problems',
          'Coverage issues',
          'Winterization',
        ],
      },
      {
        id: 'landscape_design',
        name: 'Landscape Design',
        description: 'Custom landscape design and installation',
        estimatedDuration: '8-40 hours',
        priceRange: { min: 1000, max: 20000 },
        urgencyLevels: urgencyLevels.filter(level => ['routine', 'priority'].includes(level.id)),
        requiredQualifications: ['Landscape Architecture License', 'Design Certification'],
        commonIssues: [
          'New installation',
          'Renovation',
          'Hardscape design',
          'Plant selection',
          'Drainage solutions',
        ],
      },
    ],
  },
  {
    id: 'pest_control',
    name: 'Pest Control',
    description: 'Pest inspection, prevention, and elimination services',
    icon: 'Bug',
    services: [
      {
        id: 'general_pest',
        name: 'General Pest Control',
        description: 'Treatment for common household pests',
        estimatedDuration: '1-2 hours',
        priceRange: { min: 100, max: 300 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Pest Control License', 'EPA Certification'],
        commonIssues: [
          'Ants',
          'Roaches',
          'Spiders',
          'Rodents',
          'Silverfish',
        ],
      },
      {
        id: 'termite_service',
        name: 'Termite Control',
        description: 'Termite inspection and treatment',
        estimatedDuration: '2-6 hours',
        priceRange: { min: 500, max: 3000 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Termite Control License', 'Wood Destroying Insect Certification'],
        commonIssues: [
          'Active infestations',
          'Prevention treatment',
          'Damage repair',
          'Annual inspections',
          'Warranty services',
        ],
      },
      {
        id: 'bed_bug_treatment',
        name: 'Bed Bug Treatment',
        description: 'Specialized bed bug elimination services',
        estimatedDuration: '2-4 hours',
        priceRange: { min: 500, max: 1500 },
        urgencyLevels: urgencyLevels,
        requiredQualifications: ['Pest Control License', 'Bed Bug Treatment Certification'],
        commonIssues: [
          'Active infestations',
          'Heat treatment',
          'Chemical treatment',
          'Prevention measures',
          'Follow-up inspections',
        ],
      },
    ],
  },
];
