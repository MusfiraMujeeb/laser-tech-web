const fs = require('fs');
const p = 'app/portfolio/page.tsx';
let t = fs.readFileSync(p, 'utf8');
t = t.replace(/image: 'data:image\/jpeg;base64,[^']+'/g, "image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80'");
t = t.replace(/image: 'data:image\/jpeg;base64,[^']+'/g, "image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80'");
fs.writeFileSync(p, t);
