---
sidebar_position: 10
---

# Adjusting Point IDs

The **Adjust Point IDs** feature in the Tool Set helps reorder and adjust the Point IDs (vertex indices) of features in a selected vector layer. This feature ensures logical and sequential order in Point IDs based on user-defined criteria.

## How To: Adjust Point IDs

1. **Open the Tool Set**  
   Launch the Tool Set panel by clicking the icon or pressing the shortcut **ALT + SHIFT + T**.

2. **Select the Active Layer**

   - In the **Layer Selection** section, choose the desired layer from the dropdown.
   - The active layer is automatically populated if one is selected in the map.

3. **Choose the Adjustment Field**

   - Use the **Dropdown** to select the field containing the Point IDs (e.g., `Point_ID`).

4. **Set Adjustment Criteria**

   - Enter the threshold value in the **Number SpinBox** (minimum: 1, maximum: 10,000).
   - Features with Point IDs **greater than or equal to** this value will have their indices adjusted.

5. **Apply Adjustments**

   - Click **Adjust Point Order** to initiate the adjustment process. The following actions will occur:
     - Features are grouped based on whether their current Point IDs are **greater than or less than** the specified threshold.
     - Point IDs are updated sequentially for each group.

6. **Monitor Progress**

   - The **Progress Bar** shows real-time updates as the adjustment progresses.

7. **View Results**

   - Once complete, the map refreshes to display the adjusted Point IDs.

## Use Case Example

- **Scenario**: A layer contains survey points with disordered Point IDs.
- **Objective**: Reorder the Point IDs such that all IDs are sequential and logical for analysis.
- **Solution**: Use the Adjust Point IDs tool with the desired threshold to quickly reassign Point IDs.

## Notes and Tips

- Ensure the layer is editable before making changes.
- The adjustment applies only to the selected field in the active layer.
- Verify the field type supports numerical values for proper adjustments