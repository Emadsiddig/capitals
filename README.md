# Capitals Application and Dataset

A comprehensive, production-ready utility and dataset designed for mapping, querying, 
and retrieving global country capitals, geographic coordinates, and standardized country codes.
This project serves as a highly optimized lookup solution suitable for integration into web applications,
localized services, and data analysis pipelines.

---

## Detailed Features

-Comprehensive Global Coverage: Includes all universally recognized countries, territories, and their respective capital cities with verified data attributes.
-Geographic Spatial Coordinates: Provides precise latitude and longitude data for every capital city, allowing for immediate integration with mapping APIs such as Google Maps, OpenStreetMap, or Leaflet.
-Standardized ISO Mapping: Features dual-mapping to both ISO 3166-1 alpha-2 and alpha-3 codes to ensure seamless compatibility with external databases and third-party APIs.
-Flexible Programmatic Access: Built with highly optimized search algorithms to allow fast querying by country name, capital name, or ISO codes with built-in case-insensitivity.
-Zero Dependencies: The core dataset and parsing utilities are built using native language features, ensuring minimal project footprint and zero security vulnerabilities from external packages.

---

## Repository Architecture
```
capitals/
├── data/
│   ├── capitals.json         # Master dataset in JSON format
│   └── capitals.csv          # Flat-file dataset for spreadsheet/data analysis
├── src/
│   ├── index.js              # Main entry point and query logic
│   └── utils.js              # Helper functions for string matching and filtering
├── tests/
│   └── lookup.test.js        # Unit tests for verification
├── LICENSE                   # MIT License details
└── README.md                 # Project documentation
