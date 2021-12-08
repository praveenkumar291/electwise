import { useRouter } from 'next/router';
import React from 'react'

const Poldata = () => {
  const router = useRouter();

  const {
    query: { id},
  } = router;
   const polititionsData = [
     {
       id: '1',
       name: "Narendra modi",

       age: "SEpt. 17, 1950 in VAdnagar, Mehsana, Gujarat",

       education: "M>A (Pol. Science), Educated at Gujarat University",
     },

     {
       id: '2',
       name: "Aravind kejrawal",

       age: "SEpt. 17, 1950 in VAdnagar, Mehsana, Gujarat",

       education: "M>A (Pol. Science), Educated at Gujarat University",
     },
   ];
  return (
    <div>
      <h1>{id[name]}</h1>
    </div>
  );
}

export default Poldata
