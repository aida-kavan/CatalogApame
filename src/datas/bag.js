export const bag = [
    {
        name: "بگ کرافت خام",
        image: "351-1.jpg",
        Pcode: "bag-010",
        size: "7*17*25"
    },
    {
        name: "بگ کرافت خام",
        image: "351-2.jpg",
        Pcode: "bag-011",
        size: "10*24*36"
    },
    {
        name: "بگ کرافت خام",
        image: "351-3.jpg",
        Pcode: "bag-012",
        size: "15*36*52"
    },
    {
        name: "بگ گلاسه سفید",
        image: "352-1.jpg",
        Pcode: "bag-013",
        size: "10*24*36"
    },
    {
        name: "بگ گلاسه سفید",
        image: "352-2.jpg",
        Pcode: "bag-014",
        size: "13*33*44"
    },
    {
        name: "بگ گلاسه سفید",
        image: "352-3.jpg",
        Pcode: "bag-015",
        size: "15*36*52"
    },
    {
        name: "بگ گلاسه سفید",
        image: "352-4.jpg",
        Pcode: "bag-016",
        size: "5*11*16"
    },
    {
        name: "بگ گلاسه سفید",
        image: "352-5.jpg",
        Pcode: "bag-017",
        size: "7*17*25"
    },
    {
        name: "بگ گلاسه سفید",
        image: "352-6.jpg",
        Pcode: "bag-018",
        size: "10*23*23"
    },
    {
        name: "بگ گلاسه مشکی",
        image: "353-1.jpg",
        Pcode: "bag-019",
        size: "10*24*36"
    },
    {
        name: "بگ گلاسه مشکی",
        image: "353-2.jpg",
        Pcode: "bag-020",
        size: "13*33*44"
    },
    {
        name: "بگ گلاسه مشکی",
        image: "353-3.jpg",
        Pcode: "bag-021",
        size: "15*36*52"
    },
    {
        name: "بگ گلاسه مشکی",
        image: "353-4.jpg",
        Pcode: "bag-022",
        size: "5*11*16"
    },
    {
        name: "بگ گلاسه مشکی",
        image: "353-5.jpg",
        Pcode: "bag-023",
        size: "7*17*25"
    },
    {
        name: "بگ گلاسه مشکی",
        image: "353-6.jpg",
        Pcode: "bag-024",
        size: "10*23*23"
    },
    {
        name: "بگ تحریر سبز",
        image: "355.1.jpg",
        Pcode: "bag-025",
        size: "7*17*25"
    },
    {
        name: "بگ تحریر سبز",
        image: "355.2.jpg",
        Pcode: "bag-026",
        size: "10*24*36"
    },
    {
        name: "بگ تحریر سبز ایندربرد",
        image: "355.3.jpg",
        Pcode: "bag-027",
        size: "15*36*52"
    },
    {
        name: "بگ تحریر قرمز",
        image: "356.1.jpg",
        Pcode: "bag-028",
        size: "7*17*25"
    },
    {
        name: "بگ تحریر قرمز",
        image: "356.2.jpg",
        Pcode: "bag-029",
        size: "10*24*36"
    },
    {
        name: "بگ تحریر قرمز ایندربرد",
        image: "356.3.jpg",
        Pcode: "bag-030",
        size: "15*36*52"
    },
    {
        name: "بگ تحریر بنفش",
        image: "357.1.jpg",
        Pcode: "bag-031",
        size: "7*17*25"
    },
    {
        name: "بگ تحریر بنفش",
        image: "357.2.jpg",
        Pcode: "bag-032",
        size: "10*24*36"
    },
    {
        name: "بگ تحریر بنفش ایندربرد",
        image: "357.3.jpg",
        Pcode: "bag-033",
        size: "15*36*52"
    },
    {
        name: "بگ تحریر مشکی",
        image: "358.1.jpg",
        Pcode: "bag-034",
        size: "7*17*25"
    },
    {
        name: "بگ کرافت مشکی",
        image: "358.2.jpg",
        Pcode: "bag-035",
        size: "10*24*36"
    },
    {
        name: "بگ تحریر مشکی ایندربرد",
        image: "358.3.jpg",
        Pcode: "bag-036",
        size: "15*36*52"
    },
    {
        name: "بگ تحریر فیروزه ای",
        image: "359.1.jpg",
        Pcode: "bag-037",
        size: "7*17*25"
    },
    {
        name: "بگ تحریر فیرزه ای",
        image: "359.2.jpg",
        Pcode: "bag-038",
        size: "10*24*36"
    },
    {
        name: "بگ تحریر فیروزه ای ایندربرد",
        image: "359.3.jpg",
        Pcode: "bag-039",
        size: "15*36*52"
    },
    // {
    //     name: "بگ تحریر سرمه ای",
    //     image: "360.1.jpg",
    //     Pcode: "360-1",
    //     size: "10*24*36"
    // },
    // {
    //     name: "بگ تحریر سرمه ای ",
    //     image: "360.2.jpg",
    //     Pcode: "360-2",
    //     size: "10*24*36"

    // },
]

const transformedBag = bag.map(item => ({
    name: `${item.name} (${item.size})`, // Append size to the name
    Pcode: item.Pcode // Keep the Pcode
}));

console.log(transformedBag)