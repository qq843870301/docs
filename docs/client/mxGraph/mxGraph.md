- 禁用菜单右键菜单
``` javascript
mxEvent.disableContextMenu(container)
```

- 激活平移
``` javascript
graph.setPanning(true);
```

- 使用左键平移
``` javascript
graph.panningHandler.useLeftButtonForPanning = true;;
```

- 指定图形是否允许任何交互。 此实现启用了更新。
``` javascript
graph.setEnabled(true);
```

-  是否允许改变元素大小
``` javascript
graph.setCellsResizable(false);
```

-  是否可移动
``` javascript
graph.setCellsMovable(false);
```

-  连线是否允许没有连接节点
``` javascript
graph.setAllowDanglingEdges(false);
```

-  容器大小自适应
``` javascript
graph.setResizeContainer(true);
```

-  清除选择
``` javascript
graph.clearSelection();
```

-  启用框选
``` javascript
new mxRubberband(this.graph);
```




```
mxGraph	Extends mxEventSource to implement a graph component for the browser.
Events
mxEvent.ROOT	Fires if the root in the model has changed.
mxEvent.ALIGN_CELLS	Fires between begin- and endUpdate in alignCells.
mxEvent.FLIP_EDGE	Fires between begin- and endUpdate in flipEdge.
mxEvent.ORDER_CELLS	Fires between begin- and endUpdate in orderCells.
mxEvent.CELLS_ORDERED	Fires between begin- and endUpdate in cellsOrdered.
mxEvent.GROUP_CELLS	Fires between begin- and endUpdate in groupCells.
mxEvent.UNGROUP_CELLS	Fires between begin- and endUpdate in ungroupCells.
mxEvent.REMOVE_CELLS_FROM_PARENT	Fires between begin- and endUpdate in removeCellsFromParent.
mxEvent.ADD_CELLS	Fires between begin- and endUpdate in addCells.
mxEvent.CELLS_ADDED	Fires between begin- and endUpdate in cellsAdded.
mxEvent.REMOVE_CELLS	Fires between begin- and endUpdate in removeCells.
mxEvent.CELLS_REMOVED	Fires between begin- and endUpdate in cellsRemoved.
mxEvent.SPLIT_EDGE	Fires between begin- and endUpdate in splitEdge.
mxEvent.TOGGLE_CELLS	Fires between begin- and endUpdate in toggleCells.
mxEvent.FOLD_CELLS	Fires between begin- and endUpdate in foldCells.
mxEvent.CELLS_FOLDED	Fires between begin- and endUpdate in cellsFolded.
mxEvent.UPDATE_CELL_SIZE	Fires between begin- and endUpdate in updateCellSize.
mxEvent.RESIZE_CELLS	Fires between begin- and endUpdate in resizeCells.
mxEvent.CELLS_RESIZED	Fires between begin- and endUpdate in cellsResized.
mxEvent.MOVE_CELLS	Fires between begin- and endUpdate in moveCells.
mxEvent.CELLS_MOVED	Fires between begin- and endUpdate in cellsMoved.
mxEvent.CONNECT_CELL	Fires between begin- and endUpdate in connectCell.
mxEvent.CELL_CONNECTED	Fires between begin- and endUpdate in cellConnected.
mxEvent.REFRESH	Fires after refresh was executed.
mxEvent.CLICK	Fires in click after a click event.
mxEvent.DOUBLE_CLICK	Fires in dblClick after a double click.
mxEvent.GESTURE	Fires in fireGestureEvent after a touch gesture.
mxEvent.TAP_AND_HOLD	Fires in tapAndHold if a tap and hold event was detected.
mxEvent.FIRE_MOUSE_EVENT	Fires in fireMouseEvent before the mouse listeners are invoked.
mxEvent.SIZE	Fires after sizeDidChange was executed.
mxEvent.START_EDITING	Fires before the in-place editor starts in startEditingAtCell.
mxEvent.EDITING_STARTED	Fires after the in-place editor starts in startEditingAtCell.
mxEvent.EDITING_STOPPED	Fires after the in-place editor stops in stopEditing.
mxEvent.LABEL_CHANGED	Fires between begin- and endUpdate in cellLabelChanged.
mxEvent.ADD_OVERLAY	Fires after an overlay is added in addCellOverlay.
mxEvent.REMOVE_OVERLAY	Fires after an overlay is removed in removeCellOverlay and removeCellOverlays.
mxGraph	Constructs a new mxGraph in the specified container.
Variables
mouseListeners	Holds the mouse event listeners.
isMouseDown	Holds the state of the mouse button.
model	Holds the mxGraphModel that contains the cells to be displayed.
view	Holds the mxGraphView that caches the mxCellStates for the cells.
stylesheet	Holds the mxStylesheet that defines the appearance of the cells.
selectionModel	Holds the mxGraphSelectionModel that models the current selection.
cellEditor	Holds the mxCellEditor that is used as the in-place editing.
cellRenderer	Holds the mxCellRenderer for rendering the cells in the graph.
multiplicities	An array of mxMultiplicities describing the allowed connections in a graph.
renderHint	RenderHint as it was passed to the constructor.
dialect	Dialect to be used for drawing the graph.
gridSize	Specifies the grid size.
gridEnabled	Specifies if the grid is enabled.
portsEnabled	Specifies if ports are enabled.
nativeDoubleClickEnabled	Specifies if native double click events should be detected.
doubleTapEnabled	Specifies if double taps on touch-based devices should be handled as a double click.
doubleTapTimeout	Specifies the timeout for double taps and non-native double clicks.
doubleTapTolerance	Specifies the tolerance for double taps and double clicks in quirks mode.
lastTouchX	Holds the x-coordinate of the last touch event for double tap detection.
lastTouchX	Holds the y-coordinate of the last touch event for double tap detection.
lastTouchTime	Holds the time of the last touch event for double click detection.
tapAndHoldEnabled	Specifies if tap and hold should be used for starting connections on touch-based devices.
tapAndHoldDelay	Specifies the time for a tap and hold.
tapAndHoldInProgress	True if the timer for tap and hold events is running.
tapAndHoldValid	True as long as the timer is running and the touch events stay within the given <tapAndHoldTolerance>.
initialTouchX	Holds the x-coordinate of the intial touch event for tap and hold.
initialTouchY	Holds the y-coordinate of the intial touch event for tap and hold.
tolerance	Tolerance for a move to be handled as a single click.
defaultOverlap	Value returned by getOverlap if isAllowOverlapParent returns true for the given cell.
defaultParent	Specifies the default parent to be used to insert new cells.
alternateEdgeStyle	Specifies the alternate edge style to be used if the main control point on an edge is being doubleclicked.
backgroundImage	Specifies the mxImage to be returned by getBackgroundImage.
pageVisible	Specifies if the background page should be visible.
pageBreaksVisible	Specifies if a dashed line should be drawn between multiple pages.
pageBreakColor	Specifies the color for page breaks.
pageBreakDashed	Specifies the page breaks should be dashed.
minPageBreakDist	Specifies the minimum distance for page breaks to be visible.
preferPageSize	Specifies if the graph size should be rounded to the next page number in sizeDidChange.
pageFormat	Specifies the page format for the background page.
pageScale	Specifies the scale of the background page.
enabled	Specifies the return value for isEnabled.
escapeEnabled	Specifies if mxKeyHandler should invoke escape when the escape key is pressed.
invokesStopCellEditing	If true, when editing is to be stopped by way of selection changing, data in diagram changing or other means stopCellEditing is invoked, and changes are saved.
enterStopsCellEditing	If true, pressing the enter key without pressing control or shift will stop editing and accept the new value.
useScrollbarsForPanning	Specifies if scrollbars should be used for panning in panGraph if any scrollbars are available.
exportEnabled	Specifies the return value for canExportCell.
importEnabled	Specifies the return value for canImportCell.
cellsLocked	Specifies the return value for isCellLocked.
cellsCloneable	Specifies the return value for isCellCloneable.
foldingEnabled	Specifies if folding (collapse and expand via an image icon in the graph should be enabled).
cellsEditable	Specifies the return value for isCellEditable.
cellsDeletable	Specifies the return value for isCellDeletable.
cellsMovable	Specifies the return value for isCellMovable.
edgeLabelsMovable	Specifies the return value for edges in isLabelMovable.
vertexLabelsMovable	Specifies the return value for vertices in isLabelMovable.
dropEnabled	Specifies the return value for isDropEnabled.
splitEnabled	Specifies if dropping onto edges should be enabled.
cellsResizable	Specifies the return value for isCellResizable.
cellsBendable	Specifies the return value for isCellsBendable.
cellsSelectable	Specifies the return value for isCellSelectable.
cellsDisconnectable	Specifies the return value for <isCellDisconntable>.
autoSizeCells	Specifies if the graph should automatically update the cell size after an edit.
autoSizeCellsOnAdd	Specifies if autoSize style should be applied when cells are added.
autoScroll	Specifies if the graph should automatically scroll if the mouse goes near the container edge while dragging.
ignoreScrollbars	Specifies if the graph should automatically scroll regardless of the scrollbars.
translateToScrollPosition	Specifies if the graph should automatically convert the current scroll position to a translate in the graph view when a mouseUp event is received.
timerAutoScroll	Specifies if autoscrolling should be carried out via mxPanningManager even if the container has scrollbars.
allowAutoPanning	Specifies if panning via panGraph should be allowed to implement autoscroll if no scrollbars are available in scrollPointToVisible.
autoExtend	Specifies if the size of the graph should be automatically extended if the mouse goes near the container edge while dragging.
maximumGraphBounds	mxRectangle that specifies the area in which all cells in the diagram should be placed.
minimumGraphSize	mxRectangle that specifies the minimum size of the graph.
minimumContainerSize	mxRectangle that specifies the minimum size of the <container> if resizeContainer is true.
maximumContainerSize	mxRectangle that specifies the maximum size of the container if resizeContainer is true.
resizeContainer	Specifies if the container should be resized to the graph size when the graph size has changed.
border	Border to be added to the bottom and right side when the container is being resized after the graph has been changed.
keepEdgesInForeground	Specifies if edges should appear in the foreground regardless of their order in the model.
keepEdgesInBackground	Specifies if edges should appear in the background regardless of their order in the model.
allowNegativeCoordinates	Specifies if negative coordinates for vertices are allowed.
constrainChildren	Specifies if a child should be constrained inside the parent bounds after a move or resize of the child.
constrainRelativeChildren	Specifies if child cells with relative geometries should be constrained inside the parent bounds, if constrainChildren is true, and/or the maximumGraphBounds.
extendParents	Specifies if a parent should contain the child bounds after a resize of the child.
extendParentsOnAdd	Specifies if parents should be extended according to the extendParents switch if cells are added.
extendParentsOnAdd	Specifies if parents should be extended according to the extendParents switch if cells are added.
recursiveResize	Specifies the return value for isRecursiveResize.
collapseToPreferredSize	Specifies if the cell size should be changed to the preferred size when a cell is first collapsed.
zoomFactor	Specifies the factor used for zoomIn and zoomOut.
keepSelectionVisibleOnZoom	Specifies if the viewport should automatically contain the selection cells after a zoom operation.
centerZoom	Specifies if the zoom operations should go into the center of the actual diagram rather than going from top, left.
resetViewOnRootChange	Specifies if the scale and translate should be reset if the root changes in the model.
resetEdgesOnResize	Specifies if edge control points should be reset after the resize of a connected cell.
resetEdgesOnMove	Specifies if edge control points should be reset after the move of a connected cell.
resetEdgesOnConnect	Specifies if edge control points should be reset after the the edge has been reconnected.
allowLoops	Specifies if loops (aka self-references) are allowed.
defaultLoopStyle	mxEdgeStyle to be used for loops.
multigraph	Specifies if multiple edges in the same direction between the same pair of vertices are allowed.
connectableEdges	Specifies if edges are connectable.
allowDanglingEdges	Specifies if edges with disconnected terminals are allowed in the graph.
cloneInvalidEdges	Specifies if edges that are cloned should be validated and only inserted if they are valid.
disconnectOnMove	Specifies if edges should be disconnected from their terminals when they are moved.
labelsVisible	Specifies if labels should be visible.
htmlLabels	Specifies the return value for isHtmlLabel.
swimlaneSelectionEnabled	Specifies if swimlanes should be selectable via the content if the mouse is released.
swimlaneNesting	Specifies if nesting of swimlanes is allowed.
swimlaneIndicatorColorAttribute	The attribute used to find the color for the indicator if the indicator color is set to ‘swimlane’.
imageBundles	Holds the list of image bundles.
minFitScale	Specifies the minimum scale to be applied in fit.
maxFitScale	Specifies the maximum scale to be applied in fit.
panDx	Current horizontal panning value.
panDy	Current vertical panning value.
collapsedImage	Specifies the mxImage to indicate a collapsed state.
expandedImage	Specifies the mxImage to indicate a expanded state.
warningImage	Specifies the mxImage for the image to be used to display a warning overlay.
alreadyConnectedResource	Specifies the resource key for the error message to be displayed in non-multigraphs when two vertices are already connected.
containsValidationErrorsResource	Specifies the resource key for the warning message to be displayed when a collapsed cell contains validation errors.
collapseExpandResource	Specifies the resource key for the tooltip on the collapse/expand icon.
init	Initializes the <container> and creates the respective datastructures.
createHandlers	Creates the tooltip-, panning-, connection- and graph-handler (in this order).
createTooltipHandler	Creates and returns a new mxTooltipHandler to be used in this graph.
createSelectionCellsHandler	Creates and returns a new mxTooltipHandler to be used in this graph.
createConnectionHandler	Creates and returns a new mxConnectionHandler to be used in this graph.
createGraphHandler	Creates and returns a new mxGraphHandler to be used in this graph.
createPanningHandler	Creates and returns a new mxPanningHandler to be used in this graph.
createPopupMenuHandler	Creates and returns a new mxPopupMenuHandler to be used in this graph.
createSelectionModel	Creates a new mxGraphSelectionModel to be used in this graph.
createStylesheet	Creates a new mxGraphSelectionModel to be used in this graph.
createGraphView	Creates a new mxGraphView to be used in this graph.
createCellRenderer	Creates a new mxCellRenderer to be used in this graph.
createCellEditor	Creates a new mxCellEditor to be used in this graph.
getModel	Returns the mxGraphModel that contains the cells.
getView	Returns the mxGraphView that contains the mxCellStates.
getStylesheet	Returns the mxStylesheet that defines the style.
setStylesheet	Sets the mxStylesheet that defines the style.
getSelectionModel	Returns the mxGraphSelectionModel that contains the selection.
setSelectionModel	Sets the <mxSelectionModel> that contains the selection.
getSelectionCellsForChanges	Returns the cells to be selected for the given array of changes.
graphModelChanged	Called when the graph model changes.
updateSelection	Removes selection cells that are not in the model from the selection.
processChange	Processes the given change and invalidates the respective cached data in view.
removeStateForCell	Removes all cached information for the given cell and its descendants.
Overlays
addCellOverlay	Adds an mxCellOverlay for the specified cell.
getCellOverlays	Returns the array of mxCellOverlays for the given cell or null, if no overlays are defined.
removeCellOverlay	Removes and returns the given mxCellOverlay from the given cell.
removeCellOverlays	Removes all mxCellOverlays from the given cell.
clearCellOverlays	Removes all mxCellOverlays in the graph for the given cell and all its descendants.
setCellWarning	Creates an overlay for the given cell using the warning and image or warningImage and returns the new mxCellOverlay.
In-place editing
startEditing	Calls startEditingAtCell using the given cell or the first selection cell.
startEditingAtCell	Fires a startEditing event and invokes mxCellEditor.startEditing on <editor>.
getEditingValue	Returns the initial value for in-place editing.
stopEditing	Stops the current editing and fires a <editingStopped> event.
labelChanged	Sets the label of the specified cell to the given value using cellLabelChanged and fires mxEvent.LABEL_CHANGED while the transaction is in progress.
cellLabelChanged	Sets the new label for a cell.
Event processing
escape	Processes an escape keystroke.
click	Processes a singleclick on an optional cell and fires a click event.
isSiblingSelected	Returns true if any sibling of the given cell is selected.
dblClick	Processes a doubleclick on an optional cell and fires a <dblclick> event.
tapAndHold	Handles the mxMouseEvent by highlighting the mxCellState.
scrollPointToVisible	Scrolls the graph to the given point, extending the graph container if specified.
createPanningManager	Creates and returns an mxPanningManager.
getBorderSizes	Returns the size of the border and padding on all four sides of the container.
getPreferredPageSize	Returns the preferred size of the background page if preferPageSize is true.
fit	Scales the graph such that the complete diagram fits into <container> and returns the current scale in the view.
sizeDidChange	Called when the size of the graph has changed.
doResizeContainer	Resizes the container for the given graph width and height.
updatePageBreaks	Invokes from sizeDidChange to redraw the page breaks.
Cell styles
getCurrentCellStyle	Returns the style for the given cell from the cell state, if one exists, or using getCellStyle.
getCellStyle	Returns an array of key, value pairs representing the cell style for the given cell.
postProcessCellStyle	Tries to resolve the value for the image style in the image bundles and turns short data URIs as defined in mxImageBundle to data URIs as defined in RFC 2397 of the IETF.
setCellStyle	Sets the style of the specified cells.
toggleCellStyle	Toggles the boolean value for the given key in the style of the given cell and returns the new value as 0 or 1.
toggleCellStyles	Toggles the boolean value for the given key in the style of the given cells and returns the new value as 0 or 1.
setCellStyles	Sets the key to value in the styles of the given cells.
toggleCellStyleFlags	Toggles the given bit for the given key in the styles of the specified cells.
setCellStyleFlags	Sets or toggles the given bit for the given key in the styles of the specified cells.
Cell alignment and orientation
alignCells	Aligns the given cells vertically or horizontally according to the given alignment using the optional parameter as the coordinate.
flipEdge	Toggles the style of the given edge between null (or empty) and alternateEdgeStyle.
addImageBundle	Adds the specified mxImageBundle.
removeImageBundle	Removes the specified mxImageBundle.
getImageFromBundles	Searches all imageBundles for the specified key and returns the value for the first match or null if the key is not found.
Order
orderCells	Moves the given cells to the front or back.
cellsOrdered	Moves the given cells to the front or back.
Grouping
groupCells	Adds the cells into the given group.
getCellsForGroup	Returns the cells with the same parent as the first cell in the given array.
getBoundsForGroup	Returns the bounds to be used for the given group and children.
createGroupCell	Hook for creating the group cell to hold the given array of mxCells if no group cell was given to the <group> function.
ungroupCells	Ungroups the given cells by moving the children the children to their parents parent and removing the empty groups.
getCellsForUngroup	Returns the selection cells that can be ungrouped.
removeCellsAfterUngroup	Hook to remove the groups after ungroupCells.
removeCellsFromParent	Removes the specified cells from their parents and adds them to the default parent.
updateGroupBounds	Updates the bounds of the given groups to include all children and returns the passed-in cells.
getBoundingBox	Returns the bounding box for the given array of mxCells.
Cell cloning, insertion and removal
cloneCell	Returns the clone for the given cell.
cloneCells	Returns the clones for the given cells.
insertVertex	Adds a new vertex into the given parent mxCell using value as the user object and the given coordinates as the mxGeometry of the new vertex.
createVertex	Hook method that creates the new vertex for insertVertex.
insertEdge	Adds a new edge into the given parent mxCell using value as the user object and the given source and target as the terminals of the new edge.
createEdge	Hook method that creates the new edge for insertEdge.
addEdge	Adds the edge to the parent and connects it to the given source and target terminals.
addCell	Adds the cell to the parent and connects it to the given source and target terminals.
addCells	Adds the cells to the parent at the given index, connecting each cell to the optional source and target terminal.
cellsAdded	Adds the specified cells to the given parent.
autoSizeCell	Resizes the specified cell to just fit around the its label and/or children
removeCells	Removes the given cells from the graph including all connected edges if includeEdges is true.
cellsRemoved	Removes the given cells from the model.
splitEdge	Splits the given edge by adding the newEdge between the previous source and the given cell and reconnecting the source of the given edge to the given cell.
Cell visibility
toggleCells	Sets the visible state of the specified cells and all connected edges if includeEdges is true.
cellsToggled	Sets the visible state of the specified cells.
Folding
foldCells	Sets the collapsed state of the specified cells and all descendants if recurse is true.
cellsFolded	Sets the collapsed state of the specified cells.
swapBounds	Swaps the alternate and the actual bounds in the geometry of the given cell invoking updateAlternateBounds before carrying out the swap.
updateAlternateBounds	Updates or sets the alternate bounds in the given geometry for the given cell depending on whether the cell is going to be collapsed.
addAllEdges	Returns an array with the given cells and all edges that are connected to a cell or one of its descendants.
getAllEdges	Returns all edges connected to the given cells or its descendants.
Cell sizing
updateCellSize	Updates the size of the given cell in the model using cellSizeUpdated.
cellSizeUpdated	Updates the size of the given cell in the model using getPreferredSizeForCell to get the new size.
getPreferredSizeForCell	Returns the preferred width and height of the given mxCell as an mxRectangle.
resizeCell	Sets the bounds of the given cell using resizeCells.
resizeCells	Sets the bounds of the given cells and fires a mxEvent.RESIZE_CELLS event while the transaction is in progress.
cellsResized	Sets the bounds of the given cells and fires a mxEvent.CELLS_RESIZED event.
cellResized	Resizes the parents recursively so that they contain the complete area of the resized child cell.
resizeChildCells	Resizes the child cells of the given cell for the given new geometry with respect to the current geometry of the cell.
constrainChildCells	Constrains the children of the given cell using constrainChild.
scaleCell	Scales the points, position and size of the given cell according to the given vertical and horizontal scaling factors.
extendParent	Resizes the parents recursively so that they contain the complete area of the resized child cell.
Cell moving
importCells	Clones and inserts the given cells into the graph using the move method and returns the inserted cells.
moveCells	Moves or clones the specified cells and moves the cells or clones by the given amount, adding them to the optional target cell.
cellsMoved	Moves the specified cells by the given vector, disconnecting the cells using disconnectGraph is disconnect is true.
translateCell	Translates the geometry of the given cell and stores the new, translated geometry in the model as an atomic change.
getCellContainmentArea	Returns the mxRectangle inside which a cell is to be kept.
getMaximumGraphBounds	Returns the bounds inside which the diagram should be kept as an mxRectangle.
constrainChild	Keeps the given cell inside the bounds returned by getCellContainmentArea for its parent, according to the rules defined by getOverlap and isConstrainChild.
resetEdges	Resets the control points of the edges that are connected to the given cells if not both ends of the edge are in the given cells array.
resetEdge	Resets the control points of the given edge.
Cell connecting and connection constraints
getOutlineConstraint	Returns the constraint used to connect to the outline of the given state.
getAllConnectionConstraints	Returns an array of all mxConnectionConstraints for the given terminal.
getConnectionConstraint	Returns an mxConnectionConstraint that describes the given connection point.
setConnectionConstraint	Sets the mxConnectionConstraint that describes the given connection point.
getConnectionPoint	Returns the nearest point in the list of absolute points or the center of the opposite terminal.
connectCell	Connects the specified end of the given edge to the given terminal using cellConnected and fires mxEvent.CONNECT_CELL while the transaction is in progress.
cellConnected	Sets the new terminal for the given edge and resets the edge points if resetEdgesOnConnect is true.
disconnectGraph	Disconnects the given edges from the terminals which are not in the given array.
Drilldown
getCurrentRoot	Returns the current root of the displayed cell hierarchy.
getTranslateForRoot	Returns the translation to be used if the given cell is the root cell as an mxPoint.
isPort	Returns true if the given cell is a “port”, that is, when connecting to it, the cell returned by getTerminalForPort should be used as the terminal and the port should be referenced by the ID in either the mxConstants.STYLE_SOURCE_PORT or the or the mxConstants.STYLE_TARGET_PORT.
getTerminalForPort	Returns the terminal to be used for a given port.
getChildOffsetForCell	Returns the offset to be used for the cells inside the given cell.
enterGroup	Uses the given cell as the root of the displayed cell hierarchy.
exitGroup	Changes the current root to the next valid root in the displayed cell hierarchy.
home	Uses the root of the model as the root of the displayed cell hierarchy and selects the previous root.
isValidRoot	Returns true if the given cell is a valid root for the cell display hierarchy.
Graph display
getGraphBounds	Returns the bounds of the visible graph.
getCellBounds	Returns the scaled, translated bounds for the given cell.
getBoundingBoxFromGeometry	Returns the bounding box for the geometries of the vertices in the given array of cells.
refresh	Clears all cell states or the states for the hierarchy starting at the given cell and validates the graph.
snap	Snaps the given numeric value to the grid if gridEnabled is true.
snapDelta	Snaps the given delta with the given scaled bounds.
panGraph	Shifts the graph display by the given amount.
zoomIn	Zooms into the graph by zoomFactor.
zoomOut	Zooms out of the graph by zoomFactor.
zoomActual	Resets the zoom and panning in the view.
zoomTo	Zooms the graph to the given scale with an optional boolean center argument, which is passd to zoom.
center	Centers the graph in the container.
zoom	Zooms the graph using the given factor.
zoomToRect	Zooms the graph to the specified rectangle.
scrollCellToVisible	Pans the graph so that it shows the given cell.
scrollRectToVisible	Pans the graph so that it shows the given rectangle.
getCellGeometry	Returns the mxGeometry for the given cell.
isCellVisible	Returns true if the given cell is visible in this graph.
isCellCollapsed	Returns true if the given cell is collapsed in this graph.
isCellConnectable	Returns true if the given cell is connectable in this graph.
isOrthogonal	Returns true if perimeter points should be computed such that the resulting edge has only horizontal or vertical segments.
isLoop	Returns true if the given cell state is a loop.
isCloneEvent	Returns true if the given event is a clone event.
isTransparentClickEvent	Hook for implementing click-through behaviour on selected cells.
isToggleEvent	Returns true if the given event is a toggle event.
isGridEnabledEvent	Returns true if the given mouse event should be aligned to the grid.
isConstrainedEvent	Returns true if the given mouse event should be aligned to the grid.
isIgnoreTerminalEvent	Returns true if the given mouse event should not allow any connections to be made.
Validation
validationAlert	Displays the given validation error in a dialog.
isEdgeValid	Checks if the return value of getEdgeValidationError for the given arguments is null.
getEdgeValidationError	Returns the validation error message to be displayed when inserting or changing an edges’ connectivity.
validateEdge	Hook method for subclassers to return an error message for the given edge and terminals.
validateGraph	Validates the graph by validating each descendant of the given cell or the root of the model.
getCellValidationError	Checks all multiplicities that cannot be enforced while the graph is being modified, namely, all multiplicities that require a minimum of 1 edge.
validateCell	Hook method for subclassers to return an error message for the given cell and validation context.
Graph appearance
getBackgroundImage	Returns the backgroundImage as an mxImage.
setBackgroundImage	Sets the new backgroundImage.
getFoldingImage	Returns the mxImage used to display the collapsed state of the specified cell state.
convertValueToString	Returns the textual representation for the given cell.
getLabel	Returns a string or DOM node that represents the label for the given cell.
isHtmlLabel	Returns true if the label must be rendered as HTML markup.
isHtmlLabels	Returns htmlLabels.
setHtmlLabels	Sets htmlLabels.
isWrapping	This enables wrapping for HTML labels.
isLabelClipped	Returns true if the overflow portion of labels should be hidden.
getTooltip	Returns the string or DOM node that represents the tooltip for the given state, node and coordinate pair.
getTooltipForCell	Returns the string or DOM node to be used as the tooltip for the given cell.
getLinkForCell	Returns the string to be used as the link for the given cell.
getCursorForMouseEvent	Returns the cursor value to be used for the CSS of the shape for the given event.
getCursorForCell	Returns the cursor value to be used for the CSS of the shape for the given cell.
getStartSize	Returns the start size of the given swimlane, that is, the width or height of the part that contains the title, depending on the horizontal style.
getSwimlaneDirection	Returns the direction for the given swimlane style.
getActualStartSize	Returns the actual start size of the given swimlane taking into account direction and horizontal and vertial flip styles.
getImage	Returns the image URL for the given cell state.
isTransparentState	Returns true if the given state has no stroke- or fillcolor and no image.
getVerticalAlign	Returns the vertical alignment for the given cell state.
getIndicatorColor	Returns the indicator color for the given cell state.
getIndicatorGradientColor	Returns the indicator gradient color for the given cell state.
getIndicatorShape	Returns the indicator shape for the given cell state.
getIndicatorImage	Returns the indicator image for the given cell state.
getBorder	Returns the value of border.
setBorder	Sets the value of border.
isSwimlane	Returns true if the given cell is a swimlane in the graph.
Graph behaviour
isResizeContainer	Returns resizeContainer.
setResizeContainer	Sets resizeContainer.
isEnabled	Returns true if the graph is enabled.
setEnabled	Specifies if the graph should allow any interactions.
isEscapeEnabled	Returns escapeEnabled.
setEscapeEnabled	Sets escapeEnabled.
isInvokesStopCellEditing	Returns invokesStopCellEditing.
setInvokesStopCellEditing	Sets invokesStopCellEditing.
isEnterStopsCellEditing	Returns enterStopsCellEditing.
setEnterStopsCellEditing	Sets enterStopsCellEditing.
isCellLocked	Returns true if the given cell may not be moved, sized, bended, disconnected, edited or selected.
isCellsLocked	Returns true if the given cell may not be moved, sized, bended, disconnected, edited or selected.
setCellsLocked	Sets if any cell may be moved, sized, bended, disconnected, edited or selected.
getCloneableCells	Returns the cells which may be exported in the given array of cells.
isCellCloneable	Returns true if the given cell is cloneable.
isCellsCloneable	Returns cellsCloneable, that is, if the graph allows cloning of cells by using control-drag.
setCellsCloneable	Specifies if the graph should allow cloning of cells by holding down the control key while cells are being moved.
getExportableCells	Returns the cells which may be exported in the given array of cells.
canExportCell	Returns true if the given cell may be exported to the clipboard.
getImportableCells	Returns the cells which may be imported in the given array of cells.
canImportCell	Returns true if the given cell may be imported from the clipboard.
isCellSelectable	Returns true if the given cell is selectable.
isCellsSelectable	Returns cellsSelectable.
setCellsSelectable	Sets cellsSelectable.
getDeletableCells	Returns the cells which may be exported in the given array of cells.
isCellDeletable	Returns true if the given cell is moveable.
isCellsDeletable	Returns cellsDeletable.
setCellsDeletable	Sets cellsDeletable.
isLabelMovable	Returns true if the given edges’s label is moveable.
isCellRotatable	Returns true if the given cell is rotatable.
getMovableCells	Returns the cells which are movable in the given array of cells.
isCellMovable	Returns true if the given cell is moveable.
isCellsMovable	Returns cellsMovable.
setCellsMovable	Specifies if the graph should allow moving of cells.
isGridEnabled	Returns gridEnabled as a boolean.
setGridEnabled	Specifies if the grid should be enabled.
isPortsEnabled	Returns portsEnabled as a boolean.
setPortsEnabled	Specifies if the ports should be enabled.
getGridSize	Returns gridSize.
setGridSize	Sets gridSize.
getTolerance	Returns tolerance.
setTolerance	Sets tolerance.
isVertexLabelsMovable	Returns vertexLabelsMovable.
setVertexLabelsMovable	Sets vertexLabelsMovable.
isEdgeLabelsMovable	Returns edgeLabelsMovable.
isEdgeLabelsMovable	Sets edgeLabelsMovable.
isSwimlaneNesting	Returns swimlaneNesting as a boolean.
setSwimlaneNesting	Specifies if swimlanes can be nested by drag and drop.
isSwimlaneSelectionEnabled	Returns swimlaneSelectionEnabled as a boolean.
setSwimlaneSelectionEnabled	Specifies if swimlanes should be selected if the mouse is released over their content area.
isMultigraph	Returns multigraph as a boolean.
setMultigraph	Specifies if the graph should allow multiple connections between the same pair of vertices.
isAllowLoops	Returns allowLoops as a boolean.
setAllowDanglingEdges	Specifies if dangling edges are allowed, that is, if edges are allowed that do not have a source and/or target terminal defined.
isAllowDanglingEdges	Returns allowDanglingEdges as a boolean.
setConnectableEdges	Specifies if edges should be connectable.
isConnectableEdges	Returns connectableEdges as a boolean.
setCloneInvalidEdges	Specifies if edges should be inserted when cloned but not valid wrt.
isCloneInvalidEdges	Returns cloneInvalidEdges as a boolean.
setAllowLoops	Specifies if loops are allowed.
isDisconnectOnMove	Returns disconnectOnMove as a boolean.
setDisconnectOnMove	Specifies if edges should be disconnected when moved.
isDropEnabled	Returns dropEnabled as a boolean.
setDropEnabled	Specifies if the graph should allow dropping of cells onto or into other cells.
isSplitEnabled	Returns splitEnabled as a boolean.
setSplitEnabled	Specifies if the graph should allow dropping of cells onto or into other cells.
isCellResizable	Returns true if the given cell is resizable.
isCellsResizable	Returns cellsResizable.
setCellsResizable	Specifies if the graph should allow resizing of cells.
isTerminalPointMovable	Returns true if the given terminal point is movable.
isCellBendable	Returns true if the given cell is bendable.
isCellsBendable	Returns <cellsBenadable>.
setCellsBendable	Specifies if the graph should allow bending of edges.
isCellEditable	Returns true if the given cell is editable.
isCellsEditable	Returns cellsEditable.
setCellsEditable	Specifies if the graph should allow in-place editing for cell labels.
isCellDisconnectable	Returns true if the given cell is disconnectable from the source or target terminal.
isCellsDisconnectable	Returns cellsDisconnectable.
setCellsDisconnectable	Sets cellsDisconnectable.
isValidSource	Returns true if the given cell is a valid source for new connections.
isValidTarget	Returns isValidSource for the given cell.
isValidConnection	Returns true if the given target cell is a valid target for source.
setConnectable	Specifies if the graph should allow new connections.
isConnectable	Returns true if the <connectionHandler> is enabled.
setTooltips	Specifies if tooltips should be enabled.
setPanning	Specifies if panning should be enabled.
isEditing	Returns true if the given cell is currently being edited.
isAutoSizeCell	Returns true if the size of the given cell should automatically be updated after a change of the label.
isAutoSizeCells	Returns autoSizeCells.
setAutoSizeCells	Specifies if cell sizes should be automatically updated after a label change.
isExtendParent	Returns true if the parent of the given cell should be extended if the child has been resized so that it overlaps the parent.
isExtendParents	Returns extendParents.
setExtendParents	Sets extendParents.
isExtendParentsOnAdd	Returns extendParentsOnAdd.
setExtendParentsOnAdd	Sets extendParentsOnAdd.
isExtendParentsOnMove	Returns <extendParentsOnMove>.
setExtendParentsOnMove	Sets <extendParentsOnMove>.
isRecursiveResize	Returns recursiveResize.
setRecursiveResize	Sets recursiveResize.
isConstrainChild	Returns true if the given cell should be kept inside the bounds of its parent according to the rules defined by getOverlap and isAllowOverlapParent.
isConstrainChildren	Returns constrainChildren.
setConstrainChildren	Sets constrainChildren.
isConstrainRelativeChildren	Returns constrainRelativeChildren.
setConstrainRelativeChildren	Sets constrainRelativeChildren.
isConstrainChildren	Returns allowNegativeCoordinates.
setConstrainChildren	Sets allowNegativeCoordinates.
getOverlap	Returns a decimal number representing the amount of the width and height of the given cell that is allowed to overlap its parent.
isAllowOverlapParent	Returns true if the given cell is allowed to be placed outside of the parents area.
getFoldableCells	Returns the cells which are movable in the given array of cells.
isCellFoldable	Returns true if the given cell is foldable.
isValidDropTarget	Returns true if the given cell is a valid drop target for the specified cells.
isSplitTarget	Returns true if the given edge may be splitted into two edges with the given cell as a new terminal between the two.
getDropTarget	Returns the given cell if it is a drop target for the given cells or the nearest ancestor that may be used as a drop target for the given cells.
Cell retrieval
getDefaultParent	Returns defaultParent or mxGraphView.currentRoot or the first child child of mxGraphModel.root if both are null.
setDefaultParent	Sets the defaultParent to the given cell.
getSwimlane	Returns the nearest ancestor of the given cell which is a swimlane, or the given cell, if it is itself a swimlane.
getSwimlaneAt	Returns the bottom-most swimlane that intersects the given point (x, y) in the cell hierarchy that starts at the given parent.
getCellAt	Returns the bottom-most cell that intersects the given point (x, y) in the cell hierarchy starting at the given parent.
intersects	Returns the bottom-most cell that intersects the given point (x, y) in the cell hierarchy that starts at the given parent.
hitsSwimlaneContent	Returns true if the given coordinate pair is inside the content are of the given swimlane.
getChildVertices	Returns the visible child vertices of the given parent.
getChildEdges	Returns the visible child edges of the given parent.
getChildCells	Returns the visible child vertices or edges in the given parent.
getConnections	Returns all visible edges connected to the given cell without loops.
getIncomingEdges	Returns the visible incoming edges for the given cell.
getOutgoingEdges	Returns the visible outgoing edges for the given cell.
getEdges	Returns the incoming and/or outgoing edges for the given cell.
isValidAncestor	Returns whether or not the specified parent is a valid ancestor of the specified cell, either direct or indirectly based on whether ancestor recursion is enabled.
getOpposites	Returns all distinct visible opposite cells for the specified terminal on the given edges.
getEdgesBetween	Returns the edges between the given source and target.
getPointForEvent	Returns an mxPoint representing the given event in the unscaled, non-translated coordinate space of <container> and applies the grid.
getCells	Returns the child vertices and edges of the given parent that are contained in the given rectangle.
getCellsBeyond	Returns the children of the given parent that are contained in the halfpane from the given point (x0, y0) rightwards or downwards depending on rightHalfpane and bottomHalfpane.
findTreeRoots	Returns all children in the given parent which do not have incoming edges.
traverse	Traverses the (directed) graph invoking the given function for each visited vertex and edge.
Selection
isCellSelected	Returns true if the given cell is selected.
isSelectionEmpty	Returns true if the selection is empty.
clearSelection	Clears the selection using mxGraphSelectionModel.clear.
getSelectionCount	Returns the number of selected cells.
getSelectionCell	Returns the first cell from the array of selected mxCells.
getSelectionCells	Returns the array of selected mxCells.
setSelectionCell	Sets the selection cell.
setSelectionCells	Sets the selection cell.
addSelectionCell	Adds the given cell to the selection.
addSelectionCells	Adds the given cells to the selection.
removeSelectionCell	Removes the given cell from the selection.
removeSelectionCells	Removes the given cells from the selection.
selectRegion	Selects and returns the cells inside the given rectangle for the specified event.
selectNextCell	Selects the next cell.
selectPreviousCell	Selects the previous cell.
selectParentCell	Selects the parent cell.
selectChildCell	Selects the first child cell.
selectCell	Selects the next, parent, first child or previous cell, if all arguments are false.
selectAll	Selects all children of the given parent cell or the children of the default parent if no parent is specified.
selectVertices	Select all vertices inside the given parent or the default parent.
selectVertices	Select all vertices inside the given parent or the default parent.
selectCells	Selects all vertices and/or edges depending on the given boolean arguments recursively, starting at the given parent or the default parent if no parent is specified.
selectCellForEvent	Selects the given cell by either adding it to the selection or replacing the selection depending on whether the given mouse event is a toggle event.
selectCellsForEvent	Selects the given cells by either adding them to the selection or replacing the selection depending on whether the given mouse event is a toggle event.
Selection state
createHandler	Creates a new handler for the given cell state.
createVertexHandler	Hooks to create a new mxVertexHandler for the given mxCellState.
createEdgeHandler	Hooks to create a new mxEdgeHandler for the given mxCellState.
createEdgeSegmentHandler	Hooks to create a new <mxEdgeSegmentHandler> for the given mxCellState.
createElbowEdgeHandler	Hooks to create a new mxElbowEdgeHandler for the given mxCellState.
Graph events
addMouseListener	Adds a listener to the graph event dispatch loop.
removeMouseListener	Removes the specified graph listener.
updateMouseEvent	Sets the graphX and graphY properties if the given mxMouseEvent if required and returned the event.
getStateForEvent	Returns the state for the given touch event.
isEventIgnored	Returns true if the event should be ignored in fireMouseEvent.
isSyntheticEventIgnored	Hook for ignoring synthetic mouse events after touchend in Firefox.
isEventSourceIgnored	Returns true if the event should be ignored in fireMouseEvent.
getEventState	Returns the mxCellState to be used when firing the mouse event for the given state.
fireMouseEvent	Dispatches the given event in the graph event dispatch loop.
consumeMouseEvent	Consumes the given mxMouseEvent if it’s a touchStart event.
fireGestureEvent	Dispatches a mxEvent.GESTURE event.
destroy	Destroys the graph and all its resources.

```
