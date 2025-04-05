declare module '$env/static/public' {
	export const DIRECT_URL: string;
	export const DATABASE_URL: string;
}

declare module '$env/static/private' {
	export const SECRET_SUPABASE_URL: string;
	export const SECRET_SUPABASE_ANON_KEY: string;
}
