import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server'; // Use your existing server client

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get('code');
    // if "next" is in search params, use it as the redirection URL
    const next = searchParams.get('next') ?? '/dashboard';

    if (code) {
        const supabase = await createClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (!error) {
            return NextResponse.redirect(`${origin}${next}`);
        }
    }

    // Redirect to an error page if auth fails
    return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
