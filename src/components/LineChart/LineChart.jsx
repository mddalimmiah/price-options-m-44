import { LineChart as LChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentMarks = [
        { id: 1, name: "Alice", math: 85, physics: 78, chemistry: 82 },
        { id: 2, name: "Bob", math: 78, physics: 80, chemistry: 76 },
        { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 90 },
        { id: 4, name: "David", math: 65, physics: 70, chemistry: 68 },
        { id: 5, name: "Ella", math: 88, physics: 85, chemistry: 89 },
        { id: 6, name: "Fahim", math: 74, physics: 79, chemistry: 75 },
        { id: 7, name: "Grace", math: 90, physics: 84, chemistry: 91 },
        { id: 8, name: "Hassan", math: 81, physics: 76, chemistry: 80 },
        { id: 9, name: "Ivy", math: 69, physics: 72, chemistry: 70 },
        { id: 10, name: "Jack", math: 95, physics: 90, chemistry: 94 }
      ];
      
      
    return (
        <div>
            <LChart width={500} height={400} data={studentMarks}>
                <Line dataKey='math'></Line>
                <Line dataKey='physics'></Line>
                <Line dataKey='chemistry'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;