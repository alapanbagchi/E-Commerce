export interface MilestoneConfig {
    days: number
    points: number
    prize: number
}

export interface ContestConfigData {
    id: string
    description: string
    name: string
    max_score: number
    grand_prize: number
    days: number
    milestones: MilestoneConfig[]
    lottery_prize: number
    platform_fees: number
}
const CONTESTDATA = [
    {
        id: 'SMALL',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh leo, eleifend sit amet accumsan imperdiet, interdum tempor eros. Cras id arcu lorem. Fusce vulputate hendrerit augue at convallis. Sed vel ex magna. Sed lacinia augue a ultrices porttitor.',
        name: 'Small Contest',
        max_score: 5,
        grand_prize: 250,
        days: 7,
        milestones: [],
        lottery_prize: 0,
        platform_fees: 45
    },
    {
        id: 'MEDIUM',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh leo, eleifend sit amet accumsan imperdiet, interdum tempor eros. Cras id arcu lorem. Fusce vulputate hendrerit augue at convallis. Sed vel ex magna. Sed lacinia augue a ultrices porttitor.',
        name: 'Medium Contest',
        max_score: 25,
        grand_prize: 1500,
        days: 25,
        milestones: [
            {
                days: 7,
                points: 5,
                prize: 300
            }
        ],
        lottery_prize: 222,
        platform_fees: 273
    },
    {
        id: 'LARGE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh leo, eleifend sit amet accumsan imperdiet, interdum tempor eros. Cras id arcu lorem. Fusce vulputate hendrerit augue at convallis. Sed vel ex magna. Sed lacinia augue a ultrices porttitor.',
        name: 'Large Contest',
        max_score: 100,
        grand_prize: 5000,
        days: 45,
        milestones: [
            {
                days: 7,
                points: 10,
                prize: 500
            },
            {
                days: 15,
                points: 30,
                prize: 1000
            },
            {
                days: 30,
                points: 50,
                prize: 1500
            }
        ],
        lottery_prize: 666,
        platform_fees: 829
    }
]

export default CONTESTDATA