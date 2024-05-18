---
sidebar_position: 1
---

# Tool Set

Tool Set Panel in Bhukamatha empowers you with custom-built tools that function as powerful extensions to your project, providing additional features and capabilities tailored to your specific needs. Think of them as valuable add-ons that enhance your workflow and efficiency.

![tool_set](../img/tool_set.png)

## What's in the Box

| Sections                              | Description                                                                                                              |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Topo Layers                           | Generates Topo Layers namely Topo Point, Topo Line, Topo Polygon                                                         |
| Side Village                          | Generates a Polygon layer around the village shapefile                                                                   |
| Create a Layer from Selected features | creates a new shapefile layer from the selection of the active layer                                                     |
| Tools                                 | Extra tools for adjusting Point ID, splitting of LPMs, assigning Land parcel names, generating Ground validation notices |

## How To

### Topo Layers

1. Save the project and set the projection of the project.

2. Add a Base layer into the project we can do this by **Layer>Add Layer > Add vector Layer, then browse and pick the appropriate layer or just drag and drop it into the project. 

3. Open the Tool Set by clicking on the icon or shortcut to open **<u>ALT + SHIFT + T </u>**

4. Now Click on the **Create Topo Layers** it will create three Topo Layers namely **TopoLine, TopoPoint, and TopoPolygon** 

5. Now Toggle edit the layers and click on add features based on the layer geometry (Point, Line, Polygon)

6. Upon adding the feature a dropdown will be populated choose the respected topo from the dropdown list 

7. To set the layers for LPM generation, please click on the **'Set for LPMS**' button which is found in TOPO Layers section.

### Side Village

Creates a side village layer  for Land parcel generation 

1.  Click on Tool Set 

2. Choose Village Final Shapefile from the dropdown in the side village section 

3. Now click on the Create Sidevillage Layer Button It creates a new layer with the name **'Side_Villages'** in the project

4. Split the layer as per village Tri-junctions and input the names and village code in the attribute table save the layer 

5. To set the layer for LPM generation, please click on the **'Set for LPMS**' button which is found in TOPO Layers section.

### Create a Layer from Selected features

It creates a new layer with features which are currently selected in the active layer 

1. Select a layer from the layer panel 

2. Using the selection toolbar select the features in which you are interested to create a new layer with

3. Now click on the Tool Set > next click on the **Create New Layer** button it will create a new layer in the project

4. If you wish to create a temporary layer select the checkbox Create a Temporary Layer

### Tools
