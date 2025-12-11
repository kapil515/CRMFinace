// import { NextResponse } from "next/server";

// export function middleware(req:any) {
//   const auth = req.cookies.get("auth");
//   const { pathname } = req.nextUrl;

//   const protectedRoutes = ["/", "/dashboard"];

//   if (!auth && protectedRoutes.includes(pathname)) {
//     return NextResponse.redirect(new URL("/sign-in", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/", "/dashboard/:path*"],
// };
