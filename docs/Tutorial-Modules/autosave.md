# Auto Save & Backup (Beta) User Documentation

## Overview

The Auto Save & Backup tool is a QGIS plugin designed to automatically back up your project and selected layers at regular intervals. It supports two backup modes:

- **Single Backup (Overwrite):** Always overwrites the previous backup.
- **Multiple Backups:** Creates a new backup folder for each backup and cleans up old backups based on your configured limit.

## Features

- **Automatic Backup Scheduling:** Set a custom backup interval (1 minute to 24 hours).
- **Countdown Display:** Shows time remaining until the next backup.
- **Backup Folder Selection:** Easily choose and open the folder where backups are stored.
- **Backup Mode Selection:** Toggle between overwriting previous backup or saving multiple backups.
- **Layer Selection:** Backup selected vector layers by checking them from the list.
- **Backup History:** Maintains a history to only update layers if changes are detected in Single Backup mode.
- **Reset Functionality:** Reset internal states and backup history without deleting backup files.

## Setup Instructions

1. **Installation:**  
   Place the plugin folder in your QGIS plugins directory. Restart QGIS and enable the plugin via the Plugin Manager.

2. **Initial Configuration:**  
   - On launching the plugin, a default backup folder (`QGIS_Project_Backups` in your home directory) is set.  
   - Adjust the backup interval using the provided spin box.
   - Choose your desired backup mode:
     - **Single Backup:** Overwrites the previous backup.
     - **Multiple Backups:** Saves backups in new timestamped folders.
   - In Multiple Backups mode, specify the maximum number of backups to retain.

3. **Layer Selection (Optional):**  
   - The plugin displays current vector layers in your project.  
   - Check the boxes beside layers you wish to include in the backup.  
   - Use the "Select All" checkbox to quickly include all layers.

## How to Use

1. **Starting a Backup Session:**  
   - Click on the **"Start Backup"** button.  
   - The tool will save your project automatically and back up selected layers at the configured interval.
   - The countdown timer updates every second.
   - Note: Notification messages (INFO, WARNING, CRITICAL, SUCCESS) will appear in QGIS's message bar to keep you informed.

2. **Stopping a Backup Session:**  
   - Click the **"Stop Backup"** button to halt automatic backups.
   - The countdown timer and backups will pause until restarted.

3. **Changing Backup Mode:**  
   - Toggle between Single and Multiple Backup radio buttons.  
   - The tool will automatically reset its state and update the UI (show/hide maximum backups option) based on your selection.

4. **Changing the Backup Folder:**  
   - Click **"Select Backup Folder"** to choose a different location.
   - Click the folder path link to open the folder in your system file explorer when needed.

5. **Resetting the Backup State:**  
   - The tool can reset its internal state and clear the backup history without deleting actual backup files.
   - This is triggered automatically during certain mode changes or can be invoked manually (if such an option is later provided).

## Troubleshooting & Tips

- **Unsaved Projects:**  
  The backup will not run if the project is not saved. Save your project before starting the backup service.
  
- **Folder Permissions:**  
  Ensure that the backup folder is writable. The tool performs a simple test by writing a temporary file.
  
- **Layer Updates:**  
  Only the selected vector layers are backed up. Ensure the correct layers are checked in the layer selection list.

- **Backup Cleanup:**  
  In Multiple Backup mode, the oldest backups will be removed automatically if the number of backups exceeds your specified limit.
  
- Additionally, review the notifications in the QGIS message bar for more information on the plugin's status and any issues encountered.

## FAQ

- **Q:** What happens if the backup folder is not writable?  
  **A:** The tool will stop the backup and display a warning.

- **Q:** Can I back up non-vector layers?  
  **A:** Currently, only vector layers are supported for backup alongside the project file.

- **Q:** Is the backup history preserved during Single Backup mode?  
  **A:** Yes, the tool maintains a history using a JSON file to check for file changes to minimize unnecessary copies.

## Contact & Support

If you encounter issues or have suggestions for improvements, please contact the plugin developer or check the QGIS forums for community support.

## Messages Displayed

The plugin uses the QGIS message bar to display notifications:

- **INFO:** General information (e.g., "Backup started.", "New layer added").
- **WARNING:** Alerts about potential issues (e.g., "Save the project first!", "Layer removed from project").
- **CRITICAL:** Errors that prevent a backup (e.g., "Backup failed: ...", "Backup folder is not writable").
- **SUCCESS:** Confirmation messages (e.g., "Backup completed successfully.").
