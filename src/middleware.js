import { NextResponse } from "next/server"

export function middleware(req){

  if(req.nextUrl.pathname!="/login")return NextResponse.redirect(new URL("/login",req.url));
}

export const config={
matches:["/about/:path*"]
};
