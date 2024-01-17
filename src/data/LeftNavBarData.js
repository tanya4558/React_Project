import { ChatEvent } from "@/components/core/Chart Cmponent/ChartEvents";
import { DonutChart } from "@/components/core/Chart Cmponent/DonutChart";
import { PolarAreaChart } from "@/components/core/Chart Cmponent/PolarAreaChart";
import { RadarChart } from "@/components/core/Chart Cmponent/RadarChart";
import { StackedBarChart } from "@/components/core/Chart Cmponent/StackedBarChart";
import { VerticalBarChart } from "@/components/core/Chart Cmponent/VerticalBarChart";

export const LeftNavOptions = [
    {
        tabName : "Forecast",
        options : [
            {
                title : "Option 1",
                component : <StackedBarChart />
            },
            {
                title : "Option 2",
                component : <VerticalBarChart />
            },
            {
                title : "Option 3",
                component : <DonutChart />
            }
        ]
    },
    {
        tabName : "Observed Sites",
        options : [
            {
                title : "Option 1",
                component : <PolarAreaChart />
            },
            {
                title : "Option 2",
                component : <RadarChart />
            },
            {
                title : "Option 3",
                component : <ChatEvent />
            }
        ]
    }
]