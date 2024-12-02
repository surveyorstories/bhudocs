---
sidebar_position: 11
---

# Ground Validation Notices

This step-by-step guide will help you generate notices using the **Gv_notice** tool in QGIS. Follow the instructions carefully to ensure accurate results.

## How to

### Data Requirements Table

| **Column Name**                                             | **Description**                                                           | **Data Type**                   | **Example**                          |
| ----------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------- | ------------------------------------ |
| **Village name (Please enter your village name in telugu)** | Village Name (Please enter your Village Name in Telugu)                   | String/Text                     | ఆనందపురం                             |
| **Mandal name (Please enter mandal name in telugu)**        | Mandal Name (Please enter Mandal Name in Telugu)                          | String/Text                     | కోటబొమ్మాళి                          |
| **District name eng**                                       | District Name (Choose Your District)                                      | Enum/Text                       | Srikakulam                           |
| **Choose your data**                                        | Data Layer (Select the vector layer containing your data)                 | Vector Layer                    | Land parcel data Shapefile           |
| **Mode of generation**                                      | Mode of Generation (Khata Number Wise / Land Parcel Wise)                 | Enum/Text                       | Khata Number Wise / Land parcel wise |
| **Choose land parcel column**                               | Land Parcel Column (Select the column for land parcel numbers)            | Dropdown Field (Text/Number)12  | 123                                  |
| **Choose khata number column**                              | Khata Number Column (Select the column for khata numbers)                 | Dropdown Field (Text/Number)    | 12345                                |
| **Choose sysubdivision number**                             | Sy-Subdivision Number Column (Select if applicable)                       | Dropdown Field (Text/Number)    | 1                                    |
| **Choose acres column as per resurvey**                     | Acres Column as per Resurvey (Select the column for resurvey acres)       | Dropdown Field (Decimal/Number) | 3.5                                  |
| **Choose hectres column as per resurvey**                   | Hectares Column as per Resurvey (Select the column for resurvey hectares) | Dropdown Field (Decimal/Number) | 1.4                                  |
| **Choose acres as per old data**                            | Acres as per Old Data (Optional)                                          | Dropdown Field (Decimal/Number) | 3.0                                  |
| **Choose hectres as per old data**                          | Hectares as per Old Data (Optional)                                       | Dropdown Field (Decimal/Number) | 1.2                                  |
| **Choose pattadar name column**                             | Pattadar Name Column (Select the column for pattadar names)               | Dropdown Field (Text)           | తెలుకుట్టి  దివాకర్                  |
| **Choose pattadar relation name column**                    | Pattadar Relation Name Column (Optional)                                  | Dropdown Field (Text)           | యర్రంనాయుడు                          |
| **Choose remarks column**                                   | Remarks Column (Optional)                                                 | Dropdown Field (Text)           | -                                    |
| **Choose classification column**                            | Classification Column (Optional)                                          | Dropdown Field (Text)           | Agricultural Land                    |

### 1. Open the Tool

1. Launch QGIS and open your project.
2. Go to the **Processing Toolbox**.
3. Search for **`Gv_notice`** in the toolbox.
4. Double-click on the tool to open the input dialog.

### 2. Select Your Input Data

1. In the dialog, locate the field **`Choose Your Data`**.
2. Click on the dropdown and select your data layer (e.g., land parcel or khata data).
3. Ensure your data contains all necessary columns as detailed below.

### 3. Data Requirements

Before running the tool, make sure your input data has the [**Data Requirements Table**](#data-requirements-table) columns with the correct data types. These columns will be used to generate notices based on the selected options.

### 4. Enter Basic Details

Fill in the following fields:

1. **Village Name**: Enter the name of your village in Telugu. *(Example: ఆనందపురం)*
2. **Mandal Name**: Enter the name of your mandal in Telugu. *(Example: కోటబొమ్మాళి)*
3. **District Name (English)**: Select your district name from the dropdown. *(Example: Srikakulam)*

### 5. Choose the Mode of Generation

1. Locate the field **`Mode of Generation`**.
2. Select one of the following options:
   - **Khata Number Wise**: Generates notices grouped by Khata numbers.
   - **Land Parcel Wise**: Generates notices for each land parcel.

### 6. Map the Data Columns

Map the fields from your dataset to the required parameters. Ensure you select the appropriate columns from your input data:

1. **Land Parcel Column**: Select the column containing land parcel numbers.
2. **Khata Number Column**: Select the column containing Khata numbers.
3. **Sy-Subdivision Number**: Select the column for subdivision numbers.
4. **Acres and Hectares (Resurvey)**: Map the columns for acres and hectares as per resurvey data.
5. **Acres and Hectares (Old Data)** *(Optional)*: Map these columns if old records are available.
6. **Pattadar Name**: Select the column containing pattadar names.
7. **Pattadar Relation Name** *(Optional)*: If applicable, map the column for pattadar's relation.
8. **Remarks Column** *(Optional)*: If there are remarks for each land record, map this column.
9. **Classification Column** *(Optional)*: If applicable, map the column for land classification.

### 7. Run the Tool

1. Double-check all inputs and parameters.
2. Click **Run** to start the process.
3. Wait for the processing to complete. The output layers will be generated automatically.

### 8. View the Output

1. The tool generates the following layers:
   - **Notices_Data.gpkg**: Contains the refactored dataset for notices.
   - **Khata_Data.gpkg**: Aggregated data for Khata-based notices (if selected).
2. Add these layers to your QGIS project to view the processed data.

### 9. Generate the Notices

1. Use the **Atlas Generation** feature in QGIS to generate notices from the processed data.
   - Open the **Atlas** panel and select the output layer (e.g., `Notices_Data` or `Khata_Data`).
   - Configure your page layout and export the notices in the desired format (e.g., PDF or PNG).

## Tips for Success

- Ensure all required columns in your data are properly filled, mapped and formatted.
- Use the correct Telugu spelling for village and mandal names.
- For large datasets, consider splitting the data into smaller chunks to speed up processing.

## Troubleshooting

1. **Input Data Error**: If the tool fails, check that the selected columns contain valid data.
2. **Output Not Displayed**: Ensure the output layers are added to the QGIS project.
3. **Missing Notices**: Verify that all required fields are mapped correctly during input setup.