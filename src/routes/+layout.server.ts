import type { LayoutServerLoad } from './$types';
import { supabase } from '$lib/supabase';

export const load: LayoutServerLoad = async ({ url }) => {
	const currentDomain = url.origin;

	const { data: autos } = await supabase.from('auto').select();
	const { data: auto_road } = await supabase.from('auto_road').select();

	return {
		autos: autos as Auto[],
		autos_road: auto_road as Auto[],
		currentDomain,
	};
};
