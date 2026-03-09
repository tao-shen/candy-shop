import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

// Mock client for when credentials are missing or Supabase is unreachable
const mockClient = {
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signInWithOAuth: async () => ({ error: new Error('Auth is not available.') }),
    signOut: async () => ({ error: null }),
  }
} as unknown as SupabaseClient

function isValidSupabaseConfig(): boolean {
  if (!supabaseUrl || !supabaseAnonKey) return false
  // Reject placeholder values
  if (supabaseUrl.includes('YOUR_') || supabaseAnonKey.includes('YOUR_')) return false
  // Basic URL validation
  try { new URL(supabaseUrl) } catch { return false }
  return true
}

function createSupabaseClient(): SupabaseClient {
  if (!isValidSupabaseConfig()) {
    console.warn('Supabase credentials missing or invalid. App running in demo mode (auth disabled).')
    return mockClient
  }

  // Clear any stale/expired auth tokens to prevent infinite refresh retry loops
  // when the Supabase project has been deleted or paused.
  try {
    const projectRef = new URL(supabaseUrl!).host.split('.')[0]
    const storageKey = `sb-${projectRef}-auth-token`
    const stored = localStorage.getItem(storageKey)
    if (stored) {
      const parsed = JSON.parse(stored)
      const expiresAt = parsed?.expires_at
      if (expiresAt && expiresAt * 1000 < Date.now()) {
        localStorage.removeItem(storageKey)
      }
    }
  } catch { /* ignore */ }

  return createClient(supabaseUrl!, supabaseAnonKey!)
}

export const supabase = createSupabaseClient()
