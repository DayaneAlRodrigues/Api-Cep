const btn = document.getElementById('btn');

const body = document.getElementById('body');
const bodyClasses = body.classList;

const form = document.getElementById('form');
const formClasses = form.classList;

const mudarClasse = () => {
   const mudarBody = bodyClasses.toggle('lightbody');
   const mudarForm = formClasses.toggle('lightForm');
}
btn.addEventListener('click', mudarClasse)