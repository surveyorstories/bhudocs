---
sidebar_position: 13
---


# Patta Sub-Division

The **Patta Sub-Division Algorithm** is a tool designed to automate and streamline the process of dividing land parcels and integrating various data layers in a QGIS environment. This algorithm is particularly useful for creating sub-divisions of revenue villages, and it ensures that the necessary spatial, tabular, and topological data are properly integrated. The output includes both spatial data and finalized layouts, including **A4 and A3 LPM templates** that are aligned with the project settings for seamless map export using the **Atlas function** in QGIS.

## Purpose

The algorithm helps in generating a comprehensive sub-division of land records, enhancing the quality and accuracy of the mapping process. The tool integrates topological precision, data from different sources (like RLR, ROR, ULPIN), and generates standardized templates for seamless map export. The integration of **Topo Layers** ensures topological integrity before running the algorithm.

###### **Pre-Requisite Steps**

Before running the algorithm, ensure the following:

1. **Project Consistency**:

   - Both **Village Final Shape File** and **Cutted Layer** layers must be in the **same projection** to avoid any misalignment during processing. Verify the projection settings of the layers and the project to ensure they match.
   - If needed, adjust the projection by right-clicking the layer and choosing **Layer CRS** or adjusting the **Project CRS** settings.

2. **Save the Project**:

   - The QGIS project must be saved before running the algorithm, as it depends on the project directory for saving output files and layers.
   - Ensure that all layers are correctly loaded and saved in the project to maintain integrity during the algorithm execution.

### Data Requirements

| **Parameter**                             | **Description**                                                                               | **Type**                 |
| ----------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------ |
| **Village Final Shape File**              | The final approved shapefile of the village boundary, typically containing polygon data.      | Shapefile (Polygon)      |
| **Cutted Layer**                          | A layer representing the subdivisions or cuts to be applied to the village polygons.          | Shapefile (Line/Polygon) |
| **Land Parcel Number Column**             | Column containing land parcel number for identifying individual parcels in the village shape. | Field (Any)              |
| **Area in Acres Column**                  | Column containing area information in acres for land parcels.                                 | Field (Any)              |
| **Area in Hectares Column**               | Column containing area information in hectares for land parcels.                              | Field (Any)              |
| **Create Side Villages Polygon Layer**    | Option to generate a polygon layer for side villages.                                         | Boolean                  |
| **Frill Line Length (Multi Ring Length)** | The length of the frill line to be applied around side village boundaries.                    | Distance (1-20)          |
| **RLR/ROR File**                          | Excel file containing Resurvey Land Register (RLR) or Records of Rights (ROR).                | File (*.xlsx)            |
| **Select File Type (RLR/ROR)**            | Dropdown to specify the type of file selected (either RLR or ROR).                            | Enum                     |
| **ULPIN Layer**                           | CSV file containing Unique Land Parcel Identification Numbers (ULPIN) data.                   | File (*.csv)             |
| **LP Number Column**                      | Column containing LP (Land Parcel) numbers in the ULPIN layer.                                | Field (Any)              |
| **ULPIN Number Column**                   | Column containing ULPIN numbers in the ULPIN layer.                                           | Field (Any)              |
| **7-Digit Revenue Village Code**          | Unique 7-digit code identifying the revenue village.                                          | String                   |
| **Village Name (Telugu)**                 | Name of the village in Telugu script.                                                         | String                   |
| **Mandal Name (Telugu)**                  | Name of the mandal (administrative unit) in Telugu script.                                    | String                   |
| **District Name (English)**               | Name of the district selected from a dropdown list.                                           | Enum                     |
| **Village Surveyor Name**                 | Name of the surveyor responsible for the village.                                             | String                   |

## How To

:::warning  
Ensure that the project and both the layers  are in the same Projection (CRS) and project must be saved before running the algorithm.  
:::

### 1. Configure Input Files

1. **Load Spatial Data**:

- Load the **Village Final Shape File** and **Cutted Layer** (polygon or line) into your QGIS project.

- Use **Layer > Add Layer > Add Vector Layer** or drag-and-drop the files.

2. **Load Tabular Data**:

   - Choose the appropriate **RLR/ROR File** and **ULPIN Layer** through the file selection interface.

### 2. Use the Create Topo Layers Tool

Before running the algorithm, use the **Create Topo Layers** tool to generate topological data that ensures the spatial integrity of the sub-division process:

1. **Create Topo Layers**:

