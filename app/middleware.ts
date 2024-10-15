import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request:NextRequest){
    const theme = request.cookies.get("theme")?.value || "light"
    const res = NextResponse.next();
    res.headers.set("Set-Cookie", `theme=${theme};Path=/`)
    res.headers.set("Content-Type", "test/html")

    res.headers.set("Theme", theme)
    return res
}
