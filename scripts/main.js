// إعداد مفاتيح Supabase
const SUPABASE_URL = 'https://YOUR-PROJECT.supabase.co';
const SUPABASE_KEY = 'YOUR-ANON-KEY';
const cardsContainer = document.getElementById('cards');

// استدعاء البيانات من Supabase
async function loadCards() {
  const { data, error } = await fetch(`${SUPABASE_URL}/rest/v1/posts`, {
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(res => res.json());

  if (error) {
    cardsContainer.innerHTML = '<p>حدث خطأ في جلب البيانات</p>';
    return;
  }

  data.forEach(post => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}" />
      <h3>${post.title}</h3>
      <p>${post.description || ''}</p>
      <a href="${post.button_link}" target="_blank">${post.button_text}</a>
    `;

    cardsContainer.appendChild(card);
  });
}

loadCards();