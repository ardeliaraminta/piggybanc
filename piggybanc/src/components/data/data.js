import GridViewIcon from '@mui/icons-material/GridView';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonIcon from '@mui/icons-material/Person';

export const SidebarData =[
    {
        icon: GridViewIcon,
        heading: "Dashboard",
    },
    {
        icon: ShoppingCartIcon,
        heading: "Transaction",
    },
    {
        icon: PersonIcon,
        heading: "Profile",
    },
    
];

export const cardsData = [
    {
        title: "Balance",
        color:{
            backGround: "linear-gradient(to bottom right, #08143D, #122f8e)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barv: 70,
        value: "647,605.74",
        png: MonetizationOnIcon,
        series: [
         {
             name: "Balance",
             data:[300,5000,4680,935,233,10000]
        },
    ],
},
        {
            title: "Expenses",
            color:{
                backGround: "linear-gradient(to bottom right, #08143D, #122f8e)",
                boxShadow: "0px 10px 20px 0px #e0c6f5"
            },
            barv: 80,
            value: "647,605.74",
            png: MonetizationOnIcon,
            series: [
             {
                 name: "Expenses",
                 data:[300,5000,4680,935,233,10000]
            },
            ],

    },
     {
            title: "Income",
            color:{
                backGround: "linear-gradient(to bottom right, #08143D, #122f8e)",
                boxShadow: "0px 10px 20px 0px #e0c6f5"
            },
            barv: 70,
            value: "647,605.74",
            png: MonetizationOnIcon,
            series: [
             {
                 name: "Summary",
                 data:[300,5000,4680,935,233,10000]
            },
            ],

    },

]

export const UpdatesData = [
    {
        name: "Food",
        noti:"spent $2 dollars Rujak Enak",
        time:"33 seconds ago",
    },
    {
        name: "Transportation",
        noti:"spent $40 dollars for Lamborghini ",
        time:"24 minutes ago",

    },
    {
        name: "Rent",
        noti:"spent $150 dollars for Electricity",
        time:"1 hour ago",

    },
    {
        name: "Rent",
        noti:"spent $150 dollars for Electricity",
        time:"1 hour ago",

    },
      
]