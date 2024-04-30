import { NavigationBar } from "@/components/navbar";

export default function Home() {
  const test = async () => {
    // handling promise method 1
    // const a = await getfromUsa();
    // const b = await getfromRuss();
    // const c= a+b

    // handling promise method 2
    // getfromUsa().then((value1) => {

    //   getfromRuss().then((value2) => {
    //      const c= value1+value2
    //    })
    // }).catch(() => {

    // })

    // handling promise method 3
    let a: number | null, b: number | null;

    //   getfromUsa().then((value1) => {

    //     a= value1
    //   }).catch(() => {

    //   })

    // getfromRuss().then((value1) => {
    //          b=  value1
    // })

    //   useEffect(()=>{

    //     if ( a !== null &&  b!== null  ){
    //     const c = a + b
    //   }

    //   },[a,b])
  };

  return (
    <main className="w-full h-[100vh] bg-slate-100 container">
      <NavigationBar />
    </main>
  );
}
