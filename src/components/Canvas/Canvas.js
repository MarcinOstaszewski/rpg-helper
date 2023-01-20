import React, { useEffect, useRef } from 'react'

const Canvas = props => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        drawLines(ctx, props);
    }, []);

    const drawLines = (ctx, props) => {
        ctx.fillStyle = '#f4f4f4';
        ctx.fillRect(0, 0, props.width, props.height);
    }

    return (
        <canvas ref={canvasRef} {...props} />
    )
}

export default Canvas;