import { createBrowserClient } from '@supabase/ssr';

// It is recommended to use 'NEXT_PUBLIC_SUPABASE_ANON_KEY' for consistency
export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);