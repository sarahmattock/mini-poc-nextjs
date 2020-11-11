import remark from "remark";
import html from 'remark-html'
import { IPage } from "../models/IPage";

const applicationSlug = "into-future";
const pageIdentifierToken = "/home";

export async function getSiteContentPage() {
  
  const BASE_API_URL = process.env.SITE_CONTENT_API_URL
  const API_URL = `${BASE_API_URL}/${applicationSlug}/page?identifierToken=${pageIdentifierToken}`
  const data = await fetchAPI(API_URL) as IPage;
  const parsedData = await parseMarkdownFields(data);
  return parsedData;
}

async function parseMarkdownFields(data: IPage) {
  await Promise.all(data.textBlocks.map(async a => {
    a.htmlParsedValue = await parseMarkdownValue(a.value)
  }));
  debugger;
  return data;
}

async function parseMarkdownValue(fieldValue: string) {
  const processedContent = await remark()
    .use(html)
    .process(fieldValue)
  const contentHtml = processedContent.toString()

  return contentHtml;
}

async function fetchAPI(apiUrl) {
  const res = await fetch(apiUrl, {
    mode: 'no-cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json;
}