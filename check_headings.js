const http = require('http'); 
http.get('http://localhost:3000/', (res) => { 
    let data = ''; 
    res.on('data', c => data += c); 
    res.on('end', () => { 
        const faqMatch = data.match(/<h2 id="faq-heading"[^>]*>(.*?)<\/h2>/);
        const blogMatch = data.match(/<h2 id="blog-heading"[^>]*>(.*?)<\/h2>/);
        console.log("FAQ: " + (faqMatch ? faqMatch[1] : "not found"));
        console.log("BLOG: " + (blogMatch ? blogMatch[1] : "not found"));
    }); 
});
