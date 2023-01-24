import React, { useEffect, useRef } from 'react'

const Canvas = props => {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        drawLines(ctx, props);
    }, [props]);

    const drawLines = (ctx, props) => {
        ctx.moveTo(0, 0);
        ctx.fillStyle = '#fafafa';
        ctx.color = '#fff';
        ctx.fillRect(0, 0, props.width, props.height);
        ctx.beginPath();
        for (let i = 1; i < props.horizontalLines; i++) {
            let yPos = props.height / props.horizontalLines * i;
            ctx.moveTo(0, yPos);
            ctx.lineTo(props.width, yPos);
        }
        for (let i = 1; i < props.verticalLines; i++) {
            let xPos = props.width / props.verticalLines * i;
            ctx.moveTo(xPos, 0);
            ctx.lineTo(xPos, props.height);
        }
        ctx.stroke();
    }

    return (
        <canvas ref={canvasRef} width={props.width} height={props.height} />
    )
}

export default Canvas;