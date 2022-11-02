import React from "react";
import Skillcard from "./Skillcard";

const Feature = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-slate-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
              My Skills
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              i have learn web devolpement skills
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <Skillcard
              title="MongoDB"
              desc="I have the database skill to handle the database and secure them"
              img="https://imgs.search.brave.com/AHAbZheFa50vw0X9Ho5bgdAzTEEsNNR74KE6A0zPvnA/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC4wZlAwbU1W/SnlDSVN6SVQ3bi1U/cWlRSGFGaiZwaWQ9/QXBp"
            />
            <Skillcard
              img="https://imgs.search.brave.com/O70LUkwNdQJkvdvA-xqv7v8CQGMP93Gar4tf_Z9zfZU/rs:fit:832:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/ZVBWempranNhZE9x/elEwM3dsNWtBSGFF/TyZwaWQ9QXBp"
              title="React.js"
              desc="I have the frontend skill of react"
            />
            <Skillcard
              img="https://imgs.search.brave.com/3GLqAEQS5bJYO8V5W-NZm4vT27Yqy1YgDlG0Ex-8JCo/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/YkdxRzlvTFpJaEhy/NEtvRVNRdElBSGFK/NCZwaWQ9QXBp"
              title="Express.js"
              desc="I have learn framework of express to create the api and calling"
            />
            <Skillcard
              img="https://imgs.search.brave.com/R4IgIjiFkrDWxTQR1RWc6qqH_rtxqhK6wTUQQy2mpwI/rs:fit:672:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/U1Qzb09pdnNNQnMy/RnV3MlV0NmlnSGFG/TyZwaWQ9QXBp"
              title="Node.js"
              desc="I have skill Node js framework"
            />
          </div>
          <div className="flex justify-center -m-4">
          <Skillcard
              img="https://imgs.search.brave.com/mwSkAxCixj9jS-Xt2uSz4gOiqlBwpEERSl2XJr2pPFw/rs:fit:905:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5D/cW94VXlCN3dicDBD/MXZ3V0xKal9nSGFE/NCZwaWQ9QXBp"
              title="React Native"
              desc="I can code mobile app in React Native"
            />
            <Skillcard
              img="https://imgs.search.brave.com/wQvjvrrwlc6p-ckOgK0k8AJ675qsnqDtE3xmthE6kBY/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/RkZibzhsa054VlFj/bUxyTERWUk53SGFE/dCZwaWQ9QXBp"
              title="Firebase"
              desc="I can handle firebase operation like login logout firestore and may more"
            />
            <Skillcard
              img="https://imgs.search.brave.com/cCaU12xLcFbj7iL5tpPYYWIkjRgohAoxy48YsF4Le0w/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/MTZTeGwzYV94cFY4/UjN4REdnTWRRSGFF/SyZwaWQ9QXBp"
              title="Javascript"
              desc="This is my first preference to write a code in javascript"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
