import { error, json } from '@sveltejs/kit';
import fs from 'fs';

/** @type {import('./$types').RequestHandler} */
export async function GET({ request } : { request: Request }) {
	let retData: Buffer = fs.readFileSync('./download_files/Bora Gulerman - Resume.pdf');
	return new Response(
		retData, 
		{ 
			status: 200, 
			headers: {
				"Content-type" : "application/pdf",
				"Content-Disposition": "attachment; filename=Bora Gulerman - Resume.pdf"
			} 
		}
	);
}