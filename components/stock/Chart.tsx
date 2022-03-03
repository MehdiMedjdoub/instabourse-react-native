import React, {useEffect, useState} from 'react'
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'

const StockChart = (props:any) => {
    let dataChart:any[] = []
    const [ minY, setMinY ] = useState(0)
    const [ maxY, setMaxY ] = useState(0)
    const [ minX, setMinX ] = useState(0)
    const [ maxX, setMaxX ] = useState(0)

    useEffect(() => {
        buidDataArray(props.spark, dataChart)
        setMinY(getMinY(dataChart))
        setMaxY(getMaxY(dataChart))
        setMinX(getMinX(dataChart))
        setMaxX(getMaxX(dataChart))
    })

    const buidDataArray = (spark:any, emptyArray:any[]) => {
        let i=0

        while(i < spark.timestamp.length) {
            emptyArray.push({x: spark.timestamp[i], y: spark.close[i]})
            i++
        }
        return emptyArray
    }

    const getMinY = (dataChart:any) => {
        return Math.min.apply(Math, dataChart.map(function(o:any) { 
			return o.y; }))
    }

    const getMaxY = (dataChart:any) => {
        return Math.max.apply(Math, dataChart.map(function(o:any) { 
			return o.y; })) 
    }

    const getMinX = (dataChart:any) => {
        return Math.min.apply(Math, dataChart.map(function(o:any) { 
			return o.x; })) 
    }
    const getMaxX = (dataChart:any) => {
        return Math.max.apply(Math, dataChart.map(function(o:any) { 
			return o.x; })) 
    }

    return (
        <Chart
            style={{ height: '100%', width: '100%' }}

            data={dataChart}

            padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
            xDomain={{ min: minX, max: maxX }}
            yDomain={{ min: minY, max: maxY }}
            >
            <VerticalAxis  theme={{ labels: { formatter: (v) => v.toFixed(2) }, axis: {stroke:{color:"#000"}}} } />
            <HorizontalAxis theme={{ axis: {stroke:{color:"#000"}}} }/>
            <Area theme={{ gradient: { from: { color: props.color }, to: { color: '#000000', opacity: 0.1 } }}} />
            <Line theme={{ stroke: { color: props.color, width: 3 }, scatter: { default: { width: 3, height: 3, rx: 2 }} }} />
        </Chart>
    )
}

export default StockChart;