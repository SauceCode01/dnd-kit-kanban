"use client";

import React, { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";

export function DndSample() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
    </DndContext>
  );

  function handleDragEnd(event : DragEndEvent) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }
}
