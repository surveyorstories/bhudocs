---
sidebar_position: 10
---

# Identify Changes

The "Identify Changes" algorithm is a tool designed for QGIS to detect and highlight differences between two vector layers: a **Reference Layer** and a **New Modified Layer**. This tool supports **Point**, **Line**, and **Polygon** geometries, and it outputs the differences in vertices and geometries as new layers. It is ideal for tasks such as validating changes in cadastral surveys or GIS projects.

## Data Required

| Column                                   | Expecting Value (Description)                                                                                                                                               | Type      |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| New Modified Layer                       | This is the updated shapefile containing the changes. Ensure this layer is free of topology errors for accurate results. Supported geometry types: Point, Line, or Polygon. | Shapefile |
| Reference Layer                          | This is the original shapefile used for comparison. Supported geometry types: Point, Line, or Polygon.                                                                      | Shapefile |
| Changed Vertices                         | The output layer for modified vertices. Default: Temporary layer.                                                                                                           | Path      |
| Changed Features                         | The output layer for modified geometries. Default: Temporary layer.                                                                                                         | Path      |
| Open output file after running algorithm | Option to automatically open the output layer in QGIS Project after running the algorithm. Default: Yes.                                                                             | Boolean   |

:::tip

This Algorithm supports batch process

::: 

## How to

### 1. Run the algorithm

1. Open the "Identify Changes" tool in the QGIS processing toolbox.

2. Select the required input layers.

3. Specify output paths for Changed Vertices and Changed Result (or leave them as temporary layers).

4. Click **Run** to start the algorithm.

### **2. View Results**

- The results will be added to your QGIS project (Open output file after running algorithm is checked):
  - **Changed Vertices** will highlight all modified vertices.
  - **Changed Features** will show all modified geometries, with appropriate naming (e.g., Changed Points, Lines, or Polygons).

## **Expected Results**

- A **Changed Vertices** layer showing all modified points across the two input layers.
- A **Changed Features** layer showing altered geometries, dynamically named based on the geometry type (e.g., Changed Points, Lines, or Polygons).

### **Error Messages**

1. **Reference Layer is Invalid**
   
   - Ensure the selected Reference Layer is a valid vector layer.

2. **Changed Features is Invalid**
   
   - Verify the New Modified Layer is correctly loaded and free of topology errors.

### **Limitations**

- This tool may be computationally intensive for very large datasets.
- Topology errors in the New Modified Layer can lead to inaccurate results.

### **Tips for Best Results**

1. **Check Topology**
   
   - Validate and clean your shapefiles to ensure accuracy.
   - Use QGIS's built-in topology checker.

2. **Use Spatial Indexing**
   
   - If working with large datasets, ensure spatial indexing is enabled for better performance.

3. **Save Outputs**
   
   - While temporary layers are created by default, saving outputs ensures you retain results after QGIS is closed.
