import type { SupabaseClient } from '@supabase/supabase-js';

export const load = async ({
	locals: { supabase }
}: Record<string, Record<string, SupabaseClient>>) => {
	const { data: projectData } = await supabase.from('projects').select();

	const { data: bucketData } = await supabase.storage.from('project_images').list(undefined, {
		limit: 100,
		offset: 0,
		sortBy: { column: 'name', order: 'asc' }
	});

	const { data: d1 } = await supabase.storage
		.from('project_images')
		.createSignedUrls(bucketData?.map((item) => item.name) || [], 60);

	const response = projectData?.map((project) => {
		return {
			...project,
			image_url: d1?.find((image) => image.path?.split('.')[0] === project.image_name)?.signedUrl
		};
	});

	return { projectData: response };
};
