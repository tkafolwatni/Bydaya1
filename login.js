// قاعدة بيانات مؤقتة (يمكن تغييرها لاحقًا بربط مع خادم)
const validUsers = [
  {
    email: "admin@tkafolwatni.org",
    password: "12345678"
  },
  {
    email: "tkafolwatni@gmail.com",
    password: "password123"
  }
];

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("login-message");

  const user = validUsers.find(user => user.email === email && user.password === password);

  if (user) {
    message.textContent = "تم تسجيل الدخول بنجاح ✅";
    message.style.color = "lightgreen";
    // إعادة توجيه مثلاً:
    setTimeout(() => {
      window.location.href = "dashboard.html"; // أو أي صفحة داخلية لاحقًا
    }, 1500);
  } else {
    message.textContent = "البريد الإلكتروني أو كلمة المرور غير صحيحة ❌";
    message.style.color = "salmon";
  }
});