import { NextResponse } from "next/server";


//url test fetch
export async function POST(request, {params}){

    const {userid} = params;
    const{postid} = params;
    console.log("userid = ", userid);
    console.log("postid = ", postid);

    //best practice
    return NextResponse.json({userid, postid});
}