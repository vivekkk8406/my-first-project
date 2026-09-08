const signupForm = document.querySelector('#signup-form');
const memberList = document.querySelector('#member-list');
const emptyState = document.querySelector('#empty-state');
const memberCount = document.querySelector('#member-count');
const formStatus = document.querySelector('#form-status');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const fields = ['username', 'email', 'password'];
const storageKey = 'signup-dashboard-users';

function getUsers() { try { return JSON.parse(localStorage.getItem(storageKey)) || []; } catch { return []; } }
function saveUsers(users) { localStorage.setItem(storageKey, JSON.stringify(users)); }
function setError(id, message = '') { const input = document.querySelector(`#${id}`); document.querySelector(`#${id}-error`).textContent = message; input.classList.toggle('invalid', Boolean(message)); }
function validate() {
  const name = usernameInput.value.trim(), mail = emailInput.value.trim(), pass = passwordInput.value;
  setError('username', name.length < 3 ? 'Please enter at least 3 characters.' : '');
  setError('email', !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail) ? 'Enter a valid email address.' : '');
  setError('password', !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s]).{8,}$/.test(pass) ? 'Use 8+ characters with upper/lowercase, a number, and a symbol.' : '');
  return fields.every(id => !document.querySelector(`#${id}-error`).textContent);
}
function renderUsers() {
  const users = getUsers(); memberCount.textContent = `${users.length} ${users.length === 1 ? 'account' : 'accounts'}`;
  emptyState.hidden = users.length > 0; memberList.replaceChildren();
  users.forEach((user, index) => {
    const row = document.createElement('article'); row.className = 'member-row';
    const avatar = document.createElement('div'); avatar.className = 'avatar'; avatar.textContent = user.username.slice(0, 2).toUpperCase();
    const info = document.createElement('div'); info.className = 'member-info';
    const name = document.createElement('strong'); name.textContent = user.username;
    const mail = document.createElement('span'); mail.textContent = user.email;
    const remove = document.createElement('button'); remove.className = 'delete-button'; remove.type = 'button'; remove.textContent = 'Remove'; remove.setAttribute('aria-label', `Remove ${user.username}`);
    remove.addEventListener('click', () => { const updated = getUsers(); updated.splice(index, 1); saveUsers(updated); renderUsers(); });
    info.append(name, mail); row.append(avatar, info, remove); memberList.append(row);
  });
}
signupForm.addEventListener('submit', event => {
  event.preventDefault(); formStatus.textContent = '';
  if (!validate()) return;
  const users = getUsers(); const userEmail = emailInput.value.trim().toLowerCase();
  if (users.some(user => user.email.toLowerCase() === userEmail)) { setError('email', 'An account with this email already exists.'); return; }
  users.push({ username: usernameInput.value.trim(), email: userEmail }); saveUsers(users); signupForm.reset(); fields.forEach(id => setError(id));
  formStatus.textContent = 'Account created successfully.'; renderUsers();
});
fields.forEach(id => document.querySelector(`#${id}`).addEventListener('input', () => { if (document.querySelector(`#${id}`).classList.contains('invalid')) validate(); }));
document.querySelector('.toggle-password').addEventListener('click', event => { const showing = passwordInput.type === 'text'; passwordInput.type = showing ? 'password' : 'text'; event.currentTarget.textContent = showing ? 'Show' : 'Hide'; event.currentTarget.setAttribute('aria-label', showing ? 'Show password' : 'Hide password'); event.currentTarget.setAttribute('aria-pressed', String(!showing)); });
renderUsers();
