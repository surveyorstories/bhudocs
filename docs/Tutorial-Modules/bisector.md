# User Documentation for the Split Line Tool

The **Split Line Tool** (implemented in the BisectorWidget) is designed to help you split a line feature in QGIS based on a specified distance. Using an easy-to-use interface, you can choose a split length, set the orientation (from the start or end of the line), select units of measurement, and then apply the split. The tool also automatically creates a visual layer that shows the start and end points of the selected lines.

---

## Data Requirements

| **Parameter**         | **Description**                                                                                    | **Expected Input**                        |
| --------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| **Active Line Layer** | A vector layer containing line features that you wish to split.                                    | A valid line layer (.shp, memory layer)   |
| **Selected Features** | At least one line feature must be selected from the active layer.                                  | One or more selected line features        |
| **Length**            | The distance at which you want to split the line.                                                  | A numeric value (entered in the spin box) |
| **Orientation**       | Determines from which end the split will be measured (from the Start Point or from the End Point). | "Start Point" or "End Point"              |
| **Units**             | The unit of measurement for the length (Meters, Metric Links, or Gunter's Links).                  | Choose from the drop-down list            |

---

## Workflow Summary

1. **Input and Setup:**  
   Load your line layer in QGIS, select the feature(s) you wish to split, and open the Split Line Tool.
2. **Define Split Parameters:**  
   Specify the split length, choose the orientation (start or end of the line), and select the unit of measurement.
3. **Preview and Split:**  
   The tool creates a temporary point layer showing the start and end points, then uses your parameters to split the selected lines into two segments.
4. **Result and Cleanup:**  
   The original feature is removed, and two new features (the split segments) are added. The temporary point layer is displayed for reference, and the tool cleans up after splitting.

---

## How to Use the Split Line Tool

### 1. Launching the Tool

- **Open the Widget:**  
  Access the Split Line Tool from the QGIS plugin menu or toolbar.
- **Layer Check:**  
  Ensure that your active layer is a valid line layer and that you have selected at least one feature.

### 2. Setting Up Parameters

- **Enter Length:**  
  Use the numeric input (double spin box) to enter the split length. The tool accepts up to three decimal places.
- **Choose Orientation:**  
  Select whether the split should be measured from the “Start Point” or “End Point” using the drop-down list.
- **Select Units:**  
  Choose the measurement unit (Meters, Metric Links, or Gunter's Links). The tool automatically converts the value to meters for processing.

### 3. Executing the Split

- **Click the Split Button:**  
  Press the “Split” button to perform the split operation.
- **Processing:**  
  The tool will create a temporary point layer to display the start and end points, then split the selected lines into two segments based on your input length.
- **Completion:**  
  After successful splitting, a confirmation message will be displayed. The original line is removed, and the two new segments appear on the active layer.

### 4. Visual Feedback

- **Point Layer:**  
  A point layer named “Start and End Points” is generated to visually indicate the beginning and end of each line.
- **Categorized Symbology:**
  - **Green symbols** represent the start points.
  - **Red symbols** represent the end points.

### 5. Cleanup

- **Layer Removal on Close:**  
  When you close the widget, the temporary point layer is automatically removed from the project.

---

## FAQs

1. **What if no features are selected?**
   - The tool requires at least one line feature to be selected. If none are selected, an error message will prompt you to select features before splitting.
2. **How do I choose the correct units?**
   - The tool allows you to select from Meters, Metric Links, or Gunter's Links. Choose the unit that best matches your project’s measurement system. If in doubt, use Meters.
3. **What happens if the split length is longer than the line?**
   - The tool checks that the specified split length is shorter than the overall length of the line. If not, an error will be raised.
4. **Can I see where the split will occur before executing?**
   - The tool creates a temporary point layer to display the start and end points of the line, giving you a visual reference for the split.
5. **What if I want to split multiple features?**
   - You can select multiple line features before launching the tool. The split operation will be applied to each selected feature individually.

---

## Key Considerations and Best Practices

- **Snapping and Precision:**  
  Ensure that your QGIS snapping settings are configured for accuracy. Adjust snapping tolerance and prioritize the active layer if you work with overlapping features.

- **Layer Management:**
  
  - Before splitting, verify that your active layer is the correct line layer.
  - Temporarily hide or lock other layers to avoid accidental edits.

- **Saving Edits:**  
  Always save your project or export a backup of your layer before performing splitting operations. This helps prevent data loss if you need to revert changes.

- **Step-by-Step Approach:**  
  For complex geometries, consider splitting features incrementally. Review the generated segments after each split to ensure accuracy.

- **Undo/Redo:**  
  Use QGIS’s undo/redo functionality if you make an error. This allows you to experiment with different split lengths or orientations without permanent changes.

---

By following this guide, you can confidently use the Split Line Tool to manage and split your line features in QGIS, ensuring precision and enhancing your overall mapping workflow.
