document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    const loading = document.getElementById('loading');
    const filterInput = document.getElementById('filter');
  
    let page = 1;
    let isLoading = false;
  
    async function fetchPosts() {
      isLoading = true;
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
      const posts = await response.json();
      isLoading = false;
      return posts;
    }
  
    async function displayPosts() {
      const posts = await fetchPosts();
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
      });
    }
  
    function handleScroll() {
      if (isLoading) return;
  
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        loading.style.display = 'block';
        page++;
        displayPosts().then(() => {
          loading.style.display = 'none';
        });
      }
    }
  
    async function filterPosts() {
      const filterText = filterInput.value.toLowerCase();
      const allPosts = Array.from(postsContainer.getElementsByClassName('post'));
  
      allPosts.forEach(post => {
        const title = post.querySelector('h2').textContent.toLowerCase();
        if (title.includes(filterText)) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      });
    }
  
    filterInput.addEventListener('input', filterPosts);
    window.addEventListener('scroll', handleScroll);
  
    displayPosts();
  });
  