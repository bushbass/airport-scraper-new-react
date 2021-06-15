import axios from 'axios';
const url =
  'https://boring-wright-90b6b0.netlify.app/.netlify/functions/flights';

// gets the raw HTML from the website via axios
export const getHTML = async () => {
  const { data: html } = await axios.get(url);
  return html;
};
