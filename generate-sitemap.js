import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper to resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://hsquarepromoters.com';

const staticPages = [
  '',
  '/about',
  '/services',
  '/contact',
  '/gallery',
  '/properties',
  '/blogs'
];

function generateSitemap() {
  try {
    const staticDataPath = path.join(__dirname, 'src', 'data', 'staticData.js');
    const staticDataContent = fs.readFileSync(staticDataPath, 'utf8');

    // Regex to capture blog slugs
    const regex = /slug:\s*\{\s*current:\s*["']([^"']+)["']\s*\}/g;
    const blogSlugs = [];
    let match;
    while ((match = regex.exec(staticDataContent)) !== null) {
      blogSlugs.push(match[1]);
    }

    const today = new Date().toISOString().split('T')[0];

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // 1. Static Pages
    staticPages.forEach(page => {
      xml += '  <url>\n';
      xml += `    <loc>${BASE_URL}${page}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += '    <changefreq>weekly</changefreq>\n';
      xml += '    <priority>' + (page === '' ? '1.0' : '0.8') + '</priority>\n';
      xml += '  </url>\n';
    });

    // 2. Dynamic Blog Pages
    blogSlugs.forEach(slug => {
      xml += '  <url>\n';
      xml += `    <loc>${BASE_URL}/blogs/${slug}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += '    <changefreq>monthly</changefreq>\n';
      xml += '    <priority>0.6</priority>\n';
      xml += '  </url>\n';
    });

    xml += '</urlset>\n';

    const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, xml, 'utf8');
    console.log(`Successfully generated sitemap with ${staticPages.length + blogSlugs.length} URLs at: ${outputPath}`);
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
