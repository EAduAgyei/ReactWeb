import Hello from "@/app/components/hello";

export const metadata = {
  title: "Hello | Next.js",
  description: "Generated by create next app",
};


export default function Home() {
  console.log('What am I doing here? - SERVER?');
  return (
    <>
   <h1 className ="text-3xl">Welcome to Next.js</h1>
   <Hello />

   </>
  );
}
