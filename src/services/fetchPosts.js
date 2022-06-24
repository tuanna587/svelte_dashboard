const fetchPosts = (async () => {
    const response = await fetch('https://bacgiangtv.vn/api/news/latest');
    return await response.json();
})()

export fetchPosts;