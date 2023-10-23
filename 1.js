const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


const loginForm = document.querySelector('.sign-in-form');
const loginUsername = document.querySelector('#loginUsername');
const loginPassword = document.querySelector('#loginPassword');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Lấy thông tin đăng nhập từ người dùng
  const username = loginUsername.value;
  const password = loginPassword.value;

  // Kiểm tra thông tin đăng nhập
  if (!username || !password) {
    alert('Vui lòng nhập đầy đủ thông tin đăng nhập');
    return;
  }

  // Kiểm tra thông tin đăng nhập trong bộ nhớ
  const users = [
    {
      username: 'dinhtrung',
      password: '123456',
    },
  ];

  const user = users.find((user) => user.username === username);

  if (!user || user.password !== password) {
    alert('Thông tin đăng nhập không chính xác');
    return;
  }

  // Lưu thông tin đăng nhập của người dùng
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  // Chuyển người dùng đến trang đích
  window.location.href = 'file:///D:/TKW/cv/cvv.html';
});

//xử lý đăng ký
const signupForm = document.querySelector('.sign-up-form');
const signupInputs = signupForm.querySelectorAll('input');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Lấy thông tin đăng ký từ người dùng
  const signupInputs = signupForm.querySelectorAll('input');
  const signupInfo = signupInputs
    .filter((input) => input.value !== '')
    .map((input) => input.value);

  // Sử dụng hàm validate() để kiểm tra tính hợp lệ của thông tin đăng ký
  const isValid = validate(signupInfo);
  if (!isValid) {
    alert('Thông tin đăng ký không hợp lệ');
    return;
  }

  // Thêm thông tin đăng ký mới vào bộ nhớ
  const users = localStorage.getItem('users') || [];
  users.push({
    username: signupInfo[0],
    password: signupInfo[1],
  });
  localStorage.setItem('users', JSON.stringify(users));

  // Hiển thị thông báo thành công
  alert('Đăng ký thành công');
});

// Hàm validate()
function validate(signupInfo) {
  // Kiểm tra tên đăng nhập
  if (signupInfo[0].length < 5) {
    return false;
  }

  // Kiểm tra mật khẩu
  if (signupInfo[1].length < 8) {
    return false;
  }

  // Kiểm tra email
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
  if (!regex.test(signupInfo[2])) {
    return false;
  }

  // Tất cả thông tin đều hợp lệ
  return true;
}


