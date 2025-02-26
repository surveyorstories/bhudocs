# Triangle Widget Documentation

## User Guide

The Triangle Widget provides an intuitive interface for drawing a triangle based on a selected line feature in your QGIS project. It is designed for both novice and advanced users to quickly and accurately create triangles using specified lengths and orientations.

### Getting Started

1. **Ensure a Line Layer is Active:**
   
   - Open your QGIS project.
   
   - Ensure that a line layer is loaded and selected.
   
   - Select exactly one line feature in the active layer.

2. **Launching the Widget:**
   
   - Open the Triangle Widget from the plugin or tool menu.

### Using the Widget

1. **Input Start and End Lengths:**
   
   - Specify the lengths for the two triangle sides that will originate from the selected line’s start and end points.
   
   - Use the provided input boxes to set these values.

2. **Select Orientation:**
   
   - Choose the triangle's orientation (“Left” or “Right”) relative to the selected line.

3. **Choose Measurement Units:**
   
   - Select the desired unit of measurement (Meters, Metric Links, or Gunter’s Links).
   
   - Lengths will be automatically converted to meters based on your choice.

4. **Draw the Triangle:**
   
   - Click the "Draw Triangle" button to create the triangle.
   
   - The triangle will appear as a new layer named “Triangle Lines” in your project.

### Saving Your Work

1. **Save the Triangle Layer:**
   
   - If the triangle layer is temporary, you will be prompted to save it when closing the widget.
   
   - Alternatively, use the “Save” option to export the triangle to a permanent format such as Shapefile, GeoJSON, or GPKG.

2. **Update Existing Layers:**
   
   - If the layer is already permanent, any changes can be saved directly to the existing file.

### Exiting the Widget

1. **Save Changes Prompt:**
   
   - If you’ve drawn a triangle, you will be prompted to save it before closing.
   
   - Choose “Yes” to save, “No” to discard, or “Cancel” to return to the widget.

2. **Layer Cleanup:**
   
   - The widget will automatically remove temporary layers (e.g., “Start and End Points”) when closed.

### Tips for Success

- Ensure that the selected line feature has a valid geometry and is not empty.

- Verify the side lengths satisfy the triangle inequality (a + b > c).

- Use appropriate units to match your project’s coordinate reference system (CRS).

### Troubleshooting

- If no line layer is active or a feature is not selected, the widget will display an error message.

- Ensure side lengths are greater than zero and satisfy triangle formation rules.

- If saving fails, check the file path and format for compatibility.

The Triangle Widget streamlines the process of creating and managing triangles, helping you achieve precise results with ease.

# **User Documentation for the Plotter Widget**

The **Plotter Widget** is a PyQt5-based graphical interface integrated into QGIS that enables users to plot calculated points (cut points, offset points, and extended points) along a selected line feature in the active layer. This tool is particularly useful for precise geospatial calculations and visualization in projects requiring line geometry manipulations.

---

## **Features**

1. **Unit Conversion**: Supports multiple units for calculations:
   
   - Meters
   - Metric Links (1 Metric Link = 0.2 meters)
   - Gunter's Links (1 Gunter's Link = 0.201168 meters)

2. **Point Selection**: Allows users to choose the base point for calculations:
   
   - Start Point
   - End Point

3. **Dynamic Calculations**:
   
   - Cut Points: Interpolated points at a specified distance along the line.
   - Offset Points: Points calculated perpendicular to the line at a specified offset distance.
   - Extended Points: Points created by extending the line when the cut distance exceeds the line's length.

4. **Layer Integration**:
   
   - Adds new points to a memory layer in the project.
   - Supports multi-part and single-part line geometries.

5. **Categorized Symbology**:
   
   - Points are styled based on their type (Start Point, End Point, Cut Point, Offset Point, Extended Point).

6. **Error Handling**: Provides meaningful error messages for invalid inputs or unsupported operations.

---

## **How to Use the Plotter Widget**

### **Step 1: Open the Plotter Widget**

1. Launch QGIS.
2. Open the `Plotter Widget` either as a plugin or from the custom GUI panel, depending on your setup.

---

### **Step 2: Select a Line Feature**

1. Activate a layer containing line features in the QGIS Layers panel.
2. Select exactly one line feature to perform calculations.

> **Note**: The tool supports both single and multi-part line geometries.

---

### **Step 3: Configure Inputs**

#### **a. Units**

- Select the desired unit for distance measurements from the **Units** dropdown:
  - `Meters` (default)
  - `Metric Links`
  - `Gunter's Links`

#### **b. Base Point**

- Choose whether to start calculations from the `Start Point` or `End Point` of the selected line using the **Choose Point** dropdown.

#### **c. Cut Point Length**

- Enter the distance along the line where the cut point will be plotted.
- A negative value will create a point by extending the line backward.

#### **d. Offset Length**

- Enter the perpendicular offset distance for the offset point.
- Positive values offset to the right of the line direction, and negative values offset to the left.

### **Step 4: Plot Points**

1. Click the **Plot** button.
2. The tool performs calculations and plots the following points in a new memory layer named **"Plotted Points"**:
   - **Cut Point**: A point interpolated along the line.
   - **Offset Point**: A point perpendicular to the line at the specified offset distance.
   - **Extended Point** (if applicable): A point beyond the original line's length if the cut distance exceeds the line's length.

### **Step 5: Visualize and Validate**

1. Verify that the new points appear on the map canvas.

2. Check the symbology:
   
   - **Green**: Start Point
   - **Red**: End Point
   - **Orange**: Cut Point
   - **Blue**: Offset Point
   - **Purple**: Extended Point

3. Adjust inputs and re-plot as needed.

## **Error Messages and Troubleshooting**

### **Common Errors**

| **Error Message**                         | **Cause**                                        | **Solution**                                              |
| ----------------------------------------- | ------------------------------------------------ | --------------------------------------------------------- |
| "Please select a layer."                  | No active layer is selected in QGIS.             | Select a line layer from the Layers panel.                |
| "The selected layer is not a line layer." | Active layer is not a valid line geometry layer. | Activate a layer with line geometries.                    |
| "Please select exactly one line feature." | No or multiple features are selected.            | Select one line feature before running the tool.          |
| "Selected feature has no geometry."       | The selected feature has no valid geometry.      | Ensure the selected feature contains valid line geometry. |
| "Cut point could not be calculated."      | Invalid cut point distance or geometry issues.   | Check the input values and line geometry.                 |

## **Best Practices**

1. Always validate the selected line feature before using the widget.
2. Use appropriate units and distances for your specific project requirements.
3. For multi-part geometries, ensure you understand which part of the line is being used.
4. Save the generated point layer if needed for future use.

## **Example Workflow**

1. **Scenario**: Plotting a point 50 meters along a line with a 10-meter offset.
   - **Units**: Meters
   - **Choose Point**: Start Point
   - **Cut Point Length**: 50
   - **Offset Length**: 10
   - Click **Plot**.
2. The widget calculates and plots:
   - A cut point at 50 meters from the start point.
   - An offset point 10 meters perpendicular to the line at the cut point.

## **Advanced Features**

1. **Negative Cut Point Length**:
   - Use negative values to create points by extending the line backward from the chosen base point.
2. **Dynamic Memory Layers**:
   - New memory layers are created or updated for every plotting operation, preserving data integrity.

This documentation is designed to help users effectively understand and utilize the Plotter Widget for their QGIS projects.
