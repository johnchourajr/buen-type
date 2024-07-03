"use client";

import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { IframeTag } from "./IframeTag.element";
import styles from "./IframeWrapper.module.css";

function IframeWrapper({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isResizing = useRef(false);
  const initialWidth = useRef(0);

  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [iframeWidth, setIframeWidth] = useState<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing.current || !wrapperRef.current) return;

    // Prevent text selection during resize
    e.preventDefault();

    const newWidth = e.clientX - wrapperRef.current.offsetLeft;
    if (newWidth > 100) {
      // Set a minimum width
      wrapperRef.current.style.width = `${newWidth}px`;
      setIframeWidth(newWidth);
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!isResizing.current) return;

    isResizing.current = false;
    setIsDragging(false); // Set isDragging to false on mouse up
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);

    // Restore pointer events to iframe
    if (iframeRef.current) {
      iframeRef.current.style.pointerEvents = "auto";
    }
  }, [handleMouseMove]);

  const startResize = useCallback(() => {
    isResizing.current = true;
    setIsDragging(true); // Set isDragging to true on resize start
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    // Disable pointer events for iframe
    if (iframeRef.current) {
      iframeRef.current.style.pointerEvents = "none";
    }
  }, [handleMouseMove, handleMouseUp]);

  const handleDoubleClick = useCallback(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.width = `${initialWidth.current}px`;
      setIframeWidth(initialWidth.current);
    }
  }, []);

  const handleResize = useCallback((event: MessageEvent) => {
    if (event.origin !== window.location.origin) return;
    if (event.data.iframeHeight && iframeRef.current) {
      iframeRef.current.style.height = `${event.data.iframeHeight}px`;
    }
  }, []);

  useEffect(() => {
    initialWidth.current = wrapperRef.current?.offsetWidth || 0;
    setIframeWidth(initialWidth.current);

    window.addEventListener("message", handleResize);
    return () => {
      window.removeEventListener("message", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    // Cleanup listeners on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div ref={wrapperRef} className={clsx("relative flex", className)}>
      <iframe
        ref={iframeRef}
        src={src}
        className={clsx(
          "w-full h-full border-none overflow-hidden min-h-[50vw]",
          "select-none",
        )}
        scrolling="no"
      />
      <AnimatePresence>
        {isDragging && <IframeTag>{iframeWidth}px</IframeTag>}
        {isHovering && !isDragging && <IframeTag>drag</IframeTag>}
      </AnimatePresence>
      <div
        className={clsx(styles.resizer)}
        onMouseDown={startResize}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
    </div>
  );
}

export default IframeWrapper;
