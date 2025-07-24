const fs = require('fs');
const path = require('path');


function getTimestamp() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}


const jobs = JSON.parse(fs.readFileSync('./jobs.json', 'utf8'));
const techList = JSON.parse(fs.readFileSync('./technologies.json', 'utf8'));



const taggedJobs = jobs.map(job => {
  const content = `${job.title} ${job.description}`.toLowerCase();

  const tags = techList.filter(tech =>
    content.includes(tech.toLowerCase())
  );

  return {
    ...job,
    tags: tags.length > 0 ? tags : ["na"]
  };
});


const outputDir = path.join(__dirname, 'output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const fileName = `jobs-tagged-${getTimestamp()}.json`;
const outputPath = path.join(outputDir, fileName);

fs.writeFileSync(outputPath, JSON.stringify(taggedJobs, null, 2));
console.log(`Tagged job data saved to ${outputPath}`);
