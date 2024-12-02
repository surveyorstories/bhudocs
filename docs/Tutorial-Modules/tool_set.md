---
sidebar_position: 1

---

# Tool Set

Tool Set Panel in Bhukamatha empowers you with custom-built tools that function as powerful extensions to your project, providing additional features and capabilities tailored to your specific needs. Think of them as valuable add-ons that enhance your workflow and efficiency.

![tool_set](../img/tool_set.png)

## Available Tools

| Section                                   | Description                                                                                                                       |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Topo Layers**                           | Generates essential Topo Layers, such as Topo Point, Topo Line, and Topo Polygon.                                                 |
| **Side Village**                          | Creates a Polygon layer around the village shapefile for LPM (Land Parcel Mapping) generation.                                    |
| **Create a Layer from Selected Features** | Creates a new shapefile layer based on the selected features from the active layer.                                               |
| **Tools**                                 | Additional tools for managing Point IDs, splitting LPMs, assigning Land Parcel numbers, and generating Ground Validation Notices. |

## **How To Use the Tools**

## 1. Topo Layers

This tool generates three essential Topo Layers: Topo Point, Topo Line, and Topo Polygon.

### Steps:

1. **Save and Set the Project Projection**  
   Ensure the project is saved and the appropriate projection is set.

2. **Add a Base Layer**
   
   - Go to **Layer > Add Layer > Add Vector Layer** to browse and select your base layer.
   - Alternatively, you can drag and drop the layer into the project.

3. **Open Tool Set**
   
   - Access the **Tool Set** by clicking the icon or using the shortcut **ALT + SHIFT + T**.

4. **Create Topo Layers**
   
   - Click on **Create Topo Layers**. This will generate three new layers:
     - **TopoPoint**
     - **TopoLine**
     - **TopoPolygon**

5. **Edit and Add Features**
   
   - Toggle the edit mode for each layer.
   - Click on **Add Features** to add geometry (Point, Line, Polygon).
   - After adding a feature, a dropdown menu will appear. Select the corresponding topo type from the list.

6. **Set for LPM Generation**
   
   - Once the layers are prepared, click the **'Set for LPMs'** button under the **Topo Layers** section to set the layers for Land Parcel Mapping (LPM) generation.

7. **Revert to Normal Mode**
   
   - If you need to revert the layers from LPM mode to normal, simply click the **'Revert'** button.

## 2. Side Village

This tool generates a side village layer, essential for Land Parcel generation.

### Steps:

1. **Open Tool Set**
   
   - Access the **Tool Set** as previously described.

2. **Select Village Final Shapefile**
   
   - From the **Side Village** section, select your **Village Final Shapefile** from the dropdown list.

3. **Create Side Village Layer**
   
   - Click the **Create Side Village Layer** button. This will create a new layer called **'Side_Villages'** in your project.

4. **Split the Layer at Tri-junctions**
   
   - Split the layer based on village tri-junctions. Input the corresponding names and village codes into the attribute table.
   - Save the layer.

5. **Set for LPM Generation**
   
   - Click the **'Set for LPMs'** button in the **Topo Layers** section to mark this layer for LPM generation.

## 3. Create a Layer from Selected Features

This tool allows you to create a new layer based on the features selected from the active layer.

### Steps:

1. **Select a Layer**
   
   - Choose a layer from the **Layer Panel**.

2. **Select Features**
   
   - Use the **Selection Toolbar** to select the features you wish to include in the new layer.

3. **Create New Layer**
   
   - Click on the **Tool Set** panel, then click the **Create New Layer** button. A new layer containing only the selected features will be added to the project.

4. **Optional: Create a Temporary Layer**
   
   - If you want to create a temporary layer, check the box **Create a Temporary Layer** before clicking **Create New Layer**.

## 4. Tools

This section includes extra tools designed for additional features for better land management and mapping. For more information on how to use these tools, consult the tool-specific documentation.

- **[Adjusting Point ID: Adjusting Point IDs](./adjusting_pointid.md)**
- **Split: Splitting LPMs**
- **[LP NO: Assigning Land Parcel names](./lpm_numbering.md)**
- **[GV: Generating Ground Validation Notices](./gv_notices.md)**

## **Summary of Key Actions**

- **Create Topo Layers**: Generates Topo Point, Topo Line, and Topo Polygon.
- **Create Side Village Layer**: Generates a polygon layer around the village for LPM generation.
- **Create Layer from Selection**: Generates a new layer from selected features.
- **Set for LPMs**: Marks layers as ready for Land Parcel Mapping.
- **Temporary Layer Creation**: Allows the creation of temporary layers for quick edits and testing.
