import React from 'react'

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { id } = params;
  return <h1 className="text-3xl">User Profile: {id}</h1>;
  
};

export default Page;


/*
interface PageProps{
params:{
        id:string;
    };
}
const Page: React.FC = ({params}) => {
    const {id} = params; 
 return (
    <h1 className="text-3xl">User Profile: {id}</h1>
    )
}
    export default Page;*/
//