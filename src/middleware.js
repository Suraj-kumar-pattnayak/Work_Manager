import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { toast } from 'react-toastify';

export function middleware(request) {
    console.log("middleware executed");
    // Example response

    let token = request.cookies.get("loginCookie")?.value;

    if(request.nextUrl.pathname ==="/api/login" || request.nextUrl.pathname==="/api/users"){
        return;
    }

    const loggedinusernotaccessedpaths = request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup";

    if (loggedinusernotaccessedpaths) {
        if (token) {
            const redirectUrl = new URL("/", request.nextUrl.origin);
            return NextResponse.redirect(redirectUrl);
        }
    } else {
        if (!token) {

            if(request.nextUrl.pathname.startsWith("/api")){
                return NextResponse.json({
                    message:"access denied ",
                    success:false,
                },{
                    status:401,
                })
            }

            console.log(123);
            // Handle toast warning (this might not work as expected in middleware)
            // You might need to find an alternative approach to display notifications from middleware.
            // Example: Store the warning message in the request object and display it in the corresponding page component.
            request.warningMessage = "Login is required";
            
            const redirectUrl = new URL("/login", request.nextUrl.origin);
            return NextResponse.redirect(redirectUrl);
        }
    }

    console.log(token);

    // Allow the request to proceed
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/add-task',
        "/",
        "/show-task",
        "/signup",
        "/login",
        "/profile/:path*",
        "/api/:path*"
    ],
};