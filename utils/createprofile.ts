import { NextRequest, NextResponse } from 'next/server';

export const CreateProfile = async (req: NextRequest, res: NextResponse) => {
  const data = await new Response(req.body).json();
  console.log(data);
};
