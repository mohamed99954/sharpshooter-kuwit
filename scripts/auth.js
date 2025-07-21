const supabase = supabase.createClient(
  'https://YOUR-PROJECT.supabase.co',
  'YOUR-ANON-KEY'
);

async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    document.getElementById('error').innerText = 'بيانات الدخول غير صحيحة';
  } else {
    window.location.href = 'dashboard.html';
  }
}