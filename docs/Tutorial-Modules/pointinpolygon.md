# Point In Polygon Tool

## Overview

The `PointInPolygonTool` is a QGIS tool designed to help users create points on the boundary of a polygon layer. It allows users to:

- Snap points to the boundary of a polygon.
- Create a new point at a specified distance between two clicked points on the polygon boundary.
- Visualize snapping and preview points using rubber bands.

### Key Features

- **Snapping to Polygon Boundary**: Automatically snaps points to the nearest boundary of the selected polygon layer.
- **Distance-Based Point Creation**: Allows users to specify a distance to create a new point between two clicked points.
- **Visual Feedback**: Provides visual feedback using rubber bands for snapping, preview points, and guide lines.
- **Layer Management**: Handles layer removal and ensures the tool remains functional even if layers are deleted.

#### How to Use the Tool

**1. Setting Up the Tool**

- Ensure you have a valid polygon layer loaded in QGIS.
- Activate the `PointInPolygonTool` from the plugin menu or toolbar.

**2. Selecting the Target Layer**

- Select the polygon layer or Line layer from layer panel you want to work with. The tool will automatically check if the layer is valid.

**3. Snapping to the Polygon Boundary**

- Move the mouse cursor near the boundary of the polygon. The tool will snap to the nearest point on the boundary and display a red or green rubber band to indicate the snap point.

**4. Creating Points**

- **First Click**: Click on the polygon boundary to set the first point. A dialog will appear prompting you to enter the distance (in meters) for the new point.
- **Second Click**: Click on another point on the polygon boundary. The tool will create a new point at the specified distance between the two clicked points.

**5. Canceling the Operation**

- Right-click to cancel the current operation. This will clear all rubber bands and reset the tool.

**6. Visual Feedback**

- **Red Rubber Band**: Indicates the first snap point.
- **Green Rubber Band**: Indicates the second snap point.
- **Blue Rubber Band**: Shows the preview of the new point based on the specified distance.
- **Dashed Line**: Displays the guide line between the first and second points.

#### Error Handling

- **Invalid Layer**: If the selected layer is invalid or deleted, the tool will display an error message and reset.
- **Invalid Distance**: If the entered distance is zero or negative, the tool will prompt you to enter a valid distance.
- **Point Inside Polygon**: If you click inside the polygon (not on the boundary), the tool will notify you to click on the boundary.

#### Tool Deactivation

- When deactivating the tool, it will:
  - Clear all rubber bands.
  - Reset the tool state.
  - Disconnect from layer removal signals.
  - Refresh the canvas.

#### Tips

- Ensure the polygon layer is valid and has a valid CRS.
- Use the rubber bands as visual guides to accurately place points on the polygon boundary.
- If the tool behaves unexpectedly, check the QGIS message bar for error messages.

#### Troubleshooting

- **Tool Not Snapping**: Ensure the polygon layer is valid and the snapping is enabled in QGIS settings.
- **No Points Created**: Verify that the distance entered is valid and greater than zero.
- **Layer Not Found**: If the point layer is missing, the tool will create a new one named "Snapped Points".
