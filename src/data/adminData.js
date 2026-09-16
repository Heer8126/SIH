export const ADMIN_STATS = {
  uploadsThisMonth: 48,
  storageUsedTB: 1.42,
  storageLimitTB: 5.0,
  pendingApprovals: 7,
  publishedContent: 2450,
  monthlyTrend: [
    { month: 'Jan', uploads: 32 },
    { month: 'Feb', uploads: 45 },
    { month: 'Mar', uploads: 48 },
    { month: 'Apr', uploads: 52 },
    { month: 'May', uploads: 41 },
    { month: 'Jun', uploads: 60 },
  ],
  storageBreakdown: [
    { type: 'Datasets (NetCDF/HDF5)', size: '840 GB', percentage: 59 },
    { type: 'Expedition Reports (PDF)', size: '280 GB', percentage: 20 },
    { type: 'High-Res Media & Video', size: '220 GB', percentage: 15 },
    { type: 'GIS & Bathymetry Maps', size: '80 GB', percentage: 6 }
  ]
};

export const INITIAL_PENDING_REVIEWS = [
  {
    id: "rev-001",
    title: "AI Draft: High-Resolution Melt Dynamics of Sutri Dhaka Glacier (Summary for Public Outreach)",
    contentType: "Public Summary",
    sourceReport: "High-Altitude Cryosphere Mass Balance Monitoring at Himansh Station",
    region: "Himalaya",
    generatedDate: "2024-03-12",
    status: "Pending",
    aiConfidence: "96%",
    summarySnippet: "This automated draft translates complex surface elevation change data into accessible narrative explaining how summer warming accelerates glacier discharge in Lahaul-Spiti."
  },
  {
    id: "rev-002",
    title: "AI Draft: IndARC Mooring Acoustic Telemetry 2023 Highlights",
    contentType: "Social Post",
    sourceReport: "IndARC Sub-Surface Oceanographic Observatory Data Stream",
    region: "Arctic",
    generatedDate: "2024-03-10",
    status: "Pending",
    aiConfidence: "91%",
    summarySnippet: "Highlighting key ocean temp records at 190m depth in Svalbard for social dissemination on National Science Day."
  },
  {
    id: "rev-003",
    title: "AI Draft: Microplastic Fiber Transport in Greenlandic Fjords",
    contentType: "Field Article",
    sourceReport: "Microplastic Contamination Profiles in Greenland Fjords",
    region: "Arctic",
    generatedDate: "2024-03-08",
    status: "Pending",
    aiConfidence: "89%",
    summarySnippet: "Synthesizing Raman spectroscopy data on PET synthetic polymer deposition in sea ice cores into an educational infographic story."
  },
  {
    id: "rev-004",
    title: "AI Draft: Maitri Station Black Carbon Aerosol Trends 2022-2023",
    contentType: "Public Summary",
    sourceReport: "Annual Atmospheric Aerosol Bulletin at Maitri",
    region: "Antarctic",
    generatedDate: "2024-03-05",
    status: "Pending",
    aiConfidence: "94%",
    summarySnippet: "Summarizing localized soot spikes versus background pristine Antarctic air measurements for policy stakeholders."
  },
  {
    id: "rev-005",
    title: "AI Draft: 43rd Antarctic Expedition Logistics & Science Operations Overview",
    contentType: "Video Caption",
    sourceReport: "43rd Indian Scientific Expedition to Antarctica Report",
    region: "Antarctic",
    generatedDate: "2024-03-01",
    status: "Pending",
    aiConfidence: "98%",
    summarySnippet: "Brief video narrative highlighting cargo unloading off MV Vasiliy Golovnin at Bharati helipad."
  }
];

export const RECENT_UPLOADS = [
  {
    id: "up-881",
    fileName: "43rd_ISEA_Oceanography_CTD_Master.nc",
    type: "Dataset",
    uploader: "Dr. Ananya Swaminathan",
    date: "2024-03-14",
    size: "182.4 MB",
    status: "Published"
  },
  {
    id: "up-882",
    fileName: "Himansh_AWS_Temperature_Logs_2023.csv",
    type: "Dataset",
    uploader: "Cryosphere Group",
    date: "2024-03-12",
    size: "95.6 MB",
    status: "Published"
  },
  {
    id: "up-883",
    fileName: "Bharati_Drone_UAV_Photogrammetry.zip",
    type: "Photo",
    uploader: "Polar Ops Team",
    date: "2024-03-09",
    size: "1.8 GB",
    status: "Published"
  },
  {
    id: "up-884",
    fileName: "Svalbard_Biological_Assay_Report_v2.pdf",
    type: "Expedition Report",
    uploader: "Dr. K. P. Krishnan",
    date: "2024-03-04",
    size: "28.4 MB",
    status: "Published"
  }
];