- **Before running the algorithm**, use the **Create Topo Layers** tool from the toolset. This tool generates the following layers:
  
  - **TopoPoint**: Point layer for topographic features.
  - **TopoLine**: Line layer for topographic features.
  - **TopoPolygon**: Polygon layer for topographic features.
  - These layers are necessary for proper visualization and representation of topographic data in the generated map. for detailed instructions visit [How to create Topo Layers](./tool_set#1-topo-layers)

2. **Validate Topo Layers**:

- Ensure that these topo layers are aligned correctly and that no topological errors are present in the generated layers.

### 3. Define Algorithm Parameters

- **Select Data Fields**:
  - Ensure all fields, such as **Land Parcel Number Column**, **Area in Acres Column**, **Area in Hectares Column**, and the **LP Number Column** in the ULPIN layer, are correctly mapped.
- **Set Village Information**:
  - Enter the **7-Digit Revenue Village Code**, **Village Name (Telugu)**, **Mandal Name (Telugu)**, and **District Name**.

### 4. Execute the Patta Sub-Division Algorithm

1. Once all parameters are configured, click **Run**.
2. The algorithm will process the data and generate:

- Sub-divided land records based on the Cutted Layer.
- Topological accuracy for the land parcels.
- A side villages polygon layer (if selected).

:::info  
All layers and files generated by the Panel are saved in the **Project Directory**.  
:::

### 5. Template Generation for Map Export

1. **A4 and A3 LPM Templates**:

- The algorithm automatically generates both **A4** and **A3 LPM templates** for map export. These templates are pre-aligned with the project’s settings to ensure accurate scaling and positioning when using QGIS’s **Atlas** function.

2. **Template Alignment**:

- Both templates are configured to match the project’s spatial reference system, ensuring that all maps generated through the Atlas function are correctly scaled for printing or distribution.

---

## Output Layers

1. **Sub-divided Village Layer**: The final polygon layer containing sub-divisions of land parcels.
2. **Topo Layers**:

- TopoPoint
- TopoLine
- TopoPolygon

3. **Side Village Frill Lines**: Optional lines marking the boundaries of side villages.

4. **ULPIN Linked Layer**: A layer linking ULPIN numbers with the respective land parcels.

### A4 and A3 LPM Templates

- The algorithm automatically adds both the **A4 LPM template** and the **A3 LPM template** to the project.
- These templates are aligned with the current project settings to ensure consistent page size and layout for printing.

### Atlas Setup

- The generated **A4** and **A3** templates are integrated into the **Atlas function** in QGIS, enabling seamless generation of map layouts for the sub-divided parcels. This ensures that maps can be exported or printed without manual adjustments.

---

## Post-Processing Steps

After executing the algorithm, you may need to perform some adjustments for final map presentation and data accuracy:

1. **Adjust Topo Layers**:

- If any errors are detected in the **TopoPoint**, **TopoLine**, or **TopoPolygon** layers, make corrections manually by selecting the appropriate layer and editing the geometry.

2. **Add Junction Stones**:

- If required, insert **Bi-Junction (Old/New)** or **Tri-Junction (Old/New)** stones using the pre-existing stone layers (TopoPoint).

3. **Modify Side Villages**:

- If the side villages layer has been created, use the **Side Village Frill Line** and **Side Village Layer** to adjust village boundary labels or frill line placement.

4. **Review Map Templates**:

- Review both the **A4** and **A3 LPM templates** generated during the process. Make any necessary adjustments in the layout for print or export.

5. **Verify Layer Integrity**:

- Ensure that no layers have been renamed or altered, as this could disrupt the functionality of the algorithm.

---

## Tips and Warnings

1. **Save Your Project**:

- Always save your QGIS project before running the algorithm to avoid data loss.

2. **Ensure Proper Layer Names**:

- Avoid renaming any layers generated by the algorithm, as it may disrupt the workflow.

3. **Verify Data Consistency**:

- Make sure that all spatial and tabular data are correctly aligned and that no field mappings are missing.

4. **Double-Check Telugu Names**:

- Ensure that Telugu names for the village and mandal are typed accurately, as this impacts the final report.

---

## Conclusion

The **Patta Sub-Division Algorithm** provides a powerful tool for automating the creation and management of land record sub-divisions. It seamlessly integrates spatial data, land records, and topological accuracy, while generating map templates for professional-quality output. By following the steps outlined above, users can efficiently process, visualize, and export land subdivision maps with minimal manual intervention.
