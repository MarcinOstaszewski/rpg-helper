import React, { useEffect, useRef } from 'react'

const Canvas = props => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#f8f8f8';
        ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
    }, [])

    return (
        <canvas ref={canvasRef} {...props} />
    )
}

export default Canvas;