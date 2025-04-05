import { supabase } from '$lib/supabase';
import type { RequestHandler } from '@sveltejs/kit';

// Инициализация Supabase клиента

export const GET: RequestHandler = async ({ params }) => {
	const { filename } = params;

	if (!filename) {
		return new Response('Имя файла не указано', { status: 400 });
	}

	try {
		// Загружаем файл из Supabase Storage
		const { data, error } = await supabase.storage.from('auto-photos').download(`//${filename}`);

		if (error || !data) {
			return new Response('Файл не найден', { status: 404 });
		}

		// Преобразуем данные в поток (Blob -> ArrayBuffer -> Buffer)
		const arrayBuffer = await data.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		// Определяем MIME-тип файла (можно улучшить с помощью библиотеки, например, 'mime-types')
		const contentType = filename.endsWith('.png') ? 'image/png' : 'application/octet-stream';

		// Возвращаем файл как Response
		return new Response(buffer, {
			status: 200,
			headers: {
				'Content-Type': contentType,
				'Content-Length': buffer.length.toString(),
				'Cache-Control': 'public, max-age=31536000', // Кэширование на год (опционально)
			},
		});
	} catch (error) {
		console.error('Ошибка при загрузке файла:', error);
		return new Response('Ошибка сервера', { status: 500 });
	}
};
