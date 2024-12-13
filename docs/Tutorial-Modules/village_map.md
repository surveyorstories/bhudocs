---
sidebar_position: 5
---

# Village Map



## **Village Map Model Algorithm Documentation**

### **Algorithm Overview**

The **Village Map Model Algorithm** is designed to generate a detailed village map by incorporating various parameters such as the **village boundary**, **land parcel details**, and notifications related to land surveys. The algorithm allows users to input data on land parcels, village details, and survey notifications, and outputs a final map aligned with the required survey standards.

### **Pre-Requisite Steps**

Before running the algorithm, ensure that:

1. **Project Saving**:
   
   - Ensure that the project is saved. The algorithm depends on saved project settings for output management.

2. **Layer Setup**:
   
   - Make sure the **village boundary layer** and **government land layer** are available in the project.

3. **Projection Consistency**:
   
   - Ensure that the project and layers are in the same **Projection (CRS)** to avoid issues during processing.

4. **Create Topo Layers**:
   
   - **Before running the algorithm**, use the **Create Topo Layers** tool from the toolset. This tool generates the following layers:
     - **TopoPoint**: Point layer for topographic features.
     - **TopoLine**: Line layer for topographic features.
     - **TopoPolygon**: Polygon layer for topographic features.
   - These layers are necessary for proper visualization and representation of topographic data in the generated map.

---

### **Input Parameters Table**

| **Parameter**                                    | **Description**                                                                        | **Type**            |
| ------------------------------------------------ | -------------------------------------------------------------------------------------- | ------------------- |
| **Village Final Shape File**                     | The final village boundary shapefile, usually in **polygon** format.                   | Shapefile (Polygon) |
| **LPM Number Column**                            | Column containing the Land Parcel Number (LPM) for identifying individual parcels.     | Field (Any)         |
| **Total Number of Land Parcels**                 | Input the total number of land parcels for the village.                                | String              |
| **Government Land Shape File**                   | Shape file representing government land in the village, usually in **polygon** format. | Shapefile (Polygon) |
| **Mandal Name (Telugu)**                         | Name of the mandal (administrative unit) in **Telugu** script.                         | String              |
| **Village Name (Telugu)**                        | Name of the village in **Telugu** script.                                              | String              |
| **Assistant Director Name (English)**            | Name of the Assistant Director in **English** for the village.                         | String              |
| **Commissioner Name (English)**                  | Name of the Commissioner in **English** for the village.                               | String              |
| **District Name (English)**                      | Name of the district (in **English**) selected from the dropdown list.                 | Enum                |
| **Mandal Name (English)**                        | Name of the mandal (administrative unit) in **English** script.                        | String              |
| **Village Name (English)**                       | Name of the village in **English** script.                                             | String              |
| **Village Code**                                 | Unique identifier for the village.                                                     | String              |
| **Old Revision Survey Year**                     | Year of the old revision survey for the village.                                       | String              |
| **Extent as per Old Revision Survey (Acres)**    | Land extent as per the old revision survey in **Acres**.                               | String              |
| **Extent as per Old Revision Survey (Hectares)** | Land extent as per the old revision survey in **Hectares**.                            | String              |
| **New Resurvey Year**                            | Year of the new resurvey for the village.                                              | String              |
| **Extent as per New Resurvey (Acres)**           | Land extent as per the new resurvey in **Acres**.                                      | String              |
| **Extent as per New Resurvey (Hectares)**        | Land extent as per the new resurvey in **Hectares**.                                   | String              |
| **Notification 6(1) Gazette Number**             | The **Gazette Number** of notification under section 6(1), used for the village.       | String              |
| **Notification 6(1) Gazette Date**               | The **Gazette Date** of notification under section 6(1), used for the village.         | Date                |
| **RC Notification 6(1) Number**                  | The **RC Notification Number** under section 6(1), used for the village.               | String              |
| **RC Notification 6(1) Date**                    | The **RC Notification Date** under section 6(1), used for the village.                 | Date                |
| **Notification 13 Gazette Number**               | **Gazette Number** for the 13th notification, used for the village.                    | String              |
| **Notification 13 Gazette Date**                 | **Gazette Date** for the 13th notification, used for the village.                      | Date                |

---

### **Process Flow**

1. **Create Topo Layers**:
   
   - Use the **Create Topo Layers** tool before running the algorithm.
   - This tool will generate three new layers:
     - **TopoPoint**: 
     - **TopoLine**
     - **TopoPolygon**: Represents polygon-based topographic features.
   - These layers are critical for topographic visualization and should be included in your project.

2. **Prepare Your Data**:
   
   - Ensure all input files (village shape file, government land shape file) are properly loaded in the project.
   - Fill in the required fields, such as LPM number column, total number of land parcels, and other village details.

3. **Run the Algorithm**:
   
   - Launch the **Village Map Model Algorithm** by filling in the input parameters.
   - The algorithm will:
     - Generate a village map with LPM boundaries and government land areas.
     - Create templates for both **A4** and **A3** formats.
     - Include survey notifications and revision details as per input fields.

4. **Output**:
   
   - The generated village map will include:
     - A detailed map with the **LPM boundaries** and **government land boundaries**.
     - Templates for both **A4** and **A3** formats.
     - Embedded notifications related to land surveys.

---

### **Post-Processing Steps (If Necessary)**

After running the algorithm, you can perform the following post-processing steps:

1. **Review Map Accuracy**:
   
   - Check the generated map to ensure that LPM boundaries and government land areas are correctly represented.

2. **Modify Survey Details**:
   
   - If there are any discrepancies in the survey year, extent, or notification details, adjust the relevant fields and re-run the algorithm if necessary.

3. **Final Template Adjustments**:
   
   - Make any required adjustments to the **A4** or **A3** templates based on project requirements.

4. **Verify Output Layers**:
   
   - Ensure all generated layers (e.g., village map, land boundaries, notification layers, and topo layers) are correctly aligned and properly labeled.

---

### **Key Considerations**

- **Projection Consistency**: Ensure all layers and the project are in the same CRS (Coordinate Reference System) to avoid alignment issues during processing.

- **Save the Project**: Always save the project before running the algorithm to ensure proper output file management.

- **Template Alignment**: The generated **A4** and **A3 LPM templates** will be aligned according to project settings, making them ready for export using the **Atlas function**.

- **Topo Layers**: The **TopoPoint**, **TopoLine**, and **TopoPolygon** layers are required for topographic representation and should be created before running the algorithm.

- **Survey Notifications**: The algorithm handles multiple notifications (e.g., notification 6(1) Gazette, RC notifications) for proper documentation of land survey processes.

---

### **Important Notes**

- The algorithm requires that **LPM number column** and other required fields are correctly specified in the input shape files to ensure accurate processing.
- The **District Name**, **Mandal Name**, and **Village Name** should match exactly as required for official documentation and notifications.

---

This documentation outlines the steps required to execute the **Village Map Model Algorithm**, ensuring that all parameters are set correctly for accurate map generation and output, including the creation of topographic layers before running the algorithm.
