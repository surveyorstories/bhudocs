# **User Documentation for Align Tool in QGIS**

## **Overview**

The **Align Tool** in QGIS is a feature that allows users to align and scale vector features based on selected reference points. This tool is useful for correcting spatial misalignments and ensuring accurate positioning of features within a map.

## **Key Features**

- **Align Features:** Adjusts the position of a selected feature to match reference points.
- **Scale Features:** Allows resizing of a feature based on two selected points.
- **Snapping Support:** Ensures precision by snapping to existing vertices within the layer.
- **Visual Feedback:** Displays visual guides to help users select points and verify alignment before applying changes.

## **How to Use the Align Tool**

### **Step 1: Activating the Tool**

1. Open your QGIS project and select a **vector layer** that contains line or polygon features.
2. Activate the **Align Tool** from the toolbar or plugin menu.

### **Step 2: Selecting Reference Points**

1. Click on the first **source point** in the area that needs alignment.
2. Click on the corresponding **target vertex** in the feature that needs to be adjusted.
3. Select the second **source point** to define the alignment direction.
4. Click on the second **target vertex** in the feature.

### **Step 3: Choosing an Alignment Option**

After selecting the points, a prompt will appear with two options:

- **Align Only:** Moves the feature to match the selected reference points.
- **Scale & Align:** Adjusts both position and size of the feature to fit the reference points.

Choose the appropriate option based on your requirement.

### **Step 4: Applying the Changes**

1. The feature will be adjusted according to your selection.
2. Review the alignment visually on the map.
3. Save the changes to finalize the adjustments.

## **Additional Information**

- The tool provides **dashed lines** and **highlighted points** to guide selections.
- Ensure **snapping** is enabled in the project settings for improved accuracy.
- If an incorrect point is selected, restart the selection process to adjust accordingly.

This tool enhances spatial accuracy in QGIS projects, making it easier to adjust and align features effectively.
