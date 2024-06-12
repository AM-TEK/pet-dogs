
import { NextResponse } from 'next/server';

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
