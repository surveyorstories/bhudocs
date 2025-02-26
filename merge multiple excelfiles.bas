Attribute VB_Name = "Module1"
Sub MergeExcelFiles()
    Dim FolderPath As String, FileName As String
    Dim wsMaster As Worksheet, wsTemp As Worksheet
    Dim wbSource As Workbook
    Dim LastRow As Long, LastCol As Long
    Dim HeaderRow As Integer
    Dim FileDialog As FileDialog
    
    ' Ask the user to select a folder
    Set FileDialog = Application.FileDialog(msoFileDialogFolderPicker)
    
    With FileDialog
        .Title = "Select Folder Containing Excel Files"
        If .Show = -1 Then
            FolderPath = .SelectedItems(1) & "\"
        Else
            MsgBox "No folder selected. Operation cancelled.", vbExclamation
            Exit Sub
        End If
    End With
    
    ' Create a new worksheet for merged data
    Set wsMaster = ThisWorkbook.Sheets(1)
    wsMaster.Cells.Clear
    
    ' Define header row (6th row, so we start reading from row 7)
    HeaderRow = 6
    
    ' Get the first file in the selected folder
    FileName = Dir(FolderPath & "*.xls*")

    Do While FileName <> ""
        ' Open each file
        Set wbSource = Workbooks.Open(FolderPath & FileName)
        Set wsTemp = wbSource.Sheets(1) ' Change if your data is on a different sheet
        
        ' Find the last used row and column
        LastRow = wsTemp.Cells(Rows.Count, 1).End(xlUp).Row
        LastCol = wsTemp.Cells(HeaderRow, Columns.Count).End(xlToLeft).Column
        
        ' Copy data excluding headers after the first file
        If wsMaster.Cells(1, 1).Value = "" Then
            ' Copy headers + data for the first file
            wsTemp.Range(wsTemp.Cells(HeaderRow, 1), wsTemp.Cells(LastRow, LastCol)).Copy wsMaster.Cells(1, 1)
        Else
            ' Copy only data from row 7 onwards
            wsTemp.Range(wsTemp.Cells(HeaderRow + 1, 1), wsTemp.Cells(LastRow, LastCol)).Copy _
            wsMaster.Cells(Rows.Count, 1).End(xlUp).Offset(1, 0)
        End If
        
        ' Close the file without saving
        wbSource.Close False
        
        ' Get next file
        FileName = Dir
    Loop

    MsgBox "All files merged successfully!", vbInformation
End Sub


