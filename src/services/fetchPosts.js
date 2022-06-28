const fetchPosts = (async () => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3036cf759e9c4806863b7d357ddeebdd');
    return await response.json();
})()

export fetchPosts;