// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)



const KEY:string = 'sOg3pwwgB6sDb2JwkIzW2Zzo53kbQd8rqupvKp5F';

const URL:string = `https://api.nasa.gov/planetary/apod?api_key=${KEY}`;

//Interface for Responce Object;
interface apResponse{
    date:string;
    explanation:string;
    hdurl:string;
    media_type:string;
    service_version:string;
    title:string;
    url:string;
}

async function getData():Promise<apResponse> {
  const Responce = await fetch(URL);
  if(!Responce.ok){
    throw new Error("Unable to fetch URL");
  }
  const data = await Responce.json();
  return data;
}

// Function to update UI.

function upUI(apod:apResponse):void{
  const image = document.querySelector("#apod-image") as HTMLImageElement;
  const title = document.querySelector("#apod-title") as HTMLParagraphElement;
  const date = document.querySelector("#apod-date") as HTMLParagraphElement;
  const discription = document.querySelector("#apod-discription") as HTMLParagraphElement;
  if(apod.media_type==="image"){
    image.src = apod.url;
    image.style.display = "block";
  }else{
    image.style.display ="none";
  }
  
  title.textContent = apod.title;
  date.textContent = apod.date;
  discription.textContent = apod.explanation;
}

// Implementing all functionalities...

document.addEventListener('DOMContentLoaded',async ()=>{
  try{
    const apod = await getData();
    upUI(apod);
  }catch(error){
    console.log("Error in Fetching...");
  }
})


const title = document.querySelector("#apod-title") as HTMLParagraphElement;
title.textContent= "Hello";