// Substitua pelos seus dados do Supabase
const supabaseUrl = 'https://SEU-PROJETO.supabase.co';
const supabaseKey = 'SUA-ANON-KEY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('guestForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    nome: form.nome.value,
    email: form.email.value,
    telefone: form.telefone.value,
    empresa: form.empresa.value,
    data: form.data.value,
    observacoes: form.observacoes.value
  };

  const mensagem = document.getElementById('mensagem');
  const { error } = await supabase
    .from('convidados')
    .insert([data]);
  if (error) {
    mensagem.textContent = error.message || 'Erro ao adicionar convidado!';
    mensagem.className = 'error';
  } else {
    mensagem.textContent = 'Convidado adicionado com sucesso!';
    mensagem.className = 'success';
    form.reset();
  }
});