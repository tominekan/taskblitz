import { error } from '@sveltejs/kit';
import { users } from "$db/mongo.js";

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {

  if (true) {
    return {
      title: params.slug,
    }
  }
 
  throw error(404, 'Not found');
}