
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const response = await fetch('https://api.thedogapi.com/v1/breeds?limit=100');
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data from external API:', error);
    return NextResponse.json({ error: 'Error fetching data from external API' }, { status: 500 });
  }
}
