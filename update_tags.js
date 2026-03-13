const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/data/projects.ts');
let content = fs.readFileSync(filePath, 'utf8');

function mapTags(currentTagsStr) {
  const tags = currentTagsStr.match(/"[^"]+"/g)?.map(t => t.replace(/"/g, '')) || [];
  const newTags = new Set();
  
  tags.forEach(tag => {
    const t = tag.toLowerCase();
    
    if (t.includes('ai') || t.includes('ml') || t.includes('algorithm') || t.includes('bioinformatics')) {
      newTags.add('AI/ML');
    }
    if (t.includes('web') || t.includes('cms') || t.includes('profile') || t.includes('corporate') || t.includes('media') || t.includes('creative') || t.includes('education') || t.includes('ticketing') || t.includes('lms') || t.includes('dashboard') || t.includes('ecommerce') || t.includes('e-commerce') || t.includes('booking') || t.includes('hr') || t.includes('information') || t.includes('case tracking') || t.includes('startup')) {
      newTags.add('Web Apps');
    }
    if (t.includes('mobile')) {
      newTags.add('Mobile Apps');
    }
    if (t.includes('data') || t.includes('analytic') || t.includes('dashboard') || t.includes('cs theory')) {
      newTags.add('Data & Analytics');
    }
    if (t.includes('auto')) {
      newTags.add('Automation');
    }
    if (t.includes('open source')) {
      newTags.add('Open Source');
    }
  });

  if (newTags.size === 0) {
    newTags.add('Web Apps');
  }
  
  return `tags: [${Array.from(newTags).map(t => `"${t}"`).join(', ')}]`;
}

const updatedContent = content.replace(/tags:\s*\[([^\]]*)\]/g, (match) => {
  return mapTags(match);
});

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('Tags updated successfully!');
