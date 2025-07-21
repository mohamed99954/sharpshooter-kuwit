<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <title>لوحة تحكم الأدمن</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <script src="https://unpkg.com/@supabase/supabase-js"></script>
</head>
<body class="bg-gray-100 min-h-screen p-6">

  <div class="max-w-2xl mx-auto bg-white shadow-md rounded p-6">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-bold text-gray-800">مرحبًا بك، <span id="adminEmail" class="text-blue-600"></span></h2>
      <button onclick="logout()" class="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded">
        تسجيل الخروج
      </button>
    </div>

    <p class="text-gray-600">هنا ستكون لوحة التحكم الخاصة بالأدمن. يمكنك لاحقًا إضافة نموذج لإضافة منشورات.</p>
  </div>

  <script>
    // ✅ بيانات مشروعك
    const supabase = window.supabase.createClient(
      'https://cscruajtgsyartddfuhu.supabase.co', // غيّر هذا إن لزم
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzY3J1YWp0Z3N5YXJ0ZGRmdWh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4NDIwNzQsImV4cCI6MjA2ODQxODA3NH0.dM06HDS5mdeaYhcZE7R-tL91C_pXqlBT-CcOZ_axh24'
    );

    // ✅ تحقق من جلسة تسجيل الدخول
    async function checkAuth() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        window.location.href = 'login.html'; // 🛑 رجوع لتسجيل الدخول إذا لم يكن مسجل
      } else {
        document.getElementById('adminEmail').textContent = session.user.email;
      }
    }

    checkAuth();

    // ✅ تسجيل الخروج
    async function logout() {
      await supabase.auth.signOut();
      localStorage.removeItem('admin');
      window.location.href = 'login.html';
    }
  </script>

</body>
</html>