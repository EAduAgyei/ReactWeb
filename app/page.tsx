'use client'

import {useState, useEffect} from 'react'

// Define a type for the album data
type Album = {
  id: number;
  title: string;
};

export function Page(){
const [albums, setAlbums] = useState<Album[] | null>(null);

// do your async stuff to get the data here
useEffect(()=>{

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.vercel.app/blog', {
        next: {revalidate: 3600},
    });

      if (!response.ok) throw new Error('Failed to fetch data');
      const data: Album[] = await response.json(); // Type the API response
      setAlbums(data); // Update state with the fetched data
    } catch (error) {
      console.error(error);
    }
  };

  fetchData(); // Call the async function
}, []);

// Handle the case when `albums` is null (data is still loading)
if (!albums) {
  return <div>Loading...</div>;
}

// Render the list of albums
return (
  <main>
    <h1>Blog Albums</h1>
  <ul>
    {albums.map((album) => (
      <li key={album.id}>{album.title}</li>
    ))}
  </ul>
  </main>
);
}
export default Page;


/*async function Page() {
    const response = await fetch ("https://jsonplaceholder.typicode.com/albums");
    if(!response.ok) throw new Error ("Failed to fetch data");

    const albums = await response.json();
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols>
      {album.map((album: {id: number, title: string }) => (
      <div 
      key = {album.id}
      className="bg-white shadow-md rounded-lg p-4 transition t..."
      >
       <h3 className = "text-lg font-bold mb-2">{album.title}</h3>
       <p className= "text-gray-600">Album ID: {album.id}</p>
       </div>
    ))}
    </div>
    );
  }
  export default Page;*/


