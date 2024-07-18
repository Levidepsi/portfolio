"use client"
import SpreadComponents from "../global/SpreadComponents";

// const writeToken = `${process.env.SANITY_API_WRITE_TOKEN}`

const Homepage = ({ data }: any) => {
//   const mutations = [{
//     delete: {
//       id: "willy",
    
//   }
// }]


//   const createPage = () => {
//     fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-04-12/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`, {
//   method: 'post',
//   headers: {
//     'Content-type': 'application/json',
//     Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN}`
//   },
//   body: JSON.stringify({mutations})
// })
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.error(error))

//   }
  return <>
      <SpreadComponents components={data.components} />
  </>;
};

export default Homepage;
