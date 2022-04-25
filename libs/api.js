import { client } from "./sanity";

export async function getHeroItem() {
  const items = await client.fetch(
    `*[_type == "hero"] | order(_createdAt asc)`
  );
  return items[0];
}

export async function getAboutItem() {
  const items = await client.fetch(`*[_type == "about"]`);
  return items[0];
}

export async function getSkillsItems() {
  const items = await client.fetch(
    `*[_type == "skills"] | order(_createdAt asc)`
  );
  return items;
}

export async function getProjectsItems() {
  const items = await client.fetch(
    `*[_type == "projects"] | order(_createdAt desc)`
  );
  return items;
}

export async function getCompaniesItems() {
  const items = await client.fetch(`*[_type == "companies"]`);
  return items;
}

export async function getSocialItems() {
  const items = await client.fetch(
    `*[_type == "social"] | order(_createdAt asc)`
  );
  return items;
}
