export const userColumns=[
    {field:"id", headerName:"ID", width:70 },
    {field:"user", headerName:"User", width:250, renderCell:(params)=>{
        return (
            <div className="cellWithImg">
                <img className="image" src={params.row.img} alt="Avatar"/>
                {params.row.username} 
            </div>

        )
    } },
    {field:"email", headerName:"Email", width:200 },
    {field:"age", headerName:"Age", width:70 },
    {field:"status", headerName:"Status", width:190, renderCell:(params)=>{
        return (
            <div className={`statusCur ${params.row.status}`}>{params.row.status}
            </div>

        )
    } }
]



export const userRows=[
    {
        id:'1',
        username:"Cristiano Ronaldo",
        img:"https://www.aljazeera.com/wp-content/uploads/2021/08/2021-08-27T152656Z_298019127_RC2KMA70M1Q8_RTRMADP_3_SOCCER-ENGLAND-MUN-RONALDO.jpg?resize=1800%2C1575",
        status:"active",
        email:"cr7@gmail.com",
        age:"37",

    },
    {
        id:"2",
        username:"Lionel Messi",
        img:"https://images.wsj.net/im-683588/?width=1278&size=1",
        status:"passive",
        email:"lm10@gmail.com",
        age:"35",

    },
    {
        id:"3",
        username:"Neymar",
        img:"https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/11/29105943/neymar-jr-net-worth-brazil-world-cup-football.jpg?tr=w-1200,h-900",
        status:"passive",
        email:"neyney@gmail.com",
        age:"30",

    },
    {
        id:"4",
        username:"Robert Lewandowski",
        img:"https://e0.365dm.com/22/03/2048x1152/skysports-robert-lewandowski_5699438.jpg",
        status:"active",
        email:"lewa@gmail.com",
        age:"36",

    }
]