import React, { useEffect, useRef } from 'react'

const Canvas = props => {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        drawLines(ctx, props);
        if (props.randomHori >= -1) {
            paintRandomField(ctx, props);
        }
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

    const paintRandomField = (ctx, props) => {
        const fieldWidth = props.width / props.verticalLines;
        const fieldHeight = props.height / props.horizontalLines;
        const rectStartX = fieldWidth * props.randomVert;
        const rectStartY = fieldHeight * props.randomHori;
        ctx.fillStyle = '#dd2222';
        ctx.fillRect(rectStartX, rectStartY, fieldWidth, fieldHeight);
    }

    return (
        <canvas ref={canvasRef} width={props.width} height={props.height} />
    )
}

export default Canvas;