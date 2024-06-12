// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function GET(req) {
//   try {
//     const response = await fetch('https://api.thedogapi.com/v1/breeds?limit=4');
//     const data = await response.json();

//     await prisma.dog.createMany({
//       data: data.map(dog => ({
//         image: dog.image && dog.image.url ? dog.image.url : null,
//         breed: dog.name,
//         // answer: dog.name,
//         // weight: dog.weight.imperial,
//         // height: dog.height.imperial,
//         // bred_for: dog.bred_for,
//         // breed_group: dog.breed_group,
//         // life_span: dog.life_span,
//         // temperament: dog.temperament,
//         // origin: dog.origin,
//         // Add other properties you want to save from the dog object
//       })),
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     console.error('Error fetching data from external API:', error);
//     return NextResponse.json({ error: 'Error fetching data from external API' }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const response = await fetch('https://api.thedogapi.com/v1/breeds?limit=10');
    const data = await response.json();

    // No need to createMany dogs here, just return the data to the client
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data from external API:', error);
    return NextResponse.json({ error: 'Error fetching data from external API' }, { status: 500 });
  }
}
