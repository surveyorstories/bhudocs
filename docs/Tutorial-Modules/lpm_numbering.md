---
sidebar_position: 3
---

# LPM Numbering (Beta)

This guide explains how to use the **Land Parcel Numbering Tool** effectively in QGIS for labeling land parcels interactively.

## How to

### 1. Starting the Tool

- Launch the Tool Set panel by clicking the icon or pressing the shortcut **ALT + SHIFT + T**. Click on **LP NO**
- A new window titled **"Land Parcel Numbering"** will appear, displaying the map canvas.

### 2. Setting Up the Map

- Make sure the layer you want to work on is active in the QGIS Layers Panel.
- The active layer will automatically load onto the map canvas in the tool window.

### 3. Assigning Parcel Numbers

    To assign numbers to parcels:

1. **Click the "Start Numbering" tool** (icon with a crosshair) from the toolbar.
2. Click on a parcel on the map canvas.
   - The first click will assign the number `1`, and subsequent clicks will continue the numbering sequence.
3. If the parcel already has a number, you’ll see a message:
   - *"😵 Hey There! You already hit me 🎯, Please try others!"*

### 4. Adjusting Points for Numbering

- Use the **Right Mouse Button** to manually draw shapes around parcels if needed.
- Press **Ctrl + Left Click** to create additional points for better precision.

### 5. Undoing or Redoing Changes

- To undo a label assignment, press **Ctrl + Z** (`Ctrl + Z`).

- To redo a label assignment, press **Ctrl + Y**. (`Ctrl + Y`).

### 6. Zooming and Panning the Map

- Use the toolbar to adjust the view:
  - **Zoom In/Out:** Click the magnifying glass icons.
  - **Pan Tool:** Click the hand icon, then drag to move the map.

#### 7. Checking Label Status

- Parcels with assigned numbers turn **green** on the map.
- Unlabeled parcels remain in **gray**.

### 8. Saving Changes

- The tool automatically saves changes to the active layer.
- You can review and edit the `LPM_NO` field directly in the layer’s attribute table if needed.

### 9. Exiting the Tool

- When closing the tool, a confirmation dialog will appear:
  - It shows the total number of unlabeled parcels.
  - Choose **Yes** to exit or **No** to continue numbering.

## Tips for Better Results

- Always make sure your active layer has parcels properly digitized.
- Avoid overlapping parcels to ensure accurate number assignment.
- If labeling stops working, check the `LPM_NO` field in your layer to confirm it's present.

Enjoy seamless parcel numbering with the Land Parcel Numbering Tool! 🌟
